export const site = {
  name: "Home Appliance Service Center",
  shortName: "HASC",
  phone: "7487929919",
  phoneHref: "tel:+917487929919",
  email: "dharmaac101010@gmail.com",
  emailHref: "mailto:dharmaac101010@gmail.com",
  whatsapp: "7487929919",
  whatsappMessage: "Hello, I need AC/Washing Machine/Fridge service. Please contact me.",
  serviceArea: "Surat, Gujarat",
  address: "Pandesara S M C Awas, Vdod Gam near Community Hall, Building No. 23, Room 17, Surat, Gujarat 394221",
}

export const whatsappLink = `https://wa.me/91${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
]
