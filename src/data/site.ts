import usamaPhoto from "@/assets/usama-aslam.png.asset.json";
import wardaPhoto from "@/assets/warda-fatima.jpeg.asset.json";
import p12Assets from "@/assets/p12-assets.png.asset.json";
import p12Arcana from "@/assets/p12-arcana.png.asset.json";
import p12Community from "@/assets/p12-community.png.asset.json";
import p12Loader from "@/assets/p12-loader.png.asset.json";
import marsProjects from "@/assets/mars-projects.jpeg.asset.json";
import marsCalendar from "@/assets/mars-calendar.jpeg.asset.json";
import marsLogin from "@/assets/mars-login.jpeg.asset.json";

export const SITE = {
  name: "U Devs",
  tagline: "Software & Digital Solutions",
  email: "udevsofficial25@gmail.com",
  phone: "+92 324 9351851",
  whatsappNumber: "923249351851",
  whatsapp:
    "https://wa.me/923249351851?text=" +
    encodeURIComponent(
      "Hello U Devs! I found you online and I'd like to discuss a project. Could you share more details?",
    ),
  address: "U Devs HQ, Lahore, Punjab, Pakistan",
  website: "https://udevs.company",
  hub: "https://udevs-hub.com",
  register: "https://forms.gle/jsXJjVKRu747fGdW7",
};

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/udevs-software-house/" },
  { label: "Instagram", href: "https://www.instagram.com/udevs.official/" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61577780125451" },
  { label: "YouTube", href: "https://www.youtube.com/@UDEVS-25" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "TikTok", href: "https://www.tiktok.com/" },
  { label: "X", href: "https://x.com/" },
  { label: "Behance", href: "https://www.behance.net/" },
  { label: "Dribbble", href: "https://dribbble.com/" },
];

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Training Hub", to: "/training" },
  { label: "Quran Hub", to: "/quran" },
  { label: "Careers", to: "/careers" },
  { label: "Blogs", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export const STATS = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "+", label: "Students Trained" },
  { value: 10, suffix: "+", label: "Countries Served" },
  { value: 24, suffix: "/7", label: "Support" },
];

export const DIVISIONS = [
  {
    name: "U Devs",
    kicker: "Software Development",
    to: "/services",
    blurb:
      "Enterprise software, ERP, CRM, AI automation, cloud platforms and digital marketing for ambitious businesses.",
    points: ["Enterprise Solutions", "ERP & CRM", "AI & Automation", "Cloud & DevOps", "Web & Mobile Apps", "Digital Marketing"],
    tone: "primary" as const,
  },
  {
    name: "U Devs Hub",
    kicker: "Training Platform",
    to: "/training",
    blurb:
      "Internships, mentorship and project-based courses that turn students into hire-ready engineers.",
    points: ["Internships & Mentorship", "Live Classes", "Project Based Learning", "Certification", "GitHub Portfolio", "Interview Preparation"],
    tone: "accent" as const,
  },
  {
    name: "U Devs Quran Hub",
    kicker: "Islamic Learning",
    to: "/quran",
    blurb:
      "A professional online Quran academy with certified male and female teachers for students worldwide.",
    points: ["Nazra & Qaida", "Tajweed & Hifz", "Translation & Tafseer", "Islamic Studies", "Kids Classes", "Weekend Classes"],
    tone: "emerald" as const,
  },
];

