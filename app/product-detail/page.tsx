import PageBanner from "@/components/common/PageBanner";
import ProductDetailView from "@/components/product-detail/ProductDetailView";
import { productDetailPageData } from "@/lib/content";

export default function ProductDetailPage() {
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
      <ProductDetailView />
    </>
  );
}
