"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp, MessageSquare, Share2, Flag, BookOpen, Music, Video, Volume2 } from "lucide-react"
import { AipanBorder } from "@/components/decorative-elements"

interface StorytellingCornerProps {
  districtId?: number
}

export function StorytellingCorner({ districtId }: StorytellingCornerProps) {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState<"folklore" | "songs" | "experiences">("folklore")
  const [newStory, setNewStory] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Sample stories (would be fetched from a database in a real application)
  const stories = {
    folklore: [
      {
        id: 1,
        title: {
          en: "The Legend of Nanda Devi",
          hi: "नंदा देवी की कहानी",
        },
        content: {
          en: "According to local folklore, Nanda Devi is the manifestation of Goddess Parvati. The legend says that after Goddess Parvati married Lord Shiva, she visited her maternal home in the Himalayas. The locals celebrate this homecoming as the Nanda Devi Raj Jat Yatra, a pilgrimage that takes place once every twelve years.",
          hi: "स्थानीय लोककथा के अनुसार, नंदा देवी देवी पार्वती का प्रकटीकरण हैं। कहानी कहती है कि भगवान शिव से विवाह करने के बाद, देवी पार्वती ने हिमालय में अपने मायके का दौरा किया। स्थानीय लोग इस घर वापसी को नंदा देवी राज जात यात्रा के रूप में मनाते हैं, एक तीर्थयात्रा जो हर बारह साल में एक बार होती है।",
        },
        author: {
          name: "Ramesh Joshi",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        likes: 42,
        comments: 7,
        date: "2023-08-15",
      },
      {
        id: 2,
        title: {
          en: "The Tale of Roopkund Lake",
          hi: "रूपकुंड झील की कहानी",
        },
        content: {
          en: "Roopkund, also known as Mystery Lake or Skeleton Lake, is famous for the hundreds of human skeletons found at its bottom. According to local legend, a king and his dancers were traveling through the area and were caught in a severe hailstorm. Unable to find shelter, they all perished. Their remains can still be seen at the bottom of the lake when the snow melts.",
          hi: "रूपकुंड, जिसे मिस्ट्री लेक या स्केलेटन लेक के नाम से भी जाना जाता है, अपने तल पर पाए गए सैकड़ों मानव कंकालों के लिए प्रसिद्ध है। स्थानीय किंवदंती के अनुसार, एक राजा और उसके नर्तक इस क्षेत्र से यात्रा कर रहे थे और एक गंभीर ओलावृष्टि में फंस गए थे। आश्रय न मिलने के कारण, वे सभी मारे गए। जब बर्फ पिघलती है, तो उनके अवशेष अभी भी झील के तल पर देखे जा सकते हैं।",
        },
        author: {
          name: "Sunita Rawat",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        likes: 38,
        comments: 12,
        date: "2023-07-22",
      },
    ],
    songs: [
      {
        id: 1,
        title: {
          en: "Bedu Pako Baro Masa",
          hi: "बेडू पाको बारो मासा",
        },
        content: {
          en: '"Bedu Pako Baro Masa" is one of the most popular folk songs of Uttarakhand. The song describes the Bedu (Berries) that ripen throughout the year. It\'s a metaphor for the eternal love between a couple. The song is often sung during weddings and other celebrations.',
          hi: '"बेडू पाको बारो मासा" उत्तराखंड के सबसे लोकप्रिय लोक गीतों में से एक है। गीत बेडू (जामुन) का वर्णन करता है जो पूरे वर्ष पकते हैं। यह एक जोड़े के बीच अनंत प्रेम का एक रूपक है। गीत अक्सर शादियों और अन्य समारोहों के दौरान गाया जाता है।',
        },
        author: {
          name: "Narendra Singh Negi",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        likes: 56,
        comments: 8,
        date: "2023-09-05",
        audioUrl: "https://example.com/bedu-pako.mp3",
      },
      {
        id: 2,
        title: {
          en: "Chholiya Dance Song",
          hi: "छोलिया नृत्य गीत",
        },
        content: {
          en: "The Chholiya dance is a traditional sword dance performed during weddings in the Kumaon region. The accompanying songs narrate tales of bravery and valor. The rhythmic beats and energetic movements make it a spectacular performance to watch.",
          hi: "छोलिया नृत्य कुमाऊँ क्षेत्र में शादियों के दौरान किया जाने वाला एक पारंपरिक तलवार नृत्य है। साथ में गाए जाने वाले गीत वीरता और शौर्य की कहानियों का वर्णन करते हैं। लयबद्ध धड़कन और ऊर्जावान आंदोलन इसे देखने के लिए एक शानदार प्रदर्शन बनाते हैं।",
        },
        author: {
          name: "Gopal Babu Goswami",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        likes: 45,
        comments: 6,
        date: "2023-08-18",
        audioUrl: "https://example.com/chholiya.mp3",
      },
    ],
    experiences: [
      {
        id: 1,
        title: {
          en: "My Trek to Valley of Flowers",
          hi: "फूलों की घाटी की मेरी यात्रा",
        },
        content: {
          en: "Last summer, I embarked on a trek to the Valley of Flowers in Uttarakhand. The valley, nestled in the Western Himalayas, is known for its meadows of endemic alpine flowers. The trek was challenging but the sight of the colorful flowers against the backdrop of snow-capped mountains was absolutely breathtaking. I also visited the nearby Hemkund Sahib, a Sikh pilgrimage site. The entire experience was spiritually uplifting and I would recommend it to anyone who loves nature and adventure.",
          hi: "पिछले गर्मियों में, मैंने उत्तराखंड में फूलों की घाटी की यात्रा शुरू की। पश्चिमी हिमालय में बसी यह घाटी स्थानिक अल्पाइन फूलों के मैदानों के लिए जानी जाती है। यात्रा चुनौतीपूर्ण थी लेकिन बर्फ से ढके पहाड़ों की पृष्ठभूमि में रंगीन फूलों का दृश्य बिल्कुल मनमोहक था। मैंने पास के हेमकुंड साहिब, एक सिख तीर्थ स्थल का भी दौरा किया। पूरा अनुभव आध्यात्मिक रूप से उत्थान करने वाला था और मैं इसे किसी भी व्यक्ति को अनुशंसित करूंगा जो प्रकृति और साहसिक कार्यों से प्यार करता है।",
        },
        author: {
          name: "Priya Sharma",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        likes: 62,
        comments: 15,
        date: "2023-09-10",
      },
      {
        id: 2,
        title: {
          en: "Celebrating Phool Dei in Uttarakhand",
          hi: "उत्तराखंड में फूल देई मनाना",
        },
        content: {
          en: "I had the privilege of experiencing the Phool Dei festival during my stay in a small village in Garhwal. Phool Dei is celebrated at the onset of spring, where young girls collect flowers and go from house to house, singing and dancing. They sprinkle flowers at the doorstep of each house, wishing prosperity and well-being to the inhabitants. In return, they receive sweets, gifts, and blessings. The joy and innocence of the children, combined with the vibrant colors of spring, made it a memorable experience.",
          hi: "मुझे गढ़वाल के एक छोटे से गांव में अपने प्रवास के दौरान फूल देई त्योहार का अनुभव करने का सौभाग्य मिला। फूल देई वसंत की शुरुआत में मनाया जाता है, जहां छोटी लड़कियां फूल इकट्ठा करती हैं और घर-घर जाकर गाती और नाचती हैं। वे हर घर की दहलीज पर फूल छिड़कती हैं, निवासियों को समृद्धि और कल्याण की कामना करती हैं। बदले में, उन्हें मिठाई, उपहार और आशीर्वाद मिलते हैं। बच्चों की खुशी और मासूमियत, वसंत के जीवंत रंगों के साथ मिलकर, इसे एक यादगार अनुभव बना दिया।",
        },
        author: {
          name: "Rahul Bisht",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        likes: 48,
        comments: 9,
        date: "2023-03-15",
      },
    ],
  }

  function handleSubmit() {
    setIsSubmitting(true)
    // In a real application, this would send the story to a server
    setTimeout(() => {
      setIsSubmitting(false)
      setNewStory("")
      alert(language === "hi" ? "आपकी कहानी सफलतापूर्वक जमा की गई!" : "Your story has been submitted successfully!")
    }, 1000)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <AipanBorder className="inline-block mb-4">
          <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
            {language === "hi" ? "कहानी कोना" : "Storytelling Corner"}
          </h2>
        </AipanBorder>
        <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
          {language === "hi"
            ? "उत्तराखंड की लोककथाएँ, लोक गीत, या अपने यात्रा अनुभव साझा करें"
            : "Share folklore, folk songs, or your travel experiences of Uttarakhand"}
        </p>
      </div>

      <div className="mb-8">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
          <Textarea
            placeholder={
              language === "hi"
                ? "अपनी कहानी, गीत या अनुभव यहां साझा करें..."
                : "Share your story, song or experience here..."
            }
            className="mb-4 min-h-[120px] font-pahadi"
            value={newStory}
            onChange={(e) => setNewStory(e.target.value)}
          />
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="font-pahadi">
                <BookOpen className="h-4 w-4 mr-2" />
                {language === "hi" ? "लोककथा" : "Folklore"}
              </Button>
              <Button variant="outline" size="sm" className="font-pahadi">
                <Music className="h-4 w-4 mr-2" />
                {language === "hi" ? "लोक गीत" : "Folk Song"}
              </Button>
              <Button variant="outline" size="sm" className="font-pahadi">
                <Video className="h-4 w-4 mr-2" />
                {language === "hi" ? "अनुभव" : "Experience"}
              </Button>
            </div>
            <Button
              onClick={handleSubmit}
              disabled={!newStory.trim() || isSubmitting}
              className="font-pahadi bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 dark:bg-uttarakhand-meadow dark:text-uttarakhand-pine dark:hover:bg-uttarakhand-meadow/90"
            >
              {isSubmitting
                ? language === "hi"
                  ? "जमा कर रहे हैं..."
                  : "Submitting..."
                : language === "hi"
                  ? "कहानी साझा करें"
                  : "Share Story"}
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-4">
            <button
              onClick={() => setActiveTab("folklore")}
              className={`py-2 px-1 font-pahadi ${
                activeTab === "folklore"
                  ? "border-b-2 border-uttarakhand-mountain dark:border-uttarakhand-meadow text-uttarakhand-mountain dark:text-uttarakhand-meadow"
                  : "text-muted-foreground hover:text-uttarakhand-mountain dark:hover:text-uttarakhand-meadow"
              }`}
            >
              <BookOpen className="h-4 w-4 inline-block mr-1" />
              {language === "hi" ? "लोककथाएँ" : "Folklore"}
            </button>
            <button
              onClick={() => setActiveTab("songs")}
              className={`py-2 px-1 font-pahadi ${
                activeTab === "songs"
                  ? "border-b-2 border-uttarakhand-mountain dark:border-uttarakhand-meadow text-uttarakhand-mountain dark:text-uttarakhand-meadow"
                  : "text-muted-foreground hover:text-uttarakhand-mountain dark:hover:text-uttarakhand-meadow"
              }`}
            >
              <Music className="h-4 w-4 inline-block mr-1" />
              {language === "hi" ? "लोक गीत" : "Folk Songs"}
            </button>
            <button
              onClick={() => setActiveTab("experiences")}
              className={`py-2 px-1 font-pahadi ${
                activeTab === "experiences"
                  ? "border-b-2 border-uttarakhand-mountain dark:border-uttarakhand-meadow text-uttarakhand-mountain dark:text-uttarakhand-meadow"
                  : "text-muted-foreground hover:text-uttarakhand-mountain dark:hover:text-uttarakhand-meadow"
              }`}
            >
              <MessageSquare className="h-4 w-4 inline-block mr-1" />
              {language === "hi" ? "यात्रा अनुभव" : "Travel Experiences"}
            </button>
          </nav>
        </div>
      </div>

      <div className="space-y-6">
        {stories[activeTab].map((story) => (
          <Card key={story.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={story.author.avatar} alt={story.author.name} />
                    <AvatarFallback>{story.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg font-pahadi">
                      {story.title[language === "hi" ? "hi" : "en"]}
                    </CardTitle>
                    <CardDescription className="font-pahadi">
                      {story.author.name} • {new Date(story.date).toLocaleDateString()}
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="font-pahadi">
                  {activeTab === "folklore"
                    ? language === "hi"
                      ? "लोककथा"
                      : "Folklore"
                    : activeTab === "songs"
                      ? language === "hi"
                        ? "लोक गीत"
                        : "Folk Song"
                      : language === "hi"
                        ? "यात्रा अनुभव"
                        : "Travel Experience"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-pahadi">{story.content[language === "hi" ? "hi" : "en"]}</p>

              {activeTab === "songs" && "audioUrl" in story && (
                <div className="mt-4 flex items-center gap-2">
                  <Button variant="outline" size="sm" className="font-pahadi">
                    <Volume2 className="h-4 w-4 mr-2" />
                    {language === "hi" ? "गीत सुनें" : "Listen to Song"}
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter className="border-t pt-3 flex justify-between">
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="font-pahadi">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  {story.likes}
                </Button>
                <Button variant="ghost" size="sm" className="font-pahadi">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  {story.comments}
                </Button>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="font-pahadi">
                  <Share2 className="h-4 w-4 mr-1" />
                  {language === "hi" ? "साझा करें" : "Share"}
                </Button>
                <Button variant="ghost" size="sm" className="font-pahadi">
                  <Flag className="h-4 w-4 mr-1" />
                  {language === "hi" ? "रिपोर्ट" : "Report"}
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
