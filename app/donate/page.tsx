"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { useLanguage } from "@/lib/language-context"

const AMOUNTS = [250, 500, 1000, 2500, 5000]

export default function DonatePage() {
  const { language } = useLanguage()
  const [amount, setAmount] = useState<number | null>(AMOUNTS[1])
  const [note, setNote] = useState("")
  const [complete, setComplete] = useState(false)

  function handleDonate() {
    // Demo checkout – no payment gateway
    setComplete(true)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection>
        <h1 className="text-3xl md:text-4xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi text-center mb-2">
          {language === "hi" ? "दान करें" : "Donate"}
        </h1>
        <p className="text-center text-muted-foreground font-pahadi max-w-2xl mx-auto mb-8">
          {language === "hi"
            ? "आपका योगदान सीमांत क्षेत्रों में शिक्षा, कौशल-विकास और समुदाय कल्याण कार्यक्रमों के लिए उपयोग होगा।"
            : "Your contribution powers education, skills, and community welfare programs in border areas."}
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
          {AMOUNTS.map((amt) => (
            <Button
              key={amt}
              variant={amount === amt ? "default" : "outline"}
              onClick={() => setAmount(amt)}
              className={
                amount === amt ? "bg-uttarakhand-pine dark:bg-uttarakhand-meadow dark:text-uttarakhand-pine" : ""
              }
            >
              ₹{amt}
            </Button>
          ))}
        </div>
      </AnimatedSection>

      <div className="max-w-3xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="font-pahadi text-uttarakhand-mountain dark:text-uttarakhand-meadow">
                {language === "hi" ? "अन्य राशि" : "Other Amount"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <input
                type="number"
                min={50}
                placeholder="₹"
                className="w-full rounded-md border p-2"
                onChange={(e) => setAmount(Number(e.target.value))}
              />
              <textarea
                placeholder={language === "hi" ? "कोई संदेश (वैकल्पिक)" : "A message (optional)"}
                className="w-full rounded-md border p-2 mt-3"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
              <Button
                onClick={handleDonate}
                className="mt-4 font-pahadi bg-uttarakhand-pine hover:bg-uttarakhand-pine/90 dark:bg-uttarakhand-meadow dark:text-uttarakhand-pine"
              >
                {language === "hi" ? "डोनेट (डेमो)" : "Donate (Demo)"}
              </Button>
              {complete && (
                <p className="text-sm text-uttarakhand-pine dark:text-uttarakhand-meadow mt-3 font-pahadi">
                  {language === "hi"
                    ? "धन्यवाद! आपका डेमो दान दर्ज हो गया।"
                    : "Thank you! Your demo donation has been recorded."}
                </p>
              )}
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="font-pahadi text-uttarakhand-mountain dark:text-uttarakhand-meadow">
                {language === "hi" ? "आपके दान का प्रभाव" : "Impact of Your Donation"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground font-pahadi">
              <p>{language === "hi" ? "₹500: करियर काउंसलिंग सत्र" : "₹500: Career counseling session"}</p>
              <p>{language === "hi" ? "₹1000: कौशल-किट/शिक्षा सामग्री" : "₹1000: Skill kit/learning material"}</p>
              <p>
                {language === "hi" ? "₹2500: महिला क्षमता-विकास कार्यशाला" : "₹2500: Women’s capacity-building workshop"}
              </p>
              <p>{language === "hi" ? "₹5000: बाल विकास/स्वास्थ्य कैंप" : "₹5000: Child development/health camp"}</p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-3 gap-6">
        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="font-pahadi text-uttarakhand-mountain dark:text-uttarakhand-meadow">
                {language === "hi" ? "मासिक सहयोग" : "Monthly Support"}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground font-pahadi">
              {language === "hi"
                ? "छोटा, नियमित सहयोग स्थिर कार्यक्रम चलाने में सबसे अधिक सहायक होता है।"
                : "Small, recurring support sustains programs more reliably."}
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="font-pahadi text-uttarakhand-mountain dark:text-uttarakhand-meadow">
                {language === "hi" ? "इन-काइंड समर्थन" : "In‑Kind Support"}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground font-pahadi">
              {language === "hi"
                ? "कौशल-किट, पुस्तकें, खेल-किट या आईटी डिवाइस दान करके सीधे प्रभाव डालें।"
                : "Donate skill kits, books, sports kits, or devices to create direct impact."}
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="font-pahadi text-uttarakhand-mountain dark:text-uttarakhand-meadow">
                {language === "hi" ? "पारदर्शिता" : "Transparency"}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground font-pahadi">
              {language === "hi"
                ? "आपका हर सहयोग निर्दिष्ट कार्यक्रमों पर ही व्यय होता है—हम प्रभाव रिपोर्ट साझा करते हैं।"
                : "Every contribution is allocated to designated programs—we share impact reports."}
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
