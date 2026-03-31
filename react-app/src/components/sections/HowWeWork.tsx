import { Separator } from "@/components/ui/separator"
import { Eye, Ruler, Layers, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Eye,
    text: "We can start with your inspiration \u2014 photos, ideas, or examples you found online \u2014 and turn it into a clean, buildable design that fits your space.",
  },
  {
    icon: Ruler,
    text: "A free on-site consultation allows us to walk through the project, discuss layout options, and develop a clear plan before moving forward.",
  },
  {
    icon: Layers,
    text: "If needed, we bring live samples and molding profiles so you can see and feel the materials before making a final decision.",
  },
  {
    icon: CheckCircle,
    text: "Everything is thought through in advance \u2014 visually and technically \u2014 to ensure a clean and precise final result.",
  },
]

export function HowWeWork() {
  return (
    <section id="how-we-work" className="relative py-24">
      <Separator className="absolute top-0 left-0 w-full bg-white/8" />
      <div className="mx-auto max-w-[1180px] px-5">
        <h2 className="font-heading text-[clamp(36px,4vw,54px)] text-foreground">
          How We Work
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group flex gap-4 rounded-2xl border border-white/8 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06] hover:shadow-xl"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[oklch(0.60_0.12_200_/_12%)] text-[oklch(0.60_0.12_200)]">
                <step.icon className="h-5 w-5" />
              </div>
              <p className="text-[15px] leading-[1.86] text-muted-foreground">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
