"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/career", label: "Career" },
  { href: "/aboutme", label: "About Me" },
  { href: "/notes", label: "Notes" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="ja">
      <body className="bg-neutral-950 text-neutral-100">
        <header className="fixed top-0 left-0 w-full h-14 bg-black text-white z-50">
          <div className="max-w-5xl mx-auto h-full px-6 flex items-center justify-between">
            <Link
              href="/"
              className="font-medium tracking-wide hover:opacity-80 transition"
            >
              HIZA
            </Link>

            <nav className="flex items-center gap-6 text-sm">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition ${
                      isActive
                        ? "text-white border-b border-white"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </header>

        <main className="pt-14">{children}</main>

        {/* Footer / Links */}
        <footer className="border-t border-neutral-800 mt-32">
          <div className="max-w-5xl mx-auto px-6 py-12">
            <p className="text-sm text-neutral-400 mb-4">Links</p>
            <div className="flex gap-6 text-sm">
              <a
                href="https://x.com/wvvvn6j?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition"
              >
                X →
              </a>
              <a
                href="https://zenn.dev/hrk_sgyumm23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition"
              >
                Zenn →
              </a>
              <a
                href="https://www.facebook.com/share/1DfFJDgEp9/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition"
              >
                FaceBook →
              </a>
              <a
                href="https://strava.app.link/eibt8pARFZb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition"
              >
                Strava →
              </a>
            </div>

            <p className="mt-8 text-xs text-neutral-600">
              © {new Date().getFullYear()} HIZA
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
