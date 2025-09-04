"use client"

import Image from "next/image"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/lib/language-context"
import { AipanBorder } from "@/components/decorative-elements"

export default function WorkshopsPage() {
  const { language } = useLanguage()

  return (
    <div className="py-12 bg-gradient-to-b from-white to-uttarakhand-sunset/10 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <AipanBorder className="inline-block mb-4">
            <h1 className="text-4xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
              {language === "hi" ? "वर्कशॉप और इवेंट्स" : "Workshops and Events"}
            </h1>
          </AipanBorder>
          <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
            {language === "hi"
              ? "लाइव वर्चुअल क्लासरूम और इंटरएक्टिव सेशन में भाग लें और अपनी भाषा कौशल को बढ़ाएँ।"
              : "Participate in live virtual classrooms and interactive sessions to enhance your language skills."}
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="mt-10">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="upcoming" className="font-pahadi">
                {language === "hi" ? "आगामी" : "Upcoming"}
              </TabsTrigger>
              <TabsTrigger value="past" className="font-pahadi">
                {language === "hi" ? "पिछले" : "Past"}
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="upcoming" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="कुमाऊँनी लोकगीत वर्कशॉप"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="mt-4 font-pahadi">
                    {language === "hi" ? "कुमाऊँनी लोकगीत वर्कशॉप" : "Kumaoni Folk Music Workshop"}
                  </CardTitle>
                  <CardDescription className="font-pahadi">
                    {language === "hi"
                      ? "इंटरएक्टिव वर्कशॉप में कुमाऊँनी लोकगीतों के बारे में जानें"
                      : "Learn about Kumaoni folk songs in this interactive workshop"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">
                        {language === "hi" ? "15 जुलाई, 2024" : "July 15, 2024"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">
                        {language === "hi" ? "शाम 6:00 - 8:00 बजे" : "6:00 PM - 8:00 PM"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">{language === "hi" ? "ऑनलाइन (ज़ूम)" : "Online (Zoom)"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">
                        {language === "hi" ? "25 सीटें उपलब्ध" : "25 seats available"}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white font-pahadi">
                    {language === "hi" ? "रजिस्टर करें" : "Register"}
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="गढ़वाली भाषा प्रैक्टिस सेशन"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="mt-4 font-pahadi">
                    {language === "hi" ? "गढ़वाली भाषा प्रैक्टिस सेशन" : "Garhwali Language Practice Session"}
                  </CardTitle>
                  <CardDescription className="font-pahadi">
                    {language === "hi"
                      ? "नेटिव स्पीकर्स के साथ गढ़वाली भाषा का अभ्यास करें"
                      : "Practice Garhwali language with native speakers"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">
                        {language === "hi" ? "20 जुलाई, 2024" : "July 20, 2024"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">
                        {language === "hi" ? "शाम 5:00 - 6:30 बजे" : "5:00 PM - 6:30 PM"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">
                        {language === "hi" ? "ऑनलाइन (गूगल मीट)" : "Online (Google Meet)"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">
                        {language === "hi" ? "15 सीटें उपलब्ध" : "15 seats available"}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-uttarakhand-pine hover:bg-uttarakhand-pine/90 text-white font-pahadi">
                    {language === "hi" ? "रजिस्टर करें" : "Register"}
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-uttarakhand-flower/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="उत्तराखंड के त्योहार"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="mt-4 font-pahadi">
                    {language === "hi" ? "उत्तराखंड के त्योहार" : "Festivals of Uttarakhand"}
                  </CardTitle>
                  <CardDescription className="font-pahadi">
                    {language === "hi"
                      ? "उत्तराखंड के प्रमुख त्योहारों और उत्सवों के बारे में जानें"
                      : "Learn about major festivals and celebrations of Uttarakhand"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">
                        {language === "hi" ? "25 जुलाई, 2024" : "July 25, 2024"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">
                        {language === "hi" ? "शाम 7:00 - 8:30 बजे" : "7:00 PM - 8:30 PM"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">{language === "hi" ? "ऑनलाइन (ज़ूम)" : "Online (Zoom)"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">
                        {language === "hi" ? "30 सीटें उपलब्ध" : "30 seats available"}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-uttarakhand-flower hover:bg-uttarakhand-flower/90 text-white font-pahadi">
                    {language === "hi" ? "रजिस्टर करें" : "Register"}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="कुमाऊँनी व्याकरण वर्कशॉप"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-bold font-pahadi">
                        {language === "hi" ? "रिकॉर्डिंग उपलब्ध" : "Recording Available"}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="mt-4 font-pahadi">
                    {language === "hi" ? "कुमाऊँनी व्याकरण वर्कशॉप" : "Kumaoni Grammar Workshop"}
                  </CardTitle>
                  <CardDescription className="font-pahadi">
                    {language === "hi"
                      ? "कुमाऊँनी भाषा के व्याकरण के बारे में जानें"
                      : "Learn about the grammar of Kumaoni language"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">{language === "hi" ? "10 जून, 2024" : "June 10, 2024"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">
                        {language === "hi" ? "शाम 6:00 - 8:00 बजे" : "6:00 PM - 8:00 PM"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">{language === "hi" ? "ऑनलाइन (ज़ूम)" : "Online (Zoom)"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">
                        {language === "hi" ? "45 प्रतिभागी" : "45 participants"}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white font-pahadi">
                    {language === "hi" ? "रिकॉर्डिंग देखें" : "Watch Recording"}
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="गढ़वाली लोककथाएँ"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-bold font-pahadi">
                        {language === "hi" ? "रिकॉर्डिंग उपलब्ध" : "Recording Available"}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="mt-4 font-pahadi">
                    {language === "hi" ? "गढ़वाली लोककथाएँ" : "Garhwali Folktales"}
                  </CardTitle>
                  <CardDescription className="font-pahadi">
                    {language === "hi"
                      ? "गढ़वाली लोककथाओं और कहानियों के बारे में जानें"
                      : "Learn about Garhwali folktales and stories"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">{language === "hi" ? "5 जून, 2024" : "June 5, 2024"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">
                        {language === "hi" ? "शाम 7:00 - 8:30 बजे" : "7:00 PM - 8:30 PM"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">
                        {language === "hi" ? "ऑनलाइन (गूगल मीट)" : "Online (Google Meet)"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-pahadi">
                        {language === "hi" ? "38 प्रतिभागी" : "38 participants"}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-uttarakhand-pine hover:bg-uttarakhand-pine/90 text-white font-pahadi">
                    {language === "hi" ? "रिकॉर्डिंग देखें" : "Watch Recording"}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
