"use client"

import { useState } from "react"
import { Award, MapPin, Star, FileText, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"

export default function Trainers() {
  const [selectedBranch, setSelectedBranch] = useState("all")

  const trainers = [
    {
      name: "Rahul Sharma",
      branch: "brahmapuri",
      specialization: "Strength Training & Powerlifting",
      mode: "Online/Offline",
      experience: "5 Years",
      certifications: ["NASM-CPT", "Powerlifting Coach Level 2", "Nutrition Specialist"],
      image: "/trainer-rahul.jpg",
      rating: 4.9,
      clients: 150,
      whatsapp: "919403235684",
    },
    {
      name: "Priya Patel",
      branch: "armori",
      specialization: "Yoga & Functional Training",
      mode: "Online",
      experience: "4 Years",
      certifications: ["RYT-500", "Functional Movement Screen", "Women's Fitness Specialist"],
      image: "/trainer-priya.jpg",
      rating: 4.8,
      clients: 120,
      whatsapp: "917020747820",
    },
    {
      name: "Amit Kumar",
      branch: "brahmapuri",
      specialization: "Bodybuilding & Nutrition",
      mode: "Offline",
      experience: "6 Years",
      certifications: ["IFBB Pro Card", "Sports Nutritionist", "Contest Prep Coach"],
      image: "/trainer-amit.jpg",
      rating: 4.9,
      clients: 200,
      whatsapp: "919403235684",
    },
    {
      name: "Sneha Desai",
      branch: "armori",
      specialization: "Weight Loss & Cardio",
      mode: "Online/Offline",
      experience: "3 Years",
      certifications: ["ACE-CPT", "Weight Management Specialist", "Group Fitness Instructor"],
      image: "/trainer-sneha.jpg",
      rating: 4.7,
      clients: 100,
      whatsapp: "917020747820",
    },
    {
      name: "Vikram Singh",
      branch: "brahmapuri",
      specialization: "CrossFit & Athletic Performance",
      mode: "Offline",
      experience: "7 Years",
      certifications: ["CrossFit Level 3", "Olympic Weightlifting", "Sports Performance Coach"],
      image: "/trainer-vikram.jpg",
      rating: 4.9,
      clients: 180,
      whatsapp: "919403235684",
    },
    {
      name: "Kavya Reddy",
      branch: "armori",
      specialization: "Pilates & Rehabilitation",
      mode: "Online",
      experience: "4 Years",
      certifications: ["PMA-CPT", "Physical Therapy Assistant", "Corrective Exercise Specialist"],
      image: "/trainer-kavya.jpg",
      rating: 4.8,
      clients: 90,
      whatsapp: "917020747820",
    },
  ]

  const branches = [
    { key: "all", label: "All Branches" },
    { key: "armori", label: "Armori" },
    { key: "brahmapuri", label: "Brahmapuri" },
  ]

  const filteredTrainers = selectedBranch === "all" ? trainers : trainers.filter((t) => t.branch === selectedBranch)

  const handleBookSession = (trainer: (typeof trainers)[0]) => {
    const message = `Hi ${trainer.name}! I would like to book a personal training session. Please let me know your availability.`
    window.open(`https://wa.me/${trainer.whatsapp}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const CertificationModal = ({ trainer }: { trainer: (typeof trainers)[0] }) => {
    const samplePdfUrl = "https://www.africau.edu/images/default/sample.pdf"
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black bg-transparent transition-all text-xs md:text-sm py-2"
          >
            <Eye className="w-4 h-4 mr-2" />
            View Certificates
          </Button>
        </DialogTrigger>
        <DialogContent className="glass-effect border text-white max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-yellow-500 text-lg md:text-xl">{trainer.name} - Certifications</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {trainer.certifications.map((cert, index) => (
              <div key={index} className="bg-black/50 p-4 rounded-lg border border-gray-800">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm md:text-base">{cert}</h4>
                      <p className="text-xs md:text-sm text-gray-400">Certified Professional</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="btn-secondary text-xs md:text-sm w-full sm:w-auto"
                    onClick={() => window.open(samplePdfUrl, "_blank")}
                  >
                    <FileText className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    View PDF
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <section id="trainers" className="py-12 md:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            MEET OUR EXPERT <span className="text-red-600">TRAINERS</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto mb-6 md:mb-8">
            Our certified professional trainers are dedicated to helping you achieve your fitness goals with
            personalized training programs and expert guidance.
          </p>

          {/* Branch Filter - Mobile Optimized */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            {branches.map((branch) => (
              <button
                key={branch.key}
                onClick={() => setSelectedBranch(branch.key)}
                className={`px-5 md:px-6 py-3 rounded-lg font-semibold transition-all text-sm md:text-base ${
                  selectedBranch === branch.key
                    ? "bg-yellow-500 text-black glow-yellow shadow-lg"
                    : "glass-effect text-white hover:bg-gray-800"
                }`}
              >
                {branch.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredTrainers.map((trainer, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 group card-hover flex flex-col"
            >
              <div className="relative h-56 md:h-64 w-full">
                <Image
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  quality={80}
                />
                <div className="absolute top-3 right-3 glass-effect text-white px-2 py-1 rounded-full text-sm flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>{trainer.rating}</span>
                </div>
                <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {trainer.mode}
                </div>
              </div>

              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{trainer.name}</h3>
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="text-gray-300 capitalize text-sm md:text-base">{trainer.branch}</span>
                </div>

                <p className="text-yellow-500 font-semibold mb-2 text-sm md:text-base">{trainer.specialization}</p>
                <p className="text-gray-400 text-sm mb-4">
                  {trainer.experience} Experience • {trainer.clients} Clients
                </p>

                <div className="mb-4 flex-grow">
                  <h4 className="text-white font-semibold mb-2 text-sm md:text-base">Certifications:</h4>
                  <div className="space-y-1">
                    {trainer.certifications.slice(0, 2).map((cert, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Award className="w-3 h-3 text-yellow-500 mt-0.5 shrink-0" />
                        <span className="text-gray-300 text-xs md:text-sm">{cert}</span>
                      </div>
                    ))}
                    {trainer.certifications.length > 2 && (
                      <p className="text-yellow-500 text-xs md:text-sm">+{trainer.certifications.length - 2} more</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-auto">
                  <Button className="w-full btn-secondary text-sm py-2.5" onClick={() => handleBookSession(trainer)}>
                    BOOK SESSION
                  </Button>
                  <CertificationModal trainer={trainer} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
