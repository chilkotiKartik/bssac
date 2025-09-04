"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

import { getTranslation } from "@/lib/translations"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<string>("en") // Default to English now
  const [mounted, setMounted] = useState(false)

  // Load language preference from localStorage on client side
  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language)
      // Add language class to document for font styling
      document.documentElement.classList.remove("lang-hi", "lang-en")
      document.documentElement.classList.add(`lang-${language}`)
    }
  }, [language, mounted])

  // Translation function
  const t = (key: string): string => {
    return getTranslation(key, language)
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
