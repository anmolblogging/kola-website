import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Scrollcounter from "@/components/scroll-counter"
import Projectparallax from "@/components/project-parallax"
import Map from '@/components/map'
import Showcase from '@/components/showcase'
import Testimonial from '@/components/testimonial'
import Corevalues from '@/components/core-values'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <Projectparallax/>
      <ServicesSection />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <AboutSection />
      <Corevalues/>
      <Showcase/>
      <Testimonial/>
      <Map/>
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
