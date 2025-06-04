import { services } from "@/data/services";
import "./globals.css";
import Link from "next/link";
import { toSlug } from "@/libs/slugify";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-700/90 z-0" />
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

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "۱۰۰+", label: "مشتری راضی" },
            { number: "۵۰+", label: "پروژه موفق" },
            { number: "۱۵+", label: "سال تجربه" },
            { number: "۲۴/۷", label: "پشتیبانی" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white/50 backdrop-blur rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            خدمات ما
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
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

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-16">
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
      <div className="group bg-white/50 backdrop-blur border border-white/20 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
        <div className="text-5xl mb-4 transform transition-transform group-hover:scale-110">{emoji}</div>
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}