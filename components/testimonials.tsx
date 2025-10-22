"use client"

import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Deshmukh",
      location: "Brahmapuri",
      rating: 5,
      image: "/placeholder.svg",
      text: "UNi5 Fitness Club completely transformed my life! Lost 15kg in 4 months with their expert guidance and personalized diet plan. The trainers are highly professional and motivating.",
      program: "Weight Loss Program",
    },
    {
      name: "Priya Sharma",
      location: "Armori",
      rating: 5,
      image: "/placeholder.svg",
      text: "Best gym in the region! The ladies' Zumba classes are amazing and the atmosphere is so positive. I've gained so much confidence and strength here.",
      program: "Zumba & Fitness",
    },
    {
      name: "Amit Patil",
      location: "Brahmapuri",
      rating: 5,
      image: "/placeholder.svg",
      text: "Being a working professional, I needed flexible timings and personalized attention. UNi5 provided exactly that with their online training options too. Highly recommended!",
      program: "Personal Training",
    },
    {
      name: "Sneha Reddy",
      location: "Armori",
      rating: 5,
      image: "/placeholder.svg",
      text: "The G99 Academy certification helped me become a professional trainer. The course was comprehensive and the placement support was excellent!",
      program: "G99 Academy Student",
    },
    {
      name: "Vikram Singh",
      location: "Brahmapuri",
      rating: 5,
      image: "/placeholder.svg",
      text: "Started my CrossFit journey here and never looked back. The equipment is top-notch and trainers know exactly how to push you to your limits safely.",
      program: "CrossFit Training",
    },
    {
      name: "Kavita Joshi",
      location: "Armori",
      rating: 5,
      image: "/placeholder.svg",
      text: "After my pregnancy, I was looking for a safe way to get back in shape. The trainers here designed a perfect rehabilitation program for me. Forever grateful!",
      program: "Post-Pregnancy Fitness",
    },
  ]

  return (
    <section id="testimonials" className="py-12 md:py-20 gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            WHAT OUR <span className="text-red-600">MEMBERS SAY</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
            Real transformations, real stories. Hear from our 1600+ satisfied members who achieved their fitness goals
            with UNi5 Fitness Club.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-effect p-6 md:p-8 rounded-lg border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden mr-4 bg-gray-800">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-base md:text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs md:text-sm">{testimonial.location}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-yellow-500/20" />
                <p className="text-gray-300 text-sm md:text-base leading-relaxed pl-6">{testimonial.text}</p>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <span className="text-yellow-500 text-xs md:text-sm font-semibold">{testimonial.program}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-base md:text-lg mb-4">Join our community of 1600+ satisfied members today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917020747820?text=I%20want%20to%20start%20my%20fitness%20journey"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center px-8 py-3 text-base md:text-lg"
            >
              START YOUR TRANSFORMATION
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
