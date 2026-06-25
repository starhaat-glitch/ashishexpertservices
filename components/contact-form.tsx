"use client"

import { useState, type FormEvent } from "react"
import { Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { site, whatsappLink } from "@/lib/site"

const services = [
  "AC Repair & Service",
  "AC Installation / Uninstallation",
  "AC Gas Filling",
  "Washing Machine Repair",
  "Refrigerator Repair",
  "Gas Charging",
  "Other",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Thank you!</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            We&apos;ve received your request and will contact you shortly. For faster service, call{" "}
            <a href={site.phoneHref} className="font-medium text-primary">
              {site.phone}
            </a>{" "}
            or message us on{" "}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="font-medium text-primary">
              WhatsApp
            </a>
            .
          </p>
        </div>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send another request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your full name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" placeholder="Your phone number" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="service">Service Required</Label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows={4} placeholder="Describe your appliance issue" />
        </div>
        <Button type="submit" size="lg">
          <Send className="h-4 w-4" />
          Submit Request
        </Button>
      </div>
    </form>
  )
}
