import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features"
import Menu from "@/components/sections/Menu"
import About from "@/components/sections/About"
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Menu />
      <About />
      <Testimonials />
    </main>
  )
}
