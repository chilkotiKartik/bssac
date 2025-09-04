"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { SuccessStoryModal } from "@/components/success-story-modal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { Eye } from "lucide-react"

export default function SuccessStoriesPage() {
  const { language } = useLanguage()
  const [selectedStory, setSelectedStory] = useState<any>(null)

  const stories = [
    {
      titleHi: "विद्यालय सत्र: ध्यान और लक्ष्य-निर्धारण",
      titleEn: "School Session: Focus & Goal‑setting",
      img: "/images/students-meditation.jpg",
      descHi: "हॉल में आयोजित सत्र में विद्यार्थियों ने अनुशासन के साथ भाग लिया—आत्मविश्वास और लक्ष्य स्पष्टता में वृद्धि।",
      descEn: "Students engaged with discipline in a hall session—boosting confidence and clarity of goals.",
      detailsHi:
        "इस कार्यक्रम में 150+ विद्यार्थियों ने भाग लिया। ध्यान और योग के माध्यम से मानसिक स्वास्थ्य को बेहतर बनाने पर केंद्रित यह सत्र 3 महीने तक चला। परिणामस्वरूप छात्रों में एकाग्रता में 40% सुधार देखा गया और 85% छात्रों ने अपने लक्ष्यों को स्पष्ट रूप से परिभाषित किया।",
      detailsEn:
        "This program engaged 150+ students over 3 months, focusing on mental wellness through meditation and yoga. Results showed 40% improvement in concentration and 85% of students clearly defined their career goals.",
      impact: {
        participants: 150,
        duration: "3 months",
        achievements: [
          language === "hi" ? "40% एकाग्रता सुधार" : "40% Focus Improvement",
          language === "hi" ? "85% लक्ष्य स्पष्टता" : "85% Goal Clarity",
          language === "hi" ? "मानसिक स्वास्थ्य बेहतरी" : "Mental Wellness",
        ],
      },
    },
    {
      titleHi: "कैरियर काउंसलिंग में प्रोत्साहन",
      titleEn: "Encouragement at Career Counseling",
      img: "/images/award-books.jpg",
      descHi: "छात्रा को अध्ययन सामग्री प्रदान—अगले पायदान तक पहुँचने की प्रेरणा।",
      descEn: "Student receives study material—encouragement to take the next step.",
      detailsHi:
        "व्यक्तिगत करियर काउंसलिंग सत्र में प्रतिभाशाली छात्रों को विशेष अध्ययन सामग्री और मार्गदर्शन प्रदान किया गया। इस पहल से 200+ छात्रों को लाभ हुआ और 70% ने अपने करियर पथ में सकारात्मक बदलाव किया।",
      detailsEn:
        "Personal career counseling sessions provided specialized study materials and guidance to talented students. This initiative benefited 200+ students with 70% making positive career path changes.",
      impact: {
        participants: 200,
        duration: "6 months",
        achievements: [
          language === "hi" ? "70% करियर सुधार" : "70% Career Improvement",
          language === "hi" ? "व्यक्तिगत मार्गदर्शन" : "Personal Guidance",
          language === "hi" ? "अध्ययन सामग्री" : "Study Materials",
        ],
      },
    },
    {
      titleHi: "सम्मान समारोह: उपलब्धि का जश्न",
      titleEn: "Recognition Ceremony: Celebrating Achievement",
      img: "/images/award-outdoor.jpg",
      descHi: "विद्यालय प्रांगण में सम्मान—समुदाय के सामने प्रेरक उदाहरण।",
      descEn: "Recognition in the school courtyard—an inspiring example for the community.",
      detailsHi:
        "वार्षिक सम्मान समारोह में उत्कृष्ट प्रदर्शन करने वाले छात्रों को सम्मानित किया गया। इस कार्यक्रम से 500+ समुदायिक सदस्य प्रेरित हुए और शिक्षा के प्रति जागरूकता में 60% वृद्धि हुई।",
      detailsEn:
        "Annual recognition ceremony honored students with excellent performance. This event inspired 500+ community members and increased education awareness by 60%.",
      impact: {
        participants: 500,
        duration: "Annual Event",
        achievements: [
          language === "hi" ? "60% जागरूकता वृद्धि" : "60% Awareness Increase",
          language === "hi" ? "समुदायिक प्रेरणा" : "Community Inspiration",
          language === "hi" ? "छात्र सम्मान" : "Student Recognition",
        ],
      },
    },
    {
      titleHi: "वीरांगना की प्रेरक कहानी",
      titleEn: "Inspiring Story of a Brave Woman",
      img: "/images/news-epaper-hero.jpg",
      descHi: "समाचार में प्रकाशित कहानी—परिवारों और बच्चों के लिए संघर्ष से सफलता तक की सीख।",
      descEn: "Featured news story—lessons of perseverance and success for families and children.",
      detailsHi:
        "एक वीर माता की संघर्ष गाथा जो अपने बच्चों को बेहतर भविष्य देने के लिए निरंतर प्रयासरत रही। उनकी कहानी ने 1000+ परिवारों को प्रेरित किया और महिला सशक्तिकरण कार्यक्रमों में 80% वृद्धि हुई।",
      detailsEn:
        "The struggle story of a brave mother who continuously worked to provide a better future for her children. Her story inspired 1000+ families and led to 80% increase in women empowerment programs.",
      impact: {
        participants: 1000,
        duration: "Ongoing Impact",
        achievements: [
          language === "hi" ? "1000+ परिवार प्रेरित" : "1000+ Families Inspired",
          language === "hi" ? "80% महिला सशक्तिकरण" : "80% Women Empowerment",
          language === "hi" ? "मीडिया कवरेज" : "Media Coverage",
        ],
      },
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection>
        <h1 className="text-3xl md:text-4xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi text-center mb-2">
          {language === "hi" ? "सफलता की कहानियाँ" : "Success Stories"}
        </h1>
        <p className="text-center text-muted-foreground font-pahadi max-w-2xl mx-auto mb-10">
          {language === "hi"
            ? "हमारे कार्यक्रमों से प्रेरक परिवर्तन—छात्रों, महिलाओं और समुदायों की वास्तविक उपलब्धियाँ।"
            : "Inspiring changes from our programs—real achievements of students, women, and communities."}
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, i) => (
          <AnimatedSection key={i}>
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-56">
                <Image
                  src={story.img || "/placeholder.svg"}
                  alt={language === "hi" ? story.titleHi : story.titleEn}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-pahadi text-uttarakhand-mountain dark:text-uttarakhand-meadow">
                  {language === "hi" ? story.titleHi : story.titleEn}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-pahadi mb-4">
                  {language === "hi" ? story.descHi : story.descEn}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedStory(story)}
                  className="w-full font-pahadi"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  {language === "hi" ? "विस्तार से देखें" : "View Details"}
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      {selectedStory && (
        <SuccessStoryModal story={selectedStory} isOpen={!!selectedStory} onClose={() => setSelectedStory(null)} />
      )}
    </div>
  )
}
