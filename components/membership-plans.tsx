"use client"

import { useState } from "react"
import { Check, Star, Crown, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

type BranchKey = "armori" | "brahmapuri"
type DurationKey = "monthly" | "quarterly" | "sixMonth" | "yearly"

export default function MembershipPlans() {
  const [selectedDuration, setSelectedDuration] = useState<DurationKey>("monthly")
  const [selectedBranch, setSelectedBranch] = useState<BranchKey>("armori") // Default to Armori

  // Branch-specific WhatsApp numbers
  const branchContacts: Record<BranchKey, string> = {
    armori: "917020747820",
    brahmapuri: "919403235684",
  }

  const handleJoinNow = (planName: string, price: number) => {
    const branchName = selectedBranch === "armori" ? "Armori" : "Brahmapuri"
    const whatsappNumber = branchContacts[selectedBranch as keyof typeof branchContacts]
    const message = `Hi! I want to join the ${planName} plan for ₹${price} at ${branchName} branch. Please provide more details.`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  /* -------------------------
     Exact prices you provided
     -------------------------
     Durations: 1 month, 3 months (quarterly), 6 months, yearly
     Armori: exact values as supplied
     Brahmapuri: premium exact as supplied; elite = premium + 6000 per MONTH ( => multiply months)
  */
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
      // Basic exists only for Armori per your instructions (no brahmapuri basic)
      prices: {
        monthly: { armori: 600 },
        quarterly: { armori: 1800 },
        sixMonth: { armori: 3900 },
        yearly: { armori: 6500 },
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
      // Premium: exact values you gave
      prices: {
        monthly: { armori: 800, brahmapuri: 1200 },
        quarterly: { armori: 2400, brahmapuri: 2500 },
        sixMonth: { armori: 4500, brahmapuri: 4500 },
        yearly: { armori: 8000, brahmapuri: 7000 },
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
      // Armori elite exact values (you provided)
      prices: {
        monthly: { armori: 6800 },
        quarterly: { armori: 18000 },
        sixMonth: { armori: 37999 },
        yearly: { armori: 70000 },
        // brahmapuri elite will be computed dynamically (premium + 6000 per month)
      },
    },
  }

  // helper: months count per duration key
  const monthsCount: Record<DurationKey, number> = {
    monthly: 1,
    quarterly: 3,
    sixMonth: 6,
    yearly: 12,
  }

  // compute brahmapuri elite prices = brahmapuri premium + 6000 * months
  const computeBrahmapuriElitePrice = (dur: DurationKey) => {
    const premiumObj = (plans.premium.prices as any)[dur]
    const prem = premiumObj?.brahmapuri
    if (typeof prem === "number") {
      const months = monthsCount[dur]
      return prem + 6000 * months
    }
    return null
  }

  // list of durations to render (keeps your original labels and style)
  const durations = [
    { key: "monthly", label: "Monthly" },
    { key: "quarterly", label: "Quarterly" },
    { key: "sixMonth", label: "6 Months" },
    { key: "yearly", label: "Yearly", discount: "Save 20%" },
  ]

  const branches = [
    { key: "armori", label: "Armori Branch" },
    { key: "brahmapuri", label: "Brahmapuri Branch" },
  ]

  // get price for plan key + duration + branch
  function getPrice(planKey: keyof typeof plans, dur: DurationKey, branch: BranchKey): number | null {
    const plan = (plans as any)[planKey]
    if (!plan) return null
    // special: brahmapuri elite computed using premium + 6000 per month
    if (planKey === "elite" && branch === "brahmapuri") {
      const v = computeBrahmapuriElitePrice(dur)
      return typeof v === "number" ? v : null
    }
    // basic has only armori — for brahmapuri basic should be null
    const durObj = plan.prices[dur]
    if (!durObj) return null
    const val = durObj[branch]
    return typeof val === "number" ? val : null
  }

  // For yearly: produce a fake original (cut) price computed from final price.
  // original = Math.round(final * factor) where factor is random in [1.25, 1.40]
  // discountPercent = rounded percentage from original -> final
  function makeFakeOriginal(finalPrice: number) {
    const factor = Math.random() * (1.40 - 1.25) + 1.25
    const original = Math.round(finalPrice * factor)
    const percent = Math.round(((original - finalPrice) / original) * 100)
    return { original, percent }
  }

  // Which plans to show per branch
  const availablePlans = selectedBranch === "armori" ? ["basic", "premium", "elite"] : ["premium", "elite"]

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

          {/* Branch Selector - unchanged classes */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-8">
            {branches.map((branch) => (
              <button
                key={branch.key}
                onClick={() => setSelectedBranch(branch.key as BranchKey)}
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

          {/* Duration Selector (added 6-month option) */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {durations.map((duration) => (
              <button
                key={duration.key}
                onClick={() => setSelectedDuration(duration.key as DurationKey)}
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

        {/* Plan cards (structure & classes kept identical) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {availablePlans.map((planKey) => {
            const plan = (plans as any)[planKey]
            const price = getPrice(planKey as any, selectedDuration, selectedBranch)
            if (price === null) return null

            const isYearly = selectedDuration === "yearly"
            const fake = isYearly ? makeFakeOriginal(price) : null

            return (
              <div
                key={planKey}
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

                  {/* Price display: yearly shows fake original (crossed) + final price & discount% */}
                  {isYearly ? (
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 line-through">₹{fake!.original}</span>
                        <span className="text-3xl md:text-4xl font-bold text-white">₹{price}</span>
                      </div>
                      <div className="text-green-400 text-sm font-semibold">{fake!.percent}% OFF</div>
                    </div>
                  ) : (
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      ₹{price}
                      <span className="text-base md:text-lg text-gray-400 font-normal ml-2">
                        /{selectedDuration === "monthly" ? "month" : selectedDuration === "quarterly" ? "quarter" : "6 months"}
                      </span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {plan.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                    </li>
                  ))}

                  {isYearly && (
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm md:text-base">Includes 1 extra month free (yearly)</span>
                    </li>
                  )}
                </ul>

                <Button
                  onClick={() => handleJoinNow(plan.name, price)}
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
            )
          })}
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
