

import raw from "@/data/content.json";

// Shorthand for the variant-level objects
const s = raw.Farmora.sections;
type FirstVariant<S extends keyof typeof s> = (typeof s)[S]["variants"][keyof (typeof s)[S]["variants"]];
const v = <S extends keyof typeof s>(section: S) => Object.values(s[section].variants)[0] as FirstVariant<S>;

/* ------------------------------------------------------------------ */
/*  HOME PAGE                                                         */
/* ------------------------------------------------------------------ */

export const homeContent = {
  hero: v("Hero"),
  about: v("About"),
  services: v("Services"),
  why: v("WhyChoose"),
  products: v("Products"),
  testimonials: v("Testimonials"),
  blogs: v("Blogs"),
};

/* ------------------------------------------------------------------ */
/*  SITE-WIDE (header/footer data used by some components)            */
/* ------------------------------------------------------------------ */

export const siteContent = s.SiteChrome.variants.FarmoraHeader1;

/* ------------------------------------------------------------------ */
/*  ABOUT PAGE                                                        */
/* ------------------------------------------------------------------ */

export const aboutContent = {
  about: v("AboutPage"),
};

/* ------------------------------------------------------------------ */
/*  SERVICES PAGE                                                     */
/* ------------------------------------------------------------------ */

const servicesPageRaw = v("ServicesPage") as typeof s.ServicesPage.variants.FarmoraServicesPage1;
export const servicesContent = {
  heading: {
    eyebrow: servicesPageRaw.eyebrow,
    title: servicesPageRaw.title,
    accent: servicesPageRaw.accent,
    text: servicesPageRaw.text,
  },
  items: servicesPageRaw.items,
  learnMoreLabel: servicesPageRaw.learnMoreLabel,
};

/* ------------------------------------------------------------------ */
/*  SERVICE DETAIL PAGE                                               */
/* ------------------------------------------------------------------ */

const serviceIntroRaw = v("ServiceDetailIntro") as typeof s.ServiceDetailIntro.variants.FarmoraServiceDetailIntro1;
export const serviceDetailContent = {
  intro: {
    eyebrow: serviceIntroRaw.eyebrow,
    title: serviceIntroRaw.title,
    accent: serviceIntroRaw.accent,
    text: serviceIntroRaw.text,
    button: serviceIntroRaw.button,
    image: serviceIntroRaw.image,
  },
  sidebar: serviceIntroRaw.sidebar,
  overview: v("ServiceOverview"),
  benefits: v("ServiceBenefits"),
  why: v("ServiceWhy"),
};

/* ------------------------------------------------------------------ */
/*  PRODUCTS PAGE                                                     */
/* ------------------------------------------------------------------ */

const productsPageRaw = v("ProductsPage") as typeof s.ProductsPage.variants.FarmoraProductsPage1;
export const productsContent = {
  intro: {
    eyebrow: productsPageRaw.eyebrow,
    title: productsPageRaw.title,
    accent: productsPageRaw.accent,
    text: productsPageRaw.text,
  },
  items: productsPageRaw.items,
  buttonLabel: productsPageRaw.buttonLabel,
};

/* ------------------------------------------------------------------ */
/*  PRODUCT DETAIL PAGE                                               */
/* ------------------------------------------------------------------ */

export const productDetailContent = {
  hero: v("ProductDetailHero"),
  overview: v("ProductOverview"),
  features: v("ProductFeatures"),
  specs: v("ProductSpecs"),
  benefits: v("ProductBenefits"),
  availability: v("ProductAvailability"),
};

/* ------------------------------------------------------------------ */
/*  GALLERY PAGE                                                      */
/* ------------------------------------------------------------------ */

const galleryRaw = v("GalleryPage") as typeof s.GalleryPage.variants.FarmoraGalleryPage1;
export const galleryContent = {
  intro: {
    title: galleryRaw.title,
    accent: galleryRaw.accent,
    text: galleryRaw.text,
  },
  images: galleryRaw.images,
};

/* ------------------------------------------------------------------ */
/*  TESTIMONIALS PAGE                                                 */
/* ------------------------------------------------------------------ */

export const testimonialsContent = v("TestimonialsPage");

/* ------------------------------------------------------------------ */
/*  BLOG PAGE                                                         */
/* ------------------------------------------------------------------ */

const blogPageRaw = v("BlogPage") as typeof s.BlogPage.variants.FarmoraBlogPage1;
export const blogContent = {
  intro: {
    eyebrow: blogPageRaw.eyebrow,
    title: blogPageRaw.title,
    accent: blogPageRaw.accent,
    text: blogPageRaw.text,
  },
  posts: blogPageRaw.posts,
  readMoreLabel: blogPageRaw.readMoreLabel,
};

