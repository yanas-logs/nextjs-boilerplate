import Link from "next/link";

export default function Headline() {
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
      {/* */}
      <div style={{ flex: 1 }}></div>

      {/* */}
      <div
        style={{
          gap: "20px",
          fontWeight: "bold",
          fontSize: "48px",
          // ensure text inside this div is central (optional)
          textAlign: "center",
        }}
      >
        <Link href="/">Headline</Link>
      </div>

      {/* 3. Spacer Kanan */}
      <div style={{ flex: 1 }}></div>
    </div>
  );
}
