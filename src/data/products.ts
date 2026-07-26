import type { Product } from "@/types/product";

export const products: Product[] = [
  { id: "pacific-ace", slug: "pacific-ace", titleId: "Pacific Ace", titleEn: "Pacific Ace", description: "USA account with a strong aircraft progression.", category: "LEVEL", nation: "USA", level: 72, rank: 8, priceIdr: 189000, stockCount: 3 },
  { id: "redline-veteran", slug: "redline-veteran", titleId: "Redline Veteran", titleEn: "Redline Veteran", description: "USSR account built for high-rank ground battles.", category: "RANK", nation: "USSR", level: 58, rank: 8, priceIdr: 245000, stockCount: 2 },
  { id: "iron-orchard", slug: "iron-orchard", titleId: "Iron Orchard", titleEn: "Iron Orchard", description: "Germany top-tier progression with premium vehicles.", category: "PREMIUM", nation: "Germany", level: 64, rank: 8, priceIdr: 319000, stockCount: 1 },
  { id: "golden-hangar", slug: "golden-hangar", titleId: "Golden Hangar", titleEn: "Golden Hangar", description: "Compact premium starter account.", category: "GIFT", nation: "USA", level: 41, rank: 5, priceIdr: 129000, stockCount: 4 },
];
