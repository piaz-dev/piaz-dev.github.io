"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { siteConfig } from "@/config/site"

type Language = "fa" | "en"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(siteConfig.defaultLanguage)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved language preference or use default
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fa" ? "en" : "fa"))
  }

  useEffect(() => {
    if (!mounted) return

    const isRTL = language === "fa"
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr")
    document.documentElement.setAttribute("lang", language)

    if (isRTL) {
      document.body.classList.remove("font-sans")
      document.body.classList.add("font-persian")
    } else {
      document.body.classList.remove("font-persian")
      document.body.classList.add("font-sans")
    }

    // Save to localStorage
    localStorage.setItem("language", language)
  }, [language, mounted])

  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
