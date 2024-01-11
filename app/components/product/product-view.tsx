'use client'

import { type Product } from '@/app/lib/types'
import CartIcon from '@/app/ui/svgs/cart'
import Image from 'next/image'
import { SanitizeHTML } from '../sanitize/sanitize-html'

export default function ProductView ({ product }: { product: Product }) {
  return (
    <section className="flex flex-col gap-16 lg:flex-row">
      <Image
        className="w-full mx-auto max-w-xl"
        src={product.image.src}
        width={320}
        height={320}
        alt=''
      />
      <article className="w-full p-4">
        <h2 className="mb-6 text-4xl text-titles lg:text-6xl">{product.title}</h2>
        <div className="max-w-xl mb-4 p-2 rounded-3xl border border-primary lg:mx-auto">
          <p className="text-center text-primary font-semibold">{product.tags}</p>
        </div>
        {/* <p className="mb-4 text-parragraph" dangerouslySetInnerHTML={{ __html: product.body_html }} /> */}
        <SanitizeHTML tag='p'>{product.body_html}</SanitizeHTML>
        <p className="mb-6 text-4xl font-semibold lg:text-6xl">$ {product.variants[0].price}</p>
        <div className="flex justify-between gap-12 font-semibold">
          <div className="flex items-center w-full rounded-md bg-background lg:">
            <button className="w-full">
              -
            </button>
            <p className="w-full text-center text-4xl lg:text-6xl">1</p>
            <button className="w-full">
              +
            </button>
          </div>
          <button className="flex gap-4 w-full justify-center items-center button">
            <CartIcon />
            Añadir al carrito
          </button>
        </div>
      </article>
    </section>
  )
}
