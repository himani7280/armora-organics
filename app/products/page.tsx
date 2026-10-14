import PageBanner from "@/components/common/PageBanner";
import ProductGrid from "@/components/products/ProductGrid";
import { productsPageData } from "@/lib/content";

export default function ProductsPage() {
  return (
    <>
      <PageBanner title={productsPageData.banner.title} />
      <ProductGrid />
    </>
  );
}
