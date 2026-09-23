import Link from 'next/link'
import { client, urlFor } from '@/lib/sanity'
import { ArrowRightIcon } from '@/components/icons'

type CardPost = {
  slug: string
  category: string
  date: string
  title: string
  excerpt: string
  image: string
  imageAlt: string
}

type SanityPost = {
  _id: string
  title: string | null
  slug: string | null
  category: string | null
  publishedAt: string | null
  mainImage: unknown
  excerpt: string | null
  isFeatured: boolean | null
}

const QUERY = `*[_type == "post"] | order(isFeatured desc, publishedAt desc)[0..2] { _id, title, "slug": slug.current, category, publishedAt, mainImage, excerpt, isFeatured }`

const fallbackInsights: CardPost[] = [
  {
    slug: 'erp-cost-centre-growth-enabler',
    category: 'ARTICLE',
    date: 'SEPTEMBER 12, 2026',
    title: 'Turning ERP from a Cost Centre to a Growth Enabler',
    excerpt:
      'How modern ERP estates can shift from keeping the lights on to accelerating new operating models.',
    image: '/images/insight-erp.png',
    imageAlt: 'Modern glass office skyscraper facade',
  },
  {
    slug: 'practical-path-ai-operations',
    category: 'INSIGHT',
    date: 'AUGUST 28, 2026',
    title: 'The Practical Path to AI in Operations',
    excerpt:
      'A staged playbook for embedding AI across finance, procurement and supply chain without overpromising.',
    image: '/images/insight-ai.png',
    imageAlt: 'Aerial view of a multi-level highway interchange',
  },
  {
    slug: 'sustainability-reporting-real-impact',
    category: 'RESEARCH',
    date: 'AUGUST 10, 2026',
    title: 'Sustainability: From Reporting to Real Impact',
    excerpt:
      'Why measured emissions reduction outperforms disclosure-only programmes in the long run.',
    image: '/images/insight-sustainability.png',
    imageAlt: 'Macro close-up of a backlit green leaf',
  },
]

const placeholderPool = fallbackInsights.map((post) => ({
  image: post.image,
  imageAlt: post.imageAlt,
}))

function isPlainObject(value: unknown): value is Record<string, unknown> {
  if (typeof value !== 'object' || value === null) return false
  const proto = Object.getPrototypeOf(value)
  return proto === Object.prototype || proto === null
}

function formatDate(value: string | null): string {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return date
    .toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
    .toUpperCase()
}

function imageUrl(mainImage: unknown): string {
  try {
    if (!isPlainObject(mainImage)) return ''
    const url = urlFor(mainImage).url()
    return typeof url === 'string' && url.length > 0 ? url : ''
  } catch {
    return ''
  }
}

async function fetchPosts(): Promise<SanityPost[]> {
  try {
    const posts = (await client.fetch(QUERY)) as SanityPost[] | null
    return Array.isArray(posts) ? posts : []
  } catch {
    return []
  }
}

function toCardPost(raw: SanityPost, index: number): CardPost {
  const placeholder = placeholderPool[index % placeholderPool.length]
  return {
    slug: raw.slug || '#',
    category: (raw.category || 'INSIGHT').toUpperCase(),
    date: formatDate(raw.publishedAt),
    title: raw.title || 'Untitled Insight',
    excerpt: raw.excerpt || '',
    image: imageUrl(raw.mainImage) || placeholder.image,
    imageAlt: placeholder.imageAlt,
  }
}

export async function InsightsSection() {
  const livePosts = (await fetchPosts()).map(toCardPost)
  const insights = livePosts.length > 0 ? livePosts : fallbackInsights
  const [lead, ...secondary] = insights

  return (
    <section className="bg-cream-dark/60" aria-labelledby="insights-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
          Insights
        </p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="insights-heading"
            className="font-serif text-3xl font-semibold text-navy sm:text-4xl"
          >
            Ideas, perspectives and practical insights<span className="text-rust">.</span>
          </h2>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rust transition-colors hover:text-rust/80"
          >
            View All Insights
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <article className="group mt-12 grid overflow-hidden border border-navy/10 bg-cream lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-navy/50">
              {lead.category} | {lead.date}
            </p>
            <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug text-navy sm:text-3xl">
              {lead.title}
            </h3>
            {lead.excerpt ? (
              <p className="mt-4 leading-relaxed text-navy/70">{lead.excerpt}</p>
            ) : null}
            <Link
              href={`/insights/${lead.slug}`}
              className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rust transition-colors hover:text-rust/80"
            >
              Read More
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <Link
            href={`/insights/${lead.slug}`}
            aria-label={`Read more about ${lead.title}`}
            className="group/image relative min-h-64 overflow-hidden lg:min-h-0"
          >
            <img
              src={lead.image}
              alt={lead.imageAlt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Link>
        </article>

        {secondary.length > 0 ? (
          <ul className="mt-8 grid gap-8 sm:grid-cols-2">
            {secondary.map((post) => (
              <li key={post.slug}>
                <article className="group flex h-full flex-col border border-navy/10 bg-cream">
                  <div className="flex-1 p-7">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-navy/50">
                      {post.category} | {post.date}
                    </p>
                    <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-navy">
                      {post.title}
                    </h3>
                    {post.excerpt ? (
                      <p className="mt-3 text-sm leading-relaxed text-navy/70">
                        {post.excerpt}
                      </p>
                    ) : null}
                    <Link
                      href={`/insights/${post.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rust transition-colors hover:text-rust/80"
                    >
                      Read More
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                  <Link
                    href={`/insights/${post.slug}`}
                    aria-label={`Read more about ${post.title}`}
                    className="mt-auto block overflow-hidden"
                  >
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}