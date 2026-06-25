import type { Metadata } from "next"
import Image from "next/image"
import { Target, Users, Clock, ThumbsUp } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { CtaBanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "About Us | Home Appliance Service Center, Surat",
  description:
    "Learn about Home Appliance Service Center — a trusted home appliance repair company in Surat specializing in fast, reliable and affordable AC, washing machine and refrigerator services.",
}

const stats = [
  { icon: Users, value: "5,000+", label: "Happy Customers" },
  { icon: Clock, value: "Same Day", label: "Service Response" },
  { icon: ThumbsUp, value: "4.8/5", label: "Average Rating" },
  { icon: Target, value: "100%", label: "Genuine Parts" },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Your trusted partner for fast, reliable and affordable home appliance repair in Surat."
      />

      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/hero-technician.png"
              alt="Our technician repairing a home appliance"
              width={640}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Who We Are</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We are a trusted home appliance repair company specializing in AC, Washing Machine, and Refrigerator
              services. Our experienced technicians provide fast, reliable, and affordable repair solutions. We are
              committed to delivering quality service and complete customer satisfaction.
            </p>
            <div className="mt-8 rounded-xl border border-border bg-primary/5 p-6">
              <h3 className="flex items-center gap-2 font-semibold text-primary">
                <Target className="h-5 w-5" />
                Our Mission
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                To provide professional appliance repair services with honesty, quality workmanship, and
                customer-focused support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="rounded-xl border border-border bg-card p-6 text-center">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-3 text-2xl font-bold text-foreground">{value}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
