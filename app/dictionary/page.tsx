"use client"

import { useState, useEffect } from "react"
import { Search, Volume2, ArrowRight, BookOpen, Download, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import { AipanBorder, TempleArch } from "@/components/decorative-elements"
import { AudioPlayer } from "@/components/audio-player"

export default function DictionaryPage() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [selectedWord, setSelectedWord] = useState<null | {
    word: string
    transliteration: string
    meaning: string
    partOfSpeech: string
    language: string
    example: string
    translation: string
    audioUrl?: string
  }>(null)

  // Dictionary data
  const dictionaryWords = [
    {
      word: "पानी",
      transliteration: "pānī",
      meaning: language === "hi" ? "जल" : "Water",
      partOfSpeech: language === "hi" ? "संज्ञा" : "Noun",
      language: "Kumaoni",
      example: language === "hi" ? "मुझे पानी पीना है।" : "I want to drink water.",
      translation: language === "hi" ? "मुझे जल पीना है।" : "I want to drink water.",
      audioUrl: "/audio/pani.mp3",
    },
    {
      word: "डोंगा",
      transliteration: "ḍōṅgā",
      meaning: language === "hi" ? "पहाड़" : "Mountain",
      partOfSpeech: language === "hi" ? "संज्ञा" : "Noun",
      language: "Garhwali",
      example: language === "hi" ? "वह डोंगा बहुत ऊंचा है।" : "That mountain is very high.",
      translation: language === "hi" ? "वह पहाड़ बहुत ऊंचा है।" : "That mountain is very high.",
      audioUrl: "/audio/donga.mp3",
    },
    {
      word: "दिया",
      transliteration: "diyā",
      meaning: language === "hi" ? "दिया" : "Lamp",
      partOfSpeech: language === "hi" ? "संज्ञा" : "Noun",
      language: "Kumaoni",
      example: language === "hi" ? "दिवाली पर हम दिया जलाते हैं।" : "We light lamps on Diwali.",
      translation: language === "hi" ? "दिवाली पर हम दीपक जलाते हैं।" : "We light lamps on Diwali.",
      audioUrl: "/audio/diya.mp3",
    },
    {
      word: "बाटी",
      transliteration: "bāṭī",
      meaning: language === "hi" ? "रोटी" : "Bread",
      partOfSpeech: language === "hi" ? "संज्ञा" : "Noun",
      language: "Garhwali",
      example: language === "hi" ? "मैंने बाटी खाई।" : "I ate bread.",
      translation: language === "hi" ? "मैंने रोटी खाई।" : "I ate bread.",
      audioUrl: "/audio/bati.mp3",
    },
    {
      word: "ज्वान",
      transliteration: "jwān",
      meaning: language === "hi" ? "युवा" : "Young",
      partOfSpeech: language === "hi" ? "विशेषण" : "Adjective",
      language: "Kumaoni",
      example: language === "hi" ? "वह एक ज्वान लड़का है।" : "He is a young boy.",
      translation: language === "hi" ? "वह एक युवा लड़का है।" : "He is a young boy.",
      audioUrl: "/audio/jwan.mp3",
    },
    {
      word: "बुड्डा",
      transliteration: "buḍḍā",
      meaning: language === "hi" ? "बूढ़ा" : "Old",
      partOfSpeech: language === "hi" ? "विशेषण" : "Adjective",
      language: "Garhwali",
      example: language === "hi" ? "वह बुड्डा आदमी है।" : "He is an old man.",
      translation: language === "hi" ? "वह बूढ़ा आदमी है।" : "He is an old man.",
      audioUrl: "/audio/budda.mp3",
    },
    {
      word: "धूप",
      transliteration: "dhūp",
      meaning: language === "hi" ? "सूरज की रोशनी" : "Sunlight",
      partOfSpeech: language === "hi" ? "संज्ञा" : "Noun",
      language: "Kumaoni",
      example: language === "hi" ? "आज धूप निकली है।" : "The sun is shining today.",
      translation: language === "hi" ? "आज सूरज की रोशनी है।" : "The sun is shining today.",
      audioUrl: "/audio/dhup.mp3",
    },
    {
      word: "बादल",
      transliteration: "bādal",
      meaning: language === "hi" ? "मेघ" : "Cloud",
      partOfSpeech: language === "hi" ? "संज्ञा" : "Noun",
      language: "Garhwali",
      example: language === "hi" ? "आसमान में बादल छाए हैं।" : "The sky is cloudy.",
      translation: language === "hi" ? "आसमान में मेघ छाए हैं।" : "The sky is cloudy.",
      audioUrl: "/audio/badal.mp3",
    },
    {
      word: "खाणा",
      transliteration: "khāṇā",
      meaning: language === "hi" ? "खाना" : "Food",
      partOfSpeech: language === "hi" ? "संज्ञा" : "Noun",
      language: "Kumaoni",
      example: language === "hi" ? "खाणा तैयार है।" : "The food is ready.",
      translation: language === "hi" ? "खाना तैयार है।" : "The food is ready.",
      audioUrl: "/audio/khana.mp3",
    },
    {
      word: "जाणा",
      transliteration: "jāṇā",
      meaning: language === "hi" ? "जाना" : "To go",
      partOfSpeech: language === "hi" ? "क्रिया" : "Verb",
      language: "Garhwali",
      example: language === "hi" ? "मैं घर जाणा चाहता हूँ।" : "I want to go home.",
      translation: language === "hi" ? "मैं घर जाना चाहता हूँ।" : "I want to go home.",
      audioUrl: "/audio/jana.mp3",
    },
    {
      word: "आणा",
      transliteration: "āṇā",
      meaning: language === "hi" ? "आना" : "To come",
      partOfSpeech: language === "hi" ? "क्रिया" : "Verb",
      language: "Kumaoni",
      example: language === "hi" ? "वह कल आणा चाहता है।" : "He wants to come tomorrow.",
      translation: language === "hi" ? "वह कल आना चाहता है।" : "He wants to come tomorrow.",
      audioUrl: "/audio/ana.mp3",
    },
    {
      word: "बैठणा",
      transliteration: "baiṭhṇā",
      meaning: language === "hi" ? "बैठना" : "To sit",
      partOfSpeech: language === "hi" ? "क्रिया" : "Verb",
      language: "Garhwali",
      example: language === "hi" ? "कृपया यहाँ बैठणा।" : "Please sit here.",
      translation: language === "hi" ? "कृपया यहाँ बैठें।" : "Please sit here.",
      audioUrl: "/audio/baithna.mp3",
    },
    {
      word: "मीठो",
      transliteration: "mīṭhō",
      meaning: language === "hi" ? "मीठा" : "Sweet",
      partOfSpeech: language === "hi" ? "विशेषण" : "Adjective",
      language: "Kumaoni",
      example: language === "hi" ? "यह फल बहुत मीठो है।" : "This fruit is very sweet.",
      translation: language === "hi" ? "यह फल बहुत मीठा है।" : "This fruit is very sweet.",
      audioUrl: "/audio/mitho.mp3",
    },
    {
      word: "ठंडो",
      transliteration: "ṭhaṇḍō",
      meaning: language === "hi" ? "ठंडा" : "Cold",
      partOfSpeech: language === "hi" ? "विशेषण" : "Adjective",
      language: "Garhwali",
      example: language === "hi" ? "आज मौसम ठंडो है।" : "The weather is cold today.",
      translation: language === "hi" ? "आज मौसम ठंडा है।" : "The weather is cold today.",
      audioUrl: "/audio/thando.mp3",
    },
    {
      word: "गरम",
      transliteration: "garam",
      meaning: language === "hi" ? "गर्म" : "Hot",
      partOfSpeech: language === "hi" ? "विशेषण" : "Adjective",
      language: "Kumaoni",
      example: language === "hi" ? "चाय गरम है।" : "The tea is hot.",
      translation: language === "hi" ? "चाय गर्म है।" : "The tea is hot.",
      audioUrl: "/audio/garam.mp3",
    },
  ]

  // Filter words based on active tab and search query
  const filteredWords = dictionaryWords.filter((word) => {
    const matchesTab = activeTab === "all" || word.language.toLowerCase() === activeTab.toLowerCase()
    const matchesSearch =
      word.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      word.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      word.transliteration.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedWord(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="py-12 bg-gradient-to-b from-white to-uttarakhand-sunset/10 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <AipanBorder className="inline-block mb-4">
            <h1 className="text-4xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
              {language === "hi" ? "उत्तराखंड भाषा शब्दकोश" : "Uttarakhand Language Dictionary"}
            </h1>
          </AipanBorder>
          <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
            {language === "hi"
              ? "कुमाऊँनी और गढ़वाली भाषाओं के शब्दों का संग्रह, उनके अर्थ, उच्चारण और उपयोग के साथ"
              : "A collection of Kumaoni and Garhwali words with their meanings, pronunciations, and usage"}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={language === "hi" ? "शब्द खोजें..." : "Search words..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full justify-center">
              <TabsList className="bg-uttarakhand-mountain/10 dark:bg-uttarakhand-meadow/10">
                <TabsTrigger value="all" className="font-pahadi">
                  {language === "hi" ? "सभी" : "All"}
                </TabsTrigger>
                <TabsTrigger value="Kumaoni" className="font-pahadi">
                  {language === "hi" ? "कुमाऊँनी" : "Kumaoni"}
                </TabsTrigger>
                <TabsTrigger value="Garhwali" className="font-pahadi">
                  {language === "hi" ? "गढ़वाली" : "Garhwali"}
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20">
                  <SelectValue placeholder={language === "hi" ? "शब्द प्रकार" : "Word Type"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === "hi" ? "सभी प्रकार" : "All Types"}</SelectItem>
                  <SelectItem value="noun">{language === "hi" ? "संज्ञा" : "Noun"}</SelectItem>
                  <SelectItem value="verb">{language === "hi" ? "क्रिया" : "Verb"}</SelectItem>
                  <SelectItem value="adjective">{language === "hi" ? "विशेषण" : "Adjective"}</SelectItem>
                  <SelectItem value="adverb">{language === "hi" ? "क्रिया विशेषण" : "Adverb"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Dictionary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWords.map((word, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20"
              onClick={() => setSelectedWord(word)}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                      {word.word}
                    </CardTitle>
                    <CardDescription className="font-pahadi">{word.transliteration}</CardDescription>
                  </div>
                  <Badge
                    className={
                      word.language === "Kumaoni"
                        ? "bg-uttarakhand-pine text-white"
                        : "bg-uttarakhand-sunset text-white"
                    }
                  >
                    {word.language}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-muted-foreground font-pahadi">
                      <span className="font-semibold">{language === "hi" ? "अर्थ:" : "Meaning:"}</span> {word.meaning}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-uttarakhand-mountain dark:text-uttarakhand-meadow"
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground font-pahadi">
                    <span className="font-semibold">{language === "hi" ? "शब्द प्रकार:" : "Part of Speech:"}</span>{" "}
                    {word.partOfSpeech}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button
                  variant="ghost"
                  className="text-uttarakhand-mountain dark:text-uttarakhand-meadow w-full justify-start p-0 hover:bg-transparent hover:text-uttarakhand-mountain/80 dark:hover:text-uttarakhand-meadow/80"
                >
                  <span className="text-sm font-pahadi">
                    {language === "hi" ? "और जानकारी देखें" : "View more details"}
                  </span>
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* No results message */}
        {filteredWords.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground font-pahadi">
              {language === "hi"
                ? "कोई परिणाम नहीं मिला। कृपया अपने फ़िल्टर बदलें।"
                : "No results found. Please try different filters."}
            </p>
          </div>
        )}

        {/* Word Details Modal */}
        {selectedWord && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="relative max-w-4xl w-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
              <Button
                className="absolute top-4 right-4 z-10"
                variant="ghost"
                size="icon"
                onClick={() => setSelectedWord(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </Button>
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                        {selectedWord.word}
                      </h2>
                      <Badge
                        className={
                          selectedWord.language === "Kumaoni"
                            ? "bg-uttarakhand-pine text-white"
                            : "bg-uttarakhand-sunset text-white"
                        }
                      >
                        {selectedWord.language}
                      </Badge>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4 font-pahadi">{selectedWord.transliteration}</p>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                          {language === "hi" ? "अर्थ" : "Meaning"}
                        </h3>
                        <p className="text-muted-foreground font-pahadi">{selectedWord.meaning}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                          {language === "hi" ? "शब्द प्रकार" : "Part of Speech"}
                        </h3>
                        <p className="text-muted-foreground font-pahadi">{selectedWord.partOfSpeech}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                          {language === "hi" ? "उदाहरण" : "Example"}
                        </h3>
                        <p className="text-muted-foreground font-pahadi">{selectedWord.example}</p>
                        <p className="text-sm text-muted-foreground mt-1 font-pahadi">
                          <span className="italic">{selectedWord.translation}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 space-y-4">
                    <div className="bg-uttarakhand-mountain/10 dark:bg-uttarakhand-meadow/10 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-uttarakhand-mountain dark:text-uttarakhand-meadow mb-3 font-pahadi">
                        {language === "hi" ? "उच्चारण सुनें" : "Listen to Pronunciation"}
                      </h3>
                      <AudioPlayer audioUrl={selectedWord.audioUrl || ""} />
                    </div>
                    <div className="bg-uttarakhand-mountain/10 dark:bg-uttarakhand-meadow/10 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-uttarakhand-mountain dark:text-uttarakhand-meadow mb-3 font-pahadi">
                        {language === "hi" ? "संबंधित शब्द" : "Related Words"}
                      </h3>
                      <div className="space-y-2">
                        {dictionaryWords
                          .filter(
                            (w) =>
                              w.language === selectedWord.language &&
                              w.partOfSpeech === selectedWord.partOfSpeech &&
                              w.word !== selectedWord.word,
                          )
                          .slice(0, 3)
                          .map((word, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between cursor-pointer hover:bg-uttarakhand-mountain/5 dark:hover:bg-uttarakhand-meadow/5 p-2 rounded-md"
                              onClick={() => setSelectedWord(word)}
                            >
                              <div>
                                <p className="font-semibold font-pahadi">{word.word}</p>
                                <p className="text-sm text-muted-foreground font-pahadi">{word.meaning}</p>
                              </div>
                              <ArrowRight className="h-4 w-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-8">
                  <Button variant="outline" className="gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span className="font-pahadi">{language === "hi" ? "अध्ययन सूची में जोड़ें" : "Add to Study List"}</span>
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    <span className="font-pahadi">
                      {language === "hi" ? "फ्लैशकार्ड डाउनलोड करें" : "Download Flashcard"}
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dictionary Information Section */}
        <section className="mt-16">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "शब्दकोश के बारे में" : "About the Dictionary"}
              </h2>
            </TempleArch>
            <div className="space-y-4 text-muted-foreground font-pahadi">
              <p>
                {language === "hi"
                  ? "यह शब्दकोश उत्तराखंड की दो प्रमुख भाषाओं - कुमाऊँनी और गढ़वाली के शब्दों का एक व्यापक संग्रह है। इसका उद्देश्य इन भाषाओं को सीखने और संरक्षित करने में मदद करना है।"
                  : "This dictionary is a comprehensive collection of words from the two major languages of Uttarakhand - Kumaoni and Garhwali. Its purpose is to help learn and preserve these languages."}
              </p>
              <p>
                {language === "hi"
                  ? "प्रत्येक प्रविष्टि में शब्द, उसका उच्चारण, अर्थ, शब्द प्रकार, उदाहरण वाक्य और ऑडियो उच्चारण शामिल है। आप शब्दों को भाषा या शब्द प्रकार के अनुसार फ़िल्टर कर सकते हैं और खोज बॉक्स का उपयोग करके विशिष्ट शब्दों को खोज सकते हैं।"
                  : "Each entry includes the word, its pronunciation, meaning, part of speech, example sentence, and audio pronunciation. You can filter words by language or word type and search for specific words using the search box."}
              </p>
              <p>
                {language === "hi"
                  ? "यह शब्दकोश नियमित रूप से अपडेट किया जाता है और नए शब्द जोड़े जाते हैं। अगर आपके पास कोई सुझाव या प्रतिक्रिया है, तो कृपया हमसे संपर्क करें।"
                  : "This dictionary is regularly updated and new words are added. If you have any suggestions or feedback, please contact us."}
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <Button className="bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white font-pahadi">
                {language === "hi" ? "शब्दकोश डाउनलोड करें (PDF)" : "Download Dictionary (PDF)"}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
