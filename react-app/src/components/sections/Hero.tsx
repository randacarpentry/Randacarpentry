import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import logoSvg from "@/assets/logo.svg"
import { Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-78px)] items-center justify-center px-5 py-11 text-center">
      <div className="w-full max-w-[1040px]">
        {/* Logo */}
        <img
          src={logoSvg}
          alt="R&A Logo"
          className="mx-auto mb-6 block h-auto w-[min(650px,92vw)] opacity-[0.98]"
          style={{
            filter:
              "brightness(0) saturate(0%) invert(94%) sepia(7%) saturate(220%) hue-rotate(176deg) brightness(103%) contrast(96%)",
          }}
        />

        {/* Title stack */}
        <h1 className="font-heading text-[clamp(50px,6vw,72px)] uppercase leading-none tracking-[0.26em] text-foreground">
          Carpentry
        </h1>
        <p className="mt-5 font-heading text-[clamp(19px,2.1vw,28px)] uppercase leading-tight tracking-[0.16em] text-muted-foreground">
          Finish Carpentry & Built-Ins
        </p>
        <p className="mt-3 mb-10 font-heading text-[clamp(22px,2.1vw,30px)] uppercase leading-none tracking-[0.28em] text-muted-foreground">
          Custom
        </p>

        {/* Copy */}
        <p className="mx-auto max-w-[770px] text-base leading-[1.85] text-muted-foreground">
          High-end finish carpentry, built-ins, trim work, and detailed interior
          solutions executed with precision.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "rounded-full border border-white/15 bg-white/10 px-7 py-4 text-xs uppercase tracking-[0.12em] text-foreground backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/[0.14] hover:border-white/20 hover:shadow-lg"
            )}
          >
            Request Estimate
          </a>
          <a
            href="tel:5137659291"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "rounded-full border border-white/10 bg-white/[0.035] px-7 py-4 text-xs uppercase tracking-[0.12em] text-foreground transition-all hover:-translate-y-0.5 hover:bg-white/[0.07] hover:border-white/15"
            )}
          >
            <Phone className="mr-2 h-4 w-4" />
            Call 513-765-9291
          </a>
        </div>
      </div>
    </section>
  )
}