export const SERVICE_GROUPS = [
  {
    title: "Software & Enterprise",
    items: ["Custom Software Development", "Enterprise Solutions", "ERP Development", "CRM Development", "MVP Development", "Startup Solutions", "Software Consultancy"],
  },
  {
    title: "AI & Automation",
    items: ["AI Automation", "Machine Learning", "Generative AI", "Chatbots", "Business Automation", "Data Engineering"],
  },
  {
    title: "Web Development",
    items: ["Website Development", "React Development", "Next.js Development", "Node.js Development", "Laravel Development", "WordPress Development", "Shopify Development", "E-Commerce"],
  },
  {
    title: "Mobile & Design",
    items: ["Flutter Apps", "React Native Apps", "iOS & Android", "UI UX Design", "Design Systems", "Prototyping"],
  },
  {
    title: "Marketing & Growth",
    items: ["SEO", "Digital Marketing", "Google Ads", "Meta Ads", "LinkedIn Marketing", "Content Strategy"],
  },
  {
    title: "Cloud & Security",
    items: ["Cloud Solutions", "API Development", "DevOps", "Hosting", "Maintenance", "Cyber Security"],
  },
  {
    title: "Business Systems",
    items: ["School Management", "Hospital Management", "HRM", "Inventory", "POS", "Accounting Software"],
  },
  {
    title: "Teams",
    items: ["Staff Augmentation", "Dedicated Developers", "Agile Squads", "CTO as a Service"],
  },
];

export const INDUSTRIES = [
  "Healthcare", "Education", "Real Estate", "Retail", "Finance", "Manufacturing",
  "Construction", "E-commerce", "Government", "Startups", "NGOs", "Restaurants",
  "Travel", "Automobile",
];

export const TECHNOLOGIES = [
  "React", "Next.js", "Angular", "Vue", "Node", "Express", "Nest", "Laravel",
  "PHP", "Python", "Java", ".NET", "Flutter", "React Native", "Swift", "Kotlin",
  "MongoDB", "PostgreSQL", "MySQL", "Firebase", "AWS", "Azure", "Docker",
  "Kubernetes", "GitHub", "OpenAI", "Claude", "Gemini",
];

export const PROJECTS: {
  title: string;
  category: string;
  client: string;
  tech: string[];
  summary: string;
  image?: string;
  gallery?: { url: string; caption: string }[];
  link?: string;
}[] = [
  {
    title: "P12 Gaming Web3 Platform",
    category: "Web3",
    client: "Project Twelve (P12)",
    tech: ["React", "Next.js", "Web3", "Ethereum", "Node"],
    summary:
      "A Web3 gaming ecosystem with wallet connect, on-chain SBT identity, creator editor downloads and an Arcana rewards arena.",
    image: p12Assets.url,
    link: "https://p12.network",
    gallery: [
      { url: p12Assets.url, caption: "P12 Assets — on-chain identity and SBT showcase" },
      { url: p12Arcana.url, caption: "P12 Arcana — creator arena with prize pool and rounds" },
      { url: p12Community.url, caption: "Community, links and latest announcements hub" },
      { url: p12Loader.url, caption: "Animated WebGL brand loader and entry screen" },
    ],
  },
  { title: "Enterprise ERP Suite", category: "ERP", client: "Manufacturing Group", tech: ["React", "Node", "PostgreSQL"], summary: "Unified production, inventory and finance across 6 plants." },
  {
    title: "Mars Research Check-In Platform",
    category: "Web",
    client: "Mars Research",
    tech: ["React", "Ruby on Rails", "PostgreSQL"],
    summary:
      "A research operations platform for managing studies, participant scheduling and in-person or online appointment check-ins.",
    image: marsProjects.url,
    link: "https://mars1.researchcheckin.com/",
    gallery: [
      { url: marsProjects.url, caption: "Projects dashboard with search, filters and live study status" },
      { url: marsCalendar.url, caption: "Project calendar with day, week and month appointment views" },
      { url: marsLogin.url, caption: "Branded secure login for research staff and admins" },
    ],
  },
  { title: "Healthcare CRM", category: "CRM", client: "Private Hospital Network", tech: ["Next.js", "Nest", "MySQL"], summary: "Patient lifecycle, appointments and automated follow-ups." },
  { title: "AI Support Copilot", category: "AI", client: "SaaS Startup", tech: ["OpenAI", "Python", "AWS"], summary: "Cut first-response time by 71% with a retrieval chatbot." },
  { title: "Fintech Mobile Wallet", category: "Mobile", client: "Fintech", tech: ["Flutter", "Firebase"], summary: "KYC onboarding, payments and rewards for 40k users." },
  { title: "Real Estate Marketplace", category: "Web", client: "Property Portal", tech: ["React", "Node", "MongoDB"], summary: "Map search, agent CRM and lead scoring." },
  { title: "School Management System", category: "ERP", client: "Education Group", tech: ["Laravel", "MySQL"], summary: "Admissions, fees, attendance and parent portal." },
  { title: "E-Commerce Rebuild", category: "WordPress", client: "Retail Brand", tech: ["WordPress", "WooCommerce"], summary: "3.2x faster storefront and +48% conversions." },
  { title: "Logistics Tracking Platform", category: "Web", client: "Freight Company", tech: ["React", "Docker", "Azure"], summary: "Live fleet tracking with predictive ETAs." },
  { title: "Quran Academy LMS", category: "Web", client: "U Devs Quran Hub", tech: ["Next.js", "Firebase"], summary: "Class scheduling, progress tracking and teacher payouts." },
];

