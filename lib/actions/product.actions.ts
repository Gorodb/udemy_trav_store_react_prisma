'use server';

import {prisma} from "@/db/prisma"
import {Product} from "@/types";
import {convertToPlainObject} from "@/lib/utils";
import {LATEST_PRODUCTS_LIMIT} from "@/lib/constants";

// Get latest products
export async function getLatestProducts(): Promise<Product[]> {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: {createdAt: 'desc'},
  })

  return convertToPlainObject<Product[]>(data);
}

// Get a single product by its slug

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return prisma.product.findFirst({
    where: {slug}
  });
}