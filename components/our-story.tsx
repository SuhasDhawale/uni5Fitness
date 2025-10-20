import { MapPin, Users, Trophy } from "lucide-react"
import Image from "next/image"

export default function OurStory() {
  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      description: "G99 Fitness Academy established in Pune, laying the foundation for professional fitness education.",
      icon: Trophy,
      color: "yellow",
    },
    {
      year: "2021",
      title: "Brahmapuri Branch",
      description:
        "First UNi5 Fitness Club opened in Brahmapuri, bringing professional fitness training to the community.",
      icon: MapPin,
      color: "red",
    },
    {
      year: "2022",
      title: "Armori Expansion",
      description: "Second branch launched in Armori, expanding our reach and serving more fitness enthusiasts.",
      icon: Users,
      color: "yellow",
    },
  ]

  return (
    <section id="story" className="py-12 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-4 md:mb-6">OUR STORY</h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
            From a vision to transform lives through fitness, UNi5 Fitness Club has grown into a trusted name in
            professional fitness training across Maharashtra.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-500 via-red-600 to-yellow-500 hidden md:block"></div>

          <div className="space-y-8 md:space-y-16">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8 lg:pr-12 md:text-right" : "md:pl-8 lg:pl-12 md:text-left"} mb-4 md:mb-0`}
                >
                  <div className="glass-effect p-6 md:p-8 rounded-lg border border-gray-800 card-hover">
                    <div
                      className={`text-xl md:text-2xl font-bold mb-2 ${
                        item.color === "yellow" ? "text-yellow-500" : "text-red-600"
                      }`}
                    >
                      {item.year}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{item.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-4 ${
                    item.color === "yellow"
                      ? "bg-yellow-500 border-yellow-500 glow-yellow"
                      : "bg-red-600 border-red-600 glow-red"
                  } relative z-10 mb-4 md:mb-0 shrink-0`}
                >
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-black" />
                </div>

                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Founders Section */}
        <div className="mt-16 md:mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
            OUR <span className="text-red-600">FOUNDERS</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="glass-effect p-6 md:p-8 rounded-lg border border-gray-800 card-hover">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gray-800">
                <Image
                  src="/images/founder1.jpg"
                  alt="Swapnil Raut"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                  loading="lazy"
                  quality={80}
                />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Swapnil Haridas Raut</h4>
              <p className="text-yellow-500 font-semibold mb-3 md:mb-4">Founder</p>
              <p className="text-gray-400 text-sm md:text-base">
                Passionate fitness professional dedicated to transforming lives through holistic wellness approaches.
              </p>
            </div>
            <div className="glass-effect p-6 md:p-8 rounded-lg border border-gray-800 card-hover">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gray-800">
                <Image
                  src="/images/founder2.jpg"
                  alt="Ankit Dhanorkar"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                  loading="lazy"
                  quality={80}
                />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Ankit Sanjay Dhanorkar</h4>
              <p className="text-red-600 font-semibold mb-3 md:mb-4">Founder</p>
              <p className="text-gray-400 text-sm md:text-base">
                Expert trainer committed to helping clients achieve their fitness goals through professional guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
