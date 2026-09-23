import Link from 'next/link'
import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { client, urlFor } from '@/lib/sanity'

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
}

const QUERY = `*[_type == "post"] | order(publishedAt desc) { _id, title, "slug": slug.current, category, publishedAt, mainImage, excerpt }`

const fallbackLead: CardPost[] = [
  {
    slug: 'global-supply-chains-durable-value',
    category: 'INSIGHT',
    date: 'SEPTEMBER 23, 2026',
    title: 'Global Supply Chains Set to Adapt as Leaders Demand Proof of Durable Value',
    excerpt:
      'As margins tighten and disruption persists, executives are reworking network design around resilience, transparency and measurable outcomes rather than cost alone.',
    image: '/images/insight-ai.png',
    imageAlt: 'Close-up of a digital payment terminal and technology interface',
  },
]

const fallbackFeatured: CardPost[] = [
  {
    slug: 'capital-growth-healthcare-operations',
    category: 'ARTICLE',
    date: 'SEPTEMBER 22, 2026',
    title: 'Unlocking Capital & Growth in Modernizing Healthcare Operations',
    excerpt:
      'StratBridge survey of over 10,000 healthcare leaders reveals key operational bottlenecks and growth opportunities.',
    image: '/images/home-challenge-wall.png',
    imageAlt: 'Modern healthcare facility corridor with patients and staff',
  },
  {
    slug: 'global-ma-integration-value',
    category: 'RESEARCH',
    date: 'SEPTEMBER 21, 2026',
    title: 'Global M&A and Operational Integration Value Rises as Strategic Deals Return',
    excerpt:
      'StratBridge finds that global integration speed rose 15% in the first eight months of 2026.',
    image: '/images/insight-erp.png',
    imageAlt: 'Aerial view of a highway interchange',
  },
]

const fallbackMore: CardPost[] = [
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
    imageAlt: 'Abstract circuit board pattern representing artificial intelligence',
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
  {
    slug: 'procurement-contracting-next-frontier',
    category: 'ARTICLE',
    date: 'JULY 22, 2026',
    title: 'Procurement & Contracting: The Next Frontier of Value Capture',
    excerpt:
      'Leading teams are digitising contracting workflows to unlock margin and speed across categories.',
    image: '/images/skyline-bridge.png',
    imageAlt: 'City skyline at sunset with a cable-stayed bridge over the water',
  },
  {
    slug: 'finance-treasury-automation',
    category: 'INSIGHT',
    date: 'JULY 8, 2026',
    title: 'Finance & Treasury Automation Gains Boardroom Momentum',
    excerpt:
      'A survey of finance leaders shows AR and AP automation is now a top-three CFO priority.',
    image: '/images/insight-ai.png',
    imageAlt: 'Close-up of a digital payment terminal and technology interface',
  },
  {
    slug: 'scale-operations-sustainably',
    category: 'RESEARCH',
    date: 'JUNE 18, 2026',
    title: 'Scaling Operations Sustainably Across the Value Chain',
    excerpt:
      'Field lessons on coupling growth ambitions with verifiable emissions reduction commitments.',
    image: '/images/home-challenge-wall.png',
    imageAlt: 'Aerial view of a multi-level highway interchange at dusk',
  },
]

const placeholderPool = [fallbackLead[0], ...fallbackFeatured, ...fallbackMore].map(
  (post) => ({ image: post.image, imageAlt: post.imageAlt }),
)

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

const sectionTitleClass =
  'font-serif text-2xl font-semibold text-navy sm:text-3xl'

const metaClass =
  'text-[11px] font-semibold uppercase tracking-[0.28em] text-navy/60'

const ellipseButtonClass =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy/20 bg-cream text-sm font-medium text-navy transition-colors hover:border-rust hover:bg-rust hover:text-cream'

function PostArrow({ href }: { href: string }) {
  return (
    <Link
      href={href}
      aria-label="Read this insight"
      className={ellipseButtonClass}
    >
      →
    </Link>
  )
}

