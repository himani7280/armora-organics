import PageBanner from "@/components/common/PageBanner";
import Article from "@/components/blog-details/Article";
import Sidebar from "@/components/blog-details/Sidebar";
import { blogDetailsPageData } from "@/lib/content";

export default function BlogDetailsPage() {
  return (
    <>
      <PageBanner
        title={blogDetailsPageData.banner.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blog" },
          { label: "Blogs Detail" },
        ]}
      />
      <section className="pt-8 pb-3 sm:pt-10 sm:pb-4 lg:pt-12 lg:pb-5">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12">
          <Article />
          <Sidebar />
        </div>
      </section>
    </>
  );
}
