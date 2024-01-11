import Link from 'next/link'
import { getCollections } from '../services/shopify/collections'
import { type Collection } from '../lib/types'

export default async function StoreLayout ({ children }: { children: React.ReactNode }) {
  const collections = await getCollections()

  return (
    <main>
      <h3 className="mb-12">Listado de categorias: </h3>
      <nav>
        <ul className="flex flex-wrap justify-center gap-8 mb-20">
          {
            collections.map((collection: Collection) => (
              <li
                className="px-2 py-1 rounded-md bg-primary text-white hover:bg-secondary"
                key={collection.id}
              >
                <Link href={`/store/${collection.handle}`}>
                  {collection.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>

      {children}
    </main>
  )
}
