"use client"

import React, { useMemo, useState } from "react"
import Image from "next/image"
import { Award, MapPin, Star, FileText, Eye, ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"

type Certification = {
  id: string
  title: string
  issuer?: string
  year?: string
  pdfUrl: string
}

type Trainer = {
  name: string
  branch: string
  specialization: string
  mode: string
  experience: string
  certifications: Certification[]
  image?: string
  rating?: number
  clients?: string | number
  whatsapp?: string
}

export default function Trainers() {
  const [selectedBranch, setSelectedBranch] = useState<string>("all")

  // modal state: open/close, and whether modal shows list or viewer
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalView, setModalView] = useState<"list" | "viewer">("list")
  const [activeTrainer, setActiveTrainer] = useState<Trainer | null>(null)
  const [activeCert, setActiveCert] = useState<Certification | null>(null)

  const trainers: Trainer[] = useMemo(
    () => [
      {
        name: "Swapnil Raut",
        branch: "armori",
        specialization: "Strength Training & Powerlifting",
        mode: "Online/Offline",
        experience: "12+ Years",
        certifications: [
          { id: "s1", title: "NASM-CPT", issuer: "NASM", year: "2018", pdfUrl: "/certs/swapnil-nasm.pdf" },
          { id: "s2", title: "Powerlifting Coach Level 2", issuer: "IPF", year: "2020", pdfUrl: "/certs/swapnil-powerlifting.pdf" },
          { id: "s3", title: "Nutrition Specialist", issuer: "Precision Nutrition", year: "2019", pdfUrl: "https://www.africau.edu/images/default/sample.pdf" },
        ],
        image: "/trainer-rahul.jpg",
        rating: 4.9,
        clients: "250+",
        whatsapp: "917020747820",
      },
      {
        name: "Priya Patel",
        branch: "armori",
        specialization: "Yoga & Functional Training",
        mode: "Online",
        experience: "4 Years",
        certifications: [
          { id: "p1", title: "RYT-500", issuer: "Yoga Alliance", year: "2021", pdfUrl: "/certs/priya-ryt500.pdf" },
          { id: "p2", title: "Functional Movement Screen", pdfUrl: "/certs/priya-fms.pdf" },
        ],
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
        certifications: [
          { id: "a1", title: "IFBB Pro Card", pdfUrl: "/certs/amit-ifbb.pdf" },
          { id: "a2", title: "Sports Nutritionist", pdfUrl: "/certs/amit-sports-nutrition.pdf" },
        ],
        image: "/trainer-amit.jpg",
        rating: 4.9,
        clients: 200,
        whatsapp: "919403235684",
      },
    ],
    []
  )

  const branches = [
    { key: "all", label: "All Branches" },
    { key: "armori", label: "Armori" },
    { key: "brahmapuri", label: "Brahmapuri" },
  ]

  const filteredTrainers = selectedBranch === "all" ? trainers : trainers.filter((t) => t.branch === selectedBranch)

  const handleBookSession = (trainer: Trainer) => {
    const message = `Hi ${trainer.name}! I would like to book a personal training session. Please let me know your availability.`
    if (!trainer.whatsapp) return
    window.open(`https://wa.me/${trainer.whatsapp}?text=${encodeURIComponent(message)}`, "_blank")
  }

  // open modal and show the list of certs for a trainer
  const openCertificatesModal = (trainer: Trainer) => {
    setActiveTrainer(trainer)
    setActiveCert(null)
    setModalView("list")
    setIsModalOpen(true)
  }

  // open a certificate inside the same modal (viewer view)
  const openCertInModalViewer = (cert: Certification) => {
    setActiveCert(cert)
    setModalView("viewer")
    // keep modal open
  }

  // open certificate in new tab
  const openCertInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  // close modal and reset
  const closeModal = () => {
    setIsModalOpen(false)
    setModalView("list")
    setActiveCert(null)
    setActiveTrainer(null)
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

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            {branches.map((branch) => (
              <button
                key={branch.key}
                onClick={() => setSelectedBranch(branch.key)}
                aria-pressed={selectedBranch === branch.key}
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
            <article
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
                />

                <div className="absolute top-3 right-3 glass-effect text-white px-2 py-1 rounded-full text-sm flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>{trainer.rating ?? "—"}</span>
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

                <p className="text-yellow-500 font-semibold mb-2 text-sm md:text-base">
                  {trainer.specialization}
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  {trainer.experience} Experience • {trainer.clients} Clients
                </p>

                <div className="mb-4 flex-grow">
                  <h4 className="text-white font-semibold mb-2 text-sm md:text-base">Certifications:</h4>
                  <div className="space-y-2">
                    {trainer.certifications.slice(0, 2).map((cert) => (
                      <div key={cert.id} className="flex items-center justify-between gap-2">
                        <div className="flex items-start space-x-2">
                          <Award className="w-3 h-3 text-yellow-500 mt-0.5 shrink-0" />
                          <span className="text-gray-300 text-xs md:text-sm">{cert.title}</span>
                        </div>
                      </div>
                    ))}

                    {trainer.certifications.length > 2 && (
                      <p className="text-yellow-500 text-xs md:text-sm">
                        +{trainer.certifications.length - 2} more
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-auto">
                  <Button
                    className="w-full btn-secondary text-sm py-2.5"
                    onClick={() => handleBookSession(trainer)}
                  >
                    BOOK SESSION
                  </Button>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black bg-transparent transition-all text-xs md:text-sm py-2"
                      onClick={() => openCertificatesModal(trainer)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Certificates
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* modal that first shows list, and then viewer inside same modal */}
      <Dialog
        open={isModalOpen}
        onOpenChange={(val) => {
          if (!val) closeModal()
          else setIsModalOpen(val)
        }}
      >
        <DialogContent className="glass-effect border text-white max-w-4xl w-[96%] sm:w-[86%] md:w-[75%] lg:w-[64%] p-0 max-h-[90vh] overflow-hidden">
          <DialogHeader className="px-4 py-3 border-b border-gray-800 flex items-center justify-between">
            <DialogTitle className="text-yellow-500 text-lg md:text-xl">
              {modalView === "list"
                ? `${activeTrainer?.name} - Certifications`
                : activeCert?.title}
            </DialogTitle>
            <div className="flex items-center gap-2">
              {modalView === "viewer" && activeCert && (
                <Button
                  size="sm"
                  className="text-xs md:text-sm"
                  onClick={() => openCertInNewTab(activeCert.pdfUrl)}
                >
                  Open in new tab
                </Button>
              )}
              <Button
                size="sm"
                variant={undefined}
                className="p-2"
                onClick={() => closeModal()}
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </DialogHeader>

          {/* CONTENT AREA */}
          <div className="w-full bg-black/70">
            {modalView === "list" && (
              <div className="p-4 space-y-3 overflow-y-auto max-h-[70vh]">
                {activeTrainer?.certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-black/50 p-3 rounded-lg border border-gray-800 flex items-center justify-between"
                  >
                    <div className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-yellow-500" />
                      <div>
                        <h4 className="font-semibold text-sm md:text-base">{cert.title}</h4>
                        <p className="text-xs text-gray-400">
                          {cert.issuer ?? "Certified Professional"} •{" "}
                          {cert.year ?? "—"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        className="btn-secondary text-xs md:text-sm"
                        onClick={() => openCertInModalViewer(cert)}
                      >
                        <FileText className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant={undefined}
                        className="text-xs md:text-sm"
                        onClick={() => openCertInNewTab(cert.pdfUrl)}
                      >
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        New Tab
                      </Button>
                    </div>
                  </div>
                ))}

                {(!activeTrainer || activeTrainer.certifications.length === 0) && (
                  <div className="text-gray-400">No certificates available.</div>
                )}
              </div>
            )}

            {modalView === "viewer" && activeCert && (
              <div className="flex flex-col h-[70vh] sm:h-[75vh] md:h-[80vh]">
                <div className="px-4 py-2 border-b border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-yellow-400" />
                    <div>
                      <h4 className="font-semibold text-sm md:text-base">
                        {activeCert.title}
                      </h4>
                      <p className="text-xs text-gray-400">
                        {activeCert.issuer ?? "Certified Professional"} •{" "}
                        {activeCert.year ?? "—"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      className="text-xs md:text-sm"
                      onClick={() => openCertInNewTab(activeCert.pdfUrl)}
                    >
                      Open in new tab
                    </Button>
                    <Button
                      size="sm"
                      variant={undefined}
                      className="text-xs md:text-sm"
                      onClick={() => {
                        setModalView("list")
                        setActiveCert(null)
                      }}
                    >
                      Back
                    </Button>
                  </div>
                </div>

                <div className="flex-1 bg-gray-900 overflow-hidden">
                  {/* iframe viewer optimized for responsiveness */}
                  <iframe
                    src={activeCert.pdfUrl}
                    title={activeCert.title}
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            )}
          </div>

          <DialogFooter className="px-4 py-3 border-t border-gray-800">
            <p className="text-xs text-gray-400">
              Tip: Use the View option to preview inside this small modal. Open in new tab will open the PDF in a separate tab for downloading or printing.
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
