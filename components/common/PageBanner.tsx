import Link from "next/link";

export default function PageBanner({ title }: { title: string }) {
  return (
    <section
      className="relative flex h-[220px] items-center justify-center bg-cover bg-center sm:h-[300px] lg:h-[355px]"
      style={{ backgroundImage: "url(/images/common/banner.jpg)" }}
    >
      <div className="banner-overlay absolute inset-0" />
      <div className="relative text-center text-white">
        <p className="text-base font-medium sm:text-lg">
          <Link href="/" className="hover:text-gold-light">Home</Link> {"//"} {title}
        </p>
        <h1 className="mt-2 font-body text-4xl font-extrabold text-white drop-shadow sm:text-5xl lg:text-6xl">{title}</h1>
      </div>
    </section>
  );
}
