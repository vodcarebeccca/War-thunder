"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

const filters=["Semua","Level","Rank","Premium","USA","USSR"];
export function Catalog(){const [filter,setFilter]=useState("Semua");const visible=useMemo(()=>filter==="Semua"?products:products.filter(p=>p.category===filter||p.nation===filter),[filter]);return <section id="catalog" className="space-y-4"><div className="flex items-end justify-between gap-3"><h2 className="text-2xl font-bold tracking-tight">Produk pilihan</h2><span className="text-sm text-amber-400">{visible.length} listings</span></div><div className="flex flex-wrap gap-2">{filters.map(item=><button key={item} onClick={()=>setFilter(item)} className={`rounded-lg border px-3 py-2 text-sm transition ${filter===item?"border-amber-500 bg-amber-500/10 text-amber-400":"border-zinc-800 text-zinc-400 hover:border-amber-500 hover:text-amber-400"}`}>{item}</button>)}</div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{visible.map(p=><ProductCard key={p.id} product={p}/>)}</div></section>}