import React from 'react'
import Navbar from '@/main/navigation/Navbar/Navbar'
import Footer from '@/main/desktop/components/footer/Footer'
import ProductListBanner from '@/main/desktop/components/productList/ProductListBanner'
import ProductList from '@/main/desktop/components/productList/ProductList'
import { getCategoryInfo, getCategoryProducts, getBreadcrumbs } from '@/data/products'

export default function DesktopKoleksiyon() {
  const categoryInfo = getCategoryInfo('koleksiyon')
  const products = getCategoryProducts('koleksiyon')
  const breadcrumbs = getBreadcrumbs('koleksiyon')

  return (
    <>
      <Navbar />
      <main>
        <ProductListBanner />
        <ProductList 
          title={categoryInfo?.title || 'Koleksiyon'}
          breadcrumbs={breadcrumbs}
          products={products}
          totalCount={products.length}
          hasBanner={true}
        />
      </main>
      <Footer />
    </>
  )
}
