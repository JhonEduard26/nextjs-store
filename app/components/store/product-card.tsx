import Image from 'next/image'
import { type Product } from '@/app/lib/types'

export default function ProductCard ({ product }: { product: Product }) {
  return (
    <li className="overflow-hidden rounded-md hover:outline hover:outline-primary hover:brightness-110">
      <article key={product.id} className="relative">
        <Image
          width={320}
          height={320}
          className="w-full"
          src={product.image.src}
          alt={product.title}
        />
        <div>
          <p className="text-centertext-background text-4xl">{product.title}</p>
          <p className="text-centertext-background text-4xl"></p>
        </div>
      </article>
    </li>
  )
}
