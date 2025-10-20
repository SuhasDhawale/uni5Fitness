"use client"

import { useState } from "react"
import { Check, Star, Crown, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MembershipPlans() {
  const [selectedDuration, setSelectedDuration] = useState("monthly")
  const [selectedBranch, setSelectedBranch] = useState("armori") // Default to Armori

  // Branch-specific WhatsApp numbers
  const branchContacts = {
    armori: "917020747820",
    brahmapuri: "919403235684",
  }

  const handleJoinNow = (planName: string, price: number) => {
    const branchName = selectedBranch === "armori" ? "Armori" : "Brahmapuri"
    const whatsappNumber = branchContacts[selectedBranch as keyof typeof branchContacts]
    const message = `Hi! I want to join the ${planName} plan for ₹${price} at ${branchName} branch. Please provide more details.`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const plans = {
    basic: {
      name: "BASIC",
      icon: Zap,
      color: "gray",
      features: [
        "Gym Access",
        "Basic Equipment",
        "Locker Facility",
        "General Guidance",
        "Ladies Zumba Classes (Morning: 5:30-7:30 AM, Evening: 5:00-6:30 PM)",
      ],
      prices: {
        monthly: { armori: 1200, brahmapuri: 1200 },
        quarterly: { armori: 3200, brahmapuri: 2500 },
        yearly: { armori: 12000, brahmapuri: 7000 },
      },
    },
    premium: {
      name: "PREMIUM",
      icon: Star,
      color: "yellow",
      popular: true,
      features: [
        "All Basic Features",
        "Personal Training (2 sessions/month)",
        "Diet Consultation",
        "Group Classes",
        "Nutrition Guidance",
        "Progress Tracking",
        "Online Personal Training",
        "Ladies Zumba Classes (Morning: 5:30-7:30 AM, Evening: 5:00-6:30 PM)",
      ],
      prices: {
        monthly: { armori: 2000, brahmapuri: 2000 },
        quarterly: { armori: 5500, brahmapuri: 4500 },
        yearly: { armori: 20000, brahmapuri: 15000 },
      },
    },
    elite: {
      name: "ELITE",
      icon: Crown,
      color: "red",
      features: [
        "All Premium Features",
        "Unlimited Personal Training",
        "Custom Diet Plans",
        "24/7 Support",
        "Supplement Guidance",
        "Priority Support",
        "Guest Passes (2/month)",
        "Online Personal Training",
        "Ladies Zumba Classes (Morning: 5:30-7:30 AM, Evening: 5:00-6:30 PM)",
      ],
      prices: {
        monthly: { armori: 3500, brahmapuri: 6000 },
        quarterly: { armori: 9000, brahmapuri: 16000 },
        yearly: { armori: 32000, brahmapuri: 60000 },
      },
    },
  }

  const durations = [
    { key: "monthly", label: "Monthly" },
    { key: "quarterly", label: "Quarterly" },
    { key: "yearly", label: "Yearly", discount: "Save 20%" },
  ]

  const branches = [
    { key: "armori", label: "Armori Branch" },
    { key: "brahmapuri", label: "Brahmapuri Branch" },
  ]

  return (
    <section id="membership" className="py-12 md:py-20 gradient-primary">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            MEMBERSHIP <span className="text-gradient">PLANS</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto mb-6 md:mb-8">
            Choose the perfect plan that fits your fitness goals and budget. All plans include access to our
            professional trainers and modern equipment.
          </p>

          {/* Branch Selector - Mobile First */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-8">
            {branches.map((branch) => (
              <button
                key={branch.key}
                onClick={() => setSelectedBranch(branch.key)}
                className={`px-5 md:px-6 py-3 md:py-3 rounded-lg font-semibold transition-all transform hover:scale-105 text-sm md:text-base ${
                  selectedBranch === branch.key
                    ? "bg-red-500 text-white glow-red shadow-lg"
                    : "glass-effect text-white hover:bg-gray-700"
                }`}
              >
                {branch.label}
              </button>
            ))}
          </div>

          {/* Duration Selector */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {durations.map((duration) => (
              <button
                key={duration.key}
                onClick={() => setSelectedDuration(duration.key)}
                className={`px-5 md:px-6 py-3 md:py-3 rounded-lg font-semibold transition-all transform hover:scale-105 text-sm md:text-base ${
                  selectedDuration === duration.key
                    ? "bg-yellow-500 text-black glow-yellow shadow-lg"
                    : "glass-effect text-white hover:bg-gray-700"
                }`}
              >
                {duration.label}
                {duration.discount && (
                  <span className="ml-2 text-xs bg-red-500 text-white px-2 py-1 rounded">{duration.discount}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Object.entries(plans).map(([key, plan]) => (
            <div
              key={key}
              className={`relative glass-effect rounded-lg p-6 md:p-8 border-2 transition-all duration-300 card-hover ${
                plan.popular ? "border-yellow-500 glow-yellow" : "border-gray-800 hover:border-gray-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 gradient-accent text-black px-4 py-2 rounded-full text-xs md:text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-6 md:mb-8">
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    plan.color === "yellow"
                      ? "bg-yellow-500/20 glow-yellow"
                      : plan.color === "red"
                        ? "bg-red-500/20 glow-red"
                        : "bg-gray-500/20"
                  }`}
                >
                  <plan.icon
                    className={`w-7 h-7 md:w-8 md:h-8 ${
                      plan.color === "yellow"
                        ? "text-yellow-500"
                        : plan.color === "red"
                          ? "text-red-500"
                          : "text-gray-400"
                    }`}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  ₹{plan.prices[selectedDuration][selectedBranch]}
                  <span className="text-base md:text-lg text-gray-400 font-normal">
                    /{selectedDuration === "yearly" ? "year" : selectedDuration === "quarterly" ? "quarter" : "month"}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleJoinNow(plan.name, plan.prices[selectedDuration][selectedBranch])}
                className={`w-full py-3 text-base md:text-lg font-semibold transition-all transform hover:scale-105 ${
                  plan.color === "yellow"
                    ? "btn-primary"
                    : plan.color === "red"
                      ? "btn-secondary"
                      : "bg-gray-600 hover:bg-gray-700 text-white"
                }`}
              >
                JOIN NOW
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-gray-400 text-sm md:text-base">
            * Registration fee: ₹250/- (one-time) | All prices are subject to GST
          </p>
        </div>
      </div>
    </section>
  )
}
