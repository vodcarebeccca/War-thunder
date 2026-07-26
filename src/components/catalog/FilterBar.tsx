"use client";

import type { ProductCategory } from "@/types/product";

const filters: Array<{ label: string; value: ProductCategory | "ALL" }> = [
  { label: "Semua", value: "ALL" },
  { label: "Level", value: "LEVEL" },
  { label: "Rank", value: "RANK" },
  { label: "Premium", value: "PREMIUM" },
  { label: "Gift", value: "GIFT" },
];

export function FilterBar({ active, onChange }: { active: ProductCategory | "ALL"; onChange: (value: ProductCategory | "ALL") => void }) {
  return <div className="filters" aria-label="Catalog filters">{filters.map((filter) => <button key={filter.value} type="button" className={`filter ${active === filter.value ? "active" : ""}`} onClick={() => onChange(filter.value)}>{filter.label}</button>)}</div>;
}
