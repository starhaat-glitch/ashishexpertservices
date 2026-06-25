import { BadgeCheck, Zap, IndianRupee, Smile, Headphones } from "lucide-react"

const reasons = [
  { icon: BadgeCheck, title: "Certified Technicians", text: "Skilled, background-verified professionals for every brand." },
  { icon: Zap, title: "Quick Response", text: "Same-day appointments and fast on-site diagnosis." },
  { icon: IndianRupee, title: "Transparent Pricing", text: "Upfront quotes with no hidden charges, ever." },
  { icon: Smile, title: "Customer Satisfaction", text: "Service you can trust, backed by happy customers." },
  { icon: Headphones, title: "24/7 Support", text: "Reach us any time for help and emergency repairs." },
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-balance text-foreground sm:text-3xl">Why Choose Us</h2>
          <p className="mt-3 text-muted-foreground">
            We combine genuine parts, fair pricing and dependable service to keep your appliances running.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4 rounded-xl border border-border bg-card p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
