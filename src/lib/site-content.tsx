import type { ReactNode } from "react";
import {
  Globe, MapPin, Search, Star, Target, Megaphone,
  Inbox, CalendarCheck, MessageSquare, Mail, Bot,
} from "lucide-react";

export type Service = {
  tag: "Foundation" | "Visibility" | "Trust" | "Demand" | "Conversion" | "Retention" | "Automation";
  title: string;
  desc: string;
  icon: ReactNode;
};

const iconClass = "h-5 w-5";

export const services: Service[] = [
  { tag: "Foundation",  title: "Website Development",       desc: "A fast, mobile-first website engineered to turn visitors into inquiries — not just a brochure.", icon: <Globe className={iconClass} /> },
  { tag: "Visibility",  title: "Google Business Profile",   desc: "An optimized profile that puts you in the local map pack — the first thing nearby customers see when they search.", icon: <MapPin className={iconClass} /> },
  { tag: "Visibility",  title: "SEO",                       desc: "Rank for the exact searches your customers use — “near me,” service-specific, and high-intent terms that convert.", icon: <Search className={iconClass} /> },
  { tag: "Trust",       title: "Google Reviews",            desc: "An automated system that requests, captures, and showcases reviews — building trust before a customer ever calls.", icon: <Star className={iconClass} /> },
  { tag: "Demand",      title: "Google Ads",                desc: "Capture customers at the exact moment they're searching for what you offer, with targeting built around your service area.", icon: <Target className={iconClass} /> },
  { tag: "Demand",      title: "Facebook & Instagram Ads",  desc: "Stay top of mind with people who've shown interest, and reach new customers who look like your best ones.", icon: <Megaphone className={iconClass} /> },
  { tag: "Conversion",  title: "CRM Setup",                 desc: "Every lead lands in one place, automatically organized and tracked — so no inquiry ever slips through the cracks.", icon: <Inbox className={iconClass} /> },
  { tag: "Conversion",  title: "Appointment Booking",       desc: "A self-serve booking flow that lets customers grab a time slot in seconds — no back-and-forth phone tag.", icon: <CalendarCheck className={iconClass} /> },
  { tag: "Conversion",  title: "SMS Marketing",             desc: "Instant text follow-up the moment someone reaches out — the single biggest driver of higher show-up rates.", icon: <MessageSquare className={iconClass} /> },
  { tag: "Retention",   title: "Email Marketing",           desc: "Automated nurture sequences that bring past leads and customers back when they're ready to buy again.", icon: <Mail className={iconClass} /> },
  { tag: "Automation",  title: "AI Chatbot Automation",     desc: "A 24/7 assistant that answers questions, qualifies leads, and books appointments while you're working.", icon: <Bot className={iconClass} /> },
];

export const process = [
  { n: "01", title: "Build the Foundation", desc: "We launch a fast, conversion-ready website and a fully optimized Google Business Profile — the base every other channel relies on.", tags: ["Website", "GBP Optimization"] },
  { n: "02", title: "Get Found",            desc: "SEO and an automated review system push you up local search results and build trust before the first call comes in.", tags: ["SEO", "Google Reviews"] },
  { n: "03", title: "Get Chosen",           desc: "Targeted Google and Facebook campaigns put you in front of people actively looking for what you offer — and keep you there.", tags: ["Google Ads", "Facebook Ads"] },
  { n: "04", title: "Capture Every Lead",   desc: "A connected CRM, booking system, and AI chatbot make sure no inquiry goes unanswered, day or night.", tags: ["CRM", "Booking", "AI Chatbot"] },
  { n: "05", title: "Keep Them Coming Back",desc: "SMS and email automation re-engage past customers and leads, turning one-time jobs into repeat revenue.", tags: ["SMS Marketing", "Email Marketing"] },
];

export const tiers = [
  {
    num: "Tier 01",
    name: "Starter Website",
    tagline: "Best for businesses that just need to get online quickly.",
    price: "$450–$500",
    cadence: "One-time",
    features: ["1-page or basic multi-page website","Mobile-friendly design","Contact form","Call button + map embed","Simple branding","Fast delivery"],
    popular: false,
  },
  {
    num: "Tier 02",
    name: "Online Presence Setup",
    tagline: "Best for businesses that want to look professional and get discovered.",
    price: "$1,000–$2,500",
    cadence: "One-time",
    features: ["Full custom website (5–7 pages)","Google Business Profile optimization","Lead forms","Basic SEO setup","Mobile optimization","Branding improvements"],
    popular: false,
  },
  {
    num: "Tier 03",
    name: "Lead Generation System",
    tagline: "Best for businesses wanting consistent, predictable leads.",
    price: "$3,000–$6,000",
    cadence: "+ $300–$800/mo",
    cadenceAccent: true,
    inherits: "Everything in Tier 2, plus:",
    features: ["CRM setup","Appointment booking system","Email marketing setup","SMS automation","Review generation system","Advanced local SEO"],
    popular: true,
  },
  {
    num: "Tier 04",
    name: "Done-For-You Growth Machine",
    tagline: "Best for businesses ready for full growth and scaling.",
    price: "$6,000–$15,000+",
    cadence: "+ $800–$2,500/mo",
    cadenceAccent: true,
    inherits: "Everything in Tier 3, plus:",
    features: ["Facebook Ads management","Google Ads management","Landing pages","AI chatbot for leads","Full analytics tracking","Monthly optimization"],
    popular: false,
  },
];

