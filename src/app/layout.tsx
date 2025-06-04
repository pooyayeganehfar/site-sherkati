import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "سایت شرکتی",
  description: "ساخته شده با Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-sans bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
        <header className="fixed w-full top-0 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg z-50">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              شرکت ما
            </h1>
            <nav className="flex gap-6">
              {[
                ['خانه', '/'],
                ['درباره ما', '/about'],
                ['خدمات', '/services'],
                ['تماس', '/contact'],
              ].map(([title, url]) => (
                <Link
                  key={url}
                  href={url}
                  className="relative px-2 py-1 transition-all duration-300 hover:text-blue-400 group"
                >
                  {title}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="container mx-auto p-4 mt-20">{children}</main>

        <footer className="relative mt-8 py-6 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-sm text-gray-300">
                © {new Date().getFullYear()} تمام حقوق محفوظ است.
              </p>
              <div className="mt-2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto opacity-50" />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}