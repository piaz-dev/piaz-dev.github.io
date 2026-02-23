"use client"

import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useLanguage } from "./language-provider"
import { useTheme } from "./theme-provider"
import { translations } from "@/lib/translations"

export function Header() {
  const { language, toggleLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const t = translations[language]

  return (
    <header className="fixed w-full top-0 bg-background/90 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground tracking-tight">
              piaz<span className="text-primary">.dev</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
            <Link href="/#services" className="hover:text-primary transition-colors">
              {t.nav_services}
            </Link>
            <Link href="/#projects" className="hover:text-primary transition-colors">
              {t.nav_projects}
            </Link>
            <Link href="/#infrastructure" className="hover:text-primary transition-colors">
              {t.nav_infrastructure}
            </Link>
            <Link href="/blog" className="hover:text-primary transition-colors">
              {t.nav_blog}
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              {t.nav_contact}
            </Link>
          </nav>

          {/* Theme & Language Toggles */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border hover:bg-accent transition-all text-secondary hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full border border-border text-xs font-bold hover:bg-accent transition-all flex items-center gap-1 text-secondary hover:text-foreground"
              aria-label="Toggle language"
            >
              <span>{language === "fa" ? "EN" : "FA"}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
