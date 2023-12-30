import Link from 'next/link'

export default function Header () {
  return (
    <header className="flex items-center min-h-24 px-5">
      <nav>
        <ul className="flex justify-between gap-4">
          <li>
            <Link className="px-2 py-1 font-semibold rounded-md hover:text-primary" href="/">Home</Link>
          </li>
          <li>
            <Link className="px-2 py-1 font-semibold rounded-md hover:text-primary" href="/store/">Categories</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
