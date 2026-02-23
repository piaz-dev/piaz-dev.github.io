"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"
import { translations } from "@/lib/translations"

export function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="pt-40 pb-20 bg-gradient-to-b from-accent to-background">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
          {t.hero_title}
          <br />
          <span className="text-primary">{t.hero_subtitle}</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
          {t.hero_desc}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            {t.btn_contact}
          </Link>
          <Link
            href="#projects"
            className="bg-background text-foreground border border-border px-8 py-3 rounded-lg font-medium hover:border-primary hover:text-primary transition-all"
          >
            {t.btn_projects}
          </Link>
        </div>
      </div>
    </section>
  )
}
