import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link className="brand" href="/">
          <span className="brand-mark">WT</span>
          <span>WT Market</span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="#catalog">Catalog</Link>
          <Link href="#legal">Legal</Link>
          <button type="button" className="locale-button" aria-label="Switch language">EN</button>
        </nav>
      </div>
    </header>
  );
}