function PostMeta({ category, date }: { category: string; date: string }) {
  return (
    <p className={metaClass}>
      {category} | {date}
    </p>
  )
}

export const metadata: Metadata = {
  title: 'Insights & Newsroom — Stratbridge & Co.',
  description:
    "Explore StratBridge & Co.'s insights center: key research, operational strategies, industry insights, and recent publications.",
}

export default async function InsightsPage() {
  const livePosts = (await fetchPosts()).map(toCardPost)

  const lead = livePosts[0] ?? fallbackLead[0]
  const featured = [
    livePosts[1] ?? fallbackFeatured[0],
    livePosts[2] ?? fallbackFeatured[1],
  ]
  const more = fallbackMore.map(
    (fallback, index) => livePosts[index + 3] ?? fallback,
  )

  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="Insights" />
      <main>
        <section
          className="bg-cream"
          aria-labelledby="insights-title"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
              Insights & Newsroom
            </p>
            <h1
              id="insights-title"
              className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl"
            >
              Insights &amp; Newsroom
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy/70">
              Welcome to StratBridge &amp; Co.&apos;s insights center. Explore
              our media center for key research, operational strategies,
              industry insights, and recent publications.
            </p>
          </div>
        </section>

        <section
          className="mt-16 bg-[#f0f2f2] py-14"
          aria-labelledby="latest-heading"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2
              id="latest-heading"
              className={sectionTitleClass}
            >
              Latest Insights
            </h2>

            <ul className="mt-8">
              <li>
                <article className="group grid overflow-hidden border border-navy/10 bg-[#f4f4f4] lg:grid-cols-2">
                  <div className="flex flex-col p-8 lg:p-12">
                    <PostMeta category={lead.category} date={lead.date} />
                    <h3 className="mt-6 font-serif text-3xl font-semibold leading-snug text-navy lg:text-4xl">
                      {lead.title}
                    </h3>
                    <p className="mt-6 max-w-xl leading-relaxed text-navy/70">
                      {lead.excerpt}
                    </p>
                    <Link
                      href={`/insights/${lead.slug}`}
                      className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-rust transition-colors hover:text-rust/80"
                    >
                      Read More
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                  <Link
                    href={`/insights/${lead.slug}`}
                    aria-label="Read this insight"
                    className="group relative min-h-64 overflow-hidden"
                  >
                    <img
                      src={lead.image}
                      alt={lead.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                </article>
              </li>
            </ul>

            <ul className="mt-8 grid gap-6 lg:grid-cols-2">
              {featured.map((post) => (
                <li key={post.slug}>
                  <article className="flex h-full flex-col bg-[#f4f4f4]">
                    <div className="flex items-start gap-3 p-7">
                      <div className="min-w-0 flex-1">
                        <PostMeta category={post.category} date={post.date} />
                        <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug text-navy">
                          {post.title}
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-navy/70">
                          {post.excerpt}
                        </p>
                      </div>
                      <PostArrow href={`/insights/${post.slug}`} />
                    </div>
                    <Link
                      href={`/insights/${post.slug}`}
                      aria-label="Read this insight"
                      className="mt-auto block overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="aspect-[16/9] w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="py-16 lg:py-24"
          aria-labelledby="more-perspectives-title"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2
              id="more-perspectives-title"
              className={sectionTitleClass}
            >
              More Perspectives
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((post) => (
                <li key={post.slug}>
                  <article className="flex h-full flex-col bg-[#f4f4f4]">
                    <div className="flex items-start gap-3 p-7">
                      <div className="min-w-0 flex-1">
                        <PostMeta category={post.category} date={post.date} />
                        <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-navy">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-navy/70">
                          {post.excerpt}
                        </p>
                      </div>
                      <PostArrow href={`/insights/${post.slug}`} />
                    </div>
                    <Link
                      href={`/insights/${post.slug}`}
                      aria-label="Read this insight"
                      className="mt-auto block overflow-hidden"
                    >
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="aspect-[16/9] w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}