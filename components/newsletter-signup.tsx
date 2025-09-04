"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"

export function NewsletterSignup() {
  const { language } = useLanguage()
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    // demo only
    setSubmitted(true)
  }

  return (
    <div className="max-w-3xl mx-auto text-center">
      <h3 className="text-2xl font-bold text-uttarakhand-pine dark:text-uttarakhand-meadow font-pahadi mb-2">
        {language === "hi" ? "हमारे न्यूज़लेटर से जुड़ें" : "Join Our Newsletter"}
      </h3>
      <p className="text-muted-foreground font-pahadi mb-6">
        {language === "hi"
          ? "ताज़ा अपडेट, कार्यक्रम और अवसर सीधे आपके ईमेल पर।"
          : "Get fresh updates, events, and opportunities in your inbox."}
      </p>
      {submitted ? (
        <p className="text-sm text-uttarakhand-pine dark:text-uttarakhand-meadow font-pahadi">
          {language === "hi" ? "धन्यवाद! आप जुड़ गए हैं।" : "Thank you! You're subscribed."}
        </p>
      ) : (
        <form onSubmit={onSubmit} className="flex gap-2 items-center justify-center">
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={language === "hi" ? "आपका ईमेल" : "Your email"}
            className="max-w-xs border-uttarakhand-pine/20 focus-visible:ring-uttarakhand-pine dark:border-uttarakhand-meadow/20 dark:focus-visible:ring-uttarakhand-meadow"
          />
          <Button className="font-pahadi bg-uttarakhand-pine hover:bg-uttarakhand-pine/90 dark:bg-uttarakhand-meadow dark:text-uttarakhand-pine">
            {language === "hi" ? "सदस्यता लें" : "Subscribe"}
          </Button>
        </form>
      )}
    </div>
  )
}
