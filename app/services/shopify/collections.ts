import { env } from '@/app/config/env'
import { shopifyUrls } from './urls'

export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: {
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
      }
    })

    const collections = await response.json()
    return collections.smart_collections
  } catch (error) {
    console.log(error)
  }
}

export const getCollectionProducts = async (collectionId: string) => {
  try {
    const response =
      await fetch(shopifyUrls.collections.products(collectionId), {
        headers: {
          'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
        }
      })

    const { products } = await response.json()
    return products
  } catch (error) {
    console.log(error)
  }
}
