export interface Product {
  id: number
  title: string
  body_html: string
  vendor: string
  product_type: string
  created_at: Date
  handle: string
  updated_at: Date
  published_at: Date
  template_suffix: null
  published_scope: string
  tags: string
  status: string
  admin_graphql_api_id: string
  variants: any[]
  options: any[]
  images: any[]
  image: {
    id: number
    alt: null | string
    position: number
    product_id: number
    created_at: string
    updated_at: string
    admin_graphql_api_id: string
    width: number
    height: number
    src: string
    variant_ids: number[]
  }
}
