"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"
import { translations } from "@/lib/translations"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function Projects() {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === "fa"

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2 text-balance">{t.projects_title}</h2>
            <p className="text-muted-foreground">{t.projects_sub}</p>
          </div>
          <Link
            href="https://github.com/piaz-dev"
            target="_blank"
            className="text-primary font-medium hover:underline mt-4 md:mt-0 flex items-center gap-1"
          >
            <span>{t.view_github}</span>
            {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* LibRedirect */}
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-all">
            <h3 className="text-2xl font-bold mb-2 text-foreground">LibRedirect</h3>
            <span className="inline-block bg-accent text-primary text-xs px-2 py-1 rounded mb-4">
              Browser Extension
            </span>
            <p className="text-muted-foreground mb-6 leading-relaxed">{t.proj1_desc}</p>
            <Link
              href="https://github.com/libredirect/browser_extension"
              target="_blank"
              className="text-foreground font-medium border-b-2 border-primary/20 hover:border-primary transition-colors pb-0.5"
            >
              {t.btn_view}
            </Link>
          </div>

          {/* LibreTube */}
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-all">
            <h3 className="text-2xl font-bold mb-2 text-foreground">LibreTube</h3>
            <span className="inline-block bg-green-50 text-green-600 text-xs px-2 py-1 rounded mb-4">Android App</span>
            <p className="text-muted-foreground mb-6 leading-relaxed">{t.proj2_desc}</p>
            <Link
              href="https://github.com/libre-tube/LibreTube"
              target="_blank"
              className="text-foreground font-medium border-b-2 border-green-500/20 hover:border-green-600 transition-colors pb-0.5"
            >
              {t.btn_view}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
