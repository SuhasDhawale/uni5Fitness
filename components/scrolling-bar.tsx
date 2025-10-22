"use client"

import { Gift, Clock, Users, Award } from "lucide-react"

export default function ScrollingBar() {
  const offers = [
    { icon: Gift, text: "FREE NUTRITION CONSULTATION FOR QUICK JOINERS" },
    { icon: Clock, text: "MORNING: 5:30 AM - 10:30 AM / EVENING: 5:30 PM - 9:30 PM" },
    { icon: Users, text: "PERSONAL TRAINING SESSIONS" },
    { icon: Award, text: "CERTIFIED PROFESSIONAL TRAINERS" },
    { icon: Gift, text: "FREE DIET PLAN WITH MEMBERSHIP" },
    { icon: Users, text: "LADIES SPECIAL ZUMBA BATCHES" },
    { icon: Users, text: "ONLINE & OFFLINE PERSONAL TRAINING" },
  ]

  return (
    <div className="bg-red-600 py-4 overflow-hidden">
      <div className="animate-scroll flex whitespace-nowrap">
        {[...offers, ...offers, ...offers].map((offer, index) => (
          <div key={index} className="flex items-center mx-8 text-white font-semibold">
            <offer.icon className="w-5 h-5 mr-2" />
            <span className="text-lg">{offer.text}</span>
            <span className="mx-8 text-yellow-500">★</span>
          </div>
        ))}
      </div>
    </div>
  )
}
