import Image from 'next/image'
import Link from 'next/link'

export default function NotFound () {
  return (
    <div className="flex flex-col items-center gap-6 min-h-screen">
      <Image
        width={320}
        height={320}
        src="/images/404.png"
        alt="Error 404"
      />
      <h1>Error 404</h1>
      <p>No encontramos lo que buscabas</p>
      <Link
        className="px-4 py-2 rounded-md bg-primary text-white hover:bg-secondary focus:outline focus:outline-tertiary"
        href="/">
        Volver al inicio
      </Link>
    </div>
  )
}
