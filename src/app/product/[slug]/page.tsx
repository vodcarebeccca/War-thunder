import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import { formatIdr, formatUsd } from "@/lib/format";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  return <main className="container page-shell detail-page"><Link href="/#catalog" className="back-link">← Kembali ke katalog</Link><section className="detail-panel"><div className="detail-visual"><span>{product.category}</span><strong>{product.nation} // RANK {product.rank}</strong></div><div className="detail-copy"><p className="eyebrow">Product detail</p><h1>{product.titleId}</h1><p>{product.description}</p><dl><div><dt>Nation</dt><dd>{product.nation}</dd></div><div><dt>Level</dt><dd>{product.level}</dd></div><div><dt>Rank</dt><dd>{product.rank}</dd></div><div><dt>Stock</dt><dd>{product.stockCount > 0 ? "Ready" : "Sold out"}</dd></div></dl><p className="detail-price">{formatIdr(product.priceIdr)}<small>≈ {formatUsd(product.priceIdr)}</small></p><button className="primary-button" type="button">Checkout segera</button></div></section></main>;
}
