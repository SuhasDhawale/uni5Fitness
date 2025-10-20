"use client"

import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Branches() {
  const handleGetDirections = (lat: number, lng: number, address: string) => {
    // Open Google Maps with specific coordinates
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank")
  }

  const handleBookVisit = (branchName: string, whatsapp: string) => {
    const message = `Hi! I would like to book a visit to ${branchName}. Please let me know the available time slots.`
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const branches = [
    {
      name: "ARMORI BRANCH",
      established: "2022",
      address: "Behind Chandu Kirana Store, 1st floor Above Bank of India, Armori MH - 441208",
      phone: "+91 7020747820",
      whatsapp: "917020747820",
      coordinates: { lat: 20.7, lng: 79.8 }, // Replace with actual coordinates
      features: [
        "Modern Equipment",
        "Personal Training",
        "Group Classes",
        "Nutrition Guidance",
        "Ladies Zumba Classes",
        "Online PT Services",
      ],
      image: "/armori-branch-gym.jpg",
    },
    {
      name: "BRAHMAPURI BRANCH",
      established: "2021",
      address: "Shantanu Building Ground floor, Tilak Nagar, Wadsa Road Brahmapuri MH- 441206",
      phone: "+91 9403235684",
      whatsapp: "919403235684",
      coordinates: { lat: 20.6, lng: 79.9 }, // Replace with actual coordinates
      features: [
        "State-of-art Facility",
        "Certified Trainers",
        "Flexible Timings",
        "Diet Consultation",
        "Ladies Zumba Classes",
        "Online PT Services",
      ],
      image: "/brahmapuri-branch-gym.jpg",
    },
  ]

  return (
    <section id="branches" className="py-12 md:py-20 gradient-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-red mb-4 md:mb-6">OUR BRANCHES</h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
            Visit our state-of-the-art fitness facilities designed to provide you with the best workout experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {branches.map((branch, index) => (
            <div key={index} className="glass-effect rounded-lg overflow-hidden border card-hover glow-yellow">
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

              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{branch.name}</h3>

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
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-yellow-500" />
                    <p className="text-gray-300 text-sm md:text-base">Mon-Sun: 5:30 AM - 10:30 PM</p>
                  </div>
                </div>

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

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => handleGetDirections(branch.coordinates.lat, branch.coordinates.lng, branch.address)}
                    className="flex-1 btn-primary"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    GET DIRECTIONS
                  </Button>
                  <Button onClick={() => handleBookVisit(branch.name, branch.whatsapp)} className="flex-1 btn-outline">
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
