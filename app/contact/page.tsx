import type { Metadata } from "next"
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { site, whatsappLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact Us | Home Appliance Service Center, Surat",
  description:
    "Contact Home Appliance Service Center for AC, washing machine and refrigerator repair in Surat, Gujarat. Call or WhatsApp 7487929919 for same-day doorstep service.",
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch for same-day appliance repair across Surat. Call, WhatsApp or send us a message."
      />

      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Get In Touch</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Have an appliance that needs fixing? Reach out and our team will respond quickly.
            </p>

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">Call Us</span>
                    <span className="block font-semibold text-foreground">{site.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]/15 text-[#1a9e4b]">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">WhatsApp</span>
                    <span className="block font-semibold text-foreground">{site.whatsapp}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">Email Us</span>
                    <span className="block font-semibold text-foreground">{site.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">Our Address</span>
                  <span className="block font-semibold text-foreground">{site.address}</span>
                </span>
              </li>
              <li className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">Working Hours</span>
                  <span className="block font-semibold text-foreground">Open 24/7 — Same Day Service</span>
                </span>
              </li>
            </ul>

            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <iframe
                title="Our location - Pandesara, Surat, Gujarat 394221"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">Request a Service</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Fill in the form below and we&apos;ll get back to you as soon as possible.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
