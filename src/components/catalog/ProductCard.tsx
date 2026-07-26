import Link from "next/link";
import type { Product } from "@/types/product";
import { formatIdr, formatUsd } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="product-card">
      <div className="product-visual"><span className="category-badge">{product.category}</span><span className="stock-badge">{product.stockCount > 0 ? "Ready" : "Sold out"}</span><strong>{product.nation} // RANK {product.rank}</strong></div>
      <div className="product-body"><h3>{product.titleId}</h3><p>{product.nation} · Level {product.level} · Rank {product.rank}</p><div className="price">{formatIdr(product.priceIdr)}<small>≈ {formatUsd(product.priceIdr)}</small></div></div>
    </Link>
  );
}
