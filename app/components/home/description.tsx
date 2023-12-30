'use client'

import Image from 'next/image'
import clsx from 'clsx'
import { useState } from 'react'

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCACGAIYDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDAQQF/8QAGBABAQEBAQAAAAAAAAAAAAAAAAECERL/xAAXAQEBAQEAAAAAAAAAAAAAAAACAQAD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERAv/aAAwDAQACEQMRAD8A8QN4w0YGgoIhoyNioaHhYeQaUbDQSGkClGMpuCwVJSVSwlhRE6SqUldINKAFQ3Bw3Bxz08JwcNxnCiYIaRhpFRsikhcxTMSs2Q0jZDSBVLxlinBYio2E1FrE9RYyOoSqahKcEgAJleM4fjK4uhODhqw4mMNIyGhDh8xTMLmK5iVDZh5GZikg1i8ZYpxliMjqJ6i+olqMrn1EtL7iOijEAoVl2UzK5R0LSmrDjCGyWHyQ1TKuYllbLDVMxSQmVIlQcZYdlFEtRHa+kdsqG0dLbR0pJ0ChWdBa3pa5mKVtpSjNh8khsmlWytlDNWzWGrZUiWapKInZR1lqITSO1dVHdZUdo6W2hpSJQKGVXrLS9ZaONrbWdZazqwjSnzUpTyky2atmufNVzWGujNUlQzVJUHFestJ1lqINVLVNqparMnuo6U1UtKpaGUMrestL1nWxNNazpejrFKeU0qcppWJbNVzUM1TNRnRmnmkJTzTDYr6F0n6ZdIOG1UtVtqeqrF1UtU+qnarMDArJ9HS9HSxzlN0dL0I6SnlNKnDQa6RWVTNRlPKJLSnlRlNKg2K9ZaTo6o1tpLW2ktWCy0lbS0kYGBURaATnAABrry2GgA11h4eAAR4aAMjQAw0tLQCg0lLQCFgAVH//2Q=='

export default function Description () {
  const [hasOutline, setOutline] = useState(false)

  return (
    <section className="flex flex-col justify-center items-center gap-12 mb-20 lg:flex-row">
      <Image
        width={500}
        height={300}
        placeholder='blur'
        blurDataURL={PLACEHOLDER_IMAGE}
        className={clsx('aspect-video object-cover rounded-md', hasOutline && 'outline outline-4 outline-primary')}
        src="/images/description.jpeg"
        alt="Future world"
        onClick={() => { setOutline(!hasOutline) }}
      />
      <div>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione inventore consectetur ipsam doloremque facere laudantium culpa magnam, consequatur perferendis commodi?</p>
      </div>
    </section>
  )
}
