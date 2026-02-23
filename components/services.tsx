"use client"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/translations"
import { Smartphone, Palette, TrendingUp, Globe, DatabaseIcon, MessageCircle } from "lucide-react"

export function Services() {
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
    {
      icon: Smartphone,
      title: t.serv_multiplatform_title,
      desc: t.serv_multiplatform_desc,
    },
    {
      icon: Palette,
      title: t.serv_graphic_title,
      desc: t.serv_graphic_desc,
    },
    {
      icon: TrendingUp,
      title: t.serv_marketing_title,
      desc: t.serv_marketing_desc,
    },
    {
      icon: Globe,
      title: t.serv_web_title,
      desc: t.serv_web_desc,
    },
    {
      icon: DatabaseIcon,
      title: t.serv_crawler_title,
      desc: t.serv_crawler_desc,
    },
    {
      icon: MessageCircle,
      title: t.serv_consulting_title,
      desc: t.serv_consulting_desc,
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">{t.services_title}</h2>
          <p className="text-muted-foreground">{t.services_sub}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl hover:bg-accent transition-colors border border-transparent hover:border-border text-center md:text-start"
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary mb-4 mx-auto md:mx-0">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
