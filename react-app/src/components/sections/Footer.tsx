import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="relative pb-14 pt-7 text-center">
      <Separator className="absolute top-0 left-0 w-full bg-white/8" />
      <p className="text-[13px] text-white/35">
        &copy; {new Date().getFullYear()} R&A Carpentry
      </p>
    </footer>
  )
}
