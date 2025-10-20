"use client"

import { useState } from "react"

export default function GoogleMaps() {
  const [selectedBranch, setSelectedBranch] = useState("brahmapuri")

  const branches = {
    brahmapuri: {
      name: "Brahmapuri Branch",
      address: "Shantanu Building Ground floor, Tilak Nagar, Wadsa Road Brahmapuri MH- 441206",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5!2d79.9!3d20.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM2JzAwLjAiTiA3OcKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
    },
    armori: {
      name: "Armori Branch",
      address: "Behind Chandu Kirana Store, 1st floor Above Bank of India, Armori MH - 441208",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5!2d79.8!3d20.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQyJzAwLjAiTiA3OcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
    },
  }

  return (
    <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">Find Our Locations</h3>

      {/* Branch Selector */}
      <div className="flex justify-center gap-4 mb-6">
        {Object.entries(branches).map(([key, branch]) => (
          <button
            key={key}
            onClick={() => setSelectedBranch(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedBranch === key ? "bg-yellow-500 text-black" : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {branch.name}
          </button>
        ))}
      </div>

      {/* Map */}
      <div className="relative h-96 rounded-lg overflow-hidden">
        <iframe
          src={branches[selectedBranch as keyof typeof branches].embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        />
      </div>

      <div className="mt-4 text-center">
        <h4 className="text-lg font-bold text-white mb-2">{branches[selectedBranch as keyof typeof branches].name}</h4>
        <p className="text-gray-400">{branches[selectedBranch as keyof typeof branches].address}</p>
      </div>
    </div>
  )
}
