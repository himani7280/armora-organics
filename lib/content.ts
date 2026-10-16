

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

const specificArticles: Record<string, Partial<BlogArticle>> = {
  "the-future-of-organic-farming": {
    titleLine1: "The Future of",
    titleLine2: "Organic Farming",
    date: "28 Aug 2026",
    author: "By Agronomist Team",
    readTime: "5 Min Read",
    intro: "Organic agriculture represents a profound return to natural balance. By working with nature rather than against it, organic farmers produce wholesome food while safeguarding groundwater, preserving pollinators, and regenerating rural farmland across the globe.",
    image: "/images/blog/blog-1.jpg",
    imageAlt: "Golden sunlit organic crop fields with thriving biodiversity",
    sections: [
      {
        heading: "Eliminating Synthetic Agrochemicals for Pure Nutrition",
        text: "Conventional industrial farming heavily relies on synthetic pesticides, synthetic nitrogen fertilizers, and genetic modification. In contrast, certified organic farming utilizes natural composts, bio-fertilizers, and biological pest controls. This produces food completely free from toxic chemical residues, rich in natural antioxidants and authentic flavor."
      },
      {
        heading: "Protecting Biodiversity and Pollinator Habitats",
        text: "Pollinators like bees, butterflies, and beneficial predatory insects are vital for over 75% of global food crops. Organic farms serve as thriving sanctuaries for these species, maintaining floral diversity and avoiding systemic neonicotinoid pesticides that have devastated bee populations worldwide."
      }
    ],
    quote: "“Organic farming is not a trend; it is our enduring promise to protect the soil, the water, and the health of generations to come.”",
    maintain: {
      heading: "Core Principles of Certified Organic Farming",
      items: [
        "Strict prohibition of synthetic chemical fertilizers and pesticides.",
        "Preservation of hedgerows, wetlands, and pollinator corridors.",
        "Natural crop rotation cycles to naturally enrich nitrogen levels.",
        "Complete transparency and traceability from harvest to table."
      ]
    }
  },
  "why-living-soil-grows-better-food": {
    titleLine1: "Why Living Soil",
    titleLine2: "Grows Better Food",
    date: "24 Aug 2026",
    author: "By Soil Science Team",
    readTime: "6 Min Read",
    intro: "Soil is not merely dirt; it is a vibrant living ecosystem teeming with billions of beneficial fungi, bacteria, protozoa, and earthworms. When soil biology thrives, crops absorb essential trace minerals and nutrients that directly nourish human health.",
    image: "/images/blog/blog-2.jpg",
    imageAlt: "Rich dark living compost soil held in farmer hands with fresh green seedling",
    sections: [
      {
        heading: "The Soil Microbiome and Plant Nutrient Bioavailability",
        text: "A single tablespoon of healthy, biologically active soil contains more microorganisms than there are people on planet Earth. Mycorrhizal fungi form vast underground networks that deliver deep minerals like magnesium, iron, and zinc directly into plant root cells in exchange for photosynthetic sugars."
      },
      {
        heading: "Building Humus and Soil Organic Carbon",
        text: "Soils rich in organic matter act like enormous sponges, retaining up to twenty times their weight in water. Regular additions of mature vermicompost, cover crop residues, and biochar build long-term humus layers that resist drought and prevent catastrophic soil erosion."
      }
    ],
    quote: "“Feed the living soil, and the soil will feed the plant, the animal, and humanity with abundant health.”",
    maintain: {
      heading: "Essential Practices for Restoring Living Soil",
      items: [
        "Incorporate organic vermicompost and aged farmyard manure.",
        "Practice minimal tillage to protect subterranean fungal networks.",
        "Maintain continuous living ground cover to shield soil microbes.",
        "Test soil pH and mineral balance using natural amendments."
      ]
    }
  },
  "smart-irrigation-for-sustainable-yields": {
    titleLine1: "Smart Irrigation for",
    titleLine2: "Sustainable Yields",
    date: "20 Aug 2026",
    author: "By Sustainable Agri Team",
    readTime: "5 Min Read",
    intro: "Fresh water is agriculture's most precious and finite resource. Modern sustainable farms are revolutionizing water efficiency through micro-drip irrigation, solar-powered pressure systems, and rainwater harvesting that ensure abundant yields while conserving every droplet.",
    image: "/images/blog/blog-3.jpg",
    imageAlt: "Precision drip irrigation delivering water droplets to green organic crops",
    sections: [
      {
        heading: "Precision Drip Delivery: Water Where It Matters Most",
        text: "Unlike wasteful flood irrigation that loses up to 60% of water to evaporation and surface runoff, drip systems deliver water directly to the plant's root zone at calibrated micro-rates. This drastically reduces weed proliferation between rows while maintaining optimal root moisture."
      },
      {
        heading: "Rainwater Harvesting and Groundwater Recharge",
        text: "Sustainable agriculture integrates contour trenches, check dams, and farm ponds to capture monsoon rainwater. By slowing and soaking surface runoff, farms actively recharge subterranean aquifers, ensuring resilient water security even during extended dry spells."
      }
    ],
    quote: "“Every drop of water saved today secures tomorrow's harvest and ensures sustainable abundance for our communities.”",
    maintain: {
      heading: "Smart Water Conservation Blueprint",
      items: [
        "Install pressure-compensating drip emitters for uniform watering.",
        "Apply organic straw or bark mulch to minimize soil evaporation.",
        "Irrigate during early morning or evening hours to cut loss.",
        "Monitor soil moisture depth before triggering irrigation cycles."
      ]
    }
  },
  "the-power-of-peak-seasonal-harvests": {
    titleLine1: "The Power of",
    titleLine2: "Peak Seasonal Harvests",
    date: "15 Aug 2026",
    author: "By Nutrition Experts",
    readTime: "4 Min Read",
    intro: "Nature synchronizes nutrient availability with what the human body requires across seasons. Choosing vine-ripened, seasonal organic produce delivers exceptional flavor, peak concentrations of vital phytonutrients, and clean wellness without artificial ripening agents.",
    image: "/images/blog/blog-4.jpg",
    imageAlt: "Vibrant rustic wooden crate overflowing with freshly harvested organic vegetables",
    sections: [
      {
        heading: "The Nutritional Superiority of Vine-Ripened Produce",
        text: "Produce picked before maturity and transported thousands of miles in refrigerated containers loses up to 50% of its vitamin C, folate, and aromatic polyphenols. In contrast, organic produce harvested at the peak of sun-drenched maturity offers maximum cellular antioxidant protection."
      },
      {
        heading: "Natural Seasonal Harmony with Body Immunity",
        text: "Spring greens detoxify the liver, summer melons and berries hydrate with electrolytes, autumn squashes deliver protective beta-carotene, and winter root vegetables provide warming minerals. Aligning your diet with nature's rhythm boosts natural immunity year-round."
      }
    ],
    quote: "“Food is medicine when it is grown with integrity, harvested in its true season, and enjoyed fresh from the earth.”",
    maintain: {
      heading: "How to Maximize Your Seasonal Nutrition",
      items: [
        "Select vibrant rainbow produce harvested within local agricultural zones.",
        "Consume minimally processed raw salads and lightly steamed greens.",
        "Avoid out-of-season produce preserved with synthetic waxing agents.",
        "Support local community farmers markets and seasonal farm boxes."
      ]
    }
  },
  "companion-planting-for-thriving-gardens": {
    titleLine1: "Companion Planting for",
    titleLine2: "Thriving Gardens",
    date: "12 Aug 2026",
    author: "By Master Gardeners",
    readTime: "6 Min Read",
    intro: "You don't need synthetic sprays to protect your vegetable patch. By pairing complementary plants together, nature creates its own aromatic shields, beneficial insect attractors, and nutrient-sharing alliances that make your home garden burst with vigor.",
    image: "/images/blog/blog-5.jpg",
    imageAlt: "Lush raised bed kitchen garden with companion marigolds, tomatoes and basil",
    sections: [
      {
        heading: "Dynamic Companion Pairings That Work Together",
        text: "Planting fragrant French marigolds alongside tomatoes deters root-knot nematodes and repels tomato hornworms. Sweet basil planted near peppers improves flavor and repels aphids. Tall sweetcorn provides natural trellising for climbing beans, which in turn fix nitrogen in the soil."
      },
      {
        heading: "Homemade Organic Pest Deterrents",
        text: "When unwanted garden pests appear, gentle botanical sprays made from cold-pressed neem oil, garlic extract, and mild soap effectively neutralize pests without harming earthworms, honeybees, or Ladybird beetles that naturally feast on aphids."
      }
    ],
    quote: "“In an organic garden, every plant has a friend that protects its roots and elevates its harvest.”",
    maintain: {
      heading: "Quick Tips for Home Garden Success",
      items: [
        "Pair fragrant flowering herbs around tender brassica and nightshade crops.",
        "Incorporate flowering dill, fennel, and alyssum to invite ladybugs and lacewings.",
        "Apply cold-pressed organic neem oil sprays during dusk or early mornings.",
        "Build raised cedar or stone beds for superior root aeration and drainage."
      ]
    }
  },
  "zero-waste-guide-to-organic-living": {
    titleLine1: "Zero-Waste Guide to",
    titleLine2: "Organic Living",
    date: "08 Aug 2026",
    author: "By Eco Living Specialists",
    readTime: "5 Min Read",
    intro: "Sustainable living extends beyond what we put on our plates—it encompasses the choices we make every day to reduce disposable waste, eliminate single-use plastics, and honor nature's circular rhythm in our homes.",
    image: "/images/blog/blog-6.jpg",
    imageAlt: "Aesthetic sustainable kitchen with organic grains in glass jars and woven jute bags",
    sections: [
      {
        heading: "Plastic-Free Pantry Storage and Fresh Herb Preservation",
        text: "Transitioning from plastic packaging to durable glass mason jars, stainless steel containers, and breathable organic jute bags preserves whole grains, pulses, and spices at peak freshness while preventing microplastic contamination in your food."
      },
      {
        heading: "Closing the Loop: Kitchen Composting at Home",
        text: "Nearly 40% of household waste consists of organic kitchen scraps. Bokashi buckets, countertop vermicomposters, or backyard compost bins transform fruit peels and coffee grounds into nutrient-gold soil amendments that regenerate your home planters."
      }
    ],
    quote: "“We do not need a handful of people doing zero waste perfectly; we need millions of people doing it imperfectly every day.”",
    maintain: {
      heading: "Practical Steps Towards an Eco-Friendly Home",
      items: [
        "Replace single-use plastic wraps with natural washable beeswax wraps.",
        "Carry reusable cotton and jute tote bags for weekly farmer market shopping.",
        "Divert vegetable trimmings and coffee grounds into living compost bins.",
        "Choose organic, biodegradable cleaning supplies free from petrochemicals."
      ]
    }
  },
  // Compatibility with previously used slugs
  "the-future-of-organic-farming-cultivating-purity-and-preserving-ecosystems": {
    titleLine1: "The Future of",
    titleLine2: "Organic Farming",
    date: "28 Aug 2026",
    author: "By Agronomist Team",
    readTime: "5 Min Read",
    intro: "Organic agriculture represents a profound return to natural balance.",
    image: "/images/blog/blog-1.jpg",
    imageAlt: "Golden sunlit organic crop fields with thriving biodiversity",
    sections: [
      { heading: "Eliminating Synthetic Agrochemicals for Pure Nutrition", text: "Conventional industrial farming heavily relies on synthetic pesticides." }
    ],
    quote: "“Organic farming is not a trend; it is our enduring promise to protect the soil.”",
    maintain: { heading: "Core Principles", items: ["Strict prohibition of synthetic chemicals."] }
  },
  "why-living-soil-is-the-ultimate-foundation-of-nutrient-rich-food": {
    titleLine1: "Why Living Soil",
    titleLine2: "Grows Better Food",
    date: "24 Aug 2026",
    author: "By Soil Science Team",
    readTime: "6 Min Read",
    intro: "Soil is not merely dirt; it is a vibrant living ecosystem teeming with billions of beneficial organisms.",
    image: "/images/blog/blog-2.jpg",
    imageAlt: "Rich dark living compost soil held in farmer hands with fresh green seedling",
    sections: [
      { heading: "The Soil Microbiome", text: "Healthy living soil supports higher plant nutrient uptake." }
    ],
    quote: "“Feed the living soil, and the soil will feed the plant.”",
    maintain: { heading: "Essential Practices", items: ["Incorporate organic vermicompost."] }
  },
  "smart-water-management-and-drip-irrigation-for-sustainable-crop-yields": {
    titleLine1: "Smart Irrigation for",
    titleLine2: "Sustainable Yields",
    date: "20 Aug 2026",
    author: "By Sustainable Agri Team",
    readTime: "5 Min Read",
    intro: "Fresh water is agriculture's most precious and finite resource.",
    image: "/images/blog/blog-3.jpg",
    imageAlt: "Precision drip irrigation delivering water droplets to green organic crops",
    sections: [{ heading: "Precision Drip Delivery", text: "Drip systems deliver water directly to the plant root zone." }],
    quote: "“Every drop of water saved secures tomorrow's harvest.”",
    maintain: { heading: "Conservation Blueprint", items: ["Install drip emitters."] }
  },
  "peak-seasonal-harvests-unlocking-pure-vitality-and-antioxidant-power": {
    titleLine1: "The Power of",
    titleLine2: "Peak Seasonal Harvests",
    date: "15 Aug 2026",
    author: "By Nutrition Experts",
    readTime: "4 Min Read",
    intro: "Nature synchronizes nutrient availability with what the human body requires across seasons.",
    image: "/images/blog/blog-4.jpg",
    imageAlt: "Vibrant rustic wooden crate overflowing with freshly harvested organic vegetables",
    sections: [{ heading: "Nutritional Superiority", text: "Produce harvested at peak maturity delivers maximum antioxidants." }],
    quote: "“Food is medicine when it is grown with integrity.”",
    maintain: { heading: "Maximize Nutrition", items: ["Select vibrant seasonal produce."] }
  },
  "companion-planting-and-natural-pest-control-for-thriving-home-gardens": {
    titleLine1: "Companion Planting for",
    titleLine2: "Thriving Gardens",
    date: "12 Aug 2026",
    author: "By Master Gardeners",
    readTime: "6 Min Read",
    intro: "You don't need synthetic sprays to protect your vegetable patch.",
    image: "/images/blog/blog-5.jpg",
    imageAlt: "Lush raised bed kitchen garden with companion marigolds, tomatoes and basil",
    sections: [{ heading: "Dynamic Companion Pairings", text: "Complementary plants create natural pest shields." }],
    quote: "“In an organic garden, every plant has a friend.”",
    maintain: { heading: "Quick Tips", items: ["Pair fragrant herbs with vegetables."] }
  },
  "embracing-a-zero-waste-sustainable-lifestyle-with-organic-living": {
    titleLine1: "Zero-Waste Guide to",
    titleLine2: "Organic Living",
    date: "08 Aug 2026",
    author: "By Eco Living Specialists",
    readTime: "5 Min Read",
    intro: "Sustainable living extends beyond what we put on our plates.",
    image: "/images/blog/blog-6.jpg",
    imageAlt: "Aesthetic sustainable kitchen with organic grains in glass jars and woven jute bags",
    sections: [{ heading: "Plastic-Free Pantry", text: "Glass jars and reusable cotton bags preserve freshness." }],
    quote: "“Every small sustainable habit creates lasting change.”",
    maintain: { heading: "Practical Steps", items: ["Use reusable bags and compost scraps."] }
  },
  // Legacy aliases for backward compatibility
  "10-easy-tips-for-growing-organic-vegetables-at-home": {
    titleLine1: "10 Easy Tips for Growing",
    titleLine2: "Organic Vegetables at Home",
    date: "28 Aug 2026",
    author: "By Agronomist Team",
    readTime: "5 Min Read",
    intro: "Growing your own vegetables organically brings fresh, chemical-free nutrition to your table while fostering a deeper connection with nature.",
    image: "/images/blog/blog-5.jpg",
    imageAlt: "Fresh organic vegetables in home garden",
    sections: [
      { heading: "Choosing the Right Soil and Sunlight", text: "Start with nutrient-rich compost-amended soil. Most vegetables thrive with at least 6 to 8 hours of direct daily sunlight." }
    ],
    quote: "“Growing your own food is like printing your own organic wellness.”",
    maintain: {
      heading: "Key Steps for Home Gardening Success",
      items: ["Use homemade compost and organic worm castings.", "Rotate crops each season to keep soil fertile."]
    }
  },
  "why-healthy-soil-leads-to-healthier-food": {
    titleLine1: "Why Living Soil",
    titleLine2: "Leads to Healthier Food",
    date: "24 Aug 2026",
    author: "By Soil Science Team",
    readTime: "6 Min Read",
    intro: "Soil is the living foundation of agriculture. Rich, living soil packed with beneficial microorganisms directly impacts the nutrient density.",
    image: "/images/blog/blog-2.jpg",
    imageAlt: "Rich nutrient soil supporting crop growth",
    sections: [
      { heading: "The Microbial Ecosystem Beneath Our Feet", text: "A single teaspoon of healthy organic soil contains billions of beneficial microbes." }
    ],
    quote: "“Healthy soil is not just a resource; it is the cornerstone of human health and environmental vitality.”",
    maintain: {
      heading: "How to Build and Protect Living Soil",
      items: ["Avoid synthetic pesticides that harm earthworms and fungi.", "Add diverse cover crops to prevent wind and water erosion."]
    }
  }
};

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
