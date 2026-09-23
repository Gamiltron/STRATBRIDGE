import Link from 'next/link'
import { cache, Fragment } from 'react'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { client, urlFor } from '@/lib/sanity'

type SpanNode = {
  _key?: string
  text?: string
  marks?: string[]
}

type MarkDef = {
  _key?: string
  _type?: string
  href?: string
}

type BlockNode = {
  _key?: string
  _type?: string
  style?: string
  listItem?: string
  children?: SpanNode[]
  markDefs?: MarkDef[]
  asset?: { _ref?: string } | null
}

type SanityPost = {
  _id: string
  title: string | null
  slug: string | null
  category: string | null
  publishedAt: string | null
  mainImage: unknown
  excerpt: string | null
  body: BlockNode[] | null
}

const QUERY = `*[_type == "post" && slug.current == $slug][0] { _id, title, "slug": slug.current, category, publishedAt, mainImage, excerpt, body }`

const metaClass =
  'text-[11px] font-semibold uppercase tracking-[0.28em] text-navy/60'

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

const getPost = cache(async function getPost(
  slug: string,
): Promise<SanityPost | null> {
  try {
    const post = (await client.fetch(QUERY, { slug })) as SanityPost | null
    return post ?? null
  } catch {
    return null
  }
})

function renderInline(block: BlockNode): ReactNode {
  const markDefs = block.markDefs ?? []
  return (block.children ?? []).map((child, index) => {
    const marks = child.marks ?? []
    let node: ReactNode = child.text ?? ''
    if (marks.includes('code')) {
      node = (
        <code className="rounded-sm bg-[#f0f2f2] px-1.5 py-0.5 font-mono text-sm">
          {node}
        </code>
      )
    }
    if (marks.includes('strong')) {
      node = <strong className="font-semibold text-navy">{node}</strong>
    }
    if (marks.includes('em')) {
      node = <em>{node}</em>
    }
    if (marks.includes('underline')) {
      node = <u>{node}</u>
    }
    const markDef = markDefs.find(
      (def) => def._key && marks.includes(def._key),
    )
    if (markDef?.href) {
      node = (
        <a
          href={markDef.href}
          className="text-rust underline underline-offset-4 transition-colors hover:text-rust/80"
        >
          {node}
        </a>
      )
    }
    return (
      <Fragment key={child._key ?? `span-${index}`}>{node}</Fragment>
    )
  })
}

function renderBlock(block: BlockNode, index: number): ReactNode {
  const key = block._key ?? `block-${index}`
  const inline = renderInline(block)
  switch (block.style) {
    case 'h2':
      return (
        <h2
          key={key}
          className="mt-10 font-serif text-2xl font-semibold text-navy sm:text-3xl"
        >
          {inline}
        </h2>
      )
    case 'h3':
      return (
        <h3
          key={key}
          className="mt-8 font-serif text-xl font-semibold text-navy sm:text-2xl"
        >
          {inline}
        </h3>
      )
    case 'h4':
      return (
        <h4 key={key} className="mt-6 font-serif text-lg font-semibold text-navy">
          {inline}
        </h4>
      )
    case 'blockquote':
      return (
        <blockquote
          key={key}
          className="mt-6 border-l-2 border-rust pl-6 font-serif text-xl italic leading-relaxed text-navy/80"
        >
          {inline}
        </blockquote>
      )
    default:
      return (
        <p key={key} className="mt-5 leading-relaxed text-navy/75">
          {inline}
        </p>
      )
  }
}

function renderBodyImage(block: BlockNode, index: number): ReactNode {
  try {
    const url = urlFor(block).url()
    if (typeof url !== 'string' || url.length === 0) return null
    return (
      <img
        key={block._key ?? `body-image-${index}`}
        src={url}
        alt=""
        className="mt-8 aspect-[16/9] w-full border border-navy/10 object-cover"
      />
    )
  } catch {
    return null
  }
}

type RenderedChunk =
  | { kind: 'list'; listType: 'ul' | 'ol'; items: ReactNode[] }
  | { kind: 'node'; node: ReactNode }

function PortableBody({
  body,
}: {
  body: BlockNode[] | null | undefined
}) {
  if (!body || body.length === 0) return null

  const chunks: RenderedChunk[] = []

  body.forEach((block, index) => {
    if (block._type === 'image') {
      const node = renderBodyImage(block, index)
      if (node) chunks.push({ kind: 'node', node })
      return
    }

    if (block._type !== 'block') return

    if (block.listItem) {
      const listType = block.listItem === 'number' ? 'ol' : 'ul'
      const last = chunks[chunks.length - 1]
      if (last && last.kind === 'list' && last.listType === listType) {
        ;(last as Extract<RenderedChunk, { kind: 'list' }>).items.push(
          <li
            key={block._key ?? `list-item-${index}`}
            className="pl-1"
          >
            {renderInline(block)}
          </li>,
        )
      } else {
        chunks.push({
          kind: 'list',
          listType,
          items: [
            <li
              key={block._key ?? `list-item-${index}`}
              className="pl-1"
            >
              {renderInline(block)}
            </li>,
          ],
        })
      }
      return
    }

    const node = renderBlock(block, index)
    if (node) chunks.push({ kind: 'node', node })
  })

  const listClass = 'mt-5 list-disc space-y-2 pl-5 text-navy/75 marker:text-rust'
  const orderedListClass =
    'mt-5 list-decimal space-y-2 pl-5 text-navy/75 marker:text-rust'

  return (
    <div>
      {chunks.map((chunk, index) => {
        if (chunk.kind === 'list') {
          const className =
            chunk.listType === 'ol' ? orderedListClass : listClass
          return chunk.listType === 'ol' ? (
            <ol key={`list-${index}`} className={className}>
              {chunk.items}
            </ol>
          ) : (
            <ul key={`list-${index}`} className={className}>
              {chunk.items}
            </ul>
          )
        }
        return (
          <Fragment key={`chunk-${index}`}>{chunk.node}</Fragment>
        )
      })}
    </div>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) {
    return {
      title: 'Insight Not Found — Stratbridge & Co.',
      description: 'The requested insight could not be found.',
    }
  }
  return {
    title: `${post.title ?? 'Insight'} — Stratbridge & Co.`,
    description: post.excerpt ?? undefined,
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const title = post.title ?? 'Untitled Insight'
  const category = (post.category || 'INSIGHT').toUpperCase()
  const date = formatDate(post.publishedAt)
  const image = imageUrl(post.mainImage)

  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="Insights" />
      <main>
        <article>
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rust transition-colors hover:text-rust/80"
            >
              <span aria-hidden="true">←</span>
              All Insights
            </Link>

            <div className="mt-8 max-w-3xl">
              <p className={metaClass}>
                {category}
                {date ? ` | ${date}` : ''}
              </p>
              <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl">
                {title}
              </h1>
              {post.excerpt ? (
                <p className="mt-6 text-lg leading-relaxed text-navy/70">
                  {post.excerpt}
                </p>
              ) : null}
            </div>

            {image ? (
              <div className="mt-10 overflow-hidden border border-navy/10">
                <img
                  src={image}
                  alt={title}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            ) : null}

            {post.body && post.body.length > 0 ? (
              <div className="mt-4 max-w-3xl">
                <PortableBody body={post.body} />
              </div>
            ) : null}

            <div className="mt-14 border-t border-navy/10 pt-8">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rust transition-colors hover:text-rust/80"
              >
                <span aria-hidden="true">←</span>
                Back to all insights
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}