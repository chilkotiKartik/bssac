"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bot, Send, Mic, User } from "lucide-react"
import { AipanBorder } from "@/components/decorative-elements"

interface PahadiGuideProps {
  districtId?: number
}

export function PahadiGuide({ districtId }: PahadiGuideProps) {
  const { language } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "bot",
      content:
        language === "hi"
          ? "नमस्ते! मैं पहाड़ी गाइड हूँ, उत्तराखंड के बारे में आपके सवालों का जवाब देने के लिए यहाँ हूँ। मैं आपको पहाड़ी वाक्यांश सिखा सकता हूँ, यात्रा स्थलों का सुझाव दे सकता हूँ, और संस्कृति से संबंधित प्रश्नों का उत्तर दे सकता हूँ। कृपया मुझसे कुछ पूछें!"
          : "Namaste! I'm Pahadi Guide, here to answer your questions about Uttarakhand. I can teach you Pahadi phrases, suggest travel destinations, and answer cultural queries. Please ask me something!",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [showSuggestions, setShowSuggestions] = useState(true)

  // Sample suggestions
  const suggestions = {
    en: [
      "Teach me a Pahadi greeting",
      "What are the must-visit places in Uttarakhand?",
      "Tell me about Uttarakhand's cuisine",
      "What festivals are celebrated in Uttarakhand?",
    ],
    hi: [
      "मुझे एक पहाड़ी अभिवादन सिखाएं",
      "उत्तराखंड में घूमने लायक स्थान कौन से हैं?",
      "उत्तराखंड के व्यंजनों के बारे में बताएं",
      "उत्तराखंड में कौन से त्योहार मनाए जाते हैं?",
    ],
  }

  // Sample responses (in a real application, this would be handled by an actual AI model)
  const botResponses = {
    greetings: {
      en: "In Garhwali, you can say 'Namaskaar' (नमस्कार) or 'Jwaala' (ज्वाला) as a greeting. In Kumaoni, 'Namaskaar' (नमस्कार) or 'Ram Ram' (राम राम) is commonly used.",
      hi: "गढ़वाली में, आप अभिवादन के रूप में 'नमस्कार' या 'ज्वाला' कह सकते हैं। कुमाऊंनी में, 'नमस्कार' या 'राम राम' आमतौर पर उपयोग किया जाता है।",
    },
    places: {
      en: "Uttarakhand has many beautiful places to visit! Some must-visit destinations include: Nainital (famous for its lake), Mussoorie (known as the Queen of Hills), Rishikesh (adventure capital and spiritual hub), Auli (skiing destination), Valley of Flowers (UNESCO World Heritage Site), and Kedarnath and Badrinath (important pilgrimage sites).",
      hi: "उत्तराखंड में घूमने के लिए कई खूबसूरत जगहें हैं! कुछ जरूर घूमने वाले स्थानों में शामिल हैं: नैनीताल (अपनी झील के लिए प्रसिद्ध), मसूरी (पहाड़ों की रानी के रूप में जानी जाती है), ऋषिकेश (साहसिक राजधानी और आध्यात्मिक केंद्र), औली (स्कीइंग स्थल), फूलों की घाटी (यूनेस्को विश्व धरोहर स्थल), और केदारनाथ और बद्रीनाथ (महत्वपूर्ण तीर्थ स्थल)।",
    },
    cuisine: {
      en: "Uttarakhand cuisine is simple yet nutritious, using local ingredients. Popular dishes include Kafuli (spinach-based), Chainsoo (black gram preparation), Phaanu (lentil dish), Aloo ke Gutke (spiced potatoes), and Bhatt ki Churkani (black soybean dish). For sweets, try Bal Mithai (chocolate-like fudge with sugar balls) and Singodi (khoya wrapped in a leaf).",
      hi: "उत्तराखंड का व्यंजन सरल लेकिन पौष्टिक है, जिसमें स्थानीय सामग्री का उपयोग किया जाता है। लोकप्रिय व्यंजनों में कफूली (पालक आधारित), चैंसू (काले चने की तैयारी), फानू (दाल का व्यंजन), आलू के गुटके (मसालेदार आलू), और भट्ट की चुरकानी (काले सोयाबीन का व्यंजन) शामिल हैं। मिठाइयों के लिए, बाल मिठाई (चीनी के गोलों के साथ चॉकलेट जैसी फज) और सिंगोड़ी (पत्ते में लिपटा खोया) आजमाएं।",
    },
    festivals: {
      en: "Uttarakhand celebrates many unique festivals. Some major ones include: Kumbh Mela (held in Haridwar), Nanda Devi Raj Jat Yatra (held once every 12 years), Phool Dei (flower festival at the onset of spring), Harela (agricultural festival), Basant Panchami (spring festival), and Uttarayani Fair (winter festival). These festivals showcase the rich cultural heritage of the region.",
      hi: "उत्तराखंड कई अनूठे त्योहार मनाता है। कुछ प्रमुख त्योहारों में शामिल हैं: कुंभ मेला (हरिद्वार में आयोजित), नंदा देवी राज जात यात्रा (हर 12 साल में एक बार आयोजित), फूल देई (वसंत की शुरुआत में फूलों का त्योहार), हरेला (कृषि त्योहार), बसंत पंचमी (वसंत त्योहार), और उत्तरायणी मेला (सर्दियों का त्योहार)। ये त्योहार क्षेत्र की समृद्ध सांस्कृतिक विरासत को प्रदर्शित करते हैं।",
    },
  }

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function handleSendMessage() {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input,
    }

    setMessages([...messages, userMessage])
    setInput("")
    setIsTyping(true)
    setShowSuggestions(false)

    // Simulate bot thinking and responding
    setTimeout(() => {
      let botResponse = ""

      // Simple keyword matching (in a real app, this would be handled by an AI model)
      const lowerInput = input.toLowerCase()
      if (
        lowerInput.includes("greeting") ||
        lowerInput.includes("hello") ||
        lowerInput.includes("अभिवादन") ||
        lowerInput.includes("नमस्ते")
      ) {
        botResponse = botResponses.greetings[language === "hi" ? "hi" : "en"]
      } else if (
        lowerInput.includes("place") ||
        lowerInput.includes("visit") ||
        lowerInput.includes("स्थान") ||
        lowerInput.includes("घूमने")
      ) {
        botResponse = botResponses.places[language === "hi" ? "hi" : "en"]
      } else if (
        lowerInput.includes("food") ||
        lowerInput.includes("cuisine") ||
        lowerInput.includes("dish") ||
        lowerInput.includes("खाना") ||
        lowerInput.includes("व्यंजन")
      ) {
        botResponse = botResponses.cuisine[language === "hi" ? "hi" : "en"]
      } else if (
        lowerInput.includes("festival") ||
        lowerInput.includes("celebration") ||
        lowerInput.includes("त्योहार") ||
        lowerInput.includes("उत्सव")
      ) {
        botResponse = botResponses.festivals[language === "hi" ? "hi" : "en"]
      } else {
        // Default response
        botResponse =
          language === "hi"
            ? "मुझे क्षमा करें, मैं आपके प्रश्न को समझ नहीं पाया। क्या आप इसे दूसरे तरीके से पूछ सकते हैं या किसी अन्य विषय के बारे में पूछ सकते हैं?"
            : "I'm sorry, I couldn't understand your question. Could you rephrase it or ask about something else?"
      }

      const botMessage: Message = {
        id: messages.length + 2,
        role: "bot",
        content: botResponse,
      }

      setMessages((prevMessages) => [...prevMessages, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  function handleSuggestionClick(suggestion: string) {
    setInput(suggestion)
    setShowSuggestions(false)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <AipanBorder className="inline-block mb-4">
          <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
            {language === "hi" ? "पहाड़ी गाइड" : "Pahadi Guide"}
          </h2>
        </AipanBorder>
        <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
          {language === "hi"
            ? "हमारे AI-संचालित चैटबॉट से पहाड़ी वाक्यांश सीखें, यात्रा स्थलों के सुझाव प्राप्त करें, और सांस्कृतिक प्रश्नों के उत्तर पाएं"
            : "Learn Pahadi phrases, get travel suggestions, and answers to cultural queries from our AI-powered chatbot"}
        </p>
      </div>

      <Card className="w-full">
        <CardHeader className="pb-3 border-b">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Pahadi Guide" />
              <AvatarFallback>
                <Bot />
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg font-pahadi">{language === "hi" ? "पहाड़ी गाइड" : "Pahadi Guide"}</CardTitle>
              <CardDescription className="font-pahadi">
                {language === "hi" ? "ऑनलाइन • तुरंत जवाब देता है" : "Online • Responds instantly"}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-[400px] overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                  <Avatar className="h-8 w-8">
                    {message.role === "bot" ? (
                      <>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Pahadi Guide" />
                        <AvatarFallback>
                          <Bot />
                        </AvatarFallback>
                      </>
                    ) : (
                      <>
                        <AvatarFallback>
                          <User />
                        </AvatarFallback>
                      </>
                    )}
                  </Avatar>
                  <div
                    className={`rounded-lg p-3 ${
                      message.role === "user"
                        ? "bg-uttarakhand-mountain text-white dark:bg-uttarakhand-meadow dark:text-uttarakhand-pine"
                        : "bg-muted"
                    }`}
                  >
                    <p className="font-pahadi">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="mb-4 flex justify-start">
                <div className="flex gap-3 max-w-[80%]">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Pahadi Guide" />
                    <AvatarFallback>
                      <Bot />
                    </AvatarFallback>
                  </Avatar>
                  <div className="rounded-lg p-3 bg-muted">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"></span>
                      <span
                        className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></span>
                      <span
                        className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {showSuggestions && (
            <div className="p-4 border-t">
              <p className="text-sm text-muted-foreground mb-2 font-pahadi">
                {language === "hi" ? "सुझाए गए प्रश्न:" : "Suggested questions:"}
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestions[language === "hi" ? "hi" : "en"].map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="font-pahadi"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="p-4 border-t">
          <div className="flex w-full gap-2">
            <Button variant="outline" size="icon" className="flex-shrink-0">
              <Mic className="h-4 w-4" />
            </Button>
            <Input
              placeholder={language === "hi" ? "अपना संदेश यहां टाइप करें..." : "Type your message here..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              className="font-pahadi"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!input.trim() || isTyping}
              className="flex-shrink-0 bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 dark:bg-uttarakhand-meadow dark:text-uttarakhand-pine dark:hover:bg-uttarakhand-meadow/90"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

interface Message {
  id: number
  role: "user" | "bot"
  content: string
}
