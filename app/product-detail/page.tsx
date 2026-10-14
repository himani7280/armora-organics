import PageBanner from "@/components/common/PageBanner";
import ProductDetailView from "@/components/product-detail/ProductDetailView";

export default function ProductDetailPage() {
  return (
    <>
      <PageBanner title="Product Detail" />
      <ProductDetailView />
    </>
  );
}
