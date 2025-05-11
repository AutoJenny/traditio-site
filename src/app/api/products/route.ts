import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        images: true,
        category: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error('API /api/products error:', error);
    return NextResponse.json({ error: error.message || String(error) }, { status: 500 });
  }
} 