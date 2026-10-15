

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
export const aboutPageData   = { pageTitle: banners.FarmoraAboutBanner1.title };
export const servicesPageData = { pageTitle: banners.FarmoraServicesBanner1.title };
export const serviceDetailPageData = { banner: { title: banners.FarmoraServiceDetailBanner1.title } };
export const productsPageData = { banner: { title: banners.FarmoraProductsBanner1.title } };
export const testimonialsPageData = { banner: { title: banners.FarmoraTestimonialsBanner1.title } };
export const blogPageData = { banner: { title: banners.FarmoraBlogBanner1.title } };
export const blogDetailsPageData = { banner: { title: banners.FarmoraBlogDetailsBanner1.title } };
export const contactPageData = { banner: { title: banners.FarmoraContactBanner1.title } };
export const enquiryPageData = { banner: { title: banners.FarmoraEnquiryBanner1.title } };

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

export type CatalogService = (typeof services)[number];
export type CatalogProduct = (typeof products)[number];

export const serviceHref = (slug: string) => `/service-detail/${slug}`;
export const productHref = (slug: string) => `/product-detail/${slug}`;

/** Resolve a card by title (home page cards) to its detail page. */
export const serviceHrefByTitle = (title: string) =>
  serviceHref((services.find((s) => s.title === title) ?? services[0]).slug);
export const productHrefByTitle = (title: string) =>
  productHref((products.find((p) => p.title === title) ?? products[0]).slug);

/* ------------------------------------------------------------------ */
/*  TEAM CONTENT & MEMBERS                                            */
/* ------------------------------------------------------------------ */

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  about: string[];
  email: string;
  phone: string;
  experience: string;
  skills: string[];
};

const baseContact = { email: "info@xyz.com", phone: "+1 00000 00000" };

export const teamContent = {
  eyebrow: "Our Team",
  title: "Meet The People Behind",
  accent: "Our Farm",
  text: "A passionate team of farmers, agronomists and food experts working together to bring fresh, natural and chemical-free produce to your table.",
  viewLabel: "View Profile",
  members: [
    { slug: "ramesh-patel", name: "Ramesh Patel", role: "Founder & CEO", image: "/images/testimonials/avatar-1.png", experience: "25+ Years", skills: ["Organic Farming", "Farm Management", "Sustainability"], bio: "Visionary behind Farmora Organics with decades of hands-on farming experience.", about: ["Ramesh started Farmora Organics with a simple belief: healthy soil grows healthy people. Over 25 years he has led the farm from a small family plot to a trusted organic brand.", "He oversees the long-term vision, partnerships with local farmers and our commitment to chemical-free cultivation."] },
    { slug: "sunita-verma", name: "Sunita Verma", role: "Head of Organic Farming", image: "/images/testimonials/avatar-2.png", experience: "15+ Years", skills: ["Crop Planning", "Soil Health", "Composting"], bio: "Leads our field operations and crop planning with a focus on soil health.", about: ["Sunita manages seasonal crop planning, composting and natural pest management across all our fields.", "Her careful approach to soil care has improved yields season after season without any synthetic inputs."] },
    { slug: "amit-kumar", name: "Amit Kumar", role: "Agronomist", image: "/images/testimonials/avatar-3.png", experience: "12+ Years", skills: ["Agronomy", "Soil Testing", "Crop Nutrition"], bio: "Advises farmers on natural fertilizers, soil testing and crop nutrition.", about: ["Amit is our resident agronomist, guiding farmers on soil testing, organic fertilizers and crop rotation.", "He runs field workshops that help partner farms reduce chemical usage and grow stronger crops."] },
    { slug: "vikram-singh", name: "Vikram Singh", role: "Production Manager", image: "/images/testimonials/avatar-4.png", experience: "14+ Years", skills: ["Harvesting", "Quality Control", "Logistics"], bio: "Ensures every harvest is picked, graded and packed at peak freshness.", about: ["Vikram coordinates harvesting, grading and packing so produce reaches customers fresh and on time.", "He maintains strict quality checks at every stage of production."] },
    { slug: "pooja-desai", name: "Pooja Desai", role: "Quality & Certification Lead", image: "/images/testimonials/avatar-7.png", experience: "10+ Years", skills: ["Organic Certification", "Lab Testing", "Compliance"], bio: "Keeps our products certified, tested and safe for every family.", about: ["Pooja manages organic certification, lab testing and compliance for all Farmora products.", "Her work ensures that what we promise on the label is exactly what you receive."] },
    { slug: "deepak-joshi", name: "Deepak Joshi", role: "Sales & Distribution Head", image: "/images/testimonials/avatar-8.png", experience: "11+ Years", skills: ["Distribution", "Partnerships", "Customer Care"], bio: "Builds the supply network that brings our produce to your doorstep.", about: ["Deepak leads distribution and retail partnerships, making sure fresh products reach homes and stores across the region.", "He is also the first point of contact for bulk orders and long-term customers."] },
  ].map((m) => ({ ...baseContact, ...m })) as TeamMember[],
};

export const getMember = (slug: string) => teamContent.members.find((m) => m.slug === slug);

/* ------------------------------------------------------------------ */
/*  DETAILED TEAM MEMBERS DATA (Our Team)                            */
/* ------------------------------------------------------------------ */

