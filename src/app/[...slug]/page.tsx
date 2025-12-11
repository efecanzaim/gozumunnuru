import { notFound } from 'next/navigation'

export const dynamicParams = false

export default async function SlugPage({
  params
}: {
  params: Promise<{ slug?: string[] }>
}) {
  // Tüm slug route'ları için 404 göster
  return notFound()
}

export async function generateStaticParams() {
  // Footer'daki iki segmentli linkler (ör: /home/sitemap)
  return [
    { slug: ['home', 'sitemap'] }
  ]
}

