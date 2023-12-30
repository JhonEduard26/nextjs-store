interface Props {
  params: {
    categories: string[]
  }
  searchParams?: Record<string, string>
}

export default function Category ({ params, searchParams }: Props) {
  return (
    <section className="p-5">
      <h1>Category: {params.categories}</h1>

      <p>search params: {JSON.stringify(searchParams, null, 2)}</p>
    </section>
  )
}
