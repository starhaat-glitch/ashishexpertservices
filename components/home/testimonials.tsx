import { Star } from "lucide-react"

const reviews = [
  {
    name: "Rajesh Patel",
    location: "Adajan, Surat",
    text: "My AC stopped cooling in peak summer. They came the same day, refilled the gas and fixed it at a fair price. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Shah",
    location: "Vesu, Surat",
    text: "Washing machine drum was making noise. The technician was polite, professional and repaired it quickly. Great doorstep service.",
    rating: 5,
  },
  {
    name: "Amit Desai",
    location: "Katargam, Surat",
    text: "Our fridge had a cooling problem. They diagnosed the compressor issue honestly and got it working again. Very transparent pricing.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-balance text-foreground sm:text-3xl">What Our Customers Say</h2>
          <p className="mt-3 text-muted-foreground">Trusted by hundreds of households across Surat.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-0.5 text-amber-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5">
                <p className="text-sm font-semibold text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
