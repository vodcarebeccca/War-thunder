export type ProductCategory = "LEVEL" | "RANK" | "VEHICLE" | "PREMIUM" | "GIFT";

export type Product = {
  id: string;
  slug: string;
  titleId: string;
  titleEn: string;
  description: string;
  category: ProductCategory;
  nation: string;
  level: number;
  rank: number;
  priceIdr: number;
  stockCount: number;
};
