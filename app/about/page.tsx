"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { AipanBorder, TempleArch } from "@/components/decorative-elements"

export default function AboutPage() {
  const { language } = useLanguage()

  const teamMembers = [
    {
      name: "Janardan Chilkoti",
      role: language === "hi" ? "ट्रस्ट के संस्थापक" : "Founder of Trust",
      bio:
        language === "hi"
          ? "सम्मान, सेवा और अवसर के मूल्यों पर आधारित पहलकदमियों के मार्गदर्शक—सीमा क्षेत्रों में युवाओं और परिवारों को सशक्त बनाने के लिए समर्पित।"
          : "Guiding initiatives rooted in honor, service, and opportunity—committed to empowering youth and families in border areas.",
      image: "/images/founder-janardan-chilkoti.jpg",
      social: { email: "info@vpahadi.org", phone: "+91 98765 43210", linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Jaya Chilkoti",
      role: language === "hi" ? "अध्यक्ष" : "President",
      bio:
        language === "hi"
          ? "महिला सशक्तिकरण और समुदाय-सहभागिता की अगुवाई—स्थानीय नेतृत्व को आगे बढ़ाने पर केंद्रित।"
          : "Leads women's empowerment and community participation—focused on advancing local leadership.",
      image: "/placeholder.svg",
      social: { email: "info@vpahadi.org", phone: "+91 98765 43210", linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Prema Chilkoti",
      role: language === "hi" ? "CEO एवं मैनेजिंग ट्रस्टी" : "CEO & Managing Trustee",
      bio:
        language === "hi"
          ? "शिक्षा, आजीविका और बाल-विकास कार्यक्रमों के कार्यान्वयन का नेतृत्व—प्रभाव-आधारित दृष्टिकोण।"
          : "Leads implementation across education, livelihoods, and child development—with an impact-centric approach.",
      image: "/placeholder.svg",
      social: { email: "info@vpahadi.org", phone: "+91 98765 43210", linkedin: "#", twitter: "#", github: "#" },
    },
  ]

  const advisors = [
    {
      name: "Kartik Chilkoti",
      role: language === "hi" ? "तकनीकी सलाहकार" : "Technical Advisor",
      bio:
        language === "hi"
          ? "कार्तिक चिलकोटी प्रौद्योगिकी और वेब विकास के प्रख्यात विशेषज्ञ हैं। उन्होंने अनेक प्रोजेक्ट्स पर कार्य किया है और नवीन तकनीकी समाधानों पर कई शोध एवं नवाचार प्रस्तुत किए हैं"
          : "Kartik Chilkoti is a renowned expert in technology and web development. He has worked on numerous projects and has contributed research and innovations in cutting-edge technological solutions.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    }
  ]

  const partners = [
    {
      name: "Uttarakhand Culture Department",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      description:
        language === "hi"
          ? "उत्तराखंड संस्कृति विभाग राज्य की सांस्कृतिक विरासत के संरक्षण और प्रचार के लिए काम करता है।"
          : "The Uttarakhand Culture Department works for the preservation and promotion of the cultural heritage of the state.",
    },
    {
      name: "Doon University",
      logo: "https://images.unsplash.com/photo-1523050854058-f978cf4d019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description:
        language === "hi"
          ? "दून विश्वविद्यालय उत्तराखंड का एक प्रमुख शैक्षणिक संस्थान है जो भाषा अध्ययन और संरक्षण में महत्वपूर्ण भूमिका निभाता है।"
          : "Doon University is a premier academic institution of Uttarakhand that plays a significant role in language studies and preservation.",
    },
    {
      name: "Himalayan Cultural Heritage Foundation",
      logo: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description:
        language === "hi"
          ? "हिमालयन सांस्कृतिक विरासत फाउंडेशन हिमालयी क्षेत्र की सांस्कृतिक और भाषाई विरासत के संरक्षण के लिए समर्पित एक गैर-लाभकारी संगठन है।"
          : "The Himalayan Cultural Heritage Foundation is a non-profit organization dedicated to preserving the cultural and linguistic heritage of the Himalayan region.",
    },
  ]

  return (
    <div className="bg-gradient-to-b from-white to-uttarakhand-sunset/10 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Uttarakhand Mountains"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-uttarakhand-mountain/50 via-transparent to-uttarakhand-wood/30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="animate-float backdrop-blur-sm bg-white/10 p-8 rounded-lg border border-white/20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-pahadi text-white drop-shadow-lg">
              {language === "hi" ? "हमारे बारे में" : "About Us"}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90 font-pahadi drop-shadow-lg">
              {language === "hi"
                ? "उत्तराखंड की भाषाओं और संस्कृति को संरक्षित करने के लिए समर्पित टीम"
                : "A team dedicated to preserving the languages and culture of Uttarakhand"}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AipanBorder className="inline-block mb-4">
                <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                  {language === "hi" ? "हमारा मिशन" : "Our Mission"}
                </h2>
              </AipanBorder>
              <div className="space-y-4 text-muted-foreground font-pahadi">
                <p>
                  {language === "hi"
                    ? "क्षमता-विकास, करियर काउंसलिंग और विकासात्मक कार्यक्रमों के माध्यम से सीमावर्ती क्षेत्रों में आजीविका, शिक्षा, महिला सशक्तिकरण, बाल विकास और सामुदायिक कल्याण को सुदृढ़ करना; तथा युद्ध वीरांगनाओं और ग्रामीण गरीबों के बच्चों को सेना, अर्द्धसैनिक एवं अन्य रक्षा बलों में प्रवेश हेतु तैयार करना।"
                    : "To enhance livelihoods, education, women’s empowerment, child development, and community welfare in border areas through capacity-building, career counseling, and developmental programmes, and to prepare the children of war widows and rural poor for entry into the Army, Para-Military, and other defence forces."}
                </p>
                <p>
                  {language === "hi"
                    ? "हम सेवा, सम्मान और अवसर के मूल्यों के साथ सीमांत समुदायों को सशक्त बनाने के लिए प्रतिबद्ध हैं।"
                    : "With the values of service, dignity, and opportunity, we are committed to empowering border communities."}
                </p>
                <div>
                  <h3 className="text-uttarakhand-mountain dark:text-uttarakhand-meadow font-semibold">
                    {language === "hi" ? "उद्देश्य" : "Aims & Objectives of the Trust"}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>
                      {language === "hi"
                        ? "रक्षा एवं सुरक्षा तैयारी: युद्ध वीरांगनाओं और ग्रामीण गरीबों के बच्चों को सेना, अर्द्धसैनिक एवं अन्य सुरक्षा बलों के लिए शारीरिक, शैक्षणिक और व्यक्तित्व विकास प्रशिक्षण।"
                        : "Defence & Security Preparation: Physical, academic, and personality development training to prepare children of war widows and the rural poor for Army, Para-Military, and other security forces."}
                    </li>
                    <li>
                      {language === "hi"
                        ? "उद्यमिता एवं कौशल-विकास: सीमावर्ती युवाओं के लिए EDP तथा कौशल-आधारित प्रशिक्षण, आत्म-रोज़गार और टिकाऊ आजीविका को बढ़ावा।"
                        : "Entrepreneurship & Skill Development: EDP and skill-based training for border youth, promoting self-employment and sustainable livelihoods."}
                    </li>
                    <li>
                      {language === "hi"
                        ? "शिक्षा एवं करियर मार्गदर्शन: विद्यालयों/कॉलेजों में काउंसलिंग, प्रेरक सत्र, छात्रवृत्ति व परामर्श सहायता।"
                        : "Education & Career Guidance: Counseling and motivational programs in schools/colleges, with scholarships and mentorship support."}
                    </li>
                    <li>
                      {language === "hi"
                        ? "महिला सशक्तिकरण: महिलाओं के लिए क्षमता-विकास कार्यक्रम और आर्थिक-सामाजिक सहभागिता को बढ़ावा।"
                        : "Women’s Empowerment: Capacity-building programs for women and increased participation in economic and social development."}
                    </li>
                    <li>
                      {language === "hi"
                        ? "बाल कल्याण एवं समावेशी विकास: विशेष आवश्यकता वाले और आर्थिक रूप से कमजोर ग्रामीण बच्चों के लिए शिक्षा, पोषण और सह-पाठ्यक्रम अवसर।"
                        : "Child Welfare & Inclusive Growth: Education, nutrition, and extracurricular access for specially-abled and economically weaker rural children."}
                    </li>
                    <li>
                      {language === "hi"
                        ? "सामुदायिक विकास: सांस्कृतिक, शैक्षिक और सामाजिक कल्याण कार्यक्रम; सरकारी/गैर-सरकारी संस्थाओं के साथ सहयोग।"
                        : "Community Development: Cultural, educational, and social welfare programs; collaboration with government and non-government organizations."}
                    </li>
                    <li>
                      {language === "hi"
                        ? "स्वास्थ्य एवं कल्याण: चिकित्सा शिविर, जागरूकता अभियान, निवारक स्वास्थ्य पहल; योग और मानसिक स्वास्थ्य प्रोत्साहन।"
                        : "Health & Wellness: Medical camps, awareness drives, preventive healthcare; promotion of yoga and mental wellness."}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1574531732319-351283c73760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Uttarakhand Landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gradient-to-r from-uttarakhand-sunset/10 to-uttarakhand-wood/10 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "संस्थापक एवं नेतृत्व" : "Founding Leadership"}
              </h2>
            </TempleArch>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "विश्वास का नेतृत्व—दिशा, अनुशासन और सेवा की भावना के साथ"
                : "The Trust’s leadership—guided by discipline, direction, and a spirit of service"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((m, idx) => (
              <Card
                key={idx}
                className="overflow-hidden border-2 border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={m.image || "/placeholder.svg"} alt={m.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi text-xl">
                    {m.name}
                  </CardTitle>
                  <CardDescription className="font-pahadi">{m.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-pahadi">{m.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AipanBorder className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "तकनीकी टीम" : "Tech Team"}
              </h2>
            </AipanBorder>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "हमारे तकनीकी सलाहकार जो हमें मार्गदर्शन और समर्थन प्रदान करते हैं"
                : "Our tech Expert who provide guidance and support"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card
                key={index}
                className="flex flex-col md:flex-row overflow-hidden border-2 border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
              >
                <div className="relative h-40 md:h-auto md:w-1/3 overflow-hidden">
                  <Image
                    src={advisor.image || "/placeholder.svg"}
                    alt={advisor.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mb-1">
                    {advisor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-pahadi mb-3">{advisor.role}</p>
                  <p className="text-muted-foreground font-pahadi">{advisor.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gradient-to-r from-uttarakhand-pine/10 to-uttarakhand-mountain/10 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "हमारे साझेदार" : "Our Partners"}
              </h2>
            </TempleArch>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "हमारे मूल्यवान साझेदार जो हमारे मिशन का समर्थन करते हैं"
                : "Our valuable partners who support our mission"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold font-pahadi">{partner.name}</h3>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground font-pahadi">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-uttarakhand-sunset via-uttarakhand-wood to-uttarakhand-pine text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="backdrop-blur-sm bg-white/10 p-8 rounded-lg border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-pahadi">
              {language === "hi" ? "हमारे मिशन में शामिल हों" : "Join Our Mission"}
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90 font-pahadi">
              {language === "hi"
                ? "उत्तराखंड की भाषाओं और संस्कृति को संरक्षित करने के हमारे मिशन में शामिल हों। आप स्वयंसेवक, दाता या साझेदार के रूप में योगदान दे सकते हैं।"
                : "Join our mission to preserve the languages and culture of Uttarakhand. You can contribute as a volunteer, donor, or partner."}
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-uttarakhand-sunset hover:bg-white/90 font-pahadi">
                {language === "hi" ? "अभी शामिल हों" : "Join Now"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <div className="mt-8 pt-4 border-t border-white/20">
              <p className="text-sm text-white/70 font-pahadi">
                {language === "hi" ? "वेबसाइट निर्माता: कार्तिक चिलकोटी" : "Website made by Kartik Chilkoti"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
