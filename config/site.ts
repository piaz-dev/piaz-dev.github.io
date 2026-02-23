export const siteConfig = {
  name: "piaz.dev",
  description: {
    en: "Software development team specializing in open-source solutions and privacy-focused applications",
    fa: "تیم توسعه نرم‌افزار piaz.dev - ارائه‌دهنده راهکارهای اوپن‌سورس و حریم خصوصی",
  },
  url: "https://piaz.dev",
  defaultLanguage: "en" as const, // Set default to English
  defaultTheme: "dark" as const, // Set default to dark mode
  social: {
    github: "https://github.com/piaz-dev",
    email: "hi@piaz.dev",
    telegram: "@piazdev",
  },
  contact: {
    email: "hi@piaz.dev",
    telegram: "@piazdev",
    github: "https://github.com/piaz-dev",
    description: {
      en: "Get in touch with the piaz.dev team. We're here to help with your software development needs, answer questions about our open-source projects, or discuss potential collaborations.",
      fa: "با تیم piaz.dev در تماس باشید. ما اینجا هستیم تا در زمینه نیازهای توسعه نرم‌افزار شما کمک کنیم، به سوالات شما درباره پروژه‌های اوپن‌سورس پاسخ دهیم یا درباره همکاری‌های احتمالی صحبت کنیم.",
    },
  },
} as const

export type SiteConfig = typeof siteConfig
