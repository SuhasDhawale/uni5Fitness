"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function Gallery() {
  const [selectedBranch, setSelectedBranch] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/cardio-section.jpg",
      alt: "Cardio Section",
      branch: "brahmapuri",
    },
    {
      src: "/weight-training.jpg",
      alt: "Weight Training Area",
      branch: "armori",
    },
    {
      src: "/group-class.jpg",
      alt: "Group Fitness Class",
      branch: "brahmapuri",
    },
    {
      src: "/personal-training.jpg",
      alt: "Personal Training",
      branch: "armori",
    },
    {
      src: "/yoga-area.jpg",
      alt: "Yoga Area",
      branch: "brahmapuri",
    },
    {
      src: "/functional-zone.jpg",
      alt: "Functional Training Zone",
      branch: "armori",
    },
  ]

  const branches = [
    { key: "all", label: "All Branches" },
    { key: "brahmapuri", label: "Brahmapuri" },
    { key: "armori", label: "Armori" },
  ]

  const filteredImages = galleryImages.filter((image) => {
    return selectedBranch === "all" || image.branch === selectedBranch
  })

  return (
    <section className="py-20 gradient-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-accent-red mb-6">OUR GALLERY</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Take a virtual tour of our state-of-the-art facilities and see what makes UNi5 Fitness Club special.
          </p>
        </div>

        {/* Branch Filter Only */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {branches.map((branch) => (
            <button
              key={branch.key}
              onClick={() => setSelectedBranch(branch.key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedBranch === branch.key
                  ? "bg-yellow-500 text-black glow-yellow"
                  : "glass-effect text-white hover:bg-gray-800"
              }`}
            >
              {branch.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white font-bold text-lg mb-2">{image.alt}</h3>
                  <p className="text-yellow-500 capitalize">{image.branch} Branch</p>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-sm capitalize">
                {image.branch}
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No images found for the selected branch.</p>
          </div>
        )}

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl bg-black border-gray-800 p-0">
            {selectedImage && (
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery Image"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
                loading="eager"
                sizes="(max-width: 1024px) 90vw, 800px"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
