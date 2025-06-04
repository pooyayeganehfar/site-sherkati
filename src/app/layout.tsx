import "./globals.css";
import Link from "next/link";
import { FaInstagram, FaTelegram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "سایت شرکتی",
  description: "ساخته شده با Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-sans bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
        <header className="fixed w-full top-0 z-50">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/40 backdrop-blur-md border-b border-white/10" />
          <div className="container relative mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="relative group">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                شرکت ما
              </h1>
              <span className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Navigation />
          </div>
        </header>

        <main className="container mx-auto p-4 mt-20">{children}</main>

        <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black border-t border-white/10">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
              {/* Company Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  شرکت ما
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  ارائه دهنده بهترین خدمات طراحی و توسعه وب با استفاده از جدیدترین تکنولوژی‌های روز دنیا
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">دسترسی سریع</h3>
                <ul className="space-y-2">
                  {[
                    ['خانه', '/'],
                    ['درباره ما', '/about'],
                    ['خدمات', '/services'],
                    ['تماس', '/contact'],
                  ].map(([title, url]) => (
                    <li key={url}>
                      <Link 
                        href={url} 
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">اطلاعات تماس</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-400">
                    <span className="text-blue-400">📍</span> تهران، خیابان ولیعصر
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <span className="text-blue-400">📞</span> ۰۲۱-۱۲۳۴۵۶۷۸
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <span className="text-blue-400">📧</span> info@company.com
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">شبکه‌های اجتماعی</h3>
                <div className="flex gap-4">
                  {[
                    { icon: <FaInstagram size={20} />, name: 'اینستاگرام' },
                    { icon: <FaTelegram size={20} />, name: 'تلگرام' },
                    { icon: <FaLinkedinIn size={20} />, name: 'لینکدین' },
                    { icon: <FaTwitter size={20} />, name: 'توییتر' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <span className="text-gray-400 group-hover:text-white">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 mt-8 border-t border-white/10 text-center">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} تمام حقوق محفوظ است.
              </p>
              <div className="mt-4 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto opacity-30" />
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}