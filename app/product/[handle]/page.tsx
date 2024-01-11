import ProductView from '@/app/components/product/product-view'
import { getProducts } from '@/app/services/shopify/products'
import { redirect } from 'next/navigation'

export default async function Product ({ searchParams }: { searchParams: { id: string } }) {
  const id = searchParams.id
  console.log(id)

  const [product] = await getProducts(id)

  if (id === undefined) redirect('/store')

  return (
    <main className="p-5">
      <ProductView product={product} />
    </main>
  )
}
