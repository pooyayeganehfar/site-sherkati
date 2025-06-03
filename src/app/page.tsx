import { services } from "@/data/services";
import "./globals.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-16">

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white" style={{borderRadius:15}}>
        <h1 className="text-4xl font-bold mb-4">به شرکت ما خوش اومدین</h1>
        <p className="text-lg mb-6">ما بهترین خدمات رو در زمینه طراحی، توسعه و پشتیبانی ارائه می‌دیم.</p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          تماس با ما
        </a>
      </section>

      {/* Services Section */}
      <section className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">خدمات ما</h2>
        <div className="grid gap-6 md:grid-cols-3">
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

    </div>
  );
}

function ServiceCard({ title, description, emoji }: { title: string; description: string; emoji: string }) {
  return (
    <div className=" shadow-md rounded-xl p-6 text-center hover:shadow-lg transition" style={{backgroundColor:"#36454f"}}>
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white-200 text-sm">{description}</p>
    </div>
  );
}