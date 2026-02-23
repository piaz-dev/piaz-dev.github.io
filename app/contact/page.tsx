import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Github, Send, ArrowRight } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the piaz.dev team for collaborations, questions, or project inquiries",
  openGraph: {
    title: "Contact | piaz.dev",
    description: "Get in touch with the piaz.dev team for collaborations, questions, or project inquiries",
    url: `${siteConfig.url}/contact`,
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Get in Touch</h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {siteConfig.contact.description.en}
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Email */}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm mb-2">Send us an email anytime</p>
                  <p className="text-primary font-medium">{siteConfig.contact.email}</p>
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">GitHub</h3>
                  <p className="text-muted-foreground text-sm mb-2">Check out our open-source projects</p>
                  <p className="text-primary font-medium">github.com/piaz-dev</p>
                </div>
              </div>
            </a>

            {/* Telegram */}
            <a
              href={`https://t.me/${siteConfig.contact.telegram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">Telegram</h3>
                  <p className="text-muted-foreground text-sm mb-2">Connect with us on Telegram</p>
                  <p className="text-primary font-medium">{siteConfig.contact.telegram}</p>
                </div>
              </div>
            </a>

            {/* General Info */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">Response Time</h3>
                  <p className="text-muted-foreground text-sm">We typically respond within 24-48 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">What Can We Help With?</h2>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Project Inquiries</h3>
                <p className="text-sm leading-relaxed text-pretty">
                  Looking to build a custom application or need consulting? We'd love to discuss your project
                  requirements and how we can help.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Collaboration</h3>
                <p className="text-sm leading-relaxed text-pretty">
                  Interested in collaborating on open-source projects or partnering on initiatives that align with our
                  values? Let's connect!
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Support</h3>
                <p className="text-sm leading-relaxed text-pretty">
                  Have questions about our existing projects or services? We're here to help with technical support and
                  guidance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">General Questions</h3>
                <p className="text-sm leading-relaxed text-pretty">
                  Any other questions or just want to say hello? We're always happy to hear from the community.
                </p>
              </div>
            </div>
          </div>

          {/* Persian Version */}
          <div className="bg-card border border-border rounded-lg p-8 mt-6" dir="rtl">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-persian">در چه زمینه‌ای می‌توانیم کمک کنیم؟</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 font-persian">
              {siteConfig.contact.description.fa}
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground font-persian">
              <div>
                <h3 className="font-semibold text-foreground mb-2">استعلام پروژه</h3>
                <p className="text-sm leading-relaxed">
                  به دنبال ساخت یک برنامه سفارشی هستید یا به مشاوره نیاز دارید؟ خوشحال می‌شویم درباره نیازهای پروژه شما
                  صحبت کنیم.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">همکاری</h3>
                <p className="text-sm leading-relaxed">
                  علاقه‌مند به همکاری در پروژه‌های متن‌باز یا مشارکت در ابتکاراتی که با ارزش‌های ما همسو است؟ بیایید در تماس
                  باشیم!
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">پشتیبانی</h3>
                <p className="text-sm leading-relaxed">
                  سوالی درباره پروژه‌ها یا خدمات موجود ما دارید؟ ما اینجا هستیم تا در زمینه پشتیبانی فنی و راهنمایی کمک
                  کنیم.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">سوالات عمومی</h3>
                <p className="text-sm leading-relaxed">
                  سوالات دیگری دارید یا فقط می‌خواهید سلام کنید؟ همیشه خوشحالیم از جامعه بشنویم.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
