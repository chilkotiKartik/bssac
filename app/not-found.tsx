"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-uttarakhand-sunset/10 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="relative w-40 h-40 mx-auto">
          <Image src="/mountains-silhouette.svg" alt="Mountains" fill className="object-contain" />
        </div>

        <h1 className="text-4xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">404</h1>

        <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
          {language === "hi" ? "पृष्ठ नहीं मिला" : "Page Not Found"}
        </h2>

        <p className="text-muted-foreground font-pahadi">
          {language === "hi"
            ? "क्षमा करें, आपके द्वारा अनुरोधित पृष्ठ मौजूद नहीं है या हटा दिया गया है।"
            : "Sorry, the page you requested does not exist or has been removed."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/">
            <Button className="w-full bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 dark:bg-uttarakhand-meadow dark:text-uttarakhand-pine dark:hover:bg-uttarakhand-meadow/90 font-pahadi">
              <Home className="mr-2 h-4 w-4" />
              {language === "hi" ? "होम पेज पर जाएं" : "Go to Home Page"}
            </Button>
          </Link>

          <Button variant="outline" className="w-full font-pahadi" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === "hi" ? "वापस जाएं" : "Go Back"}
          </Button>
        </div>
      </div>
    </div>
  )
}
