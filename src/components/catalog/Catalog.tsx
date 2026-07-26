"use client";

import { useMemo, useState } from "react";
import type { ProductCategory } from "@/types/product";
import { products } from "@/data/products";
import { FilterBar } from "./FilterBar";
import { ProductCard } from "./ProductCard";

export function Catalog() {
  const [active, setActive] = useState<ProductCategory | "ALL">("ALL");
  const visible = useMemo(() => active === "ALL" ? products : products.filter((product) => product.category === active), [active]);
  return <section id="catalog" className="catalog-section"><div className="section-heading"><div><p className="eyebrow">Ready room</p><h2>Produk pilihan</h2></div><span>{visible.length} listing</span></div><FilterBar active={active} onChange={setActive} /><div className="product-grid">{visible.map((product) => <ProductCard key={product.id} product={product} />)}</div></section>;
}
