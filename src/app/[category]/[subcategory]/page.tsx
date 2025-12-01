import React from 'react'
import { notFound } from 'next/navigation'
import Navbar from '@/main/navigation/Navbar/Navbar'
import Footer from '@/main/desktop/components/footer/Footer'
import ProductList from '@/main/desktop/components/productList/ProductList'
import { 
  getCategoryInfo, 
  getSubcategoryInfo, 
  getSubcategoryProducts, 
  getBreadcrumbs,
  getAllSubcategories 
} from '@/data/products'

export default async function SubcategoryPage({ 
  params 
}: { 
  params: Promise<{ category: string; subcategory: string }> 
}) {
  const { category, subcategory } = await params

  // Kategori ve alt kategori kontrolü
  const categoryInfo = getCategoryInfo(category)
  if (!categoryInfo) {
    return notFound()
  }

  const subcategoryInfo = getSubcategoryInfo(category, subcategory)
  if (!subcategoryInfo) {
    return notFound()
  }

  // Ürünleri ve breadcrumb'ları al
  const products = getSubcategoryProducts(category, subcategory)
  const breadcrumbs = getBreadcrumbs(category, subcategory)

  return (
    <>
      <Navbar />
      <main>
        <ProductList 
          title={subcategoryInfo.title}
          breadcrumbs={breadcrumbs}
          products={products}
          totalCount={products.length}
        />
      </main>
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return getAllSubcategories()
}