export const PROJECT_FILTERS = ["All", "Web3", "Web", "Mobile", "ERP", "CRM", "AI", "WordPress"];

export const TEAM: {
  name: string;
  role: string;
  initials: string;
  photo?: string;
  linkedin?: string;
  website?: string;
}[] = [
  {
    name: "Usama Aslam",
    role: "Founder & CEO",
    initials: "UA",
    photo: usamaPhoto.url,
    linkedin: "https://www.linkedin.com/in/usama-aslam-ceo-udevs/",
    website: "https://www.usama-aslam.com",
  },
  {
    name: "Warda Fatima",
    role: "Co-Founder",
    initials: "WF",
    photo: wardaPhoto.url,
    linkedin: "https://www.linkedin.com/in/warda-fatima-co-founder-udevs/",
    website: "https://www.wardafatima.com",
  },
  { name: "Minahil Hasan", role: "Senior Project Manager", initials: "MH" },
  { name: "M Ahmad Aslam", role: "Marketing Manager", initials: "MA" },
];

export const WHY_US = [
  { title: "Industry Experience", text: "Delivery across 14 industries and 10+ countries." },
  { title: "Professional Team", text: "Senior engineers, designers and product managers." },
  { title: "Fast Delivery", text: "Two-week sprints with demo-driven progress." },
  { title: "Premium Quality", text: "Code reviews, testing and performance budgets." },
  { title: "Affordable Pricing", text: "Enterprise quality at offshore economics." },
  { title: "24/7 Support", text: "Follow-the-sun support and monitoring." },
  { title: "Global Clients", text: "US, UK, EU, GCC and APAC partnerships." },
  { title: "Agile Process", text: "Transparent backlogs and weekly releases." },
  { title: "Clear Communication", text: "Shared boards, reports and one point of contact." },
];

export const PROCESS = [
  { step: "01", title: "Discovery", text: "Workshops to map goals, users and constraints." },
  { step: "02", title: "Planning", text: "Scope, architecture, roadmap and estimates." },
  { step: "03", title: "Design", text: "Wireframes, UI systems and clickable prototypes." },
  { step: "04", title: "Development", text: "Agile sprints with continuous integration." },
  { step: "05", title: "Testing", text: "Automated, manual, security and load testing." },
  { step: "06", title: "Deployment", text: "Zero-downtime releases to cloud infrastructure." },
  { step: "07", title: "Maintenance", text: "Monitoring, iteration and 24/7 support." },
];

export const TIMELINE = [
  { year: "2023", title: "The Idea", text: "U Devs started as a small freelance studio built on trust and craft." },
  { year: "2024", title: "First Enterprise Clients", text: "Shipped ERP and CRM platforms for regional businesses." },
  { year: "2025", title: "U Devs Hub Launched", text: "Training academy with internships and mentorship programs." },
  { year: "2026", title: "Quran Hub & Global Reach", text: "Islamic learning division and clients across 10+ countries." },
];

