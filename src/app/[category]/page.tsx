import React from 'react'
import { notFound } from 'next/navigation'

import DesktopMucevher from '@/main/desktop/pages/mucevher/Page'
import DesktopKoleksiyon from '@/main/desktop/pages/koleksiyon/Page'
import DesktopOzelTasarim from '@/main/desktop/pages/ozel-tasarim/Page'
import DesktopHediye from '@/main/desktop/pages/hediye/Page'
import DesktopYatirim from '@/main/desktop/pages/yatirim/Page'

const allowed = new Set(['mucevher','koleksiyon','ozel-tasarim','hediye','yatirim'])

export default async function CategoryRoute({ 
  params 
}: { 
  params: Promise<{ category: string }> 
}) {
  const { category } = await params

  if (!category) {
    return notFound()
  }

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
  return Array.from(allowed).map((category) => ({ category }))
}

