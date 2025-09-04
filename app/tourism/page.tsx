"use client"

import { districts } from "@/lib/district-data"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingForm } from "@/components/tourism/booking-form"
import { useLanguage } from "@/lib/language-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Clock, ArrowRight, Heart, MessageCircle } from "lucide-react"

export default function Tourism() {
  const { language } = useLanguage()

  // Local guides data
  const localGuides = [
    {
      id: 1,
      name: "Mohan Singh Rawat",
      nameHi: "मोहन सिंह रावत",
      image: "/placeholder.svg?height=200&width=200",
      specialization: "Trekking & Adventure",
      specializationHi: "ट्रेकिंग और साहसिक गतिविधियां",
      languages: ["English", "Hindi", "Garhwali"],
      languagesHi: ["अंग्रेजी", "हिंदी", "गढ़वाली"],
      experience: 8,
      rating: 4.9,
      reviews: 127,
      price: "₹2,500",
      priceHi: "₹2,500",
      description:
        "Experienced trekking guide with deep knowledge of Uttarakhand's mountains and trails. Specializes in adventure activities and wildlife spotting.",
      descriptionHi:
        "उत्तराखंड के पहाड़ों और पगडंडियों के गहन ज्ञान के साथ अनुभवी ट्रेकिंग गाइड। साहसिक गतिविधियों और वन्यजीव देखने में विशेषज्ञता।",
    },
    {
      id: 2,
      name: "Lakshmi Bhatt",
      nameHi: "लक्ष्मी भट्ट",
      image: "/placeholder.svg?height=200&width=200",
      specialization: "Cultural & Heritage",
      specializationHi: "सांस्कृतिक और विरासत",
      languages: ["English", "Hindi", "Kumaoni"],
      languagesHi: ["अंग्रेजी", "हिंदी", "कुमाऊँनी"],
      experience: 12,
      rating: 4.8,
      reviews: 203,
      price: "₹2,200",
      priceHi: "₹2,200",
      description:
        "Expert in Uttarakhand's cultural heritage, temples, and traditional practices. Provides in-depth knowledge about local customs and historical sites.",
      descriptionHi:
        "उत्तराखंड की सांस्कृतिक विरासत, मंदिरों और पारंपरिक प्रथाओं में विशेषज्ञ। स्थानीय रीति-रिवाजों और ऐतिहासिक स्थलों के बारे में गहन जानकारी प्रदान करती हैं।",
    },
    {
      id: 3,
      name: "Rajendra Bisht",
      nameHi: "राजेंद्र बिष्ट",
      image: "/placeholder.svg?height=200&width=200",
      specialization: "Pilgrimage & Spiritual",
      specializationHi: "तीर्थयात्रा और आध्यात्मिक",
      languages: ["English", "Hindi", "Sanskrit"],
      languagesHi: ["अंग्रेजी", "हिंदी", "संस्कृत"],
      experience: 15,
      rating: 4.9,
      reviews: 189,
      price: "₹2,800",
      priceHi: "₹2,800",
      description:
        "Specialized in guiding pilgrimage tours to Char Dham and other sacred sites. Knowledgeable about rituals, mythology, and spiritual significance of temples.",
      descriptionHi:
        "चार धाम और अन्य पवित्र स्थलों की तीर्थयात्रा के मार्गदर्शन में विशेषज्ञ। अनुष्ठानों, पौराणिक कथाओं और मंदिरों के आध्यात्मिक महत्व के बारे में जानकार।",
    },
  ]

  // Famous temples data
  const famousTemples = [
    {
      id: 1,
      name: "Kedarnath Temple",
      nameHi: "केदारनाथ मंदिर",
      image: "/placeholder.svg?height=300&width=400",
      location: "Rudraprayag District",
      locationHi: "रुद्रप्रयाग जिला",
      elevation: "3,583 m",
      deity: "Lord Shiva",
      deityHi: "भगवान शिव",
      description:
        "One of the twelve Jyotirlingas, this ancient temple is situated amidst the snow-capped Himalayan peaks and is accessible only by a 16 km trek from Gaurikund.",
      descriptionHi:
        "बारह ज्योतिर्लिंगों में से एक, यह प्राचीन मंदिर बर्फ से ढके हिमालय की चोटियों के बीच स्थित है और गौरीकुंड से 16 किमी की ट्रेक से ही पहुंचा जा सकता है।",
    },
    {
      id: 2,
      name: "Badrinath Temple",
      nameHi: "बद्रीनाथ मंदिर",
      image: "/placeholder.svg?height=300&width=400",
      location: "Chamoli District",
      locationHi: "चमोली जिला",
      elevation: "3,133 m",
      deity: "Lord Vishnu",
      deityHi: "भगवान विष्णु",
      description:
        "Dedicated to Lord Vishnu, this temple is one of the Char Dham pilgrimage sites. It's situated along the banks of the Alaknanda River and is surrounded by breathtaking mountain scenery.",
      descriptionHi:
        "भगवान विष्णु को समर्पित, यह मंदिर चार धाम तीर्थ स्थलों में से एक है। यह अलकनंदा नदी के किनारे स्थित है और आसपास के पहाड़ों का शानदार दृश्य है।",
    },
    {
      id: 3,
      name: "Gangotri Temple",
      nameHi: "गंगोत्री मंदिर",
      image: "/placeholder.svg?height=300&width=400",
      location: "Uttarkashi District",
      locationHi: "उत्तरकाशी जिला",
      elevation: "3,100 m",
      deity: "Goddess Ganga",
      deityHi: "देवी गंगा",
      description:
        "Dedicated to Goddess Ganga, this temple marks the origin of the River Ganges. It's surrounded by majestic mountains and is an important pilgrimage site in the Char Dham circuit.",
      descriptionHi:
        "देवी गंगा को समर्पित, यह मंदिर गंगा नदी के उद्गम स्थल को चिह्नित करता है। यह भव्य पहाड़ों से घिरा हुआ है और चार धाम सर्किट में एक महत्वपूर्ण तीर्थ स्थल है।",
    },
    {
      id: 4,
      name: "Yamunotri Temple",
      nameHi: "यमुनोत्री मंदिर",
      image: "/placeholder.svg?height=300&width=400",
      location: "Uttarkashi District",
      locationHi: "उत्तरकाशी जिला",
      elevation: "3,293 m",
      deity: "Goddess Yamuna",
      deityHi: "देवी यमुना",
      description:
        "Dedicated to Goddess Yamuna, this temple marks the source of the Yamuna River. It's the first stop in the Char Dham pilgrimage and is known for its hot springs and stunning mountain views.",
      descriptionHi:
        "देवी यमुना को समर्पित, यह मंदिर यमुना नदी के स्रोत को चिह्नित करता है। यह चार धाम तीर्थयात्रा का पहला पड़ाव है और अपने गर्म झरनों और शानदार पहाड़ी दृश्यों के लिए जाना जाता है।",
    },
  ]

  // Tourism packages data
  const tourismPackages = [
    {
      id: 1,
      title: "Char Dham Yatra Special",
      titleHi: "चार धाम यात्रा स्पेशल",
      image: "/placeholder.svg?height=300&width=400",
      duration: "12 days",
      durationHi: "12 दिन",
      price: "₹45,000",
      priceHi: "₹45,000",
      rating: 4.8,
      reviews: 245,
      includes: ["Transportation", "Accommodation", "Meals", "Guide", "Permits"],
      includesHi: ["परिवहन", "आवास", "भोजन", "गाइड", "परमिट"],
      description:
        "Complete pilgrimage package covering all four sacred sites - Yamunotri, Gangotri, Kedarnath, and Badrinath with comfortable accommodations and experienced guides.",
      descriptionHi:
        "सभी चार पवित्र स्थलों - यमुनोत्री, गंगोत्री, केदारनाथ और बद्रीनाथ को आरामदायक आवास और अनुभवी गाइडों के साथ कवर करने वाला संपूर्ण तीर्थयात्रा पैकेज।",
    },
    {
      id: 2,
      title: "Valley of Flowers Trek",
      titleHi: "फूलों की घाटी ट्रेक",
      image: "/placeholder.svg?height=300&width=400",
      duration: "6 days",
      durationHi: "6 दिन",
      price: "₹22,000",
      priceHi: "₹22,000",
      rating: 4.9,
      reviews: 178,
      includes: ["Transportation", "Camping", "Meals", "Guide", "Permits"],
      includesHi: ["परिवहन", "कैंपिंग", "भोजन", "गाइड", "परमिट"],
      description:
        "Trek to the UNESCO World Heritage Site known for its meadows of endemic alpine flowers and variety of flora. Best time to visit is during the monsoon season when the valley is in full bloom.",
      descriptionHi:
        "यूनेस्को विश्व धरोहर स्थल की ओर ट्रेक, जो अपने स्थानिक अल्पाइन फूलों के मैदानों और विविध वनस्पतियों के लिए जाना जाता है। घाटी के पूरी तरह से खिलने पर मानसून के मौसम में जाने का सबसे अच्छा समय है।",
    },
    {
      id: 3,
      title: "Rishikesh Adventure Package",
      titleHi: "ऋषिकेश एडवेंचर पैकेज",
      image: "/placeholder.svg?height=300&width=400",
      duration: "4 days",
      durationHi: "4 दिन",
      price: "₹18,000",
      priceHi: "₹18,000",
      rating: 4.7,
      reviews: 312,
      includes: ["Accommodation", "Activities", "Some Meals", "Equipment"],
      includesHi: ["आवास", "गतिविधियां", "कुछ भोजन", "उपकरण"],
      description:
        "Adventure package including white water rafting, cliff jumping, bungee jumping, and camping by the Ganges. Perfect for thrill-seekers and adventure enthusiasts.",
      descriptionHi:
        "व्हाइट वाटर राफ्टिंग, क्लिफ जंपिंग, बंजी जंपिंग और गंगा के किनारे कैंपिंग सहित एडवेंचर पैकेज। थ्रिल सीकर्स और एडवेंचर प्रेमियों के लिए एकदम सही।",
    },
  ]

  // Homestay options data
  const homestayOptions = [
    {
      id: 1,
      name: "Pahadi Heritage Homestay",
      nameHi: "पहाड़ी हेरिटेज होमस्टे",
      image: "/placeholder.svg?height=300&width=400",
      location: "Almora",
      locationHi: "अल्मोड़ा",
      price: "₹2,500/night",
      priceHi: "₹2,500/रात",
      rating: 4.8,
      reviews: 86,
      amenities: ["Traditional Meals", "Cultural Activities", "Mountain Views", "Organic Farm"],
      amenitiesHi: ["पारंपरिक भोजन", "सांस्कृतिक गतिविधियां", "पहाड़ी दृश्य", "जैविक खेत"],
      description:
        "Experience authentic Kumaoni lifestyle in this 100-year-old traditional house. Learn local cooking, participate in cultural activities, and enjoy organic farm-to-table meals.",
      descriptionHi:
        "इस 100 साल पुराने पारंपरिक घर में प्रामाणिक कुमाऊँनी जीवनशैली का अनुभव करें। स्थानीय खाना पकाना सीखें, सांस्कृतिक गतिविधियों में भाग लें, और जैविक खेत से सीधे मेज तक के भोजन का आनंद लें।",
    },
    {
      id: 2,
      name: "Riverside Eco Homestay",
      nameHi: "रिवरसाइड इको होमस्टे",
      image: "/placeholder.svg?height=300&width=400",
      location: "Uttarkashi",
      locationHi: "उत्तरकाशी",
      price: "₹3,000/night",
      priceHi: "₹3,000/रात",
      rating: 4.9,
      reviews: 64,
      amenities: ["River View", "Yoga Sessions", "Organic Food", "Nature Walks"],
      amenitiesHi: ["नदी का दृश्य", "योग सत्र", "जैविक भोजन", "प्रकृति भ्रमण"],
      description:
        "Eco-friendly homestay located by the Bhagirathi River. Wake up to the sound of flowing water, practice yoga on the riverside deck, and enjoy locally sourced organic meals.",
      descriptionHi:
        "भागीरथी नदी के किनारे स्थित पर्यावरण अनुकूल होमस्टे। बहते पानी की आवाज के साथ जागें, नदी के किनारे के डेक पर योग का अभ्यास करें, और स्थानीय स्तर पर प्राप्त जैविक भोजन का आनंद लें।",
    },
    {
      id: 3,
      name: "Mountain View Cottage",
      nameHi: "माउंटेन व्यू कॉटेज",
      image: "/placeholder.svg?height=300&width=400",
      location: "Munsiyari",
      locationHi: "मुनस्यारी",
      price: "₹2,800/night",
      priceHi: "₹2,800/रात",
      rating: 4.7,
      reviews: 92,
      amenities: ["Himalayan Views", "Bonfire", "Local Guide", "Home Cooking"],
      amenitiesHi: ["हिमालय के दृश्य", "बॉनफायर", "स्थानीय गाइड", "घर का बना खाना"],
      description:
        "Cozy cottage with panoramic views of the Panchachuli peaks. Enjoy evenings around a bonfire, guided local treks, and authentic Kumaoni cuisine prepared by the host family.",
      descriptionHi:
        "पंचाचूली चोटियों के पैनोरमिक दृश्य के साथ आरामदायक कॉटेज। बॉनफायर के चारों ओर शामें, गाइडेड स्थानीय ट्रेक्स, और मेजबान परिवार द्वारा तैयार प्रामाणिक कुमाऊँनी व्यंजनों का आनंद लें।",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-2">
        {language === "hi" ? "उत्तराखंड की खोज करें" : "Explore Uttarakhand"}
      </h1>
      <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
        {language === "hi"
          ? "देवभूमि उत्तराखंड की प्राकृतिक सुंदरता, समृद्ध संस्कृति और आध्यात्मिक विरासत का अनुभव करें"
          : "Experience the natural beauty, rich culture, and spiritual heritage of Devbhoomi Uttarakhand"}
      </p>

      <Tabs defaultValue="destinations" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="destinations">{language === "hi" ? "गंतव्य" : "Destinations"}</TabsTrigger>
          <TabsTrigger value="temples">{language === "hi" ? "मंदिर" : "Temples"}</TabsTrigger>
          <TabsTrigger value="packages">{language === "hi" ? "पैकेज" : "Packages"}</TabsTrigger>
          <TabsTrigger value="guides">{language === "hi" ? "स्थानीय गाइड" : "Local Guides"}</TabsTrigger>
          <TabsTrigger value="homestays">{language === "hi" ? "होमस्टे" : "Homestays"}</TabsTrigger>
          <TabsTrigger value="planner">{language === "hi" ? "यात्रा प्लानर" : "Trip Planner"}</TabsTrigger>
        </TabsList>

        {/* Destinations Tab */}
        <TabsContent value="destinations" className="mt-6">
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold">{language === "hi" ? "लोकप्रिय गंतव्य" : "Popular Destinations"}</h2>
              <Link href="/tourism/destinations" className="text-primary hover:underline flex items-center">
                {language === "hi" ? "सभी गंतव्य देखें" : "View All Destinations"}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {districts.slice(0, 6).map((district) => (
                <Card key={district.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-48">
                    <Image
                      src={district.imageUrl || "/placeholder.svg?height=300&width=400"}
                      alt={typeof district.name === "object" ? district.name[language] : district.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">
                        {typeof district.name === "object" ? district.name[language] : district.name}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {typeof district.region === "object"
                          ? `${district.region[language]} ${language === "hi" ? "क्षेत्र" : "Region"}`
                          : `${district.region} ${language === "hi" ? "क्षेत्र" : "Region"}`}
                      </p>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <p className="line-clamp-3 text-muted-foreground">
                      {typeof district.description === "object" ? district.description[language] : district.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link href={`/tourism/destinations/${district.id}`} className="text-primary hover:underline">
                      {language === "hi" ? "खोजें" : "Explore"}
                    </Link>
                    <Link
                      href={`/tourism/book?destination=${district.id}`}
                      className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
                    >
                      {language === "hi" ? "अभी बुक करें" : "Book Now"}
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </TabsContent>

        {/* Temples Tab */}
        <TabsContent value="temples" className="mt-6">
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold">{language === "hi" ? "प्रसिद्ध मंदिर" : "Famous Temples"}</h2>
              <Link href="/tourism/temples" className="text-primary hover:underline flex items-center">
                {language === "hi" ? "सभी मंदिर देखें" : "View All Temples"}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {famousTemples.map((temple) => (
                <Card
                  key={temple.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row"
                >
                  <div className="relative h-60 md:h-auto md:w-2/5">
                    <Image
                      src={temple.image || "/placeholder.svg"}
                      alt={language === "hi" ? temple.nameHi : temple.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">
                          {language === "hi" ? temple.nameHi : temple.name}
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {language === "hi" ? temple.locationHi : temple.location}
                          <span className="mx-2">•</span>
                          <span>{temple.elevation}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/10">
                        {language === "hi" ? temple.deityHi : temple.deity}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {language === "hi" ? temple.descriptionHi : temple.description}
                    </p>

                    <div className="flex justify-between items-center mt-auto">
                      <Link href={`/tourism/temples/${temple.id}`} className="text-primary hover:underline">
                        {language === "hi" ? "अधिक जानकारी" : "Learn More"}
                      </Link>
                      <Link
                        href={`/tourism/book?temple=${temple.id}`}
                        className="bg-primary text-white px-3 py-1 rounded-md hover:bg-primary/90 text-sm"
                      >
                        {language === "hi" ? "यात्रा बुक करें" : "Book Visit"}
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </TabsContent>

        {/* Packages Tab */}
        <TabsContent value="packages" className="mt-6">
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold">{language === "hi" ? "पर्यटन पैकेज" : "Tourism Packages"}</h2>
              <Link href="/tourism/packages" className="text-primary hover:underline flex items-center">
                {language === "hi" ? "सभी पैकेज देखें" : "View All Packages"}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tourismPackages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={language === "hi" ? pkg.titleHi : pkg.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary text-white">{language === "hi" ? pkg.priceHi : pkg.price}</Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{language === "hi" ? pkg.titleHi : pkg.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {language === "hi" ? pkg.durationHi : pkg.duration}
                      <span className="mx-2">•</span>
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      {pkg.rating} ({pkg.reviews})
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {language === "hi" ? pkg.descriptionHi : pkg.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {(language === "hi" ? pkg.includesHi : pkg.includes).map((item, index) => (
                        <Badge key={index} variant="outline" className="bg-primary/5">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">{language === "hi" ? "अभी बुक करें" : "Book Now"}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </TabsContent>

        {/* Local Guides Tab */}
        <TabsContent value="guides" className="mt-6">
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold">{language === "hi" ? "स्थानीय गाइड" : "Local Guides"}</h2>
              <Link href="/tourism/guides" className="text-primary hover:underline flex items-center">
                {language === "hi" ? "सभी गाइड देखें" : "View All Guides"}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {localGuides.map((guide) => (
                <Card key={guide.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage
                        src={guide.image || "/placeholder.svg"}
                        alt={language === "hi" ? guide.nameHi : guide.name}
                      />
                      <AvatarFallback>{guide.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold mb-1">{language === "hi" ? guide.nameHi : guide.name}</h3>
                    <Badge className="mb-2">{language === "hi" ? guide.specializationHi : guide.specialization}</Badge>
                    <div className="flex items-center justify-center text-sm text-muted-foreground mb-2">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      {guide.rating} ({guide.reviews} {language === "hi" ? "समीक्षाएँ" : "reviews"})
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      <p>
                        {language === "hi"
                          ? `${guide.experience} वर्षों का अनुभव`
                          : `${guide.experience} years experience`}
                      </p>
                      <p className="mt-1">
                        {language === "hi" ? "भाषाएँ: " : "Languages: "}
                        {(language === "hi" ? guide.languagesHi : guide.languages).join(", ")}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {language === "hi" ? guide.descriptionHi : guide.description}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-lg font-bold">{language === "hi" ? guide.priceHi : guide.price}</div>
                      <div className="text-sm text-muted-foreground">{language === "hi" ? "प्रति दिन" : "per day"}</div>
                    </div>
                  </div>
                  <CardFooter className="bg-gray-50 p-4">
                    <div className="w-full flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {language === "hi" ? "संपर्क करें" : "Contact"}
                      </Button>
                      <Button className="flex-1">{language === "hi" ? "बुक करें" : "Book"}</Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </TabsContent>

        {/* Homestays Tab */}
        <TabsContent value="homestays" className="mt-6">
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold">{language === "hi" ? "स्थानीय होमस्टे" : "Local Homestays"}</h2>
              <Link href="/tourism/homestays" className="text-primary hover:underline flex items-center">
                {language === "hi" ? "सभी होमस्टे देखें" : "View All Homestays"}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {homestayOptions.map((homestay) => (
                <Card key={homestay.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={homestay.image || "/placeholder.svg"}
                      alt={language === "hi" ? homestay.nameHi : homestay.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary text-white">
                        {language === "hi" ? homestay.priceHi : homestay.price}
                      </Badge>
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <Badge variant="outline" className="bg-white/80 text-primary">
                        <MapPin className="h-3 w-3 mr-1" />
                        {language === "hi" ? homestay.locationHi : homestay.location}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{language === "hi" ? homestay.nameHi : homestay.name}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      {homestay.rating} ({homestay.reviews} {language === "hi" ? "समीक्षाएँ" : "reviews"})
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(language === "hi" ? homestay.amenitiesHi : homestay.amenities).map((item, index) => (
                        <Badge key={index} variant="outline" className="bg-primary/5">
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {language === "hi" ? homestay.descriptionHi : homestay.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="flex-1 mr-2">
                      <Heart className="h-4 w-4 mr-2" />
                      {language === "hi" ? "सहेजें" : "Save"}
                    </Button>
                    <Button className="flex-1">{language === "hi" ? "बुक करें" : "Book"}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </TabsContent>

        {/* Trip Planner Tab */}
        <TabsContent value="planner" className="mt-6">
          <section>
            <h2 className="text-3xl font-semibold mb-6">{language === "hi" ? "यात्रा प्लानर" : "Trip Planner"}</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-2xl font-semibold mb-4">
                {language === "hi" ? "अपनी परफेक्ट उत्तराखंड यात्रा की योजना बनाएं" : "Plan Your Perfect Uttarakhand Trip"}
              </h3>
              <p className="mb-6">
                {language === "hi"
                  ? "हमारा एआई-संचालित टूर प्लानर आपकी प्राथमिकताओं, बजट और समय की बाधाओं के आधार पर उत्तराखंड की परफेक्ट यात्रा की योजना बनाने में आपकी मदद कर सकता है। बस नीचे दिए गए फॉर्म को भरें, और हमारा एआई आपके लिए एक अनुकूलित यात्रा कार्यक्रम तैयार करेगा।"
                  : "Our AI-powered trip planner can help you plan the perfect trip to Uttarakhand based on your preferences, budget, and time constraints. Simply fill out the form below, and our AI will generate a customized itinerary for you."}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                      {language === "hi" ? "यात्रा की अवधि (दिन)" : "Trip Duration (days)"}
                    </label>
                    <input
                      type="number"
                      id="duration"
                      min="1"
                      max="30"
                      defaultValue="7"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                      {language === "hi" ? "बजट रेंज" : "Budget Range"}
                    </label>
                    <select id="budget" className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="budget">
                        {language === "hi" ? "बजट (₹10,000 - ₹30,000)" : "Budget (₹10,000 - ₹30,000)"}
                      </option>
                      <option value="mid">
                        {language === "hi" ? "मध्यम रेंज (₹30,000 - ₹60,000)" : "Mid-Range (₹30,000 - ₹60,000)"}
                      </option>
                      <option value="luxury">{language === "hi" ? "लक्जरी (₹60,000+)" : "Luxury (₹60,000+)"}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
                      {language === "hi" ? "रुचियां (कई चुनें)" : "Interests (select multiple)"}
                    </label>
                    <select id="interests" multiple className="w-full p-2 border border-gray-300 rounded-md h-32">
                      <option value="pilgrimage">
                        {language === "hi" ? "तीर्थयात्रा और आध्यात्मिक" : "Pilgrimage & Spiritual"}
                      </option>
                      <option value="adventure">
                        {language === "hi" ? "साहसिक और ट्रेकिंग" : "Adventure & Trekking"}
                      </option>
                      <option value="wildlife">{language === "hi" ? "वन्यजीव और प्रकृति" : "Wildlife & Nature"}</option>
                      <option value="culture">{language === "hi" ? "संस्कृति और विरासत" : "Culture & Heritage"}</option>
                      <option value="relaxation">
                        {language === "hi" ? "आराम और कल्याण" : "Relaxation & Wellness"}
                      </option>
                      <option value="photography">{language === "hi" ? "फोटोग्राफी" : "Photography"}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="season" className="block text-sm font-medium text-gray-700 mb-1">
                      {language === "hi" ? "पसंदीदा मौसम" : "Preferred Season"}
                    </label>
                    <select id="season" className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="spring">
                        {language === "hi" ? "वसंत (मार्च - अप्रैल)" : "Spring (March - April)"}
                      </option>
                      <option value="summer">{language === "hi" ? "गर्मी (मई - जून)" : "Summer (May - June)"}</option>
                      <option value="monsoon">
                        {language === "hi" ? "मानसून (जुलाई - सितंबर)" : "Monsoon (July - September)"}
                      </option>
                      <option value="autumn">
                        {language === "hi" ? "शरद ऋतु (अक्टूबर - नवंबर)" : "Autumn (October - November)"}
                      </option>
                      <option value="winter">
                        {language === "hi" ? "सर्दी (दिसंबर - फरवरी)" : "Winter (December - February)"}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-1">
                      {language === "hi" ? "यात्रियों की संख्या" : "Number of Travelers"}
                    </label>
                    <input
                      type="number"
                      id="travelers"
                      min="1"
                      max="20"
                      defaultValue="2"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label htmlFor="additional" className="block text-sm font-medium text-gray-700 mb-1">
                      {language === "hi" ? "अतिरिक्त आवश्यकताएं" : "Additional Requirements"}
                    </label>
                    <textarea
                      id="additional"
                      rows={4}
                      placeholder={
                        language === "hi"
                          ? "कोई विशिष्ट आवश्यकताएं या प्राथमिकताएं..."
                          : "Any specific requirements or preferences..."
                      }
                      className="w-full p-2 border border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                </div>
              </div>

              <button className="mt-6 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 w-full md:w-auto">
                {language === "hi" ? "यात्रा कार्यक्रम जनरेट करें" : "Generate Itinerary"}
              </button>
            </div>
          </section>
        </TabsContent>
      </Tabs>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">
          {language === "hi" ? "अपनी उत्तराखंड साहसिक यात्रा बुक करें" : "Book Your Uttarakhand Adventure"}
        </h2>
        <BookingForm tourName="Uttarakhand Explorer" tourNameHi="उत्तराखंड एक्सप्लोरर" />
      </section>
    </main>
  )
}
