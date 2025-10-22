"use client"

import { MapPin, Star, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function QuickServices() {
  const services = [
    {
      icon: MapPin,
      title: "OUR BRANCHES",
      description:
        "Visit our state-of-the-art facilities in Armori and Brahmapuri with modern equipment and expert guidance.",
      buttonText: "FIND LOCATION",
      color: "yellow",
      scrollTo: "branches",
    },
    {
      icon: Star,
      title: "TESTIMONIALS",
      description:
        "Hear success stories from our 1600+ satisfied members who transformed their lives with our programs.",
      buttonText: "READ REVIEWS",
      color: "red",
      scrollTo: "testimonials",
    },
    {
      icon: GraduationCap,
      title: "G99 ACADEMY",
      description: "Professional fitness education and certification programs established in Pune since 2018.",
      buttonText: "LEARN MORE",
      color: "yellow",
      scrollTo: "academy",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 md:py-20 gradient-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-effect p-6 md:p-8 rounded-lg border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 group card-hover"
            >
              <div
                className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6 ${
                  service.color === "yellow" ? "bg-yellow-500/20 glow-yellow" : "bg-red-500/20 glow-red"
                }`}
              >
                <service.icon
                  className={`w-7 h-7 md:w-8 md:h-8 ${service.color === "yellow" ? "text-yellow-500" : "text-red-500"}`}
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{service.description}</p>
              <Button
                className={`w-full ${
                  service.color === "yellow"
                    ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                    : "bg-red-600 hover:bg-red-700 text-white"
                } transition-all transform hover:scale-105`}
                onClick={() => scrollToSection(service.scrollTo)}
              >
                {service.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
