import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px 20px",
        borderBottom: "1px solid #e5e5e5",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>News Media</div>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/">News</Link>
        <Link href="/kategori">Category</Link>
        <Link href="/tentang">About</Link>
      </div>
    </nav>
  );
}
