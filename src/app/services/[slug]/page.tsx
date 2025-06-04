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
    <div className="max-w-3xl mx-auto p-4 sm:p-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          {service.emoji} {service.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
}

