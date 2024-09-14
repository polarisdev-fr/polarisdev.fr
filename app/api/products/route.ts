import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/stripe';

export async function GET(req: NextRequest) {
  try {
    // Parse the request URL to check for an 'id' query parameter
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (id) {
      // If 'id' is present, fetch the specific product
      const product = await stripe.products.retrieve(id);

      if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      }

      // Fetch prices associated with this specific product
      const prices = await stripe.prices.list({ product: id });

      return NextResponse.json({ ...product, prices: prices.data });
    } else {
      // If 'id' is not provided, fetch all products
      const products = await stripe.products.list();

      // Fetch prices for all products and return details
      const productDetails = await Promise.all(
        products.data.map(async (product) => {
          const prices = await stripe.prices.list({ product: product.id });
          return { ...product, prices: prices.data };
        })
      );

      return NextResponse.json(productDetails);
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
