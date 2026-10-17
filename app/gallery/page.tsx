import PageBanner from "@/components/common/PageBanner";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { galleryPageData } from "@/lib/content";

export default function GalleryPage() {
  return (
    <>
      <PageBanner title={galleryPageData.banner.title} />
      <GalleryGrid />
    </>
  );
}
