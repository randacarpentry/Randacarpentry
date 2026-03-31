import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, Globe, MapPin } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "513-765-9291",
    href: "tel:5137659291",
  },
  {
    icon: Mail,
    label: "Email",
    value: "alex@randacarpentry.com",
    href: "mailto:alex@randacarpentry.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "randacarpentry.com",
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <Separator className="absolute top-0 left-0 w-full bg-white/8" />
      <div className="mx-auto max-w-[1180px] px-5">
        <h2 className="font-heading text-[clamp(36px,4vw,54px)] text-foreground">
          Contact
        </h2>

        <div className="mt-9 grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
          {/* Contact details */}
          <Card className="border-white/8 bg-white/[0.035]">
            <CardContent className="space-y-6 p-7">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.60_0.12_200_/_12%)] text-[oklch(0.60_0.12_200)]">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-[0.18em] text-white/40">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[17px] leading-relaxed text-foreground transition-colors hover:text-[oklch(0.60_0.12_200)]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[17px] leading-relaxed text-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Service area */}
          <Card className="border-white/8 bg-white/[0.035]">
            <CardContent className="p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.60_0.12_200_/_12%)] text-[oklch(0.60_0.12_200)]">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.18em] text-white/40">
                    Area Served
                  </p>
                  <p className="text-[17px] leading-relaxed text-foreground">
                    Cincinnati and surrounding areas, including Mason, Indian
                    Hill, Montgomery, Mariemont, Blue Ash, Madeira, Hyde Park,
                    and Oakley.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
