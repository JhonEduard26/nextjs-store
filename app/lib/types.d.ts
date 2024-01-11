export interface Product {
  body_html: string
  created_at: Date
  handle: string
  id: number
  images: ProductImage[]
  image: ProductImage
  options: Options
  product_type: string
  published_at: Date
  published_scope: string
  status: string
  tags: string
  template_suffix: string
  title: string
  updated_at: Date
  variants: Variant[]
  vendor: string
}

export interface ProductImage {
  id: number
  product_id: number
  position: number
  created_at: string
  updated_at: string
  alt: null
  width: number
  height: number
  src: string
  variant_ids: VariantID[]
  admin_graphql_api_id: string
}

export interface VariantID {
}

export interface Options {
  id: number
  product_id: number
  name: string
  position: number
  values: string[]
}

export interface Variant {
  barcode: string
  compare_at_price: null
  created_at: Date
  fulfillment_service: string
  grams: number
  weight: number
  weight_unit: string
  id: number
  inventory_item_id: number
  inventory_management: string
  inventory_policy: string
  inventory_quantity: number
  option1: string
  position: number
  price: number
  product_id: number
  requires_shipping: boolean
  sku: string
  taxable: boolean
  title: string
  updated_at: Date
}

export interface Collection {
  body_html: string
  handle: string
  image: Image
  id: number
  published_at: Date
  published_scope: string
  sort_order: string
  template_suffix: string
  title: string
  updated_at: Date
}

export interface CollectionImage {
  src: string
  alt: string
  width: number
  height: number
  created_at: Date
}
