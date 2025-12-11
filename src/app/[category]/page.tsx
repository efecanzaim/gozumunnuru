import React from 'react'
import { notFound } from 'next/navigation'

import MucevherPage from '@/features/mucevher/MucevherPage'
import KoleksiyonPage from '@/features/koleksiyon/KoleksiyonPage'
import OzelTasarimPage from '@/features/ozel-tasarim/OzelTasarimPage'
import HediyePage from '@/features/hediye/HediyePage'
import YatirimPage from '@/features/yatirim/YatirimPage'

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
  'kadinler-gunu',
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

  if (category === 'mucevher') return <MucevherPage />
  if (category === 'koleksiyon') return <KoleksiyonPage />
  if (category === 'ozel-tasarim') return <OzelTasarimPage />
  if (category === 'hediye') return <HediyePage />
  if (category === 'yatirim') return <YatirimPage />

  return notFound()
}

export async function generateStaticParams() {
  // Gerçek kategoriler
  const categoryParams = Array.from(allowed).map((category) => ({ category }))
  
  // Footer linkleri - build için gerekli ama sayfada 404 gösterilecek
  const footerParams = footerLinks.map((category) => ({ category }))
  
  return [...categoryParams, ...footerParams]
}

