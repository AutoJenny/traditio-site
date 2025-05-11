import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      images: true,
      category: true,
    },
  });
  if (!product) return NextResponse.json({ product: null, related: [] }, { status: 404 });

  // Related products: same category, not self, limit 3
  const related = await prisma.product.findMany({
    where: {
      categoryId: product.categoryId,
      id: { not: product.id },
    },
    include: { images: true },
    take: 3,
  });

  return NextResponse.json({ product, related });
} 