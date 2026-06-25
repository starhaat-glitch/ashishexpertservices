import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { serviceCategories } from "@/lib/services-data"

export function ServicesOverview() {
  return (
    <section className="bg-secondary/40 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-balance text-foreground sm:text-3xl">Our Repair Services</h2>
          <p className="mt-3 text-muted-foreground">
            One trusted team for all your home appliances — repaired right the first time.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {serviceCategories.map((service) => (
            <Link
              key={service.slug}
              href="/services"
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={480}
                  height={360}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  View details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
