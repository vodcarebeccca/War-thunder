import { Catalog } from "@/components/catalog/Catalog";

export default function HomePage() {
  return <main className="container page-shell"><section className="hero-panel"><div className="hero-orb" /><div className="hero-content"><p className="eyebrow">WT Market</p><h1>Level up your War Thunder experience.</h1><p className="hero-copy">Temukan akun War Thunder pilihan dengan level, rank, dan kendaraan yang sesuai gaya bermainmu. Proses cepat, stok jelas, dan delivery otomatis setelah pembayaran.</p><a href="#catalog" className="primary-button">Lihat katalog</a></div></section><section className="feature-grid"><article><h2>Pilihan terkurasi</h2><p>Detail level, rank, nation, dan kategori yang transparan.</p></article><article><h2>Instant delivery</h2><p>Kredensial dikirim setelah pembayaran terkonfirmasi.</p></article><article><h2>Harga transparan</h2><p>IDR sebagai harga utama dengan ekuivalen USD.</p></article></section><Catalog /></main>;
}