/* ------------------------------------------------------------------ */
/*  BLOG DETAILS PAGE                                                 */
/* ------------------------------------------------------------------ */

export const blogDetailsContent = {
  article: v("BlogArticle"),
  sidebar: v("BlogSidebar"),
};

/* ------------------------------------------------------------------ */
/*  CONTACT PAGE                                                      */
/* ------------------------------------------------------------------ */

const contactFormRaw = v("ContactForm") as typeof s.ContactForm.variants.FarmoraContactForm1;
const contactInfoRaw = v("ContactInfo") as typeof s.ContactInfo.variants.FarmoraContactInfo1;
export const contactContent = {
  form: {
    title: contactFormRaw.title,
    accent: contactFormRaw.accent,
    subtitle: contactFormRaw.subtitle,
    fields: contactFormRaw.fields,
    button: contactFormRaw.button,
    success: contactFormRaw.success,
  },
  promo: contactFormRaw.promo,
  info: contactInfoRaw.items,
  location: v("ContactLocation"),
};

/* ------------------------------------------------------------------ */
/*  ENQUIRY PAGE                                                      */
/* ------------------------------------------------------------------ */

export const enquiryContent = {
  intro: v("EnquiryIntro"),
  form: v("EnquiryForm"),
};

/* ------------------------------------------------------------------ */
/*  PAGE BANNERS – used by app/ page files                            */
/* ------------------------------------------------------------------ */

const banners = s.PageBanner.variants;
export const bannerContent = banners;

/** Convenience: page-level data objects that include banner titles */
export const aboutPageData = { pageTitle: banners.FarmoraAboutBanner1.title };
export const servicesPageData = { pageTitle: banners.FarmoraServicesBanner1.title };
export const serviceDetailPageData = { banner: { title: banners.FarmoraServiceDetailBanner1.title } };
export const productsPageData = { banner: { title: banners.FarmoraProductsBanner1.title } };
export const productDetailPageData = { banner: { title: (banners as any).FarmoraProductDetailBanner1?.title ?? "Product Detail" } };
export const testimonialsPageData = { banner: { title: banners.FarmoraTestimonialsBanner1.title } };
export const blogPageData = { banner: { title: banners.FarmoraBlogBanner1.title } };
export const blogDetailsPageData = { banner: { title: banners.FarmoraBlogDetailsBanner1.title } };
export const contactPageData = { banner: { title: banners.FarmoraContactBanner1.title } };
export const enquiryPageData = { banner: { title: banners.FarmoraEnquiryBanner1.title } };
export const galleryPageData = { banner: { title: (banners as any).FarmoraGalleryBanner1?.title ?? "Gallery" } };
export const ourTeamPageData = { banner: { title: (banners as any).FarmoraOurTeamBanner1?.title ?? "Our Team" } };
export const teamPageData = { banner: { title: (banners as any).FarmoraTeamBanner1?.title ?? "Our Team" } };
export const thankYouPageData = { banner: { title: (banners as any).FarmoraThankYouBanner1?.title ?? "Thank You" } };

/* ------------------------------------------------------------------ */
/*  CATALOG & NAVIGATION HELPERS                                      */
/* ------------------------------------------------------------------ */

const slugify = (str: string) =>
  str.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** Give every item a unique slug (repeated titles get -2, -3 ...). */
function withSlugs<T extends { title: string }>(items: T[]) {
  const seen: Record<string, number> = {};
  return items.map((item) => {
    const base = slugify(item.title);
    seen[base] = (seen[base] ?? 0) + 1;
    return { ...item, slug: seen[base] === 1 ? base : `${base}-${seen[base]}` };
  });
}

export const services = withSlugs(servicesContent.items);
export const products = withSlugs(productsContent.items);
export const blogs = withSlugs(blogContent.posts);

export type CatalogService = (typeof services)[number];
export type CatalogProduct = (typeof products)[number];
export type CatalogBlog = (typeof blogs)[number];

export const serviceHref = (slug: string) => `/service-detail/${slug}`;
export const productHref = (slug: string) => `/product-detail/${slug}`;
export const blogHref = (slug: string) => `/blog-details/${slug}`;

/** Resolve a card by title (home page cards) to its detail page. */
export const serviceHrefByTitle = (title: string) =>
  serviceHref((services.find((s) => s.title === title) ?? services[0]).slug);
export const productHrefByTitle = (title: string) =>
  productHref((products.find((p) => p.title === title) ?? products[0]).slug);
export const blogHrefByTitle = (title: string) =>
  blogHref((blogs.find((b) => b.title === title) ?? blogs[0]).slug);

