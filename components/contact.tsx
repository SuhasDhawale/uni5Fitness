"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Send, Dumbbell, Target, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Netlify Forms submission
      const formElement = e.target as HTMLFormElement
      const netlifyFormData = new FormData(formElement)

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(netlifyFormData as any).toString(),
      })

      if (response.ok) {
        setSubmitStatus("success")

        // Also open WhatsApp as backup/instant notification
        const whatsappNumbers = {
          armori: "917020747820",
          brahmapuri: "919403235684",
          both: "919403235684",
        }

        const whatsappNumber = whatsappNumbers[formData.branch as keyof typeof whatsappNumbers] || "919403235684"

        const message = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Branch:* ${formData.branch}
*Service Interest:* ${formData.service}
*Message:* ${formData.message}
        `.trim()

        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          branch: "",
          service: "",
          message: "",
        })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle")
        }, 5000)
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")

      // Still try WhatsApp as fallback
      const whatsappNumbers = {
        armori: "917020747820",
        brahmapuri: "919403235684",
        both: "919403235684",
      }

      const whatsappNumber = whatsappNumbers[formData.branch as keyof typeof whatsappNumbers] || "919403235684"

      const message = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Branch:* ${formData.branch}
*Service Interest:* ${formData.service}
*Message:* ${formData.message}
      `.trim()

      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleGetDirections = (lat: number, lng: number) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank")
  }

  const branches = [
    {
      name: "Armori Branch",
      address: "Behind Chandu Kirana Store, 1st floor Above Bank of India, Armori MH - 441208",
      phone: "+91 7020747820",
      phoneLink: "tel:+917020747820",
      email: "armori@uni5fitness.com",
      emailLink: "mailto:armori@uni5fitness.com",
      coordinates: { lat: 20.7, lng: 79.8 },
    },
    {
      name: "Brahmapuri Branch",
      address: "Shantanu Building Ground floor, Tilak Nagar, Wadsa Road Brahmapuri MH- 441206",
      phone: "+91 9403235684",
      phoneLink: "tel:+919403235684",
      email: "brahmapuri@uni5fitness.com",
      emailLink: "mailto:brahmapuri@uni5fitness.com",
      coordinates: { lat: 20.6, lng: 79.9 },
    },
  ]

  return (
    <section id="contact" className="py-12 md:py-20 gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 opacity-5 hidden md:block">
        <Dumbbell className="w-20 h-20 text-yellow-500 animate-float" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-5 hidden md:block" style={{ animationDelay: "1s" }}>
        <Target className="w-16 h-16 text-red-600 animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-red-600 mb-4 md:mb-6">GET IN TOUCH</h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
            Ready to start your fitness journey? Contact us today for a free consultation and let us help you achieve
            your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form with Netlify Forms */}
          <div className="glass-effect p-6 md:p-8 rounded-lg border border-gray-800 card-hover">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Send us a Message</h3>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-500 font-semibold">Message sent successfully!</p>
                  <p className="text-green-400 text-sm mt-1">
                    We've received your inquiry and will get back to you within 24 hours.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-500 font-semibold">Oops! Something went wrong.</p>
                  <p className="text-red-400 text-sm mt-1">
                    We've opened WhatsApp for you as a backup. You can also call us directly.
                  </p>
                </div>
              </div>
            )}

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
            >
              {/* Hidden fields for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm md:text-base">Full Name *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="bg-[#2C2C2C] border-[#404040] text-white focus-visible:ring-yellow-500"
                    placeholder="Enter your full name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm md:text-base">Phone Number *</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="bg-[#2C2C2C] border-[#404040] text-white focus-visible:ring-yellow-500"
                    placeholder="Enter your phone number"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm md:text-base">Email Address *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="bg-[#2C2C2C] border-[#404040] text-white focus-visible:ring-yellow-500"
                  placeholder="Enter your email address"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm md:text-base">Preferred Branch *</label>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={(e) => handleChange("branch", e.target.value)}
                    className="w-full bg-[#2C2C2C] border border-[#404040] text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Select a branch</option>
                    <option value="armori">Armori</option>
                    <option value="brahmapuri">Brahmapuri</option>
                    <option value="both">Both Branches</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm md:text-base">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    className="w-full bg-[#2C2C2C] border border-[#404040] text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    disabled={isSubmitting}
                  >
                    <option value="">Select a service</option>
                    <option value="membership">Gym Membership</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="nutrition">Nutrition Consultation</option>
                    <option value="g99-academy">G99 Academy Courses</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm md:text-base">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="bg-[#2C2C2C] border-[#404040] text-white min-h-[120px] focus-visible:ring-yellow-500"
                  placeholder="Tell us about your fitness goals and how we can help you..."
                  disabled={isSubmitting}
                />
              </div>

              <Button type="submit" className="w-full btn-primary" disabled={isSubmitting}>
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </Button>

              <p className="text-gray-400 text-xs text-center">
                Your information is secure and will only be used to contact you about your inquiry.
              </p>
            </form>
          </div>

          {/* Branch Locations */}
          <div className="space-y-6 md:space-y-8">
            {branches.map((branch, index) => (
              <div key={index} className="glass-effect p-6 md:p-8 rounded-lg border border-gray-800 card-hover">
                <h4 className="text-lg md:text-xl font-bold text-white mb-4">{branch.name}</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-sm md:text-base">{branch.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-yellow-500" />
                    <a
                      href={branch.phoneLink}
                      className="text-gray-300 text-sm md:text-base hover:text-yellow-500 transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-red-600" />
                    <a
                      href={branch.emailLink}
                      className="text-gray-300 text-sm md:text-base hover:text-yellow-500 transition-colors"
                    >
                      {branch.email}
                    </a>
                  </div>
                </div>
                <Button
                  className="w-full mt-4 btn-outline"
                  onClick={() => handleGetDirections(branch.coordinates.lat, branch.coordinates.lng)}
                >
                  GET DIRECTIONS
                </Button>
              </div>
            ))}

            {/* Additional Contact Methods */}
            <div className="glass-effect p-6 md:p-8 rounded-lg border border-gray-800 card-hover">
              <h4 className="text-lg md:text-xl font-bold text-white mb-4">Quick Contact</h4>
              <div className="space-y-3">
                <a
                  href="https://wa.me/919403235684"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-500 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm md:text-base">WhatsApp Us</span>
                </a>
                <a
                  href="tel:+919403235684"
                  className="flex items-center space-x-3 text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm md:text-base">Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { MessageCircle } from "lucide-react"
