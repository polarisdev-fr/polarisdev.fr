import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/stripe';

// Handle GET requests to fetch all products (including subscription products)
export async function GET(req: NextRequest) {
  try {
    const products = await stripe.products.list();
    const productDetails = await Promise.all(
      products.data.map(async (product) => {
        const prices = await stripe.prices.list({ product: product.id });
        return { ...product, prices: prices.data };
      })
    );
    return NextResponse.json(productDetails);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Handle POST requests to create a new product (with subscription options)
export async function POST(req: NextRequest) {
  try {
    const { name, description, price, interval, isSubscription } = await req.json();

    // Create a new product in Stripe
    const product = await stripe.products.create({
      name,
      description,
    });

    let priceData;

    if (isSubscription) {
      // Create a recurring price for subscription products
      priceData = await stripe.prices.create({
        unit_amount: Math.round(price * 100), // Price in cents
        currency: 'eur',
        recurring: {
          interval: interval, // You can change the interval to 'year', 'week', etc.
        },
        product: product.id,
      });
    } else {
      // Create a one-time price for regular products
      priceData = await stripe.prices.create({
        unit_amount: Math.round(price * 100),
        currency: 'eur',
        product: product.id,
      });
    }

    return NextResponse.json({ product, price: priceData }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Handle PUT requests to update an existing product
export async function PUT(req: NextRequest) {
  try {
    const { id, name, description, price, isSubscription } = await req.json();

    // Update product in Stripe
    const updatedProduct = await stripe.products.update(id, {
      name,
      description,
    });

    let newPrice;
    if (isSubscription) {
      // Create a new recurring price for subscription products
      newPrice = await stripe.prices.create({
        unit_amount: Math.round(price * 100),
        currency: 'eur',
        recurring: {
          interval: 'month',
        },
        product: updatedProduct.id,
      });
    } else {
      // Create a new one-time price
      newPrice = await stripe.prices.create({
        unit_amount: Math.round(price * 100),
        currency: 'eur',
        product: updatedProduct.id,
      });
    }

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Handle DELETE requests to delete a product
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    // Delete product in Stripe
    await stripe.products.del(id);

    return NextResponse.json({ message: 'Product deleted' }, { status: 204 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
