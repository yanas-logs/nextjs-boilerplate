import Link from "next/link";
import { CSSProperties } from "react";

export default function Folio({
  newspaperName = "The News Media",
  date = "Sunday, 07 December 2025",
  pageNumber = 1,
}) {
  const folioTextStyle: CSSProperties = {
    fontSize: "12px",
    fontWeight: "600",
    color: "#4a4a4a",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  return (
    <div // Main container for Folio
      style={{
        display: "flex",
        alignItems: "center",
        padding: "8px 20px",
        borderBottom: "1px solid #e5e5e5",
        justifyContent: "space-between",
        backgroundColor: "#f7f7f7",
      }}
    >
      {/* 1. left: nameplate (or Link to home) */}
      <div style={{ textAlign: "left" }}>
        <Link href="/" style={folioTextStyle}>
          {newspaperName}
        </Link>
      </div>

      {/* 2. right: grouping date and page in one elemen */}
      <div
        style={
          {
            ...folioTextStyle,
            textAlign: "right",
          } as any
        }
      >
        {/* grouping date dan pageNumber withvertikal "|" */}
        {`${date} | PAGE ${pageNumber}`}
      </div>
    </div>
  );
}
