import Hero from "@/components/hero"
import ScrollingBar from "@/components/scrolling-bar"
import QuickServices from "@/components/quick-services"
import OurStory from "@/components/our-story"
import Branches from "@/components/branches"
import MembershipPlans from "@/components/membership-plans"
import G99Academy from "@/components/g99-academy"
import Trainers from "@/components/trainers"
import Testimonials from "@/components/testimonials"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main data-preview-bust="v3" className="min-h-screen bg-black">
      <Hero />
      <ScrollingBar />
      <QuickServices />
      <OurStory />
      <Branches />
      <MembershipPlans />
      <G99Academy />
      <Trainers />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
