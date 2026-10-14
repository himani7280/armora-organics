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

const base = { email: "info@xyz.com", phone: "+1 00000 00000" };

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
  ].map((m) => ({ ...base, ...m })) as TeamMember[],
};

export const getMember = (slug: string) => teamContent.members.find((m) => m.slug === slug);
