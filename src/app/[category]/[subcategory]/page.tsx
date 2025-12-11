import React from 'react'
import { notFound } from 'next/navigation'
import Navbar from '@/components/common/Navbar/Navbar'
import Footer from '@/components/site/Footer/Footer'
import SubcategoryStory from '@/components/site/SubcategoryStory/SubcategoryStory'
import { getSubcategoryStoryKey, subcategoryStories } from '@/data/story-content'
import { getAllSubcategories } from '@/data/categories'

export const dynamicParams = false

export default async function SubcategoryPage({ 
  params 
}: { 
  params: Promise<{ category: string; subcategory: string }> 
}) {
  const { category, subcategory } = await params

  const storyKey = getSubcategoryStoryKey(category, subcategory)
  const story = subcategoryStories[storyKey]

  if (!story) {
    return notFound()
  }

  return (
    <>
      <Navbar />
      <main>
        <SubcategoryStory {...story} />
      </main>
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  const params: { category: string; subcategory: string }[] = []
  
  try {
    for (const key of Object.keys(subcategoryStories)) {
      const parts = key.split('/').filter(Boolean)
      if (parts.length === 2) {
        params.push({
          category: parts[0],
          subcategory: parts[1]
        })
      }
    }
  } catch (error) {
    console.error('Error generating static params from subcategoryStories:', error)
  }
  
  // Fallback: products.ts'den de ekle (eğer eksik varsa)
  try {
    const productSubcategories = getAllSubcategories()
    const existingKeys = new Set(params.map(p => `${p.category}/${p.subcategory}`))
    
    for (const sub of productSubcategories) {
      const key = `${sub.category}/${sub.subcategory}`
      if (!existingKeys.has(key)) {
        params.push(sub)
      }
    }
  } catch (error) {
    console.error('Error generating static params from getAllSubcategories:', error)
  }
  
  return params
}
