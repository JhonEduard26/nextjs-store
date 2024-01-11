import ProductWrapper from '@/app/components/store/product-wrapper'
import { getCollectionProducts, getCollections } from '@/app/services/shopify/collections'
import { getProducts } from '@/app/services/shopify/products'

interface Props {
  params: {
    categories: string[]
  }
  searchParams?: Record<string, string>
}

export default async function Category ({ params, searchParams }: Props) {
  let products = []

  const collections = await getCollections()

  if (params?.categories?.length > 0) {
    const selectedCollectionId = collections.find((collection: any) => collection.handle === params.categories[0])?.id
    products = await getCollectionProducts(selectedCollectionId as string)
  } else {
    products = await getProducts()
  }

  return (
    <section className="p-5">
      <ProductWrapper products={products} />
    </section>
  )
}
