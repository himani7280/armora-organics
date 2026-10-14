import { servicesContent, productsContent } from "@/lib/content";

const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** Give every item a unique slug (repeated titles get -2, -3 ...). */
function withSlugs<T extends { title: string }>(items: T[]) {
  const seen: Record<string, number> = {};
  return items.map((item) => {
    const base = slugify(item.title);
    seen[base] = (seen[base] ?? 0) + 1;
    return { ...item, slug: seen[base] === 1 ? base : `${base}-${seen[base]}` };
  });
}

export const services = withSlugs(servicesContent.items);
export const products = withSlugs(productsContent.items);

export type CatalogService = (typeof services)[number];
export type CatalogProduct = (typeof products)[number];

export const serviceHref = (slug: string) => `/service-detail/${slug}`;
export const productHref = (slug: string) => `/product-detail/${slug}`;

/** Resolve a card by title (home page cards) to its detail page. */
export const serviceHrefByTitle = (title: string) =>
  serviceHref((services.find((s) => s.title === title) ?? services[0]).slug);
export const productHrefByTitle = (title: string) =>
  productHref((products.find((p) => p.title === title) ?? products[0]).slug);
