import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RG Portfolio",
  description: "Portfolio website Rafal Grabowski",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`antialiased text-black paper-background paper-texture`}>
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="bg-gray-100 p-4 shadow">
            <nav className="max-w-4xl mx-auto flex gap-4 justify-center">
              <Link href="/">Główna</Link>
              <Link href="/about">O mnie</Link>
              <Link href="/contact">Kontakt</Link>
            </nav>
          </header>

          {/* Main content */}
          <main className="flex-grow max-w-4xl mx-auto p-4">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4">
            ©2025 Strona Portfolio. Wszelkie prawa zastrzeżone.
          </footer>
        </div>
      </body>
    </html>
  );
}
