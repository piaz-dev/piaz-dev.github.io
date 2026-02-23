import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Infrastructure } from "@/components/infrastructure"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.url,
    languages: {
      en: `${siteConfig.url}`,
      fa: `${siteConfig.url}`,
    },
  },
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "piaz.dev",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description.en,
    email: siteConfig.social.email,
    sameAs: [siteConfig.social.github, `https://t.me/${siteConfig.social.telegram.replace("@", "")}`],
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.contact.email,
      contactType: "Customer Service",
      availableLanguage: ["English", "Persian"],
    },
    offers: {
      "@type": "Offer",
      itemOffered: [
        {
          "@type": "Service",
          name: "Multi-Platform Development",
          description: siteConfig.description.en,
        },
        {
          "@type": "Service",
          name: "Web Development",
          description: "Fully responsive website design and development",
        },
        {
          "@type": "Service",
          name: "Digital Marketing",
          description: "SEO, content marketing, and analytics services",
        },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Infrastructure />
      </main>
      <Footer />
    </>
  )
}
