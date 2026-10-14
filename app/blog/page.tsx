import PageBanner from "@/components/common/PageBanner";
import BlogList from "@/components/blog/BlogList";
import { blogPageData } from "@/lib/content";

export default function BlogPage() {
  return (
    <>
      <PageBanner title={blogPageData.banner.title} />
      <BlogList />
    </>
  );
}
