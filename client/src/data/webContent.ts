import {featureTypes, footerTypes, navTypes, priceTypes, sidebarTypes } from '../types/appTypes'
import { Bell, Brain, ClipboardCheck, Clock, Fingerprint, Folder, Globe, Languages, Tablet, Users, LayoutDashboard, Settings, CheckSquare } from "lucide-react";
export const navItems:navTypes[] = [
    { label: "Features", href: "" },
    // { label: "Workflow", href: "" },
    { label: "Pricing", href: "" },
    { label: "Resources", href: "" },
  ];
//Features data
export const features:featureTypes[] = [
  {
    icon: Bell,
    text: "Unified Communication Platform",
    description:
      "Streamline real-time communication between healthcare providers and patients..",
  },
  {
    icon: Fingerprint,
    text: "Multi-Platform Compatibility",
    description:
      "Collaborations applications that run seamlessly across multiple platforms, including mobile, desktop.",
  },
  {
    icon: Folder,
    text: "Centralized Patient Data Management",
    description:
      "Access, store, and share medical records seamlessly",
  },
  {
    icon: Users,
    text: "Team Collaboration Tools",
    description: "Empower healthcare teams to work smarter together."
  },
  {
    icon: ClipboardCheck,
    text: "Team Collaboration Tools",
    description: "Empower healthcare teams to work smarter together."
  },
  {
    icon: Brain,
    text: "AI-Powered Insights",
    description: "Leverage data-driven decisions to improve outcomes."
  },
  {
    icon: Clock,
    text: "AI-Powered Insights",
    description: "Leverage data-driven decisions to improve outcomes."
  },
  {
    icon: Tablet,
    text: "Accessible Anytime, Anywhere",
    description: "Stay connected with a user-friendly platform available across devices."
  },
  {
    icon: Globe,
    "text": "Accessible Anytime, Anywhere",
    "description": "Stay connected with a user-friendly platform available across devices."
  },
  {
    icon: Languages,
    text: "Accessible Anytime, Anywhere",
    description: "Stay connected with a user-friendly platform available across devices."
  }
];
//Pricing data
export const pricingOptions:priceTypes[] = [
  {
    title: "Free",
    price: "$0",
    features: [
      "5 GB Storage",
      "Private board sharing",
      "Web Analytics",
      "Private Mode"
    ]
  },
  {
    title: "Basic",
    price: "$9.99",
    features: [
      "20 GB Storage",
      "Web Analytics",
      "Private Mode",
      "Email Support"
    ]
  },
  {
    title: "Pro",
    price: "$99.99",
    features: [
      "200 GB Storage",
      "24/7 Support",
      "Custom Integrations",
      "Advanced Reporting",

    ]
  }
]
//Footer data
export const resourcesLinks:footerTypes[] = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks:footerTypes[] = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks:footerTypes[] = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

//Sidebar Data
export const sidebar:sidebarTypes[]= [
  // {
  //   icon:Home,
  //   label:"Home"
  // },
  {
    icon:LayoutDashboard,
    label:"Dashboard"
  },
  {
    icon:Users,
    label:"Teams"
  },
  {
    icon:CheckSquare,
    label:"Tasks"
  },
  {
    icon:Bell,
    label:"Notifications"
  },
  {
    icon:Settings,
    label:"Settings"
  },
]