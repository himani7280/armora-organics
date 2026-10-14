import PageBanner from "@/components/common/PageBanner";
import Article from "@/components/blog-details/Article";
import Sidebar from "@/components/blog-details/Sidebar";
import { blogDetailsPageData } from "@/lib/content";

export default function BlogDetailsPage() {
  return (
    <>
      <PageBanner title={blogDetailsPageData.banner.title} />
      <section className="py-10 sm:py-12 lg:py-[60px]">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12">
          <Article />
          <Sidebar />
        </div>
      </section>
    </>
  );
}
