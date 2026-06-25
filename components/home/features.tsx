import { Clock, Award, BadgeIndianRupee, Cog, Home } from "lucide-react"

const features = [
  { icon: Clock, label: "Same Day Service" },
  { icon: Award, label: "Experienced Technicians" },
  { icon: BadgeIndianRupee, label: "Affordable Pricing" },
  { icon: Cog, label: "Genuine Spare Parts" },
  { icon: Home, label: "Doorstep Service" },
]

export function Features() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-10 sm:grid-cols-3 lg:grid-cols-5">
        {features.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
