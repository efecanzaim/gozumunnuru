import React from 'react'
import { notFound } from 'next/navigation'
import Navbar from '@/main/navigation/Navbar/Navbar'
import Footer from '@/main/desktop/components/footer/Footer'
import SubcategoryStory from '@/main/desktop/components/subcategoryStory/SubcategoryStory'
import { getAllSubcategories } from '@/data/products'
import { getSubcategoryStoryKey, subcategoryStories } from '@/main/desktop/pages/subcategory/story-content'

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
  return getAllSubcategories()
}
