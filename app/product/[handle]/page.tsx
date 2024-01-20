import ProductView from '@/app/components/product/product-view'
import { getProducts } from '@/app/services/shopify/products'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

interface SearchParams {
  id: string
}

interface Props {
  searchParams: SearchParams
}

export async function generateMetadata ({ searchParams }: Props): Promise<Metadata> {
  const id = searchParams.id
  const [product] = await getProducts(id)

  return {
    title: product.title,
    description: product.body_html.replace(/(<([^>]+)>)/gi, ''),
    keywords: product.tags,
    openGraph: {
      images: [product.image.src]
    }
  }
}

export default async function Product ({ searchParams }: Props) {
  const id = searchParams.id
  const [product] = await getProducts(id)

  if (id === undefined) redirect('/store')

  return (
    <main className="p-5">
      <ProductView product={product} />
    </main>
  )
}
