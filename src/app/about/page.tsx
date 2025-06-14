export default function AboutPage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-blue-900/30" />
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            درباره ما
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-12 rounded-full opacity-50" />
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <p className="text-xl leading-relaxed text-gray-400">
              ما یه تیم پرانرژی و متخصص هستیم که با هدف ارائه بهترین خدمات در زمینه طراحی و توسعه وب فعالیت می‌کنیم.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "🎯", title: "چشم‌انداز", desc: "خلق تجربه‌های دیجیتال برتر" },
            { icon: "💡", title: "نوآوری", desc: "استفاده از جدیدترین تکنولوژی‌ها" },
            { icon: "🤝", title: "تعهد", desc: "ارائه بهترین خدمات به مشتریان" },
          ].map((item, i) => (
            <div key={i} className="group bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          تیم ما
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: "علی محمدی", role: "مدیر عامل" },
            { name: "سارا احمدی", role: "طراح ارشد" },
            { name: "رضا کریمی", role: "توسعه‌دهنده" },
            { name: "مریم حسینی", role: "مدیر پروژه" },
          ].map((member, i) => (
            <div key={i} className="group text-center p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 p-1 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all">
                <div className="w-full h-full rounded-full bg-gray-900" />
              </div>
              <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-center text-white relative overflow-hidden border border-gray-700/50">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
          <div className="relative">
            <h2 className="text-3xl font-bold mb-4">آماده همکاری با ما هستید؟</h2>
            <p className="mb-8 text-gray-300">با ما تماس بگیرید تا درباره پروژه شما صحبت کنیم</p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              تماس با ما
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}