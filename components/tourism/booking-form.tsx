"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/lib/language-context"
import { Textarea } from "@/components/ui/textarea"

interface BookingFormProps {
  tourName?: string
  tourNameHi?: string
  defaultDate?: Date
  defaultGuests?: number
  onSubmit?: (data: BookingData) => void
}

export interface BookingData {
  date: Date | undefined
  guests: number
  name: string
  email: string
  phone: string
  specialRequests: string
}

export function BookingForm({ tourName, tourNameHi, defaultDate, defaultGuests = 2, onSubmit }: BookingFormProps) {
  const { language } = useLanguage()
  const [date, setDate] = useState<Date | undefined>(defaultDate)
  const [guests, setGuests] = useState(defaultGuests)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [specialRequests, setSpecialRequests] = useState("")
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsComplete(true)

      if (onSubmit) {
        onSubmit({
          date,
          guests,
          name,
          email,
          phone,
          specialRequests,
        })
      }
    }, 1500)
  }

  if (isComplete) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-md">
        <div className="text-center">
          <div className="h-16 w-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-bold mb-2 font-pahadi">
            {language === "hi" ? "बुकिंग पूरी हुई!" : "Booking Complete!"}
          </h3>
          <p className="text-muted-foreground mb-6 font-pahadi">
            {language === "hi"
              ? `आपकी बुकिंग की पुष्टि ${email} पर भेज दी गई है।`
              : `Your booking confirmation has been sent to ${email}.`}
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground font-pahadi">{language === "hi" ? "टूर" : "Tour"}</p>
                <p className="font-medium font-pahadi">{language === "hi" ? tourNameHi : tourName}</p>
              </div>
              <div>
                <p className="text-muted-foreground font-pahadi">{language === "hi" ? "दिनांक" : "Date"}</p>
                <p className="font-medium font-pahadi">{date ? format(date, "PPP") : ""}</p>
              </div>
              <div>
                <p className="text-muted-foreground font-pahadi">{language === "hi" ? "अतिथि" : "Guests"}</p>
                <p className="font-medium font-pahadi">{guests}</p>
              </div>
              <div>
                <p className="text-muted-foreground font-pahadi">{language === "hi" ? "बुकिंग आईडी" : "Booking ID"}</p>
                <p className="font-medium font-pahadi">UKT-{Math.floor(Math.random() * 10000)}</p>
              </div>
            </div>
          </div>
          <Button className="bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white font-pahadi">
            {language === "hi" ? "बुकिंग विवरण डाउनलोड करें" : "Download Booking Details"}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-md">
      <h3 className="text-xl font-bold mb-6 font-pahadi text-uttarakhand-mountain dark:text-uttarakhand-meadow">
        {language === "hi" ? "अपनी यात्रा बुक करें" : "Book Your Tour"}
        {tourName && ` - ${language === "hi" ? tourNameHi : tourName}`}
      </h3>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="font-pahadi">
                {language === "hi" ? "यात्रा की तारीख" : "Tour Date"}
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={"outline"}
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>{language === "hi" ? "तारीख चुनें" : "Pick a date"}</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests" className="font-pahadi">
                {language === "hi" ? "अतिथियों की संख्या" : "Number of Guests"}
              </Label>
              <Select value={guests.toString()} onValueChange={(value) => setGuests(Number.parseInt(value))}>
                <SelectTrigger id="guests" className="w-full">
                  <SelectValue placeholder={language === "hi" ? "अतिथियों की संख्या चुनें" : "Select number of guests"} />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {language === "hi" ? "अतिथि" : "guest"}
                      {num > 1 && language !== "hi" && "s"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4">
              <Button
                type="button"
                className="w-full bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white font-pahadi"
                onClick={() => setStep(2)}
                disabled={!date}
              >
                {language === "hi" ? "अगला" : "Next"}
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-pahadi">
                {language === "hi" ? "पूरा नाम" : "Full Name"}
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="font-pahadi"
                placeholder={language === "hi" ? "अपना नाम दर्ज करें" : "Enter your name"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-pahadi">
                {language === "hi" ? "ईमेल पता" : "Email Address"}
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="font-pahadi"
                placeholder={language === "hi" ? "अपना ईमेल दर्ज करें" : "Enter your email"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="font-pahadi">
                {language === "hi" ? "फोन नंबर" : "Phone Number"}
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="font-pahadi"
                placeholder={language === "hi" ? "अपना फोन नंबर दर्ज करें" : "Enter your phone number"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="special-requests" className="font-pahadi">
                {language === "hi" ? "विशेष अनुरोध" : "Special Requests"}
              </Label>
              <Textarea
                id="special-requests"
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="font-pahadi"
                placeholder={language === "hi" ? "कोई विशेष आवश्यकता या अनुरोध" : "Any special needs or requests"}
                rows={3}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" className="w-1/2 font-pahadi" onClick={() => setStep(1)}>
                {language === "hi" ? "पीछे" : "Back"}
              </Button>
              <Button
                type="submit"
                className="w-1/2 bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white font-pahadi"
                disabled={isSubmitting || !name || !email || !phone}
              >
                {isSubmitting
                  ? language === "hi"
                    ? "प्रस्तुत कर रहा है..."
                    : "Submitting..."
                  : language === "hi"
                    ? "बुक करें"
                    : "Book Now"}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
