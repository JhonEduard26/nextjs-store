'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export default function Error ({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center gap-6 min-h-screen">
      <Image
        width={320}
        height={320}
        src="/images/error.png"
        alt="Error"
      />
      <h2>Ocurrio un error!</h2>
      <button
        className="button"
        onClick={
          () => { reset() }
        }
      >
        Intentar de nuevo
      </button>
    </div>
  )
}
