import { services } from "@/data/services";
import Link from "next/link";
import { toSlug } from "@/libs/slugify";

export default function ServicesPage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-blue-900/30" />
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            خدمات ما
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-12 rounded-full opacity-50" />
          <p className="text-xl text-center text-gray-400 max-w-2xl mx-auto">
            ما با استفاده از جدیدترین تکنولوژی‌ها، خدمات متنوعی را برای کسب و کار شما ارائه می‌دهیم
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${toSlug(service.title)}`}>
              <div className="group bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-6 transform transition-transform group-hover:scale-110">
                  {service.emoji}
                </div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                  <span>اطلاعات بیشتر</span>
                  <span className="mr-2 transform group-hover:translate-x-2 transition-transform">←</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="bg-gray-800/30 backdrop-blur border border-gray-700/50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            چرا ما را انتخاب کنید؟
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "⚡️", title: "سرعت بالا", desc: "تحویل سریع پروژه‌ها" },
              { icon: "💎", title: "کیفیت برتر", desc: "بالاترین استانداردها" },
              { icon: "🔒", title: "امنیت کامل", desc: "حفاظت از داده‌های شما" },
              { icon: "🎯", title: "پشتیبانی ۲۴/۷", desc: "همیشه در دسترس" },
            ].map((feature, i) => (
              <div key={i} className="text-center group px-6 py-8 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:bg-gray-700/30 transition-all duration-300">
                <div className="text-3xl mb-4 transform transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-blue-900 border border-gray-700/50 p-12 text-center text-white">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">آماده شروع پروژه خود هستید؟</h2>
            <p className="mb-8 text-lg text-gray-300">
              همین حالا با ما تماس بگیرید و پروژه خود را شروع کنید
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              شروع پروژه
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}