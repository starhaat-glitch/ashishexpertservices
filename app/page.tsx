import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { ServicesOverview } from "@/components/home/services-overview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { Testimonials } from "@/components/home/testimonials"
import { CtaBanner } from "@/components/cta-banner"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
