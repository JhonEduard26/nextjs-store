import { env } from '@/app/config/env'
import { shopifyUrls } from './urls'

export const getProducts = async (id?: string) => {
  try {
    const apiUrl = id !== undefined ? `${shopifyUrls.products.all}?ids=${id}` : shopifyUrls.products.all
    const response = await fetch(apiUrl, {
      headers: {
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
      }
    })

    const { products } = await response.json()
    return products
  } catch (error) {
    console.error(error)
  }
}
