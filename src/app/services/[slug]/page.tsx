import { services } from "@/data/services";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: toSlug(service.title),
  }));
}
interface Props {
  params: { slug: string };
}

export default function ServiceDetailPage({ params }: Props) {
  const slug = params.slug;
  const service = services.find((s) => toSlug(s.title) === slug);

  if (!service) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{service.emoji} {service.title}</h1>
      <p className="text-gray-700 text-lg leading-7">{service.description}</p>
      <p className="mt-6 text-sm text-gray-500">در آینده اطلاعات بیشتری اینجا قرار می‌گیره ✨</p>
    </div>
  );
}

// Helper function
function toSlug(text: string) {
  return text
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .toLowerCase();
}