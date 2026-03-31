import { Separator } from "@/components/ui/separator"
import { ImageIcon } from "lucide-react"

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24">
      <Separator className="absolute top-0 left-0 w-full bg-white/8" />
      <div className="mx-auto max-w-[1180px] px-5">
        <h2 className="font-heading text-[clamp(36px,4vw,54px)] text-foreground">
          Portfolio
        </h2>
        <p className="mt-4 mb-9 max-w-[820px] text-[15px] leading-[1.86] text-muted-foreground">
          Photo placeholders are set for now. Once your images are selected,
          these blocks will be replaced with the real project gallery.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="group flex min-h-[280px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] transition-all duration-300 hover:border-white/14 hover:bg-white/[0.055]"
            >
              <ImageIcon className="h-8 w-8 text-white/20 transition-colors group-hover:text-white/35" />
              <span className="text-xs uppercase tracking-[0.12em] text-white/30 group-hover:text-white/45">
                Project Photo
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
