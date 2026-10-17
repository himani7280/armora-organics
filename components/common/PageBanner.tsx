import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function PageBanner({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
}) {
  const items: BreadcrumbItem[] =
    breadcrumbs && breadcrumbs.length > 0
      ? breadcrumbs
      : [
          { label: "Home", href: "/" },
          { label: title },
        ];

  return (
    <section
      id="page-banner"
      className="relative flex h-[210px] items-center justify-center bg-cover bg-center sm:h-[270px] lg:h-[310px]"
      style={{ backgroundImage: "url(/images/common/banner.jpg)" }}
    >
      <div className="banner-overlay absolute inset-0" />
      <div className="relative text-center text-white animate-banner-fade-up px-4">
        <p className="text-sm font-medium sm:text-base lg:text-[17px]">
          {items.map((item, index) => (
            <span key={index}>
              {index > 0 && <span className="mx-2 text-white/80">{"//"}</span>}
              {item.href && index < items.length - 1 ? (
                <Link href={item.href} className="hover:text-gold-light transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={index === items.length - 1 ? "text-gold-light" : ""}>{item.label}</span>
              )}
            </span>
          ))}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-extrabold text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-[54px] leading-tight tracking-tight">
          {title}
        </h1>
      </div>
    </section>
  );
}
