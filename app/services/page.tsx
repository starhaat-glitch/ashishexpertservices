import type { Metadata } from "next"
import Image from "next/image"
import { Check } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { CtaButtons } from "@/components/cta-buttons"
import { CtaBanner } from "@/components/cta-banner"
import { serviceCategories } from "@/lib/services-data"

export const metadata: Metadata = {
  title: "Our Services | AC, Washing Machine & Fridge Repair in Surat",
  description:
    "Explore our full range of appliance repair services — AC repair, installation & gas filling, washing machine repair, refrigerator repair, compressor & gas charging in Surat, Gujarat.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Complete repair, installation and maintenance for AC, washing machines and refrigerators — at your doorstep."
      />

      <div className="bg-background">
        {serviceCategories.map((service, index) => (
          <section
            key={service.slug}
            id={service.slug}
            className={
              index % 2 === 1 ? "scroll-mt-20 bg-secondary/40 py-16" : "scroll-mt-20 bg-background py-16"
            }
          >
            <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 lg:grid-cols-2">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={560}
                    height={420}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{service.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>

                <ul className="mt-6 grid gap-3">
                  {service.items.map((item) => (
                    <li key={item.name} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                <CtaButtons className="mt-6" />
              </div>
            </div>
          </section>
        ))}
      </div>

      <CtaBanner />
    </>
  )
}
