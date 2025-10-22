"use client"

import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Branches() {
  const handleGetDirections = (mapLink: string) => {
    // ✅ Opens the actual Google Maps link directly
    window.open(mapLink, "_blank")
  }

  const handleBookVisit = (branchName: string, whatsapp: string) => {
    const message = `Hi! I would like to book a visit to ${branchName}. Please let me know the available time slots.`
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const branches = [
    {
      name: "ARMORI BRANCH",
      established: "2022",
      address:
        "Behind Chandu Kirana Store, 1st Floor, Above Bank of India, Armori, Maharashtra 441208",
      phone: "+91 7020747820",
      whatsapp: "917020747820",
      mapLink: "https://maps.app.goo.gl/GYwQ5pkGMSWDdQJq9?g_st=ic", // ✅ Correct direct map link
      timings: {
        morning: "5:30 AM – 10:30 AM",
        evening: "5:00 PM – 9:30 PM",
      },
      features: [
        "Modern Equipment",
        "Personal Training",
        "Group Classes",
        "Nutrition Guidance",
        "Ladies Zumba Classes",
        "Online PT Services",
      ],
      image: "/armori1.jpg",
    },
    {
      name: "BRAHMAPURI BRANCH",
      established: "2021",
      address:
        "Shantanu Building, Ground Floor, Tilak Nagar, Wadsa Road, Brahmapuri, Maharashtra 441206",
      phone: "+91 9403235684",
      whatsapp: "919403235684",
      mapLink: "https://maps.app.goo.gl/D4gbktEAwzRkUe9C8?g_st=ic", // ✅ Correct direct map link
      timings: {
        morning: "5:30 AM – 11:00 AM",
        evening: "5:00 PM – 9:30 PM",
      },
      features: [
        "Modern Equipment",
        "Certified Trainers",
        "Group Classes",
        "Diet Consultation",
        "Ladies Zumba Classes",
        "Online PT Services",
      ],
      image: "/brahmapuri5.jpg",
    },
  ]

  return (
    <section id="branches" className="py-12 md:py-20 gradient-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-red mb-4 md:mb-6">
            OUR BRANCHES
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
            Visit our state-of-the-art fitness facilities designed to provide you with the best
            workout experience.
          </p>
        </div>

        {/* Branch Cards */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg overflow-hidden border card-hover glow-yellow"
            >
              {/* Image */}
              <div className="relative h-56 md:h-64">
                <Image
                  src={branch.image || "/placeholder.svg"}
                  alt={branch.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  quality={80}
                />
                <div className="absolute top-4 left-4 gradient-accent text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Est. {branch.established}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{branch.name}</h3>

                {/* Info Section */}
                <div className="space-y-3 md:space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-sm md:text-base">{branch.address}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-red-600" />
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-gray-300 text-sm md:text-base hover:text-yellow-500"
                    >
                      {branch.phone}
                    </a>
                  </div>

                  {/* ✅ Updated Timings Section (branch-specific) */}
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-yellow-500 mt-1" />
                    <div className="flex flex-col">
                      <p className="text-gray-300 text-sm md:text-base font-medium">Mon - Sat</p>
                      <p className="text-gray-400 text-xs md:text-sm">
                        Morning: {branch.timings.morning}
                      </p>
                      <p className="text-gray-400 text-xs md:text-sm">
                        Evening: {branch.timings.evening}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Features:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {branch.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => handleGetDirections(branch.mapLink)}
                    className="flex-1 btn-primary"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    GET DIRECTIONS
                  </Button>
                  <Button
                    onClick={() => handleBookVisit(branch.name, branch.whatsapp)}
                    className="flex-1 btn-outline"
                  >
                    BOOK VISIT
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
