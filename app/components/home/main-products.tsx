import { type Product } from '@/app/lib/types'
import Image from 'next/image'

const getProducts = async () => {
  const response = await fetch(`https://${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
    headers: {
      'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY ?? ''
    }
  })

  const data = await response.json()
  return data
}

export default async function MainProducts () {
  const { products } = await getProducts()

  return (
    <section>
      <h2 className="text-center">Main Products</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          products.map((product: Product) => (
            <article key={product.id} className="relative">
              <p className="absolute text-center bottom-10 left-0 right-0 text-background text-4xl">{product.title}</p>
              <Image
                width={320}
                height={320}
                className="w-full"
                src={product.image.src}
                alt={product.image.alt ?? product.title}
              />
            </article>
          ))
        }
      </ul>

    </section>
  )
}
