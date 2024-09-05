import { Metadata } from "next";

export const COMPANY_FULL_NAME = "Polaris Dev";
export const COMPANY_SHORT_NAME = "Polaris";
export const COMPANY_DESCRIPTION = "Make your dreams reality";
export const COMPANY_META_DESCRIPTION = "At Polaris Development, we specialize in crafting custom software solutions that empower businesses to achieve their goals. From cutting-edge web and mobile applications to seamless API integrations and cloud solutions, our team of experts delivers innovation at every step. We focus on creating user-centered designs and ensuring top-notch quality through rigorous testing. Partner with us to transform your ideas into reality and stay ahead in the digital landscape.";
export const COMPANY_FOOTER_TEXT = "© 2024 Polaris Development. All rights reserved.";

export const polarismetadata: Metadata = {
  title: "PolarisDev - Development Services",
  description: "PolarisDev offers tailored development solutions including custom software, API integrations, system administration, network management, server installation, and more. Get the professional support your business needs.",
  keywords: [
    "PolarisDev",
    "Development Services",
    "Software Development",
    "API Integration",
    "System Administration",
    "Network Management",
    "Server Installation",
    "Custom Projects"
  ],
  openGraph: {
    title: "PolarisDev - Development Services",
    description: "Explore PolarisDev's full range of development services, from custom software to system administration and beyond.",
    url: "https://polarisdev.fr",
    siteName: "PolarisDev",
    images: [
      {
        url: "https://polarisdev.fr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PolarisDev Open Graph Image"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PolarisDev - Development Services",
    description: "Discover PolarisDev's professional development services designed to meet your business needs.",
    images: ["https://polarisdev.fr/twitter-image.jpg"]
  },
  viewport: {
    width: "device-width",
    initialScale: 1
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://www.polarisdev.fr"
  }
};

export const plans = [
  {
    title: "Starter",
    monthlyPrice: 9,
    yearlyPrice: 90,
    description: "Get started with essential development tools and support.",
    features: ["Basic API Integration", "UI/UX Design Consultation", "Community Support"],
    actionLabel: "Get Started",
  },
  {
    title: "Professional",
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: "Advanced solutions for growing businesses.",
    features: ["Custom Software Development", "Full API Integration", "Priority Support"],
    actionLabel: "Get Started",
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Comprehensive solutions tailored to your enterprise needs.",
    features: ["Dedicated Development Team", "24/7 Support", "Full Stack Development", "Custom Integrations"],
    actionLabel: "Contact Us",
    exclusive: true,
  },
  {
    title: "System Administrator",
    oneTimePrice: 150,
    monthlyPrice: 15,
    description: "Installation of software and security services.",
    features: ["Software Installation", "Security Setup", "Regular Updates"],
    actionLabel: "Get Started",
  },
  {
    title: "Network Management",
    oneTimePrice: 200,
    monthlyPrice: 20,
    description: "Management of your networks and devices.",
    features: ["Network Setup", "Device Management", "24/7 Monitoring"],
    actionLabel: "Get Started",
  },
  {
    title: "Server Installation",
    oneTimePrice: 300,
    monthlyPrice: 30,
    description: "Installation and configuration of servers.",
    features: ["Server Setup", "Configuration", "Ongoing Support"],
    actionLabel: "Get Started",
  },
  {
    title: "Simple Project",
    oneTimePrice: 400,
    monthlyPrice: 40,
    description: "Single project with a subscription or one-time payment.",
    features: ["Project Planning", "Development", "Post-Launch Support"],
    actionLabel: "Start Your Project",
  },
  {
    title: "One-Time Project",
    oneTimePrice: 599,
    description: "Single, fully-customized project with dedicated support.",
    features: ["End-to-End Project Management", "Custom Development", "Post-Launch Support"],
    actionLabel: "Start Your Project",
  },
]