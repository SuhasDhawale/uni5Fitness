"use client"

import { GraduationCap, Award, Users, BookOpen, Trophy, Target, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import { useState } from "react"

export default function G99Academy() {
  const [selectedBranch, setSelectedBranch] = useState<"armori" | "brahmapuri" | null>(null)

  const courses = [
    {
      title: "Certified Personal Trainer (CPT)",
      duration: "3 Months",
      description: "Comprehensive training program covering anatomy, exercise physiology, and client management.",
      features: ["Anatomy & Physiology", "Exercise Programming", "Nutrition Basics", "Client Assessment"],
    },
    {
      title: "Advanced Nutrition Course",
      duration: "2 Months",
      description: "In-depth study of sports nutrition, meal planning, and dietary supplements.",
      features: ["Sports Nutrition", "Meal Planning", "Supplement Science", "Diet Counseling"],
    },
    {
      title: "Strength & Conditioning",
      duration: "4 Months",
      description: "Specialized program for athletic performance and strength training methodologies.",
      features: ["Olympic Lifting", "Powerlifting", "Athletic Performance", "Injury Prevention"],
    },
  ]

  const stats = [
    { icon: Users, number: "500+", label: "Certified Trainers" },
    { icon: Trophy, number: "7", label: "Years Experience" },
    { icon: Award, number: "95%", label: "Success Rate" },
    { icon: Target, number: "50+", label: "Placement Partners" },
  ]

  const handleEnrollNow = () => {
    window.open("https://wa.me/919403235684?text=I'm%20interested%20in%20enrolling%20in%20G99%20Academy", "_blank")
  }

  const handleDownloadBrochure = (branch: "armori" | "brahmapuri") => {
    // In production, replace with actual PDF URLs
    const brochureUrls = {
      armori: "/brochures/G99_Academy_Armori_Brochure.pdf",
      brahmapuri: "/brochures/G99_Academy_Brahmapuri_Brochure.pdf",
    }

    // For now, show alert. In production, this will download the PDF
    alert(
      `Downloading ${branch === "armori" ? "Armori" : "Brahmapuri"} branch brochure. Please contact us for the latest brochure.`,
    )
    // window.open(brochureUrls[branch], '_blank')
  }

  return (
    <section id="academy" className="py-12 md:py-20 gradient-primary relative overflow-hidden">
      <div className="absolute top-20 right-20 opacity-5 hidden md:block">
        <Dumbbell className="w-24 h-24 text-red-600 animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-red mb-4 md:mb-6">
            G99 FITNESS ACADEMY
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
            Professional fitness education and certification programs established in Pune since 2018. Transform your
            passion for fitness into a rewarding career.
          </p>
        </div>

        {/* Stats - Mobile Optimized */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 glow-yellow">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-xs md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
              Courses We <span className="text-yellow-500">Offer</span>
            </h3>
            <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
              Our comprehensive certification programs are designed by industry experts to provide you with the
              knowledge and skills needed to excel in the fitness industry.
            </p>

            <div className="space-y-4 md:space-y-6">
              {courses.map((course, index) => (
                <div key={index} className="glass-effect p-4 md:p-6 rounded-lg border card-hover">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 md:mb-4">
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2 sm:mb-0">{course.title}</h4>
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm self-start">
                      {course.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">{course.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-center">
              <Image
                src="/images/g99-logo.jpg"
                alt="G99 Academy"
                width={200}
                height={200}
                className="rounded-lg object-cover"
                loading="lazy"
                quality={80}
                sizes="200px"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-yellow-500 text-black p-4 md:p-6 rounded-lg glow-yellow">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />
                <div>
                  <div className="text-lg md:text-2xl font-bold">Est. 2018</div>
                  <div className="text-xs md:text-sm">Pune, Maharashtra</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="glass-effect p-6 md:p-8 rounded-lg border card-hover mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
            Success <span className="text-accent-red">Stories</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-yellow">
                <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" />
              </div>
              <h4 className="text-base md:text-lg font-bold text-white mb-2">Professional Placement</h4>
              <p className="text-gray-400 text-sm md:text-base">
                95% of our graduates find employment within 3 months of certification completion.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-red">
                <Trophy className="w-8 h-8 md:w-10 md:h-10 text-red-600" />
              </div>
              <h4 className="text-base md:text-lg font-bold text-white mb-2">Industry Recognition</h4>
              <p className="text-gray-400 text-sm md:text-base">
                Our certification is recognized by leading fitness centers and gyms across India.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-secondary px-6 md:px-8 py-3 text-base md:text-lg" onClick={handleEnrollNow}>
              ENROLL NOW
            </Button>

            
          </div>
        </div>
      </div>
    </section>
  )
}
