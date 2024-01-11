import ProductCard from './product-card'
import { type Product } from '@/app/lib/types'

export default async function ProductWrapper ({ products }: { products: Product[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-auto w-4/5">
      {
        products?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }
    </ul>
  )
}
