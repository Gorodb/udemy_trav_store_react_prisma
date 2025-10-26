import { Decimal } from '@prisma/client/runtime/library'

export interface IProduct {
  id: string;
  name: string;
  slug: string;
  category: string;
  images: string[];
  brand: string;
  description: string;
  stock: number;
  price: Decimal;
  rating: Decimal;
  numReviews: number;
  isFeatured: boolean;
  banner: string | null;
  createdAt: Date;
};

export interface IProducts {
  products: IProduct[];
}