import Image from "next/image"
import { CtaButtons } from "@/components/cta-buttons"
import { ShieldCheck } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <ShieldCheck className="h-4 w-4" />
            Trusted Appliance Repair in Surat
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            Fast &amp; Reliable AC repair services &amp; All Brands AC Repair Services
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Expert technicians, same-day service, affordable pricing, and customer satisfaction guaranteed.
          </p>
          <CtaButtons className="mt-7" size="lg" />
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image
              src="/images/hero-technician.png"
              alt="Uniformed technician repairing a home air conditioner"
              width={720}
              height={540}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
