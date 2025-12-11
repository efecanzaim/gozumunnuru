import React from 'react'
import { notFound } from 'next/navigation'

import DesktopMucevher from '@/main/desktop/pages/mucevher/Page'
import DesktopKoleksiyon from '@/main/desktop/pages/koleksiyon/Page'
import DesktopOzelTasarim from '@/main/desktop/pages/ozel-tasarim/Page'
import DesktopHediye from '@/main/desktop/pages/hediye/Page'
import DesktopYatirim from '@/main/desktop/pages/yatirim/Page'

const allowed = new Set(['mucevher','koleksiyon','ozel-tasarim','hediye','yatirim'])

// Footer linkleri - bunlar için 404 gösterilecek
const footerLinks = [
  'tarihce-c',
  'han-kuyumculuk',
  'ozel-urunler',
  'bize-sorun',
  'sikca-sorulan-sorular-c',
  'aydinlatma-metinleri-c',
  'iletisim-c',
  'yilbasi-hediyeleri',
  'sevgililer-gunu-hediye-secenekleri-53731',
  'yasam-hediye-anneler-gunu-hediyeleri-54528',
]

export const dynamicParams = false

export default async function CategoryRoute({ 
  params 
}: { 
  params: Promise<{ category: string }> 
}) {
  const { category } = await params

  if (!category) {
    return notFound()
  }

  // Footer linkleri veya geçersiz kategoriler için 404 göster
  if (!allowed.has(category)) {
    return notFound()
  }

  if (category === 'mucevher') return <DesktopMucevher />
  if (category === 'koleksiyon') return <DesktopKoleksiyon />
  if (category === 'ozel-tasarim') return <DesktopOzelTasarim />
  if (category === 'hediye') return <DesktopHediye />
  if (category === 'yatirim') return <DesktopYatirim />

  return notFound()
}

export async function generateStaticParams() {
  // Gerçek kategoriler
  const categoryParams = Array.from(allowed).map((category) => ({ category }))
  
  // Footer linkleri - build için gerekli ama sayfada 404 gösterilecek
  const footerParams = footerLinks.map((category) => ({ category }))
  
  return [...categoryParams, ...footerParams]
}