export const industries = [
  "Roofing","HVAC","Dental","Auto Repair","Contractors","Salons",
  "Landscaping","Restaurants","Trucking","Elder Care","Bakeries","Med Spas","Law Firms","Real Estate",
];

export const cases = [
  { industry: "Roofing",        title: "Regional roofing contractor", desc: "New website, local SEO, and Google Ads replaced inconsistent referral-only lead flow with predictable weekly booked estimates.", stats: [["+212%", "Site leads"], ["3.1x", "Booked estimates"], ["41", "Days to launch"]] as [string, string][], accent: "var(--accent-1)" },
  { industry: "Dental Practice",title: "Multi-location dental group", desc: "AI chatbot and SMS follow-up cut missed new-patient inquiries dramatically and lifted online booking rates.", stats: [["-68%", "Missed inquiries"], ["+4.8", "Review rating"], ["24/7", "Lead response"]] as [string, string][], accent: "var(--accent-3)" },
  { industry: "HVAC",           title: "Family-owned HVAC company",   desc: "Google Business optimization and a review engine moved them into the local map pack top three within a quarter.", stats: [["Top 3", "Map pack rank"], ["+156%", "Call volume"], ["2.4x", "Service bookings"]] as [string, string][], accent: "var(--accent-2)" },
  { industry: "Auto Repair",    title: "Independent auto repair shop",desc: "CRM and appointment booking replaced a paper schedule, cutting no-shows and freeing the front desk to focus on customers.", stats: [["-44%", "No-shows"], ["+89%", "Online bookings"], ["5.0", "Avg. rating"]] as [string, string][], accent: "var(--accent-1)" },
];

export const testimonials = [
  { quote: "Northbound treated our website like a tool to generate calls, not just a brochure. The booking volume change was obvious within the first month.", name: "Owner", role: "Roofing Company" },
  { quote: "We'd tried three agencies before. This was the first time everything — site, ads, reviews — actually worked together instead of feeling bolted on.", name: "Practice Manager", role: "Dental Group" },
  { quote: "The AI chatbot alone paid for itself. We stopped losing after-hours leads to competitors who picked up the phone first.", name: "Owner", role: "HVAC Company" },
];

export const faqs = [
  { q: "What makes this different from a typical marketing agency?", a: "Most agencies sell one service in isolation. We design and run the full system — website, visibility, trust, demand, and automation — so every channel reinforces the others instead of competing for budget." },
  { q: "Do I need every service, or can I start smaller?",           a: "Every engagement starts with a strategy call where we identify what's actually limiting your growth right now. Some businesses start with just the website and GBP foundation; others are ready for the full system from day one." },
  { q: "How long until I see results?",                              a: "Paid channels like Google Ads typically generate leads within the first one to two weeks. Organic channels like SEO and Google Business ranking build over 60–120 days but compound long after the work is done." },
  { q: "What industries do you work with?",                          a: "We specialize in local, service-based businesses — roofing, HVAC, dental, auto repair, contractors, salons, landscaping, restaurants, trucking, elder care, bakeries, and similar industries where customers search locally before buying." },
  { q: "Am I locked into a long-term contract?",                     a: "No. We work month to month because we believe the results should be the reason you stay, not a contract." },
  { q: "How do I know what's actually working?",                     a: "You get a live dashboard tracking every lead from first click to booked appointment, plus a direct line to your growth team — no waiting on a monthly report to find out what happened." },
];

export const compare = [
  ["Strategy",       "Separate vendors for each channel",  "One connected growth system"],
  ["Reporting",      "Vanity metrics, monthly PDFs",       "Real-time leads & revenue dashboard"],
  ["Lead Response",  "Manual, hours or days later",        "Automated, under 5 minutes"],
  ["Contracts",      "Long-term lock-in",                  "Earn your business every month"],
  ["Focus",          "Activity — posts, clicks, impressions", "Outcomes — booked customers, revenue"],
  ["Communication",  "Account manager, slow turnaround",   "Direct access to your growth team"],
] as const;

export const metrics = [
  ["11", "Growth channels, one system"],
  ["<5m", "Avg. lead response time"],
  ["3.1x", "Avg. lift in booked appointments"],
  ["24/7", "Coverage across every channel"],
] as const;

export const CONTACT = {
  phone: "(832) 622-4254",
  phoneHref: "tel:+18326224254",
  email: "Nxtchritsmas@Nr-financial.com",
  emailHref: "mailto:Nxtchritsmas@Nr-financial.com",
};
