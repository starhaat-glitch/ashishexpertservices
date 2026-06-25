import Link from "next/link"
import { MapPin, Phone, MessageCircle, Mail, Wrench } from "lucide-react"
import { navLinks, site, whatsappLink } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Wrench className="h-5 w-5" />
            </span>
            <span className="text-sm font-bold text-foreground">{site.name}</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Fast, reliable and affordable AC, Washing Machine and Refrigerator repair across {site.serviceArea}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Contact</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2 transition-colors hover:text-primary">
                <Phone className="h-4 w-4 text-primary" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4 text-primary" />
                WhatsApp {site.whatsapp}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="flex items-center gap-2 transition-colors hover:text-primary">
                <Mail className="h-4 w-4 text-primary" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Our Services</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/services#ac" className="transition-colors hover:text-primary">
                AC Repair &amp; Service
              </Link>
            </li>
            <li>
              <Link href="/services#washing-machine" className="transition-colors hover:text-primary">
                Washing Machine Repair
              </Link>
            </li>
            <li>
              <Link href="/services#refrigerator" className="transition-colors hover:text-primary">
                Refrigerator Repair
              </Link>
            </li>
            <li>
              <Link href="/services#ac" className="transition-colors hover:text-primary">
                Gas Refilling &amp; Charging
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-muted-foreground">
          Copyright © 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
