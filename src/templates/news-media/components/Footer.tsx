import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        borderTop: "1px solid #e5e5e5",
        marginTop: "40px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "10px" }}
      >
        News Media
      </div>

      <div style={{ display: "flex", gap: "15px", marginBottom: "10px" }}>
        <Link href="/">News</Link>
        <Link href="/category">Category</Link>
        <Link href="/about">About</Link>
      </div>

      <div style={{ fontSize: "14px", color: "#555" }}>
        &copy; {new Date().getFullYear()} News Media. All rights reserved.
      </div>
    </footer>
  );
}
