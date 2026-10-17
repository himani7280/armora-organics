import { notFound } from "next/navigation";
import PageBanner from "@/components/common/PageBanner";
import ProductDetailView from "@/components/product-detail/ProductDetailView";
import { productDetailPageData, products } from "@/lib/content";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailSlugPage(props: ProductDetailPageProps) {
  const resolvedParams = await Promise.resolve(props?.params);
  const slug = resolvedParams?.slug;
  if (!slug) notFound();

  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <PageBanner
        title={productDetailPageData.banner.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: productDetailPageData.banner.title },
        ]}
      />
      <ProductDetailView product={product} />
    </>
  );
}
