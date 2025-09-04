"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Check, ArrowRight, Mail, Phone, Star, TrendingUp, Users, Award } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/language-context"
import { TempleArch } from "@/components/decorative-elements"

export default function AdvertisePage() {
  const { language } = useLanguage()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState({
    benefits: false,
    packages: false,
    form: false,
    examples: false,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = ["benefits", "packages", "form", "examples"]
    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
    }, 1000)
  }

  // Stats for the advertising page
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-uttarakhand-mountain" />,
      value: "10,000+",
      label: language === "hi" ? "मासिक उपयोगकर्ता" : "Monthly Users",
      color: "bg-uttarakhand-mountain/10",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-uttarakhand-pine" />,
      value: "35%",
      label: language === "hi" ? "मासिक वृद्धि" : "Monthly Growth",
      color: "bg-uttarakhand-pine/10",
    },
    {
      icon: <Star className="h-8 w-8 text-uttarakhand-sunset" />,
      value: "4.8/5",
      label: language === "hi" ? "उपयोगकर्ता संतुष्टि" : "User Satisfaction",
      color: "bg-uttarakhand-sunset/10",
    },
    {
      icon: <Award className="h-8 w-8 text-uttarakhand-flower" />,
      value: "95%",
      label: language === "hi" ? "रिटेंशन रेट" : "Retention Rate",
      color: "bg-uttarakhand-flower/10",
    },
  ]

  return (
    <div className="py-12 bg-gradient-to-b from-white to-uttarakhand-sunset/10 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden mb-16">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Uttarakhand Mountains"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-uttarakhand-mountain/60 via-uttarakhand-mountain/40 to-uttarakhand-mountain/60"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-sm bg-white/10 p-8 rounded-lg border border-white/20 max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-pahadi text-white drop-shadow-lg">
              {language === "hi" ? "हमारे साथ विज्ञापन दें" : "Advertise With Us"}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90 font-pahadi drop-shadow-lg">
              {language === "hi"
                ? "उत्तराखंड की भाषाओं और संस्कृति से जुड़े लोगों तक पहुंचने के लिए हमारे प्लेटफॉर्म पर विज्ञापन दें।"
                : "Advertise on our platform to reach people connected to Uttarakhand's languages and culture."}
            </p>
            <Button
              size="lg"
              className="bg-white text-uttarakhand-mountain hover:bg-white/90 font-pahadi"
              onClick={() => {
                const formElement = document.getElementById("form")
                if (formElement) {
                  formElement.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              {language === "hi" ? "अभी संपर्क करें" : "Contact Us Now"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-900 mb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${stat.color} p-6 rounded-lg shadow-md border border-uttarakhand-mountain/10 dark:border-uttarakhand-meadow/10`}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md">{stat.icon}</div>
                  <div>
                    <div className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-pahadi">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Benefits and Packages */}
          <div>
            <div id="benefits">
              <TempleArch className="inline-block mb-6">
                <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                  {language === "hi" ? "विज्ञापन के लाभ" : "Benefits of Advertising"}
                </h2>
              </TempleArch>

              <div className="space-y-4 mb-8">
                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible.benefits ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="mt-1 bg-uttarakhand-mountain/10 dark:bg-uttarakhand-meadow/10 rounded-full p-1">
                    <Check className="h-4 w-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                      {language === "hi" ? "लक्षित दर्शक" : "Targeted Audience"}
                    </h3>
                    <p className="text-muted-foreground font-pahadi">
                      {language === "hi"
                        ? "उत्तराखंड की भाषाओं और संस्कृति में रुचि रखने वाले लोगों तक सीधे पहुंचें।"
                        : "Reach directly to people interested in Uttarakhand's languages and culture."}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible.benefits ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="mt-1 bg-uttarakhand-mountain/10 dark:bg-uttarakhand-meadow/10 rounded-full p-1">
                    <Check className="h-4 w-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                      {language === "hi" ? "बढ़ती हुई पहुंच" : "Growing Reach"}
                    </h3>
                    <p className="text-muted-foreground font-pahadi">
                      {language === "hi"
                        ? "हमारा प्लेटफॉर्म लगातार बढ़ रहा है, जिससे आपके विज्ञापन की पहुंच भी बढ़ेगी।"
                        : "Our platform is continuously growing, which will increase the reach of your advertisement."}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible.benefits ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="mt-1 bg-uttarakhand-mountain/10 dark:bg-uttarakhand-meadow/10 rounded-full p-1">
                    <Check className="h-4 w-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                      {language === "hi" ? "सांस्कृतिक संबंध" : "Cultural Connection"}
                    </h3>
                    <p className="text-muted-foreground font-pahadi">
                      {language === "hi"
                        ? "अपने ब्रांड को उत्तराखंड की समृद्ध सांस्कृतिक विरासत से जोड़ें।"
                        : "Connect your brand with the rich cultural heritage of Uttarakhand."}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible.benefits ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="mt-1 bg-uttarakhand-mountain/10 dark:bg-uttarakhand-meadow/10 rounded-full p-1">
                    <Check className="h-4 w-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                      {language === "hi" ? "विविध विज्ञापन प्रारूप" : "Diverse Ad Formats"}
                    </h3>
                    <p className="text-muted-foreground font-pahadi">
                      {language === "hi"
                        ? "बैनर, वीडियो, स्पॉन्सर्ड कंटेंट और अन्य विज्ञापन प्रारूपों के बीच चुनें।"
                        : "Choose between banners, videos, sponsored content, and other ad formats."}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div id="packages">
              <TempleArch className="inline-block mb-6">
                <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                  {language === "hi" ? "विज्ञापन पैकेज" : "Advertising Packages"}
                </h2>
              </TempleArch>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible.packages ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="relative"
                >
                  <Card className="border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden">
                    <div className="absolute top-0 right-0 bg-uttarakhand-mountain text-white text-xs px-3 py-1 rounded-bl-lg font-pahadi">
                      {language === "hi" ? "लोकप्रिय" : "Popular"}
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                        {language === "hi" ? "बेसिक पैकेज" : "Basic Package"}
                      </CardTitle>
                      <CardDescription className="font-pahadi">
                        {language === "hi" ? "छोटे व्यवसायों के लिए" : "For small businesses"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow mb-4 font-pahadi">
                        ₹5,000<span className="text-sm font-normal text-muted-foreground">/month</span>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 font-pahadi">
                          <Check className="h-4 w-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                          {language === "hi" ? "साइडबार बैनर विज्ञापन" : "Sidebar banner ad"}
                        </li>
                        <li className="flex items-center gap-2 font-pahadi">
                          <Check className="h-4 w-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                          {language === "hi" ? "मासिक न्यूज़लेटर में उल्लेख" : "Mention in monthly newsletter"}
                        </li>
                        <li className="flex items-center gap-2 font-pahadi">
                          <Check className="h-4 w-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                          {language === "hi" ? "बेसिक एनालिटिक्स रिपोर्ट" : "Basic analytics report"}
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white font-pahadi">
                        {language === "hi" ? "अभी बुक करें" : "Book Now"}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible.packages ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  className="relative"
                >
                  <Card className="border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden">
                    <div className="absolute top-0 right-0 bg-uttarakhand-pine text-white text-xs px-3 py-1 rounded-bl-lg font-pahadi">
                      {language === "hi" ? "प्रीमियम" : "Premium"}
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-uttarakhand-pine dark:text-uttarakhand-meadow font-pahadi">
                        {language === "hi" ? "प्रीमियम पैकेज" : "Premium Package"}
                      </CardTitle>
                      <CardDescription className="font-pahadi">
                        {language === "hi" ? "बड़े व्यवसायों और संस्थानों के लिए" : "For large businesses and institutions"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-uttarakhand-pine dark:text-uttarakhand-meadow mb-4 font-pahadi">
                        ₹15,000<span className="text-sm font-normal text-muted-foreground">/month</span>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 font-pahadi">
                          <Check className="h-4 w-4 text-uttarakhand-pine dark:text-uttarakhand-meadow" />
                          {language === "hi" ? "होमपेज पर प्रमुख बैनर" : "Featured banner on homepage"}
                        </li>
                        <li className="flex items-center gap-2 font-pahadi">
                          <Check className="h-4 w-4 text-uttarakhand-pine dark:text-uttarakhand-meadow" />
                          {language === "hi" ? "स्पॉन्सर्ड कंटेंट आर्टिकल" : "Sponsored content article"}
                        </li>
                        <li className="flex items-center gap-2 font-pahadi">
                          <Check className="h-4 w-4 text-uttarakhand-pine dark:text-uttarakhand-meadow" />
                          {language === "hi" ? "सोशल मीडिया प्रमोशन" : "Social media promotion"}
                        </li>
                        <li className="flex items-center gap-2 font-pahadi">
                          <Check className="h-4 w-4 text-uttarakhand-pine dark:text-uttarakhand-meadow" />
                          {language === "hi" ? "विस्तृत एनालिटिक्स रिपोर्ट" : "Detailed analytics report"}
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-uttarakhand-pine hover:bg-uttarakhand-pine/90 text-white font-pahadi">
                        {language === "hi" ? "अभी बुक करें" : "Book Now"}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div id="form">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible.form ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <TempleArch className="inline-block mb-6">
                <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                  {language === "hi" ? "हमसे संपर्क करें" : "Contact Us"}
                </h2>
              </TempleArch>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md text-center"
                >
                  <div className="mb-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg">
                    <Check className="h-8 w-8 mx-auto mb-2" />
                    <h3 className="text-xl font-bold font-pahadi">
                      {language === "hi" ? "आपका संदेश भेज दिया गया है!" : "Your message has been sent!"}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 font-pahadi">
                    {language === "hi"
                      ? "हमारी टीम जल्द ही आपसे संपर्क करेगी। आपके संदेश के लिए धन्यवाद।"
                      : "Our team will contact you soon. Thank you for your message."}
                  </p>
                  <Button
                    className="bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white font-pahadi"
                    onClick={() => setFormSubmitted(false)}
                  >
                    {language === "hi" ? "नया संदेश भेजें" : "Send Another Message"}
                  </Button>
                </motion.div>
              ) : (
                <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-muted-foreground font-pahadi">
                          {language === "hi" ? "नाम" : "Name"}*
                        </label>
                        <Input
                          id="name"
                          required
                          className="border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-muted-foreground font-pahadi"
                        >
                          {language === "hi" ? "कंपनी/संस्था" : "Company/Organization"}*
                        </label>
                        <Input
                          id="company"
                          required
                          className="border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-muted-foreground font-pahadi">
                          {language === "hi" ? "ईमेल" : "Email"}*
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          className="border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground font-pahadi">
                          {language === "hi" ? "फोन नंबर" : "Phone Number"}*
                        </label>
                        <Input
                          id="phone"
                          required
                          className="border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="package" className="block text-sm font-medium text-muted-foreground font-pahadi">
                        {language === "hi" ? "विज्ञापन पैकेज" : "Advertising Package"}*
                      </label>
                      <select
                        id="package"
                        required
                        className="w-full rounded-md border border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-uttarakhand-mountain dark:focus:ring-uttarakhand-meadow"
                      >
                        <option value="">{language === "hi" ? "पैकेज चुनें" : "Select a package"}</option>
                        <option value="basic">
                          {language === "hi" ? "बेसिक पैकेज - ₹5,000/month" : "Basic Package - ₹5,000/month"}
                        </option>
                        <option value="premium">
                          {language === "hi" ? "प्रीमियम पैकेज - ₹15,000/month" : "Premium Package - ₹15,000/month"}
                        </option>
                        <option value="custom">{language === "hi" ? "कस्टम पैकेज" : "Custom Package"}</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-muted-foreground font-pahadi">
                        {language === "hi" ? "संदेश" : "Message"}*
                      </label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        className="border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20"
                        placeholder={
                          language === "hi"
                            ? "अपने विज्ञापन के बारे में विवरण प्रदान करें..."
                            : "Provide details about your advertisement..."
                        }
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white font-pahadi"
                      >
                        {language === "hi" ? "संदेश भेजें" : "Send Message"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </form>

                  <div className="mt-8 pt-8 border-t border-uttarakhand-mountain/10 dark:border-uttarakhand-meadow/10">
                    <h3 className="text-lg font-semibold text-uttarakhand-mountain dark:text-uttarakhand-meadow mb-4 font-pahadi">
                      {language === "hi" ? "सीधे संपर्क करें" : "Direct Contact"}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                        <span className="text-muted-foreground font-pahadi">advertising@vpahadi.org</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                        <span className="text-muted-foreground font-pahadi">+91 98765 43210</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Advertising Examples Section */}
        <section id="examples" className="mt-16">
          <div className="text-center mb-8">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "विज्ञापन उदाहरण" : "Advertising Examples"}
              </h2>
            </TempleArch>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "हमारे प्लेटफॉर्म पर विज्ञापन कैसे दिखाई देते हैं, इसके कुछ उदाहरण देखें।"
                : "See some examples of how advertisements appear on our platform."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible.examples ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Banner Advertisement Example"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-uttarakhand-mountain/80 text-white text-xs px-2 py-1 rounded-full">
                  {language === "hi" ? "बैनर विज्ञापन" : "Banner Ad"}
                </div>
              </div>
              <h3 className="font-semibold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "होमपेज बैनर" : "Homepage Banner"}
              </h3>
              <p className="text-sm text-muted-foreground font-pahadi">
                {language === "hi"
                  ? "होमपेज पर प्रमुखता से प्रदर्शित बैनर विज्ञापन।"
                  : "Banner advertisement prominently displayed on the homepage."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible.examples ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Sponsored Content Example"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-uttarakhand-pine/80 text-white text-xs px-2 py-1 rounded-full">
                  {language === "hi" ? "स्पॉन्सर्ड कंटेंट" : "Sponsored Content"}
                </div>
              </div>
              <h3 className="font-semibold text-uttarakhand-pine dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "स्पॉन्सर्ड आर्टिकल" : "Sponsored Article"}
              </h3>
              <p className="text-sm text-muted-foreground font-pahadi">
                {language === "hi"
                  ? "आपके ब्रांड के बारे में विशेष रूप से लिखा गया आर्टिकल।"
                  : "Specially written article about your brand."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible.examples ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Newsletter Advertisement Example"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-uttarakhand-flower/80 text-white text-xs px-2 py-1 rounded-full">
                  {language === "hi" ? "न्यूज़लेटर विज्ञापन" : "Newsletter Ad"}
                </div>
              </div>
              <h3 className="font-semibold text-uttarakhand-flower dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "न्यूज़लेटर प्रमोशन" : "Newsletter Promotion"}
              </h3>
              <p className="text-sm text-muted-foreground font-pahadi">
                {language === "hi"
                  ? "हमारे मासिक न्यूज़लेटर में आपके ब्रांड का प्रमोशन।"
                  : "Promotion of your brand in our monthly newsletter."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "हमारे विज्ञापनदाताओं की प्रतिक्रियाएँ" : "Testimonials from Our Advertisers"}
              </h2>
            </TempleArch>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20"
            >
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <Image
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Testimonial"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-muted-foreground mb-4 font-pahadi italic">
                    {language === "hi"
                      ? "हमने V पहाड़ी पर विज्ञापन देने के बाद से हमारे ब्रांड की पहचान में काफी वृद्धि देखी है। उत्तराखंड के लोगों तक पहुंचने का यह एक शानदार तरीका है।"
                      : "We've seen a significant increase in our brand recognition since advertising on V Pahadi. It's a great way to reach people from Uttarakhand."}
                  </p>
                  <h4 className="font-semibold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                    {language === "hi" ? "राजेश नेगी" : "Rajesh Negi"}
                  </h4>
                  <p className="text-sm text-muted-foreground font-pahadi">
                    {language === "hi"
                      ? "मार्केटिंग मैनेजर, उत्तराखंड हैंडीक्राफ्ट्स"
                      : "Marketing Manager, Uttarakhand Handicrafts"}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20"
            >
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <Image
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Testimonial"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-muted-foreground mb-4 font-pahadi italic">
                    {language === "hi"
                      ? "V पहाड़ी पर हमारे विज्ञापन अभियान ने हमारी वेबसाइट पर ट्रैफिक को 40% तक बढ़ा दिया है। टीम बहुत सहायक और पेशेवर है।"
                      : "Our advertising campaign on V Pahadi has increased traffic to our website by 40%. The team is very helpful and professional."}
                  </p>
                  <h4 className="font-semibold text-uttarakhand-pine dark:text-uttarakhand-meadow font-pahadi">
                    {language === "hi" ? "प्रीति बिष्ट" : "Preeti Bisht"}
                  </h4>
                  <p className="text-sm text-muted-foreground font-pahadi">
                    {language === "hi" ? "सीईओ, उत्तराखंड ट्रैवल्स" : "CEO, Uttarakhand Travels"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="mt-16 py-16 bg-gradient-to-r from-uttarakhand-mountain via-uttarakhand-pine to-uttarakhand-sunset text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-sm bg-white/10 p-8 rounded-lg border border-white/20 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 font-pahadi">
              {language === "hi" ? "आज ही अपना विज्ञापन अभियान शुरू करें" : "Start Your Advertising Campaign Today"}
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-white/90 font-pahadi">
              {language === "hi"
                ? "उत्तराखंड की भाषाओं और संस्कृति से जुड़े लोगों तक पहुंचने के लिए हमारे साथ साझेदारी करें।"
                : "Partner with us to reach people connected to Uttarakhand's languages and culture."}
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-uttarakhand-mountain hover:bg-white/90 font-pahadi"
                onClick={() => {
                  const formElement = document.getElementById("form")
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                {language === "hi" ? "अभी संपर्क करें" : "Contact Us Now"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
