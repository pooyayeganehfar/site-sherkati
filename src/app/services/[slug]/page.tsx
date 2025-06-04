import { services } from "@/data/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { toSlug } from "@/libs/slugify";

// باقی کد همون باشه

export function generateStaticParams() {
  return services.map((service) => ({
    slug: toSlug(service.title),
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const service = services.find((s) => toSlug(s.title) === slug);

  if (!service) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{service.emoji} {service.title}</h1>
      <p className="text-gray-700 text-lg leading-7">{service.description}</p>
    </div>
  );
}

