import { createElement, type HTMLAttributes } from 'react'
import sanitize from 'sanitize-html'

type Props = {
  tag: string
  children: string
} & HTMLAttributes<HTMLElement>

export const SanitizeHTML = ({ tag, children, ...rest }: Props) => {
  const sanitizedHTML = sanitize(children, {
    allowedTags: ['b', 'i', 'em', 'strong']
  })

  return createElement(tag, { ...rest }, sanitizedHTML)
}
