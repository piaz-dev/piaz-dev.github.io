"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"
import { translations } from "@/lib/translations"
import { ExternalLink } from "lucide-react"

export function Infrastructure() {
  const { language } = useLanguage()
  const t = translations[language]

  const services = ["Whoogle", "Nitter", "Libreddit", "Mastodon", "Teddit"]

  return (
    <section id="infrastructure" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="border border-border rounded-3xl p-8 md:p-12 bg-card shadow-sm relative overflow-hidden">
          <div className="absolute top-0 start-0 w-full h-2 bg-gradient-to-r from-primary to-purple-500" />

          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2 text-balance">{t.infra_title}</h2>
              <p className="text-muted-foreground font-mono text-sm">tokhmi.xyz</p>
            </div>
            <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full border border-orange-200">
              {t.status_temp}
            </span>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">{t.infra_desc}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {services.map((service) => (
              <span key={service} className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-sm">
                {service}
              </span>
            ))}
          </div>

          <Link
            href="https://web.archive.org/web/20250227192812/https://start.tokhmi.xyz/"
            target="_blank"
            className="inline-flex items-center text-primary font-medium hover:bg-accent px-4 py-2 rounded-lg transition-colors gap-2"
          >
            <span>{t.btn_archive}</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
