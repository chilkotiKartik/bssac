"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, CheckCircle, Clock, MapPin, Ticket, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FoundationTribute } from "@/components/foundation-tribute"
import { Testimonials } from "@/components/testimonials"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { LanguageStats } from "@/components/language-stats"
import { useLanguage } from "@/lib/language-context"
import { AipanBorder, TempleArch, WoodenFrame, DamauDrum, MountainDivider } from "@/components/decorative-elements"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { AnimatedSection } from "@/components/animated-section"

export default function Home() {
  const { t, language } = useLanguage()
  const [isVisible, setIsVisible] = useState({
    stats: false,
    events: false,
    wordOfDay: false,
    destinations: false,
    testimonials: false,
    partners: false,
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

    const sections = ["stats", "events", "wordOfDay", "destinations", "testimonials", "partners"]
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

  return (
    <div className="uttarakhand-pattern">
      {/* Hero Section with Sunset Background */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Himalayan Sunset"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-uttarakhand-sunset/30 via-transparent to-uttarakhand-wood/30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="animate-float backdrop-blur-sm bg-white/10 p-8 rounded-lg border border-white/20 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-pahadi text-white drop-shadow-lg">
              {language === "hi"
                ? "सीमा क्षेत्रों का विकास • शहीद परिवारों का सम्मान"
                : "Border Area Development • Honoring Families of the Fallen"}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90 font-pahadi drop-shadow-lg">
              {language === "hi"
                ? "मिशन: क्षमता-विकास, करियर काउंसलिंग और विकासात्मक कार्यक्रमों के माध्यम से सीमावर्ती क्षेत्रों में आजीविका, शिक्षा, महिला सशक्तिकरण, बाल विकास और सामुदायिक कल्याण को सुदृढ़ करना; तथा युद्ध वीरांगनाओं और ग्रामीण गरीबों के बच्चों को सेना, अर्द्धसैनिक एवं अन्य रक्षा बलों में प्रवेश हेतु तैयार करना।"
                : "Mission: To enhance livelihoods, education, women’s empowerment, child development, and community welfare in border areas through capacity-building, career counseling, and developmental programmes, and to prepare the children of war widows and rural poor for entry into the Army, Para-Military, and other defence forces."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://forms.gle/QsgATnNtYchCKJB48" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-uttarakhand-sunset hover:bg-uttarakhand-sunset/90 text-white font-pahadi border border-white/20 backdrop-blur-sm"
                >
                  {language === "hi" ? "मिशन से जुड़ें" : "Join the Mission"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20 font-pahadi backdrop-blur-sm bg-transparent"
              >
                <Sun className="mr-2 h-4 w-4" />
                {language === "hi" ? "हमारे कार्य देखें" : "See Our Work"}
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <div className="animate-bounce bg-white/10 p-2 rounded-full backdrop-blur-sm">
              <ArrowRight className="h-8 w-8 transform rotate-90 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Mountain Silhouette */}
      <div className="relative h-24 bg-gradient-to-b from-uttarakhand-sunset/30 to-white dark:to-gray-900">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1440 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 74V35L120 0L240 35L360 15L480 45L600 25L720 55L840 20L960 40L1080 15L1200 45L1320 20L1440 45V74H0Z"
            fill="currentColor"
            className="text-white dark:text-gray-900"
          />
        </svg>
      </div>

      {/* Advertising Banner */}
      <section className="py-8 bg-gradient-to-r from-uttarakhand-sunset/20 to-uttarakhand-mountain/20 dark:from-uttarakhand-sunset/30 dark:to-uttarakhand-mountain/30 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-white font-pahadi mb-2">
                {language === "hi" ? "विज्ञापन दें और पहुंचें हजारों लोगों तक" : "Advertise and Reach Thousands"}
              </h2>
              <p className="text-muted-foreground max-w-xl font-pahadi mb-4">
                {language === "hi"
                  ? "उत्तराखंड की भाषाओं और संस्कृति से जुड़े लोगों तक पहुंचने के लिए हमारे प्लेटफॉर्म पर विज्ञापन दें।"
                  : "Advertise on our platform to reach people connected to Uttarakhand's languages and culture."}
              </p>
              <Link href="/advertise">
                <Button className="bg-uttarakhand-sunset hover:bg-uttarakhand-sunset/90 text-white font-pahadi">
                  {language === "hi" ? "अधिक जानकारी" : "Learn More"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-uttarakhand-flower/20 rounded-full animate-pulse-slow"></div>
              <div
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-uttarakhand-sunset/20 rounded-full animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              ></div>
              <div className="relative z-10 bg-white/90 dark:bg-gray-800/90 p-4 rounded-lg shadow-lg border border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <span className="inline-block px-2 py-1 bg-uttarakhand-sunset/20 text-uttarakhand-sunset text-xs rounded-full mb-2 font-pahadi">
                    {language === "hi" ? "विशेष ऑफर" : "Special Offer"}
                  </span>
                  <h3 className="text-lg font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mb-1">
                    {language === "hi" ? "20% की छूट" : "20% Discount"}
                  </h3>
                  <p className="text-sm text-muted-foreground font-pahadi mb-2">
                    {language === "hi" ? "पहली बार विज्ञापन देने वालों के लिए" : "For first-time advertisers"}
                  </p>
                  <div className="text-xs text-muted-foreground font-pahadi">
                    {language === "hi" ? "31 जुलाई, 2024 तक वैध" : "Valid until July 31, 2024"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div
              className="absolute top-5 left-10 w-3 h-3 bg-uttarakhand-flower rounded-full animate-ping"
              style={{ animationDuration: "3s" }}
            ></div>
            <div
              className="absolute bottom-5 right-10 w-2 h-2 bg-uttarakhand-sunset rounded-full animate-ping"
              style={{ animationDuration: "2.5s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/4 w-4 h-4 bg-uttarakhand-pine/30 rounded-full animate-ping"
              style={{ animationDuration: "4s" }}
            ></div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/donate">
              <div className="group bg-gradient-to-r from-uttarakhand-sunset/10 to-uttarakhand-mountain/10 hover:from-uttarakhand-sunset/20 hover:to-uttarakhand-mountain/20 p-6 rounded-lg border border-uttarakhand-mountain/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center">
                <TempleArch className="inline-block mb-2 w-16 h-16 mx-auto">
                  <span className="text-2xl font-bold text-uttarakhand-mountain">💙</span>
                </TempleArch>
                <h3 className="text-xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mb-2">
                  {language === "hi" ? "दान करें" : "Donate"}
                </h3>
                <p className="text-muted-foreground font-pahadi">
                  {language === "hi"
                    ? "सीमा क्षेत्रों के लिए शिक्षा, कौशल और कल्याण पहल को सहयोग दें"
                    : "Support education, skills, and welfare initiatives for border areas"}
                </p>
              </div>
            </Link>

            <Link href="/about">
              <div className="group bg-gradient-to-r from-uttarakhand-sunset/10 to-uttarakhand-mountain/10 hover:from-uttarakhand-sunset/20 hover:to-uttarakhand-mountain/20 p-6 rounded-lg border border-uttarakhand-mountain/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center">
                <TempleArch className="inline-block mb-2 w-16 h-16 mx-auto">
                  <span className="text-2xl font-bold text-uttarakhand-mountain">👥</span>
                </TempleArch>
                <h3 className="text-xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mb-2">
                  {language === "hi" ? "संस्थापक एवं नेतृत्व" : "Founders & Leadership"}
                </h3>
                <p className="text-muted-foreground font-pahadi">
                  {language === "hi"
                    ? "विश्वास के संस्थापक, अध्यक्ष और CEO/ट्रस्टी से मिलें"
                    : "Meet the Founder, President, and CEO/Managing Trustee"}
                </p>
              </div>
            </Link>

            <Link href="/districts">
              <div className="group bg-gradient-to-r from-uttarakhand-pine/10 to-uttarakhand-flower/10 hover:from-uttarakhand-pine/20 hover:to-uttarakhand-flower/20 p-6 rounded-lg border border-uttarakhand-pine/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center">
                <TempleArch className="inline-block mb-2 w-16 h-16 mx-auto">
                  <span className="text-2xl font-bold text-uttarakhand-pine">🗺️</span>
                </TempleArch>
                <h3 className="text-xl font-bold text-uttarakhand-pine dark:text-uttarakhand-meadow font-pahadi mb-2">
                  {language === "hi" ? "उत्तराखंड के जिले" : "Districts of Uttarakhand"}
                </h3>
                <p className="text-muted-foreground font-pahadi">
                  {language === "hi"
                    ? "उत्तराखंड के सभी 13 जिलों के बारे में विस्तृत जानकारी प्राप्त करें"
                    : "Get detailed information about all 13 districts of Uttarakhand"}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Rest of the sections with updated styling */}
      {/* Language Stats Section */}
      <section
        id="stats"
        className="py-16 bg-gradient-to-b from-white to-uttarakhand-sunset/10 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AipanBorder className="inline-block mb-4 bg-white/80 dark:bg-gray-800/80">
              <h2 className="text-3xl font-bold text-uttarakhand-wood dark:text-uttarakhand-sunset font-pahadi">
                {language === "hi" ? "क्यों हमारा मिशन महत्वपूर्ण है" : "Why Our Mission Matters"}
              </h2>
            </AipanBorder>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "सीमा क्षेत्रों में शिक्षा, आजीविका और सुरक्षा-तैयारी के अवसर बदलते भविष्य की कुंजी हैं। हमारी पहल महिलाओं, बच्चों और युवाओं को सशक्त बनाती है—सम्मान और सेवा की परंपरा को आगे बढ़ाती है।"
                : "In border areas, access to education, livelihoods, and defence-readiness opens doors to a better future. Our programs empower women, children, and youth—carrying forward a legacy of dignity and service."}
            </p>
          </div>
          <div
            className={`transition-all duration-1000 ${isVisible.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <LanguageStats />
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Featured Events Section */}
      <section
        id="events"
        className="py-16 bg-gradient-to-r from-uttarakhand-pine/10 to-uttarakhand-mountain/10 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi px-2">
                {language === "hi" ? "आगामी कार्यक्रम" : "Upcoming Events"}
              </h2>
            </TempleArch>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "उत्तराखंड की भाषा और संस्कृति से जुड़े विशेष कार्यक्रम और उत्सव"
                : "Special events and festivals related to Uttarakhand's language and culture"}
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible.events ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Event 1 */}
            <Card className="border-2 border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Kumaoni Folk Songs Workshop"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-2 right-2 bg-uttarakhand-mountain text-white text-xs px-2 py-1 rounded-full">
                  {language === "hi" ? "संगीत" : "Music"}
                </div>
              </div>
              <CardHeader className="relative z-10 -mt-12 pb-0">
                <div className="bg-white dark:bg-gray-900 rounded-t-xl p-4 shadow-lg">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                      {language === "hi" ? "कुमाऊँनी लोकगीत उत्सव" : "Kumaoni Folk Music Festival"}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="bg-white dark:bg-gray-900 px-4 pb-2">
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "15 जुलाई, 2024" : "July 15, 2024"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "शाम 6:00 - 9:00 बजे" : "6:00 PM - 9:00 PM"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "टाउन हॉल, नैनीताल" : "Town Hall, Nainital"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ticket className="h-5 w-5 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "₹500 प्रति व्यक्ति" : "₹500 per person"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-white dark:bg-gray-900 pt-0 pb-4 px-4">
                <a
                  href="https://forms.gle/QsgATnNtYchCKJB48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white font-pahadi">
                    {language === "hi" ? "टिकट बुक करें" : "Book Tickets"}
                  </Button>
                </a>
              </CardFooter>
            </Card>

            {/* Event 2 */}
            <Card className="border-2 border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Garhwali Language Workshop"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-2 right-2 bg-uttarakhand-pine text-white text-xs px-2 py-1 rounded-full">
                  {language === "hi" ? "वर्कशॉप" : "Workshop"}
                </div>
              </div>
              <CardHeader className="relative z-10 -mt-12 pb-0">
                <div className="bg-white dark:bg-gray-900 rounded-t-xl p-4 shadow-lg">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-uttarakhand-pine dark:text-uttarakhand-meadow font-pahadi">
                      {language === "hi" ? "गढ़वाली भाषा कार्यशाला" : "Garhwali Language Workshop"}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="bg-white dark:bg-gray-900 px-4 pb-2">
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-uttarakhand-pine dark:text-uttarakhand-meadow" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "20 जुलाई, 2024" : "July 20, 2024"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-uttarakhand-pine dark:text-uttarakhand-meadow" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "सुबह 10:00 - शाम 4:00 बजे" : "10:00 AM - 4:00 PM"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-uttarakhand-pine dark:text-uttarakhand-meadow" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "सांस्कृतिक केंद्र, देहरादून" : "Cultural Center, Dehradun"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ticket className="h-5 w-5 text-uttarakhand-pine dark:text-uttarakhand-meadow" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "₹300 प्रति व्यक्ति" : "₹300 per person"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-white dark:bg-gray-900 pt-0 pb-4 px-4">
                <a
                  href="https://forms.gle/QsgATnNtYchCKJB48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-uttarakhand-pine hover:bg-uttarakhand-pine/90 text-white font-pahadi">
                    {language === "hi" ? "रजिस्टर करें" : "Register"}
                  </Button>
                </a>
              </CardFooter>
            </Card>

            {/* Event 3 */}
            <Card className="border-2 border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Uttarakhand Cultural Festival"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-2 right-2 bg-uttarakhand-flower text-white text-xs px-2 py-1 rounded-full">
                  {language === "hi" ? "उत्सव" : "Festival"}
                </div>
              </div>
              <CardHeader className="relative z-10 -mt-12 pb-0">
                <div className="bg-white dark:bg-gray-900 rounded-t-xl p-4 shadow-lg">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-uttarakhand-flower dark:text-uttarakhand-flower font-pahadi">
                      {language === "hi" ? "उत्तराखंड सांस्कृतिक महोत्सव" : "Uttarakhand Cultural Festival"}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="bg-white dark:bg-gray-900 px-4 pb-2">
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-uttarakhand-flower dark:text-uttarakhand-flower" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "5-7 अगस्त, 2024" : "August 5-7, 2024"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-uttarakhand-flower dark:text-uttarakhand-flower" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "सुबह 9:00 - रात 9:00 बजे" : "9:00 AM - 9:00 PM"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-uttarakhand-flower dark:text-uttarakhand-flower" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "पैराडाइज़ ग्राउंड, मसूरी" : "Paradise Ground, Mussoorie"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ticket className="h-5 w-5 text-uttarakhand-flower dark:text-uttarakhand-flower" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "₹800 प्रति व्यक्ति" : "₹800 per person"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-white dark:bg-gray-900 pt-0 pb-4 px-4">
                <a
                  href="https://forms.gle/QsgATnNtYchCKJB48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-uttarakhand-flower hover:bg-uttarakhand-flower/90 text-white font-pahadi">
                    {language === "hi" ? "टिकट बुक करें" : "Book Tickets"}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link href="/events">
              <Button
                variant="outline"
                className="border-uttarakhand-mountain text-uttarakhand-mountain hover:bg-uttarakhand-mountain/10 dark:border-uttarakhand-meadow dark:text-uttarakhand-meadow dark:hover:bg-uttarakhand-meadow/10 font-pahadi bg-transparent"
              >
                {language === "hi" ? "सभी कार्यक्रम देखें" : "View All Events"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Word of the Day Section */}
      <section id="wordOfDay" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div
            className={`grid gap-8 lg:grid-cols-[1fr_500px] items-center transition-all duration-1000 ${isVisible.wordOfDay ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-6">
              <WoodenFrame>
                <h2 className="text-3xl font-bold text-white font-pahadi">
                  {language === "hi" ? "आज की श्रद्धांजलि" : "Tribute of the Day"}
                </h2>
                <p className="text-white/80 max-w-xl font-pahadi">
                  {language === "hi"
                    ? "शहादत और सेवा की कहानियों से प्रेरणा लें। हमारी विरासत, हमारा गर्व।"
                    : "Find inspiration in stories of service and sacrifice. Our heritage, our pride."}
                </p>
                <div className="space-y-4 mt-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white/90 font-pahadi">
                      {language === "hi" ? "वीरगाथा का पाठ" : "Read the valour story"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white/90 font-pahadi">
                      {language === "hi" ? "आर्काइव फोटो" : "Archival photograph"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white/90 font-pahadi">
                      {language === "hi" ? "सेवा से प्रेरित पहल" : "Initiatives inspired by service"}
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/about">
                    <Button className="bg-white text-uttarakhand-wood hover:bg-white/90 font-pahadi">
                      {language === "hi" ? "और जानें" : "Learn More"}
                    </Button>
                  </Link>
                </div>
              </WoodenFrame>
            </div>
            <FoundationTribute />
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Featured Destinations */}
      <section
        id="destinations"
        className="py-16 bg-gradient-to-r from-uttarakhand-pine/10 to-uttarakhand-mountain/10 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AipanBorder className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "उत्तराखंड के प्रमुख स्थल" : "Featured Destinations of Uttarakhand"}
              </h2>
            </AipanBorder>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "उत्तराखंड के सुंदर स्थलों की यात्रा करें और स्थानीय भाषा और संस्कृति से जुड़ें।"
                : "Explore the beautiful destinations of Uttarakhand and connect with local language and culture."}
            </p>
          </div>
          <div
            className={`transition-all duration-1000 ${isVisible.destinations ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <FeaturedDestinations />
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "हमारे छात्रों की प्रतिक्रियाएँ" : "What Our Students Say"}
              </h2>
            </TempleArch>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "हमारे पाठ्यक्रमों और कार्यक्रमों के बारे में छात्रों की प्रतिक्रियाएँ और अनुभव।"
                : "Feedback and experiences from students about our courses and programs."}
            </p>
          </div>
          <div
            className={`transition-all duration-1000 ${isVisible.testimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Testimonials />
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Co-Partners Section */}
      <section
        id="partners"
        className="py-16 bg-gradient-to-r from-uttarakhand-sunset/10 to-uttarakhand-wood/10 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AipanBorder className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-wood dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "हमारे सहयोगी संस्थान" : "Our Co-Partners"}
              </h2>
            </AipanBorder>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "उत्तराखंड की भाषाओं और संस्कृति के संरक्षण में हमारे साथ काम करने वाले संस्थान और संगठन।"
                : "Institutions and organizations working with us to preserve Uttarakhand's languages and culture."}
            </p>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible.partners ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Partner 1 */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-uttarakhand-wood/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col items-center">
                <div className="relative h-24 w-24 mb-4">
                  <div className="absolute inset-0 bg-uttarakhand-wood/10 dark:bg-uttarakhand-meadow/10 rounded-full flex items-center justify-center text-3xl font-bold text-uttarakhand-wood dark:text-uttarakhand-meadow">
                    UK
                  </div>
                </div>
                <h3 className="text-lg font-bold text-uttarakhand-wood dark:text-uttarakhand-meadow font-pahadi text-center">
                  {language === "hi" ? "उत्तराखंड सरकार" : "Uttarakhand Government"}
                </h3>
                <p className="text-sm text-muted-foreground text-center mt-2 font-pahadi">
                  {language === "hi" ? "आधिकारिक सरकारी सहयोग" : "Official Government Support"}
                </p>
              </div>

              {/* Partner 2 */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col items-center">
                <div className="relative h-24 w-24 mb-4">
                  <div className="absolute inset-0 bg-uttarakhand-pine/10 dark:bg-uttarakhand-meadow/10 rounded-full flex items-center justify-center text-3xl font-bold text-uttarakhand-pine dark:text-uttarakhand-meadow">
                    UU
                  </div>
                </div>
                <h3 className="text-lg font-bold text-uttarakhand-pine dark:text-uttarakhand-meadow font-pahadi text-center">
                  {language === "hi" ? "उत्तराखंड विश्वविद्यालय" : "Uttarakhand University"}
                </h3>
                <p className="text-sm text-muted-foreground text-center mt-2 font-pahadi">
                  {language === "hi" ? "शैक्षिक अनुसंधान सहयोग" : "Academic Research Partnership"}
                </p>
              </div>

              {/* Partner 3 */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-uttarakhand-flower/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col items-center">
                <div className="relative h-24 w-24 mb-4">
                  <div className="absolute inset-0 bg-uttarakhand-flower/10 dark:bg-uttarakhand-meadow/10 rounded-full flex items-center justify-center text-3xl font-bold text-uttarakhand-flower dark:text-uttarakhand-meadow">
                    UHT
                  </div>
                </div>
                <h3 className="text-lg font-bold text-uttarakhand-flower dark:text-uttarakhand-meadow font-pahadi text-center">
                  {language === "hi" ? "उत्तराखंड विरासत ट्रस्ट" : "Uttarakhand Heritage Trust"}
                </h3>
                <p className="text-sm text-muted-foreground text-center mt-2 font-pahadi">
                  {language === "hi" ? "सांस्कृतिक संरक्षण सहयोग" : "Cultural Preservation Partnership"}
                </p>
              </div>

              {/* Partner 4 */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-uttarakhand-sunset/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col items-center">
                <div className="relative h-24 w-24 mb-4">
                  <div className="absolute inset-0 bg-uttarakhand-sunset/10 dark:bg-uttarakhand-meadow/10 rounded-full flex items-center justify-center text-3xl font-bold text-uttarakhand-sunset dark:text-uttarakhand-meadow">
                    DI
                  </div>
                </div>
                <h3 className="text-lg font-bold text-uttarakhand-sunset dark:text-uttarakhand-meadow font-pahadi text-center">
                  {language === "hi" ? "डिजिटल इंडिया" : "Digital India"}
                </h3>
                <p className="text-sm text-muted-foreground text-center mt-2 font-pahadi">
                  {language === "hi" ? "तकनीकी सहायता और समर्थन" : "Technical Assistance & Support"}
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground max-w-3xl mx-auto mb-6 font-pahadi">
                {language === "hi"
                  ? "हमारे साथ सहयोग करने के लिए इच्छुक हैं? हमसे संपर्क करें और जानें कि आप कैसे योगदान दे सकते हैं।"
                  : "Interested in partnering with us? Contact us to learn how you can contribute."}
              </p>
              <Button
                variant="outline"
                className="border-uttarakhand-wood text-uttarakhand-wood hover:bg-uttarakhand-wood/10 dark:border-uttarakhand-meadow dark:text-uttarakhand-meadow dark:hover:bg-uttarakhand-meadow/10 font-pahadi bg-transparent"
              >
                {language === "hi" ? "सहयोग के अवसर" : "Partnership Opportunities"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Dedicated Newsletter Section before CTA */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <NewsletterSignup />
          </AnimatedSection>
        </div>
      </section>

      <MountainDivider />

      {/* Updated Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-uttarakhand-sunset via-uttarakhand-wood to-uttarakhand-pine text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="backdrop-blur-sm bg-white/10 p-8 rounded-lg border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-pahadi">
              {language === "hi" ? "आज ही सेवा की यात्रा आजीविका शुरू करें" : "Start Your Service Journey Today"}
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90 font-pahadi">
              {language === "hi"
                ? "सीमा क्षेत्रों की भाषाओं और संस्कृति से जुड़े लोगों तक पहुंचने के लिए हमारे प्लेटफॉर्म पर विज्ञापन दें।"
                : "Advertise on our platform to reach people connected to Uttarakhand's languages and culture."}
            </p>
            <a href="https://forms.gle/QsgATnNtYchCKJB48" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-uttarakhand-sunset hover:bg-white/90 font-pahadi">
                {language === "hi" ? "अभी रजिस्टर करें" : "Register Now"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <div className="mt-8">
              <DamauDrum className="mx-auto animate-bounce" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
