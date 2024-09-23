import { Stripe } from 'stripe';
import { env } from '@/env';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-06-20',
})

export const createProduct = async (product: any) => {
    return stripe.products.create(product);
}

export const getProducts = async () => {
    return stripe.products.list();
}

export const updateProduct = async (product: any) => {
    return stripe.products.update(product.id, product);
}

export const deleteProduct = async (id: string) => {
    return stripe.products.del(id);
}