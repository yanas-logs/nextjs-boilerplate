"use client";

import Link from "next/link";
import { Box } from "@mui/material";

export default function UtilityBar() {
  return (
    <Box
      className="w-full bg-grey-500 text-sm text-gray-700"
      sx={{ borderBottom: "1px solid #e3e7eb" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-1 px-4">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <span className="font-medium">Hotline: 0812 3456 789</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <Link href="/track-order" className="hover:underline">
            Track Order
          </Link>

          <Link href="/register" className="hover:underline">
            Member Registration
          </Link>

          <button className="hover:underline">ID</button>
        </div>
      </div>
    </Box>
  );
}
