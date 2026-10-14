/**
 * Central content resolver.
 *
 * The JSON was restructured into  Farmora ➜ sections ➜ Section ➜ variants ➜ VariantName
 * but all components still expect the old flat shape (e.g. content.home.hero).
 * This module bridges that gap so every component imports from one place.
 */

import raw from "@/data/content.json";

// Shorthand for the variant-level objects
const s = raw.Farmora.sections;
const v = <S extends keyof typeof s>(section: S) => {
  const variants = s[section].variants;
  const keys = Object.keys(variants) as (keyof typeof variants)[];
  return variants[keys[0]];
};

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
export const aboutPageData   = { pageTitle: banners.FarmoraAboutBanner1.title };
export const servicesPageData = { pageTitle: banners.FarmoraServicesBanner1.title };
export const serviceDetailPageData = { banner: { title: banners.FarmoraServiceDetailBanner1.title } };
export const productsPageData = { banner: { title: banners.FarmoraProductsBanner1.title } };
export const testimonialsPageData = { banner: { title: banners.FarmoraTestimonialsBanner1.title } };
export const blogPageData = { banner: { title: banners.FarmoraBlogBanner1.title } };
export const blogDetailsPageData = { banner: { title: banners.FarmoraBlogDetailsBanner1.title } };
export const contactPageData = { banner: { title: banners.FarmoraContactBanner1.title } };
export const enquiryPageData = { banner: { title: banners.FarmoraEnquiryBanner1.title } };
