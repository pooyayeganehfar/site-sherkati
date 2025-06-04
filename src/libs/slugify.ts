export function toSlug(text: string) {
  return text
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .toLowerCase();
}