export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: "240px",
          padding: "20px",
          background: "#111",
          color: "#fff",
        }}
      >
        <h2>Dashboard</h2>
        <nav style={{ marginTop: "20px" }}>
          <a
            href="/dashboard"
            style={{ display: "block", marginBottom: "10px" }}
          >
            Overview
          </a>
          <a
            href="/dashboard/media"
            style={{ display: "block", marginBottom: "10px" }}
          >
            Media
          </a>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: "20px" }}>{children}</main>
    </div>
  );
}
