import Image from "next/image";
import EcommerceLanding from '../src/templates/e-commerce';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">PROJECT</h1>

      {/* Left-aligned section */}
      <div className="w-full max-w-4xl text-left">
        <p className="text-lg">
          E-commerce{" "}
          <a
            href="/e-commerce"
            className="text-blue-600 hover:underline font-medium"
          >
            E-commerce Template
          </a>
        </p>
      </div>
    </main>
  );
}

