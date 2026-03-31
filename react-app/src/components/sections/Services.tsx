import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Hammer, BookOpen, Sparkles } from "lucide-react"

const services = [
  {
    icon: Hammer,
    title: "Finish Carpentry",
    description:
      "Precision trim installation, refined details, clean transitions, and a finished look that elevates the overall space.",
  },
  {
    icon: BookOpen,
    title: "Built-Ins",
    description:
      "Custom built-ins designed to fit the room properly, look integrated, and bring both function and character.",
  },
  {
    icon: Sparkles,
    title: "Custom Work",
    description:
      "Closets, mudrooms, ceiling details, decorative wall work, beams, and one-off carpentry tailored to the home.",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <Separator className="absolute top-0 left-0 w-full bg-white/8" />
      <div className="mx-auto max-w-[1180px] px-5">
        <h2 className="font-heading text-[clamp(36px,4vw,54px)] text-foreground">
          Services
        </h2>
        <p className="mt-4 mb-9 max-w-[820px] text-[15px] leading-[1.86] text-muted-foreground">
          Focused on detailed interior finish work with clean execution,
          balanced proportions, and a final result that feels intentional and
          high-end.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group min-h-[205px] border-white/8 bg-white/[0.035] transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.07] hover:shadow-2xl"
            >
              <CardHeader className="pb-3">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[oklch(0.60_0.12_200_/_12%)] text-[oklch(0.60_0.12_200)] transition-colors group-hover:bg-[oklch(0.60_0.12_200_/_20%)]">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-heading text-[28px] text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-[1.8] text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
