export type ServiceCategory = {
  slug: string
  title: string
  image: string
  description: string
  items: { name: string; description: string }[]
  benefits: string[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "ac",
    title: "AC Services",
    image: "/images/service-ac.png",
    description:
      "Complete air conditioner solutions for split and window units — from quick repairs to installation, gas refilling and seasonal maintenance, all at your doorstep.",
    items: [
      { name: "AC Repair & Service", description: "Diagnosis and repair of cooling, noise and electrical faults." },
      { name: "AC Installation & Uninstallation", description: "Safe fitting and removal of split & window air conditioners." },
      { name: "AC Gas Filling", description: "Refrigerant gas refilling to restore proper cooling performance." },
      { name: "AC Cleaning", description: "Deep cleaning of filters, coils and indoor units for better efficiency." },
      { name: "AC Maintenance", description: "Preventive checkups to keep your AC running smoothly all season." },
    ],
    benefits: ["Same-day doorstep service", "Genuine spare parts", "Transparent fixed pricing"],
  },
  {
    slug: "washing-machine",
    title: "Washing Machine Services",
    image: "/images/service-washing.png",
    description:
      "Expert repair for semi-automatic and fully-automatic washing machines of all brands, fixing drainage, spinning, motor and water-leakage problems quickly.",
    items: [
      { name: "Washing Machine Repair", description: "Repair for semi & fully automatic machines of every brand." },
      { name: "Drum Repair", description: "Fixing drum noise, vibration and rotation problems." },
      { name: "Motor Repair", description: "Motor and PCB repair to restore proper wash and spin cycles." },
      { name: "Water Leakage Repair", description: "Sealing leaks from valves, pipes and door gaskets." },
      { name: "Maintenance Service", description: "Routine servicing to extend the life of your machine." },
    ],
    benefits: ["Trained appliance technicians", "Quick same-day response", "Affordable service charges"],
  },
  {
    slug: "refrigerator",
    title: "Refrigerator Services",
    image: "/images/service-fridge.png",
    description:
      "Reliable fridge and refrigerator repair including cooling issues, compressor faults and gas charging for single-door, double-door and side-by-side models.",
    items: [
      { name: "Fridge Repair", description: "Repair of single, double-door and side-by-side refrigerators." },
      { name: "Cooling Problem Repair", description: "Fixing weak or no-cooling issues to restore performance." },
      { name: "Compressor Repair", description: "Compressor diagnosis, repair and replacement." },
      { name: "Gas Charging", description: "Refrigerant gas charging for efficient, lasting cooling." },
      { name: "Refrigerator Maintenance", description: "Cleaning and servicing to prevent breakdowns." },
    ],
    benefits: ["Certified refrigerator experts", "Genuine compressors & parts", "Service warranty assurance"],
  },
]
