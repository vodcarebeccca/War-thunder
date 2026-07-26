"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [locale, setLocale] = useState<"ID" | "EN">("ID");
  return <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur"><div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4"><Link href="#top" className="flex items-center gap-2 font-bold tracking-tight"><span className="grid h-8 w-8 place-items-center rounded-lg bg-amber-500 text-sm text-black">WT</span><span>WT Market</span></Link><nav className="flex items-center gap-1 text-sm sm:gap-3"><Link href="#top" className="rounded-lg px-2 py-1 text-zinc-400 hover:text-white">Home</Link><Link href="#catalog" className="rounded-lg px-2 py-1 text-zinc-400 hover:text-white">Catalog</Link><Link href="#legal" className="rounded-lg px-2 py-1 text-zinc-400 hover:text-white">Legal</Link><button onClick={()=>setLocale(locale==="ID"?"EN":"ID")} className="rounded-lg border border-zinc-700 px-2 py-1 text-xs font-semibold uppercase text-amber-400 hover:bg-amber-500/10">{locale}</button></nav></div></header>;
}