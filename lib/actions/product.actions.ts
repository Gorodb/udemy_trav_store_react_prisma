'use server';

import {PrismaClient} from '@/lib/generated/prisma';
import {IProduct} from "@/types/IProduct";
import {convertToPlainObject} from "@/lib/utils";
import {LATEST_PRODUCTS_LIMIT} from "@/lib/constants";

// Get latest products
export async function getLatestProducts(): Promise<IProduct[]> {
  const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: {createdAt: 'desc'},
  })

  return convertToPlainObject<IProduct[]>(data);
}