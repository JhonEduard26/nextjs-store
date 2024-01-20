import { type Metadata } from 'next'
import MainProducts from '../components/home/main-products'

export const metadata: Metadata = {
  title: 'Future World',
  description: 'Best shop in the world'
}

export default function Home () {
  return (
    <main className="p-5 lg:p-20">
      <MainProducts />
    </main>
  )
}
