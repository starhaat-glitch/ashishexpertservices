import { Phone, MessageCircle } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { site, whatsappLink } from "@/lib/site"

export function CtaButtons({
  className,
  size = "default",
}: {
  className?: string
  size?: "default" | "sm" | "lg"
}) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <a href={site.phoneHref} className={cn(buttonVariants({ size }))}>
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ variant: "outline", size }),
          "border-[#25D366] text-[#1a9e4b] hover:bg-[#25D366]/10 hover:text-[#1a9e4b]",
        )}
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp Now
      </a>
    </div>
  )
}
