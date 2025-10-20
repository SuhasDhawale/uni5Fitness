"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleCallNow = () => {
    window.open("tel:+919545799225", "_self")
  }

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919545799225?text=Hi!%20I%20want%20to%20know%20more%20about%20UNi5%20Fitness%20Club%20membership",
      "_blank",
    )
  }

  return (
    <>
      {/* Floating Action Buttons - Mobile First */}
      <div className="floating-buttons">
        <button
          onClick={handleCallNow}
          className="w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse-slow"
          title="Call Now"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6 md:w-7 md:h-7" />
        </button>
        <button
          onClick={handleWhatsApp}
          className="w-14 h-14 md:w-16 md:h-16 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300"
          title="WhatsApp"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
        </button>
      </div>

      <section id="home" className="relative min-h-screen bg-black overflow-hidden">
        {/* Navigation */}
        <nav className={`relative z-50 transition-all duration-300 ${scrolled ? "glass-effect shadow-lg" : ""}`}>
          <div className="flex items-center justify-between p-4 md:p-6 lg:px-12">
            <div className="flex items-center">
              <Image
                src="/images/uni5-logo-new.png"
                alt="UNI5 Fitness Club"
                width={200}
                height={80}
                className="h-10 md:h-14 lg:h-16 w-auto cursor-pointer"
                priority
                quality={85}
                onClick={() => scrollToSection("home")}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-yellow-500 transition-colors font-medium text-sm xl:text-base"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("story")}
                className="text-white hover:text-yellow-500 transition-colors font-medium text-sm xl:text-base"
              >
                Our Story
              </button>
              <button
                onClick={() => scrollToSection("branches")}
                className="text-white hover:text-yellow-500 transition-colors font-medium text-sm xl:text-base"
              >
                Branches
              </button>
              <button
                onClick={() => scrollToSection("membership")}
                className="text-white hover:text-yellow-500 transition-colors font-medium text-sm xl:text-base"
              >
                Membership
              </button>
              <button
                onClick={() => scrollToSection("trainers")}
                className="text-white hover:text-yellow-500 transition-colors font-medium text-sm xl:text-base"
              >
                Trainers
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-yellow-500 transition-colors font-medium text-sm xl:text-base"
              >
                Contact
              </button>
              <Button onClick={() => scrollToSection("membership")} className="btn-primary">
                Join Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 glass-effect z-40 p-6 shadow-xl">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-white hover:text-yellow-500 transition-colors text-left font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("story")}
                  className="text-white hover:text-yellow-500 transition-colors text-left font-medium"
                >
                  Our Story
                </button>
                <button
                  onClick={() => scrollToSection("branches")}
                  className="text-white hover:text-yellow-500 transition-colors text-left font-medium"
                >
                  Branches
                </button>
                <button
                  onClick={() => scrollToSection("membership")}
                  className="text-white hover:text-yellow-500 transition-colors text-left font-medium"
                >
                  Membership
                </button>
                <button
                  onClick={() => scrollToSection("trainers")}
                  className="text-white hover:text-yellow-500 transition-colors text-left font-medium"
                >
                  Trainers
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white hover:text-yellow-500 transition-colors text-left font-medium"
                >
                  Contact
                </button>
                <Button onClick={() => scrollToSection("membership")} className="btn-primary w-full">
                  Join Now
                </Button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center min-h-[calc(100vh-100px)] px-4 md:px-6 lg:px-12 py-8 md:py-12">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  <span className="text-red-600">Transform</span> Your
                  <br />
                  <span className="text-gradient">FITNESS JOURNEY</span>
                  <br />
                  With UNi5
                </h1>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg leading-relaxed mx-auto lg:mx-0">
                  Train With Registered Exercise Professionals. Expert Coaches And Personalized Programs To Help You
                  Achieve Your Goals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={() => scrollToSection("membership")} className="btn-primary text-base md:text-lg">
                  Start Your Journey
                </Button>
                <Button onClick={() => scrollToSection("story")} className="btn-outline text-base md:text-lg">
                  Explore Programs
                </Button>
              </div>
            </div>

            {/* Right Content - 3D Cartoon Bodybuilder */}
            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 rounded-lg overflow-hidden">
                <Image
                  src="/images/cartoon-bodybuilder-3d.jpg"
                  alt="UNi5 Fitness Club - 3D Cartoon Bodybuilder"
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-2xl object-contain"
                  priority
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>

              {/* Floating Stats - Mobile Optimized */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 glass-effect text-white p-3 sm:p-4 md:p-5 rounded-lg animate-float glow-yellow z-20">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500">+1300</div>
                <div className="text-xs sm:text-sm md:text-base">Happy Members</div>
              </div>

              <div
                className="absolute top-1/4 -left-2 sm:-left-4 glass-effect text-white p-3 sm:p-4 md:p-5 rounded-lg animate-float glow-red z-20"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600">+15</div>
                <div className="text-xs sm:text-sm md:text-base">Expert Trainers</div>
              </div>

              <div
                className="absolute bottom-1/4 -right-2 sm:-right-4 glass-effect text-white p-3 sm:p-4 md:p-5 rounded-lg animate-float glow-yellow z-20"
                style={{ animationDelay: "2s" }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500">5+</div>
                <div className="text-xs sm:text-sm md:text-base">Years Experience</div>
              </div>

              <div
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 glass-effect text-white p-3 sm:p-4 md:p-5 rounded-lg animate-float glow-red z-20"
                style={{ animationDelay: "3s" }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600">2</div>
                <div className="text-xs sm:text-sm md:text-base">Branches</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Mobile First */}
       <div className="relative z-10 pb-12 md:pb-20">
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
      <div className="text-center p-4 glass-effect rounded-lg">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-2">96%</div>
        <div className="text-gray-400 text-xs sm:text-sm md:text-base">Client Satisfaction</div>
      </div>
      <div className="text-center p-4 glass-effect rounded-lg">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 mb-2">5+</div>
        <div className="text-gray-400 text-xs sm:text-sm md:text-base">Years Experience</div>
      </div>
      <div className="text-center p-4 glass-effect rounded-lg">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-2">800+</div>
        <div className="text-gray-400 text-xs sm:text-sm md:text-base">Active Members</div>
      </div>

      
      <div className="text-center p-4 glass-effect rounded-lg">
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500 mb-2">
          5:30–10:30
        </div>
        <div className="text-gray-400 text-xs sm:text-sm md:text-base flex flex-col sm:flex-row justify-center gap-1 sm:gap-2">
          <span>Morning / Evening</span>
          <span>Hours</span>
        </div>
      </div>
    </div>
  </div>
</div>

      </section>
    </>
  )
}
