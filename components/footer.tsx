"use client"

import Link from "next/link"
import { Mail, Github, Send } from "lucide-react"
import { useLanguage } from "./language-provider"
import { translations } from "@/lib/translations"
import { siteConfig } from "@/config/site"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-start">
          <span className="text-xl font-bold text-foreground tracking-tight block mb-2">
            piaz<span className="text-primary">.dev</span>
          </span>
          <p className="text-muted-foreground text-sm">{t.footer_desc}</p>
        </div>

        <div className="flex gap-6 items-center">
          <Link
            href={`mailto:${siteConfig.social.email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
          <Link
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href={`https://t.me/${siteConfig.social.telegram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Telegram"
          >
            <Send className="w-5 h-5" />
          </Link>
        </div>

        <div className="text-xs text-muted-foreground">{t.copyright}</div>
      </div>
    </footer>
  )
}
