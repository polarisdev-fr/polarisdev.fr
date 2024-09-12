import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/stripe'; // Assuming you have your Stripe instance set up with the secret key

// Named export for the GET request
export async function GET(req: NextRequest) {
  try {
    // Fetch products and prices from Stripe
    const products = await stripe.products.list();
    const prices = await stripe.prices.list();

    // Map products to their prices
    const productsWithPrices = products.data.map((product) => {
      const price = prices.data.find((price) => price.product === product.id);
      return { product, price };
    });

    // Return response as JSON
    return NextResponse.json(productsWithPrices);
  } catch (error) {
    // Return error response
    return NextResponse.json({ error: "Failed to fetch products and prices" }, { status: 500 });
  }
}
