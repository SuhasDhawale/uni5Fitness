"use client"

import { useState } from "react"

export default function GoogleMaps() {
  const branches = {
    brahmapuri: {
      name: "Brahmapuri Branch",
      address:
        "Shantanu Building, Ground Floor, Tilak Nagar, Wadsa Road, Brahmapuri, MH - 441206",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.515!2d79.878!3d20.612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2d0d6b7c4c3fd7%3A0xb7b8f9e47e1a5e1!2sBrahmapuri%2C%20Maharashtra%20441206!5e0!3m2!1sen!2sin!4v1730000000000!5m2!1sen!2sin",
    },
    armori: {
      name: "Armori Branch",
      address:
        "Behind Chandu Kirana Store, 1st Floor, Above Bank of India, Armori, MH - 441208",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.933!2d79.870!3d20.694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2d13e7461c86c3%3A0xe7f80d8c76eb0d4b!2sArmori%2C%20Maharashtra%20441208!5e0!3m2!1sen!2sin!4v1730000000001!5m2!1sen!2sin",
    },
  }

  type BranchKey = keyof typeof branches
  const [selectedBranch, setSelectedBranch] = useState<BranchKey>("brahmapuri")

  const currentBranch = branches[selectedBranch]

  return (
    <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Find Our Locations
      </h3>

      {/* Branch Selector */}
      <div className="flex justify-center flex-wrap gap-4 mb-6">
        {Object.entries(branches).map(([key, branch]) => (
          <button
            key={key}
            onClick={() => setSelectedBranch(key as BranchKey)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedBranch === key
                ? "bg-yellow-500 text-black"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {branch.name}
          </button>
        ))}
      </div>

      {/* Map */}
      <div className="relative h-96 rounded-lg overflow-hidden">
        <iframe
          src={currentBranch.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        />
      </div>

      {/* Address */}
      <div className="mt-4 text-center">
        <h4 className="text-lg font-bold text-white mb-2">
          {currentBranch.name}
        </h4>
        <p className="text-gray-400">{currentBranch.address}</p>
      </div>
    </div>
  )
}
