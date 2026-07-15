import type { ReactNode } from "react";
import {
  FileText, UserCheck, AlertTriangle, DollarSign, RefreshCw,
  ShieldCheck, HeartHandshake, PhoneCall, Clock, Users,
} from "lucide-react";

export type HelpTopic = {
  tag: string;
  title: string;
  desc: string;
  icon: ReactNode;
};

const iconClass = "h-5 w-5";

export const helpTopics: HelpTopic[] = [
  { tag: "Claims",       title: "Filing a Death Benefit Claim",       desc: "Step-by-step guidance on filing a life insurance claim on a Mutual of Omaha policy — what documents you need, timelines, and how to avoid common delays.", icon: <FileText className={iconClass} /> },
  { tag: "Beneficiary",  title: "Beneficiary Questions & Updates",    desc: "Confused about who's listed, how to update a beneficiary, or how proceeds get paid out? We'll walk you through it in plain English.", icon: <UserCheck className={iconClass} /> },
  { tag: "Denied Claim", title: "Denied or Delayed Claims",           desc: "If your claim was denied, delayed, or underpaid, we'll help you understand your options and next steps.", icon: <AlertTriangle className={iconClass} /> },
  { tag: "Premiums",     title: "Premium & Billing Confusion",        desc: "Rate increases, missed payments, auto-draft issues, or a bill that doesn't make sense — get real answers on the phone.", icon: <DollarSign className={iconClass} /> },
  { tag: "Lapsed",       title: "Lapsed or Cancelled Policies",       desc: "Think your policy lapsed? There may be reinstatement, grace-period, or non-forfeiture options you didn't know you had.", icon: <RefreshCw className={iconClass} /> },
  { tag: "Coverage",     title: "Policy Review & Coverage Check",     desc: "Not sure what your policy actually covers, what it's worth today, or if it still fits your family? We'll review it with you.", icon: <ShieldCheck className={iconClass} /> },
  { tag: "Cash Value",   title: "Cash Value, Loans & Surrender",      desc: "Whole life and universal life questions — cash value, policy loans, surrender charges, and 1035 exchanges explained clearly.", icon: <HeartHandshake className={iconClass} /> },
  { tag: "Getting Help", title: "Can't Reach Anyone at the Company?", desc: "Long hold times, transferred in circles, or an agent that vanished? We're a live line — no phone tree.", icon: <PhoneCall className={iconClass} /> },
];

export const whyCallUs = [
  { n: "01", title: "A real person, on the first ring",  desc: "No phone tree, no 45-minute hold music. You get a licensed professional who actually listens." },
  { n: "02", title: "Free, no-pressure consultation",    desc: "The call costs you nothing. We'll answer your question and only recommend action if it genuinely helps you." },
  { n: "03", title: "Independent & policyholder-first",  desc: "We're not employed by Mutual of Omaha. That means our only job on the call is to look out for you and your family." },
  { n: "04", title: "Plain-English answers",             desc: "Policy language is confusing on purpose. We translate riders, exclusions, and fine print into words that make sense." },
];

export const stats = [
  ["24/7", "Live call coverage"],
  ["<2 min", "Avg. answer time"],
  ["$0", "To speak with us"],
  ["Licensed", "In multiple states"],
] as const;

export const commonIssues = [
  "Death claim assistance",
  "Beneficiary changes",
  "Denied claim review",
  "Premium increases",
  "Lapsed policy help",
  "Policy lookup",
  "Cash value questions",
  "Surrender & loans",
  "Reinstatement options",
  "Policy conversion",
  "1035 exchanges",
  "Rate quote comparisons",
];

export const testimonials = [
  { quote: "My mom's policy claim was stuck for weeks. One phone call here and I finally understood exactly what paperwork was missing. Check arrived 11 days later.", name: "Denise R.", role: "Beneficiary, Texas" },
  { quote: "I thought my policy had lapsed and I'd lost everything I paid in for 12 years. They walked me through a reinstatement option I didn't know existed.", name: "Marcus T.", role: "Policyholder, Georgia" },
  { quote: "Called three times to the 800 number and got nowhere. These folks picked up on the second ring and answered every question in ten minutes.", name: "Linda K.", role: "Beneficiary, Florida" },
];

export const faqs = [
  { q: "Are you Mutual of Omaha?",
    a: "No — and we want to be very clear about that. We are an independent licensed insurance help line. We are not affiliated with, endorsed by, or employed by Mutual of Omaha Insurance Company or any of its subsidiaries. We help policyholders and beneficiaries understand and navigate life insurance policies, including Mutual of Omaha policies." },
  { q: "How much does it cost to call?",
    a: "Nothing. The consultation call is completely free with no obligation. If you decide you want us to help with something ongoing — like a policy review, replacement quote, or a formal claim advocacy — we'll walk through any costs before you agree to anything." },
  { q: "What kinds of policies can you help with?",
    a: "All Mutual of Omaha life insurance products — term, whole life, universal life, guaranteed issue / final expense (Living Promise), and children's whole life. We also help with policies from most other major carriers." },
  { q: "My claim was denied. Can you help?",
    a: "Yes. Denials happen for a range of reasons — contestable-period questions, misstatements on the application, missing paperwork, or beneficiary disputes. We'll review the denial letter with you and help you understand your appeal options." },
  { q: "I'm the beneficiary and I don't have a copy of the policy.",
    a: "That's very common. We can walk you through how to locate the policy, verify coverage, and start the claim process even without the physical document." },
  { q: "Do you sell insurance?",
    a: "We are licensed insurance professionals, which means we can offer replacement or new coverage if it genuinely makes sense for your situation. But there is zero pressure on the help call — most people who call us never buy anything, and that's fine." },
  { q: "What are your hours?",
    a: "Our live line is answered 24/7. If you get voicemail during a rare peak, leave your name and number and we call back within the hour." },
];

export const CONTACT = {
  phone: "(832) 622-4254",
  phoneHref: "tel:+18326224254",
  email: "nxtchristmas@nr-financial.com",
  emailHref: "mailto:nxtchristmas@nr-financial.com",
};

export const BRAND = {
  name: "Policy Help Line",
  tagline: "Independent help for Mutual of Omaha life insurance policyholders and beneficiaries.",
  disclaimer:
    "Policy Help Line is an independent insurance resource. We are not affiliated with, endorsed by, or a subsidiary of Mutual of Omaha Insurance Company. All company and product names are trademarks of their respective owners and are used for identification purposes only.",
};

// Legacy exports kept so other route files that still import from here don't break the build.
export const services: HelpTopic[] = helpTopics;
export const process = whyCallUs.map((w) => ({ ...w, tags: [] as string[] }));
export const tiers: never[] = [];
export const industries = commonIssues;
export const cases: never[] = [];
export const compare: readonly (readonly [string, string, string])[] = [];
export const metrics = stats;
