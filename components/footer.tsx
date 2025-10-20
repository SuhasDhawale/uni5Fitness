"use client"

import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const quickLinks = [
    { name: "Home", href: "home" },
    { name: "Our Story", href: "story" },
    { name: "Branches", href: "branches" },
    { name: "Membership", href: "membership" },
    { name: "Trainers", href: "trainers" },
    { name: "Contact", href: "contact" },
  ]

  const services = [
    "Personal Training (Online/Offline)",
    "Group Classes",
    "Nutrition Consultation",
    "Weight Loss Programs",
    "Strength Training",
    "G99 Academy Courses",
    "Ladies Zumba Classes",
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/uni5fitness", color: "hover:text-blue-500" },
    { icon: Instagram, href: "https://instagram.com/uni5fitness", color: "hover:text-pink-500" },
    { icon: Twitter, href: "https://twitter.com/uni5fitness", color: "hover:text-blue-400" },
    { icon: Youtube, href: "https://youtube.com/@uni5fitness", color: "hover:text-red-500" },
  ]

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Image
              src="/images/uni5-logo-new.png"
              alt="UNI5 Fitness Club"
              width={180}
              height={72}
              className="h-12 md:h-16 w-auto mb-4 md:mb-6"
              loading="lazy"
              quality={85}
            />
            <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Train With Professionals. Our mission is to provide holistic fitness and improve the basic lifestyle and
              wellness of our dedicated clients.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors`}
                >
                  <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-sm md:text-base text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Our Services</h3>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm md:text-base">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Contact Info</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs md:text-sm">Brahmapuri Branch:</p>
                  <p className="text-gray-300 text-xs md:text-sm">Tilak Nagar, Wadsa Road</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs md:text-sm">Armori Branch:</p>
                  <p className="text-gray-300 text-xs md:text-sm">Above Bank of India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
                <a
                  href="tel:+919403235684"
                  className="text-gray-300 text-xs md:text-sm hover:text-yellow-500 transition-colors"
                >
                  +91 9403235684 (Brahmapuri)
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                <a
                  href="tel:+917020747820"
                  className="text-gray-300 text-xs md:text-sm hover:text-yellow-500 transition-colors"
                >
                  +91 7020747820 (Armori)
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                <a
                  href="mailto:info@uni5fitness.com"
                  className="text-gray-300 text-xs md:text-sm hover:text-yellow-500 transition-colors"
                >
                  info@uni5fitness.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-xs md:text-sm text-center lg:text-left">
              © {new Date().getFullYear()} UNi5 Fitness Club. All rights reserved. | Founded by Swapnil Haridas Raut &
              Ankit Sanjay Dhanorkar
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 md:gap-6 text-xs md:text-sm">
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
