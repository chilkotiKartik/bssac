"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mic, Headphones, Rss, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PodcastPlayer } from "@/components/podcast-player"
import { useLanguage } from "@/lib/language-context"
import { AipanBorder, MountainDivider, TempleArch } from "@/components/decorative-elements"

export default function PodcastsPage() {
  const { language } = useLanguage()
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    alert(
      language === "hi"
        ? `${email} को पॉडकास्ट अपडेट के लिए सब्सक्राइब किया गया!`
        : `${email} subscribed to podcast updates!`,
    )
    setEmail("")
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-uttarakhand-wood to-uttarakhand-mountain">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Podcast Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AipanBorder className="inline-block mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white font-pahadi">
                {language === "hi" ? "पहाड़ी पॉडकास्ट" : "Pahadi Podcast"}
              </h1>
            </AipanBorder>
            <p className="text-lg md:text-xl mb-8 text-white/90 font-pahadi">
              {language === "hi"
                ? "उत्तराखंड की भाषाओं, संस्कृति और परंपराओं पर रोचक चर्चाएँ और कहानियाँ"
                : "Fascinating discussions and stories about Uttarakhand's languages, culture, and traditions"}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-uttarakhand-wood hover:bg-white/90 font-pahadi">
                <Headphones className="mr-2 h-4 w-4" />
                {language === "hi" ? "अभी सुनें" : "Listen Now"}
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-pahadi">
                <Rss className="mr-2 h-4 w-4" />
                {language === "hi" ? "सब्सक्राइब करें" : "Subscribe"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Featured Episode */}
      <section className="py-16 bg-gradient-to-b from-white to-uttarakhand-sunset/10 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-wood dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "फीचर्ड एपिसोड" : "Featured Episode"}
              </h2>
            </TempleArch>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "हमारे नवीनतम और सबसे लोकप्रिय पॉडकास्ट एपिसोड सुनें"
                : "Listen to our latest and most popular podcast episodes"}
            </p>
          </div>

          <PodcastPlayer />
        </div>
      </section>

      <MountainDivider />

      {/* Podcast Categories */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mb-4">
              {language === "hi" ? "पॉडकास्ट श्रेणियाँ" : "Podcast Categories"}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "अपनी रुचि के अनुसार पॉडकास्ट एपिसोड ब्राउज़ करें"
                : "Browse podcast episodes according to your interests"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Language & Linguistics",
                titleHi: "भाषा और भाषाविज्ञान",
                icon: "🗣️",
                color: "uttarakhand-mountain",
                count: 12,
              },
              {
                title: "Folk Tales & Stories",
                titleHi: "लोक कथाएँ और कहानियाँ",
                icon: "📚",
                color: "uttarakhand-pine",
                count: 8,
              },
              {
                title: "Music & Instruments",
                titleHi: "संगीत और वाद्य यंत्र",
                icon: "🎵",
                color: "uttarakhand-sunset",
                count: 15,
              },
              {
                title: "Culture & Traditions",
                titleHi: "संस्कृति और परंपराएँ",
                icon: "🏮",
                color: "uttarakhand-flower",
                count: 10,
              },
              {
                title: "History & Heritage",
                titleHi: "इतिहास और विरासत",
                icon: "🏛️",
                color: "uttarakhand-wood",
                count: 7,
              },
              {
                title: "Food & Cuisine",
                titleHi: "भोजन और व्यंजन",
                icon: "🍲",
                color: "uttarakhand-mountain",
                count: 6,
              },
              {
                title: "Travel & Tourism",
                titleHi: "यात्रा और पर्यटन",
                icon: "🏔️",
                color: "uttarakhand-pine",
                count: 9,
              },
              {
                title: "Interviews & Discussions",
                titleHi: "साक्षात्कार और चर्चाएँ",
                icon: "🎙️",
                color: "uttarakhand-flower",
                count: 14,
              },
            ].map((category, index) => (
              <Link href={`/podcasts/category/${category.title.toLowerCase().replace(/\s+/g, "-")}`} key={index}>
                <div
                  className={`bg-${category.color}/10 hover:bg-${category.color}/20 border border-${category.color}/20 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center`}
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3
                    className={`text-lg font-bold text-${category.color} dark:text-${category.color === "uttarakhand-mountain" ? "uttarakhand-meadow" : category.color} font-pahadi mb-2`}
                  >
                    {language === "hi" ? category.titleHi : category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-pahadi">
                    {category.count} {language === "hi" ? "एपिसोड" : "episodes"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Become a Guest */}
      <section className="py-16 bg-gradient-to-r from-uttarakhand-sunset/10 to-uttarakhand-flower/10 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-uttarakhand-wood dark:text-uttarakhand-meadow font-pahadi mb-4">
                {language === "hi" ? "हमारे पॉडकास्ट में अतिथि बनें" : "Become a Guest on Our Podcast"}
              </h2>
              <p className="text-muted-foreground mb-6 font-pahadi">
                {language === "hi"
                  ? "क्या आप उत्तराखंड की भाषाओं, संस्कृति या परंपराओं के विशेषज्ञ हैं? हमारे पॉडकास्ट में अतिथि बनकर अपने ज्ञान और अनुभवों को साझा करें।"
                  : "Are you an expert in Uttarakhand's languages, culture, or traditions? Share your knowledge and experiences by becoming a guest on our podcast."}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-uttarakhand-wood/20 flex items-center justify-center text-uttarakhand-wood dark:text-uttarakhand-meadow flex-shrink-0 mt-1">
                    <Mic className="h-3 w-3" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-uttarakhand-wood dark:text-uttarakhand-meadow font-pahadi">
                      {language === "hi" ? "अपनी विशेषज्ञता साझा करें" : "Share Your Expertise"}
                    </h3>
                    <p className="text-sm text-muted-foreground font-pahadi">
                      {language === "hi"
                        ? "अपने ज्ञान और अनुभवों को हजारों श्रोताओं के साथ साझा करें"
                        : "Share your knowledge and experiences with thousands of listeners"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-uttarakhand-wood/20 flex items-center justify-center text-uttarakhand-wood dark:text-uttarakhand-meadow flex-shrink-0 mt-1">
                    <Share2 className="h-3 w-3" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-uttarakhand-wood dark:text-uttarakhand-meadow font-pahadi">
                      {language === "hi" ? "अपनी पहुंच बढ़ाएँ" : "Expand Your Reach"}
                    </h3>
                    <p className="text-sm text-muted-foreground font-pahadi">
                      {language === "hi"
                        ? "अपने काम और योगदान को व्यापक दर्शकों तक पहुंचाएँ"
                        : "Reach a wider audience with your work and contributions"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-uttarakhand-wood/20 flex items-center justify-center text-uttarakhand-wood dark:text-uttarakhand-meadow flex-shrink-0 mt-1">
                    <Headphones className="h-3 w-3" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-uttarakhand-wood dark:text-uttarakhand-meadow font-pahadi">
                      {language === "hi" ? "नेटवर्क बनाएँ" : "Build Networks"}
                    </h3>
                    <p className="text-sm text-muted-foreground font-pahadi">
                      {language === "hi"
                        ? "समान विचारधारा वाले लोगों और संस्थाओं के साथ संबंध बनाएँ"
                        : "Connect with like-minded individuals and organizations"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a href="https://forms.gle/QsgATnNtYchCKJB48" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-uttarakhand-wood hover:bg-uttarakhand-wood/90 text-white font-pahadi">
                    {language === "hi" ? "अतिथि के रूप में आवेदन करें" : "Apply as a Guest"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-uttarakhand-sunset/20 rounded-full animate-pulse-slow"></div>
              <div
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-uttarakhand-flower/20 rounded-full animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              ></div>
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Podcast Recording"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Subscribe Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mb-4">
              {language === "hi" ? "पॉडकास्ट अपडेट प्राप्त करें" : "Get Podcast Updates"}
            </h2>
            <p className="text-muted-foreground mb-8 font-pahadi">
              {language === "hi"
                ? "नए एपिसोड और विशेष सामग्री के बारे में सबसे पहले जानने के लिए हमारी ईमेल सूची में शामिल हों।"
                : "Join our email list to be the first to know about new episodes and special content."}
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder={language === "hi" ? "आपका ईमेल पता" : "Your email address"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button
                type="submit"
                className="bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white font-pahadi"
              >
                {language === "hi" ? "सब्सक्राइब करें" : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