export type BlogArticle = {
  slug: string;
  tag: string;
  day: string;
  month: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  imageAlt: string;
  titleLine1: string;
  titleLine2: string;
  intro: string;
  sections: { heading: string; text: string }[];
  quote: string;
  maintain: { heading: string; items: string[] };
};

const defaultArticle = v("BlogArticle");
const blogArticlesVariant = (s as any).BlogArticles ? v("BlogArticles" as any) : {};
const jsonArticles = (blogArticlesVariant || {}) as Record<string, Partial<BlogArticle>>;
const specificArticles: Record<string, Partial<BlogArticle>> = jsonArticles;

export function getBlogArticle(slug?: string): BlogArticle {
  const blog = slug ? blogs.find((b) => b.slug === slug) : blogs[0];
  const targetSlug = blog?.slug ?? blogs[0].slug;
  const specific = specificArticles[targetSlug] ?? {};
  return {
    slug: targetSlug,
    tag: blog?.tag ?? (specific as any).tag ?? (defaultArticle as any).tag ?? "Organic Living",
    day: blog?.day ?? "18",
    month: blog?.month ?? "SEP 2026",
    date: specific.date ?? (defaultArticle as any).date ?? "18 Sep 2026",
    author: specific.author ?? (defaultArticle as any).author ?? "By Admin",
    readTime: specific.readTime ?? (defaultArticle as any).readTime ?? "5 Min Read",
    image: blog?.image ?? specific.image ?? defaultArticle.image,
    imageAlt: specific.imageAlt ?? (defaultArticle as any).imageAlt ?? (blog?.title ?? "Blog image"),
    titleLine1: specific.titleLine1 ?? (defaultArticle as any).titleLine1 ?? (blog?.title ?? "Blog Article"),
    titleLine2: specific.titleLine2 ?? (defaultArticle as any).titleLine2 ?? "",
    intro: specific.intro ?? defaultArticle.intro,
    sections: specific.sections ?? defaultArticle.sections,
    quote: specific.quote ?? defaultArticle.quote,
    maintain: specific.maintain ?? defaultArticle.maintain,
  };
}

/* ------------------------------------------------------------------ */
/*  TEAM CONTENT & MEMBERS                                            */
/* ------------------------------------------------------------------ */

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  about: string[] | string;
  email: string;
  phone: string;
  experience: string;
  skills: string[];
};

export const teamContent = ((s as any).Team ? v("Team" as any) : {
  eyebrow: "Our Team",
  title: "Meet The People Behind",
  accent: "Our Farm",
  text: "A passionate team of farmers, agronomists and food experts working together to bring fresh, natural and chemical-free produce to your table.",
  viewLabel: "View Profile",
  aboutLabel: "About",
  expertiseLabel: "Expertise",
  experienceLabel: "Experience",
  members: [],
}) as any;

export const ourTeamContent = ((s as any).OurTeam ? v("OurTeam" as any) : {
  eyebrow: "Our People",
  title: "Meet the",
  accent: "Dedicated Team",
  text: "Behind every fresh harvest is a passionate team committed to organic excellence, sustainable practices and delivering pure goodness from our farm to your table.",
  joinTitle: "Want to Join Our Green Family?",
  joinText: "We are always looking for passionate individuals who believe in organic farming and sustainable living. Get in touch with us today.",
  joinButton: { label: "Contact Us", href: "/contact" },
  viewLabel: "View Profile",
  notFoundText: "Team member not found.",
  backLabel: "Back to Team",
  experienceLabel: "Experience",
  educationLabel: "Education",
  aboutLabel: "About",
  expertiseLabel: "Areas of Expertise",
  members: [],
  socials: [],
}) as any;

export const teamMembers = ((ourTeamContent.members && ourTeamContent.members.length > 0)
  ? ourTeamContent.members
  : []) as Array<{
    slug: string;
    name: string;
    role: string;
    image: string;
    bio: string;
    about: string;
    expertise: string[];
    experience: string;
    education: string;
    quote: string;
  }>;

export const getMember = (slug: string) => (teamContent.members || []).find((m: any) => m.slug === slug);

/* ------------------------------------------------------------------ */
/*  THANK YOU CONTENT                                                 */
/* ------------------------------------------------------------------ */

export const thankYouContent = ((s as any).ThankYou ? v("ThankYou" as any) : {
  title: "Thank",
  accent: "You!",
  message1: "Your message has been received successfully. Our team will review your enquiry and get back to you within 24 hours.",
  message2: "We appreciate your interest in Farmora Organics and look forward to connecting with you.",
  homeButton: { label: "Back to Home", href: "/" },
  contactButton: { label: "Contact Us", href: "/contact" },
  footerTagline: "Growing a Healthier Future Together",
}) as any;
