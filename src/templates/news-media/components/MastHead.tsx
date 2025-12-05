import Link from "next/link";

export default function MastheadTitle() {
  return (
    <div // Main
      style={{
        display: "flex", // activate Flexbox
        alignItems: "center",
        padding: "12px 20px",
        borderBottom: "1px solid #e5e5e5",
        justifyContent: "space-between", // spacer for balance
      }}
    >
      {/* 1. Spacer Kiri */}
      <div style={{ flex: 1 }}></div>

      {/* 2. Judul Masthead (Di Tengah) */}
      <div
        style={{
          gap: "20px",
          fontWeight: "bold",
          fontSize: "48px",
          // ensure text inside this div is central (optional)
          textAlign: "center",
        }}
      >
        <Link href="/">The News Media</Link>
      </div>

      {/* 3. Spacer Kanan */}
      <div style={{ flex: 1 }}></div>
    </div>
  );
}