export const teamMembers = [
  {
    slug: "rajiv-sharma",
    name: "Rajiv Sharma",
    role: "Farm Director",
    image: "/images/team/team-rajiv.jpg",
    bio: "With over 20 years of experience in organic farming, Rajiv leads our operations with a passion for sustainable agriculture and soil health.",
    about:
      "Rajiv Sharma founded Farmora Organics with a single vision — bring pure, chemical-free food from farm to every Indian table. Growing up on a small farm in Rajasthan, he witnessed first-hand how industrial farming degraded soil and endangered health. He holds a degree in Agricultural Science from IARI, New Delhi, and has spent two decades perfecting the art of organic farming across five states.",
    expertise: [
      "Organic Crop Planning",
      "Soil Health Management",
      "Sustainable Irrigation",
      "Farm Leadership & Strategy",
      "Agri-Business Development",
    ],
    experience: "20+ Years",
    education: "B.Sc Agriculture, IARI New Delhi",
    quote:
      "Healthy soil is the foundation of healthy food. Everything we do at Farmora starts from the ground up.",
  },
  {
    slug: "priya-nair",
    name: "Priya Nair",
    role: "Organic Specialist",
    image: "/images/team/team-priya.jpg",
    bio: "Priya brings expertise in certified organic practices and guides our crop cycles to ensure chemical-free, nutrient-rich produce for every customer.",
    about:
      "Priya joined Farmora Organics after earning her Master's in Organic Agriculture from Kerala Agricultural University. She has led the certification process for our farm under NPOP (National Programme for Organic Production) and works closely with farmers to transition from conventional to organic methods. Her research on natural pest management has been published in two national journals.",
    expertise: [
      "Organic Certification (NPOP)",
      "Natural Pest Management",
      "Crop Nutrition Planning",
      "Farmer Training & Education",
      "Biodiversity Conservation",
    ],
    experience: "8 Years",
    education: "M.Sc Organic Agriculture, KAU Kerala",
    quote:
      "Organic farming is not just a method — it is a commitment to life, nature and the generations that follow.",
  },
  {
    slug: "amit-verma",
    name: "Amit Verma",
    role: "Soil Scientist",
    image: "/images/team/team-amit.jpg",
    bio: "Amit analyses soil composition and designs enrichment programmes that keep our farmland fertile, healthy and productive season after season.",
    about:
      "Amit Verma is a certified soil scientist with a PhD in Soil Microbiology from Banaras Hindu University. He leads our soil lab where every plot of farmland is tested and monitored throughout the year. His work on bio-fertiliser formulations has reduced our dependence on external inputs by 40%, while simultaneously increasing crop yields and soil organic matter content.",
    expertise: [
      "Soil Microbiology & Analysis",
      "Bio-Fertiliser Development",
      "Carbon Sequestration",
      "Precision Agriculture",
      "Lab Testing & Research",
    ],
    experience: "10 Years",
    education: "PhD Soil Microbiology, BHU Varanasi",
    quote:
      "A handful of healthy soil contains more living organisms than there are people on Earth. We must protect it.",
  },
  {
    slug: "sunita-devi",
    name: "Sunita Devi",
    role: "Head of Operations",
    image: "/images/team/team-sunita.jpg",
    bio: "Sunita oversees day-to-day farm logistics, quality checks and supply-chain coordination so fresh produce reaches you on time, every time.",
    about:
      "Sunita Devi brings 15 years of supply-chain and operations expertise to Farmora Organics. Before joining us, she managed logistics for one of India's largest food cooperatives. At Farmora, she has built an end-to-end cold-chain system ensuring that produce harvested in the morning reaches our customers' doors within 24 hours — fresh, safe and flavour-intact.",
    expertise: [
      "Supply Chain Management",
      "Cold-Chain Logistics",
      "Quality Control Systems",
      "Team Management",
      "Process Optimisation",
    ],
    experience: "15 Years",
    education: "MBA Operations Management, Pune University",
    quote:
      "Farm-fresh means nothing if the delivery chain breaks. My job is to make sure every step from harvest to home is perfect.",
  },
  {
    slug: "karan-mehta",
    name: "Karan Mehta",
    role: "Marketing Manager",
    image: "/images/team/team-karan.jpg",
    bio: "Karan connects our farm story with customers across India, building trust through honest communication and a deep love for organic living.",
    about:
      "Karan Mehta is the voice of Farmora Organics. A passionate storyteller and digital marketer, he has grown our online community from zero to over 50,000 followers across platforms. Karan believes that the best marketing for organic food is radical transparency — showing customers exactly where their food comes from, who grows it and how. He runs Farmora's farm-visit programme and live harvest broadcasts.",
    expertise: [
      "Digital Marketing & SEO",
      "Brand Storytelling",
      "Social Media Strategy",
      "Customer Engagement",
      "Content Creation",
    ],
    experience: "6 Years",
    education: "BBA Marketing, IIM Indore (Executive)",
    quote:
      "When people trust where their food comes from, they make better choices for themselves and the planet.",
  },
  {
    slug: "deepa-singh",
    name: "Deepa Singh",
    role: "Quality Analyst",
    image: "/images/team/team-deepa.jpg",
    bio: "Deepa ensures every product leaving our farm meets the highest purity and freshness standards through rigorous testing and quality control.",
    about:
      "Deepa Singh is the guardian of quality at Farmora Organics. With a background in Food Technology from NIFTEM Haryana, she oversees all laboratory testing, pesticide residue checks and nutritional profiling of our produce. Every batch leaving the farm carries Deepa's sign-off. She has also developed our internal grading system that classifies produce by freshness, size and nutritional density.",
    expertise: [
      "Food Safety & FSSAI Compliance",
      "Pesticide Residue Testing",
      "Nutritional Profiling",
      "Internal Quality Audits",
      "Grading & Packaging Standards",
    ],
    experience: "7 Years",
    education: "B.Tech Food Technology, NIFTEM Haryana",
    quote:
      "Quality is not what you check at the end — it is what you build into every single step of the process.",
  },
];
