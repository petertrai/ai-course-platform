import Stripe from 'stripe'
export const dynamic = "force-dynamic"

export const stripe = new Stripe(process.env.STRIPE_API_KEY as  string, {
    apiVersion: '2023-08-16',
    typescript: true
})