import { Phone, MessageCircle } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { site, whatsappLink } from "@/lib/site"

export function CtaBanner({
  title = "Need an Appliance Repaired Today?",
  subtitle = "Call now for same-day doorstep service across Surat. Friendly technicians, fair pricing.",
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center">
        <div>
          <h2 className="text-2xl font-bold text-balance sm:text-3xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-primary-foreground/85">{subtitle}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={site.phoneHref} className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
            <Phone className="h-4 w-4" />
            Call {site.phone}
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "bg-[#25D366] text-white hover:bg-[#1fbb57]")}
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  )
}
