import { services } from "@/data/services";
import "./globals.css";
import Link from "next/link";
import { toSlug } from "@/libs/slugify";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="space-y-32">
      {/* Hero Section - Updated with darker gradients */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-blue-900/95 z-0" />
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 animate-pulse" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_20%)]">
            به شرکت ما خوش اومدین
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            ما بهترین خدمات رو در زمینه طراحی، توسعه و پشتیبانی ارائه می‌دیم.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-blue-500/25"
            >
              شروع همکاری
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur rounded-full font-bold hover:bg-white/20 transition-all duration-300"
            >
              مشاهده خدمات
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Updated styling */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "۱۰۰+", label: "مشتری راضی", icon: "👥" },
            { number: "۵۰+", label: "پروژه موفق", icon: "🚀" },
            { number: "۱۵+", label: "سال تجربه", icon: "⭐️" },
            { number: "۲۴/۷", label: "پشتیبانی", icon: "💬" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-gray-800/50 backdrop-blur rounded-2xl border border-gray-700/50 shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <div className="text-2xl mb-3">{stat.icon}</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            نمونه کارهای ما
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full opacity-50" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-video bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-2xl p-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2">پروژه {item}</h3>
                  <p className="text-gray-400">توضیحات مختصر پروژه در اینجا</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            نظرات مشتریان
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full opacity-50" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((item) => (
            <div key={item} className="bg-gray-800/30 backdrop-blur p-6 rounded-2xl border border-gray-700/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400" />
                <div>
                  <h3 className="font-bold text-white">نام مشتری</h3>
                  <p className="text-sm text-gray-400">مدیرعامل شرکت</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                "نظر مشتری در مورد همکاری با شرکت و کیفیت خدمات ارائه شده در اینجا قرار می‌گیرد."
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section - Updated styling */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            خدمات ما
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              emoji={service.emoji}
            />
          ))}
        </div>
      </section>

      {/* CTA Section - Updated styling */}
      <section className="container mx-auto px-4 mb-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-blue-900 p-8 md:p-16 border border-gray-700/50">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
          <div className="relative z-10 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">آماده همکاری با ما هستید؟</h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              همین حالا با ما تماس بگیرید و پروژه خود را شروع کنید
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
            >
              تماس با ما
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, description, emoji }: { title: string; description: string; emoji: string }) {
  return (
    <Link href={`/services/${toSlug(title)}`}>
      <div className="group bg-gray-800/30 backdrop-blur border border-gray-700/50 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
        <div className="text-5xl mb-4 transform transition-transform group-hover:scale-110">{emoji}</div>
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </Link>
  );
}