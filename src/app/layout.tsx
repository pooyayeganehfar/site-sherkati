import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "سایت شرکتی",
  description: "ساخته شده با Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-sans bg-gray-50 text-gray-900">
        <header className="bg-black shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">شرکت ما</h1>
          <nav className="space-x-4 space-x-reverse">
            <Link href="/" className="hover:underline">خانه</Link>
            <Link href="/about" className="hover:underline">درباره ما</Link>
            <Link href="/services" className="hover:underline">خدمات</Link>
            <Link href="/contact" className="hover:underline">تماس</Link>
          </nav>
        </header>

        <main className="p-4">{children}</main>

        <footer className="bg-black text-center p-4 mt-8 text-sm">
          © {new Date().getFullYear()} تمام حقوق محفوظ است.
        </footer>
      </body>
    </html>
  );
}