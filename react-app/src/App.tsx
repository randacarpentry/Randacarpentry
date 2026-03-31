import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"
import { HowWeWork } from "@/components/sections/HowWeWork"
import { Services } from "@/components/sections/Services"
import { Portfolio } from "@/components/sections/Portfolio"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <HowWeWork />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
