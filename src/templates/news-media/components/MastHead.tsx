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
      {/* Left Side */}
      <div style={{ flex: 1 }}></div>

      {/* Mid Side */}
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

      {/* Right Side */}
      <div style={{ flex: 1 }}></div>
    </div>
  );
}
