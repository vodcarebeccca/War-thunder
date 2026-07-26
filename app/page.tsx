import { Hero } from "@/components/home/Hero";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { Catalog } from "@/components/catalog/Catalog";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return <><Hero /><FeatureGrid /><Catalog /><Footer /></>;
}