export const TESTIMONIALS = [
  { name: "Ahmed Raza", role: "COO, Manufacturing Group", rating: 5, text: "U Devs replaced three disconnected systems with one ERP. Delivery was on time and the team never disappeared after launch." },
  { name: "Sarah Bennett", role: "Founder, SaaS Startup", rating: 5, text: "Their AI team shipped our support copilot in six weeks. Response times dropped instantly and the code quality is excellent." },
  { name: "Bilal Khan", role: "Director, Education Group", rating: 5, text: "The school management platform handles 4,000 students daily. Parents finally have visibility and staff save hours." },
  { name: "Fatima Noor", role: "Graduate, U Devs Hub", rating: 5, text: "The internship was real work, real reviews and a real portfolio. I got a full-time offer two months after finishing." },
];

export const COURSES = [
  { title: "MERN Stack Engineering", weeks: "16 weeks", level: "Beginner to Job Ready" },
  { title: "Frontend with React & TypeScript", weeks: "12 weeks", level: "Beginner" },
  { title: "Backend with Node & Databases", weeks: "12 weeks", level: "Intermediate" },
  { title: "Flutter Mobile Development", weeks: "10 weeks", level: "Beginner" },
  { title: "AI & Generative AI Engineering", weeks: "10 weeks", level: "Intermediate" },
  { title: "UI UX Design Mastery", weeks: "8 weeks", level: "Beginner" },
  { title: "Digital Marketing & SEO", weeks: "8 weeks", level: "Beginner" },
  { title: "Freelancing & Career Launchpad", weeks: "6 weeks", level: "All levels" },
];

export const QURAN_COURSES = [
  { title: "Noorani Qaida", text: "Letter recognition and correct pronunciation for absolute beginners." },
  { title: "Nazra Quran", text: "Fluent reading of the Quran with proper rules and rhythm." },
  { title: "Tajweed", text: "Master the rules of recitation with certified Qaris." },
  { title: "Hifz Program", text: "Structured memorisation with daily revision plans." },
  { title: "Translation", text: "Word-by-word understanding of the Quranic text." },
  { title: "Tafseer", text: "Context, meaning and reflection with qualified scholars." },
  { title: "Islamic Studies", text: "Aqeedah, Seerah, Fiqh and daily duas." },
  { title: "Kids Classes", text: "Playful, patient teaching designed for young learners." },
];

export const JOBS = [
  { title: "Senior React Engineer", type: "Full Time", location: "Lahore / Remote" },
  { title: "Node.js Backend Developer", type: "Full Time", location: "Lahore" },
  { title: "Flutter Developer", type: "Full Time", location: "Remote" },
  { title: "UI UX Designer", type: "Part Time", location: "Remote" },
  { title: "AI Engineer", type: "Full Time", location: "Lahore / Remote" },
  { title: "Frontend Intern", type: "Internship", location: "Onsite / Remote" },
  { title: "Digital Marketing Executive", type: "Full Time", location: "Lahore" },
  { title: "Quran Teacher (Male / Female)", type: "Part Time", location: "Remote" },
];

export const POSTS = [
  { title: "How Generative AI Is Rewriting Enterprise Workflows", category: "AI", date: "12 Jul 2026", read: "6 min", excerpt: "Where AI actually pays off inside operations teams, and where it quietly burns budget." },
  { title: "ERP vs Custom Software: Choosing Without Regret", category: "Business", date: "28 Jun 2026", read: "8 min", excerpt: "A practical framework for deciding what to buy, what to build and what to postpone." },
  { title: "The 2026 Frontend Stack We Ship With", category: "Technology", date: "09 Jun 2026", read: "5 min", excerpt: "Our defaults for performance, accessibility and developer velocity." },
  { title: "From Intern to Engineer in 6 Months", category: "Career", date: "21 May 2026", read: "7 min", excerpt: "The exact roadmap our U Devs Hub graduates follow to their first offer." },
  { title: "Project Based Learning Beats Tutorials", category: "Training", date: "03 May 2026", read: "4 min", excerpt: "Why we replaced lectures with shipped products and code reviews." },
  { title: "Building a Consistent Quran Routine Online", category: "Quran Learning", date: "18 Apr 2026", read: "5 min", excerpt: "How structured classes and small daily targets create lasting habits." },
];