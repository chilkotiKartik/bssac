"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { AipanBorder } from "@/components/decorative-elements"
import { districtsData } from "@/lib/district-data"

export function InteractiveMap() {
  const { language } = useLanguage()
  const [hoveredDistrict, setHoveredDistrict] = useState<number | null>(null)

  // Map district IDs to their coordinates on the map
  const districtCoordinates = [
    { id: 1, name: "Dehradun", x: 20, y: 60, width: 12, height: 12 },
    { id: 2, name: "Haridwar", x: 30, y: 75, width: 12, height: 12 },
    { id: 3, name: "Uttarkashi", x: 35, y: 30, width: 12, height: 12 },
    { id: 4, name: "Tehri Garhwal", x: 40, y: 45, width: 12, height: 12 },
    { id: 5, name: "Pauri Garhwal", x: 50, y: 55, width: 12, height: 12 },
    { id: 6, name: "Rudraprayag", x: 55, y: 40, width: 12, height: 12 },
    { id: 7, name: "Chamoli", x: 65, y: 30, width: 12, height: 12 },
    { id: 8, name: "Almora", x: 70, y: 50, width: 12, height: 12 },
    { id: 9, name: "Bageshwar", x: 75, y: 40, width: 12, height: 12 },
    { id: 10, name: "Pithoragarh", x: 85, y: 35, width: 12, height: 12 },
    { id: 11, name: "Champawat", x: 85, y: 55, width: 12, height: 12 },
    { id: 12, name: "Nainital", x: 70, y: 65, width: 12, height: 12 },
    { id: 13, name: "Udham Singh Nagar", x: 80, y: 75, width: 12, height: 12 },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <AipanBorder className="inline-block mb-4">
          <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
            {language === "hi" ? "उत्तराखंड का इंटरैक्टिव मानचित्र" : "Interactive Map of Uttarakhand"}
          </h2>
        </AipanBorder>
        <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
          {language === "hi"
            ? "उत्तराखंड के जिलों का अन्वेषण करने के लिए मानचित्र पर क्लिक करें"
            : "Click on the map to explore the districts of Uttarakhand"}
        </p>
      </div>

      <div className="relative w-full aspect-square max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1588970698009-f8ea62f1857e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Uttarakhand Map Background"
          fill
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 p-4">
          <div className="relative w-full h-full">
            <Image src="/uttarakhand-map-outline.svg" alt="Uttarakhand Map" fill className="object-contain" />

            {/* District markers */}
            {districtCoordinates.map((district) => {
              const districtData = districtsData.find((d) => d.id === district.id)
              return (
                <Link
                  key={district.id}
                  href={`/districts/${district.id}`}
                  className="absolute cursor-pointer transition-all duration-300 transform hover:scale-110"
                  style={{
                    left: `${district.x}%`,
                    top: `${district.y}%`,
                    width: `${district.width}%`,
                    height: `${district.height}%`,
                  }}
                  onMouseEnter={() => setHoveredDistrict(district.id)}
                  onMouseLeave={() => setHoveredDistrict(null)}
                >
                  <div
                    className={`w-full h-full rounded-full ${
                      hoveredDistrict === district.id
                        ? "bg-uttarakhand-sunset animate-pulse"
                        : "bg-uttarakhand-mountain dark:bg-uttarakhand-meadow"
                    }`}
                  ></div>
                  {hoveredDistrict === district.id && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white dark:bg-gray-800 px-3 py-1 rounded-md shadow-lg whitespace-nowrap z-10">
                      <p className="font-pahadi text-sm">
                        {districtData ? districtData.name[language === "hi" ? "hi" : "en"] : district.name}
                      </p>
                    </div>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground font-pahadi">
          {language === "hi"
            ? "अधिक जानकारी के लिए किसी भी जिले पर क्लिक करें"
            : "Click on any district for more information"}
        </p>
      </div>
    </div>
  )
}
