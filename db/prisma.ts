import { neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';

// Enable WebSocket connections for edge/serverless environments
neonConfig.webSocketConstructor = ws

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is missing');
}

const adapter = new PrismaNeon({ connectionString })

const basePrisma = new PrismaClient({ adapter });

// Extends the PrismaClient with a custom result transformer to convert the price and rating fields to strings.
export const prisma = basePrisma.$extends({
  result: {
    product: {
      price: {
        compute(product: any) {
          return product.price?.toString?.() ?? null;
        },
      },
      rating: {
        compute(product: any) {
          return product.rating?.toString?.() ?? null;
        },
      },
    },
  },
});
