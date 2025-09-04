"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Utensils, MapPin, Calendar, Info, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { AipanBorder, TempleArch, MountainDivider } from "@/components/decorative-elements"

export default function AboutUttarakhandPage() {
  const { language } = useLanguage()

  // Districts data with updated images and information
  const districts = [
    {
      id: 1,
      name: language === "hi" ? "देहरादून" : "Dehradun",
      image:
        "https://images.unsplash.com/photo-1590332763673-cae4df71c3a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "गढ़वाल" : "Garhwal",
      description:
        language === "hi"
          ? "उत्तराखंड की अंतरिम राजधानी और राज्य का सबसे बड़ा शहर। यह अपने बोर्डिंग स्कूलों, प्राकृतिक सौंदर्य और धार्मिक स्थलों के लिए प्रसिद्ध है।"
          : "The interim capital of Uttarakhand and the largest city in the state. It is famous for its boarding schools, natural beauty, and religious sites.",
      attractions:
        language === "hi"
          ? "रोबर्ट्स केव, मसूरी, तपकेश्वर महादेव मंदिर, सहस्त्रधारा, एफआरआई"
          : "Robber's Cave, Mussoorie, Tapkeshwar Temple, Sahastradhara, FRI",
      color: "uttarakhand-mountain",
      famousFor: language === "hi" ? "शिक्षा संस्थान, प्राकृतिक झरने" : "Educational institutions, natural springs",
      specialties: language === "hi" ? "बासमती चावल, लिच्छी" : "Basmati rice, litchi",
      festivals: language === "hi" ? "बसंत पंचमी, होली" : "Basant Panchami, Holi",
    },
    {
      id: 2,
      name: language === "hi" ? "नैनीताल" : "Nainital",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "कुमाऊँ" : "Kumaon",
      description:
        language === "hi"
          ? "झीलों की नगरी के रूप में प्रसिद्ध, नैनीताल अपनी प्राकृतिक सुंदरता और शांत वातावरण के लिए जाना जाता है। यह उत्तराखंड के सबसे लोकप्रिय पर्यटन स्थलों में से एक है।"
          : "Known as the 'City of Lakes', Nainital is famous for its natural beauty and serene environment. It is one of the most popular tourist destinations in Uttarakhand.",
      attractions:
        language === "hi"
          ? "नैनीताल झील, नैना देवी मंदिर, स्नो व्यू, टिफिन टॉप, भीमताल"
          : "Naini Lake, Naina Devi Temple, Snow View, Tiffin Top, Bhimtal",
      color: "uttarakhand-pine",
      famousFor: language === "hi" ? "झीलें, हिल स्टेशन" : "Lakes, hill station",
      specialties: language === "hi" ? "बाल मिठाई, सिंगोड़ी" : "Bal Mithai, Singodi",
      festivals: language === "hi" ? "उत्तरायणी, हरेला" : "Uttarayani, Harela",
    },
    {
      id: 3,
      name: language === "hi" ? "हरिद्वार" : "Haridwar",
      image:
        "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "गढ़वाल" : "Garhwal",
      description:
        language === "hi"
          ? "हिंदुओं के सबसे पवित्र स्थानों में से एक, हरिद्वार गंगा नदी के तट पर स्थित है और अपने धार्मिक महत्व के लिए प्रसिद्ध है। यह चार धाम यात्रा का प्रवेश द्वार भी है।"
          : "One of the holiest places for Hindus, Haridwar is located on the banks of the Ganges River and is famous for its religious significance. It is also the gateway to the Char Dham pilgrimage.",
      attractions:
        language === "hi"
          ? "हर की पौड़ी, मनसा देवी मंदिर, चंडी देवी मंदिर, गंगा आरती, राजाजी नेशनल पार्क"
          : "Har Ki Pauri, Mansa Devi Temple, Chandi Devi Temple, Ganga Aarti, Rajaji National Park",
      color: "uttarakhand-sunset",
      famousFor: language === "hi" ? "धार्मिक स्थल, गंगा आरती" : "Religious sites, Ganga Aarti",
      specialties: language === "hi" ? "पेड़े, आंवला कैंडी" : "Peda, Amla Candy",
      festivals: language === "hi" ? "कुंभ मेला, कांवड़ मेला" : "Kumbh Mela, Kanwar Mela",
    },
    {
      id: 4,
      name: language === "hi" ? "ऋषिकेश" : "Rishikesh",
      image:
        "https://images.unsplash.com/photo-1591018533273-5a45e534a05d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "गढ़वाल" : "Garhwal",
      description:
        language === "hi"
          ? "योग की राजधानी के रूप में प्रसिद्ध, ऋषिकेश गंगा नदी के तट पर स्थित है और अपने आध्यात्मिक महत्व के लिए जाना जाता है। यह साहसिक गतिविधियों का भी एक प्रमुख केंद्र है।"
          : "Known as the 'Yoga Capital', Rishikesh is located on the banks of the Ganges River and is known for its spiritual significance. It is also a major center for adventure activities.",
      attractions:
        language === "hi"
          ? "लक्ष्मण झूला, राम झूला, त्रिवेणी घाट, नीलकंठ महादेव, राफ्टिंग"
          : "Laxman Jhula, Ram Jhula, Triveni Ghat, Neelkanth Mahadev, Rafting",
      color: "uttarakhand-flower",
      famousFor: language === "hi" ? "योग, राफ्टिंग" : "Yoga, Rafting",
      specialties: language === "hi" ? "चाय, हर्बल उत्पाद" : "Tea, Herbal products",
      festivals: language === "hi" ? "इंटरनेशनल योग फेस्टिवल" : "International Yoga Festival",
    },
    {
      id: 5,
      name: language === "hi" ? "उत्तरकाशी" : "Uttarkashi",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "गढ़वाल" : "Garhwal",
      description:
        language === "hi"
          ? "उत्तरकाशी, जिसका अर्थ है 'उत्तर का काशी', अपने धार्मिक महत्व और प्राकृतिक सौंदर्य के लिए प्रसिद्ध है। यह गंगोत्री और यमुनोत्री के लिए प्रवेश द्वार है।"
          : "Uttarkashi, which means 'Kashi of the North', is famous for its religious significance and natural beauty. It is the gateway to Gangotri and Yamunotri.",
      attractions:
        language === "hi"
          ? "गंगोत्री, यमुनोत्री, नेहरू पर्वतारोहण संस्थान, विशनाथ मंदिर, दयारा बुग्याल"
          : "Gangotri, Yamunotri, Nehru Institute of Mountaineering, Vishwanath Temple, Dayara Bugyal",
      color: "uttarakhand-wood",
      famousFor: language === "hi" ? "चार धाम यात्रा, ट्रेकिंग" : "Char Dham Yatra, Trekking",
      specialties: language === "hi" ? "मंडुआ की रोटी, झंगोरे की खीर" : "Mandua Roti, Jhangore ki Kheer",
      festivals: language === "hi" ? "माघ मेला, गंगा दशहरा" : "Magh Mela, Ganga Dussehra",
    },
    {
      id: 6,
      name: language === "hi" ? "चमोली" : "Chamoli",
      image:
        "https://images.unsplash.com/photo-1626715305289-eb3a372f9275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "गढ़वाल" : "Garhwal",
      description:
        language === "hi"
          ? "चमोली, जिसे 'गढ़वाल की राजधानी' भी कहा जाता है, अपने प्राकृतिक सौंदर्य और धार्मिक महत्व के लिए प्रसिद्ध है। यह बद्रीनाथ और हेमकुंड साहिब के लिए प्रवेश द्वार है।"
          : "Chamoli, also known as the 'Capital of Garhwal', is famous for its natural beauty and religious significance. It is the gateway to Badrinath and Hemkund Sahib.",
      attractions:
        language === "hi"
          ? "बद्रीनाथ, हेमकुंड साहिब, वैली ऑफ फ्लावर्स, अलकनंदा नदी, नंदा देवी राष्ट्रीय उद्यान"
          : "Badrinath, Hemkund Sahib, Valley of Flowers, Alaknanda River, Nanda Devi National Park",
      color: "uttarakhand-mountain",
      famousFor: language === "hi" ? "फूलों की घाटी, बद्रीनाथ" : "Valley of Flowers, Badrinath",
      specialties: language === "hi" ? "राजमा, औली स्कीइंग" : "Rajma, Auli Skiing",
      festivals: language === "hi" ? "बसंत पंचमी, नंदा देवी राज जात" : "Basant Panchami, Nanda Devi Raj Jat",
    },
    {
      id: 7,
      name: language === "hi" ? "पौड़ी गढ़वाल" : "Pauri Garhwal",
      image:
        "https://images.unsplash.com/photo-1574531732319-351283c73760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "गढ़वाल" : "Garhwal",
      description:
        language === "hi"
          ? "पौड़ी गढ़वाल अपने प्राकृतिक सौंदर्य, शांत वातावरण और धार्मिक स्थलों के लिए प्रसिद्ध है। यह कई प्रसिद्ध मंदिरों और झीलों का घर है।"
          : "Pauri Garhwal is famous for its natural beauty, serene environment, and religious sites. It is home to several famous temples and lakes.",
      attractions:
        language === "hi"
          ? "खिरसू, कंडोलिया देवता मंदिर, तारा देवी मंदिर, चौथान, कोट गढ़"
          : "Khirsu, Kandoliya Devta Temple, Tara Devi Temple, Chauthan, Kot Garh",
      color: "uttarakhand-pine",
      famousFor: language === "hi" ? "सूर्यास्त का दृश्य, मंदिर" : "Sunset views, temples",
      specialties: language === "hi" ? "मंडुआ की रोटी, झंगोरे की खीर" : "Mandua Roti, Jhangore ki Kheer",
      festivals: language === "hi" ? "बिसु, फूलदेई" : "Bisu, Phool Dei",
    },
    {
      id: 8,
      name: language === "hi" ? "टिहरी गढ़वाल" : "Tehri Garhwal",
      image:
        "https://images.unsplash.com/photo-1590332763673-cae4df71c3a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "गढ़वाल" : "Garhwal",
      description:
        language === "hi"
          ? "टिहरी गढ़वाल अपने प्राकृतिक सौंदर्य, टिहरी बांध और साहसिक गतिविधियों के लिए प्रसिद्ध है। यह कई प्रसिद्ध मंदिरों और झीलों का भी घर है।"
          : "Tehri Garhwal is famous for its natural beauty, Tehri Dam, and adventure activities. It is also home to several famous temples and lakes.",
      attractions:
        language === "hi"
          ? "टिहरी झील, चंबा, कंडिताल, सुरकंडा देवी मंदिर, धनौल्टी"
          : "Tehri Lake, Chamba, Kanditaal, Surkanda Devi Temple, Dhanaulti",
      color: "uttarakhand-sunset",
      famousFor: language === "hi" ? "टिहरी बांध, वाटर स्पोर्ट्स" : "Tehri Dam, water sports",
      specialties: language === "hi" ? "मंडुआ की रोटी, झंगोरे की खीर" : "Mandua Roti, Jhangore ki Kheer",
      festivals: language === "hi" ? "बिसु, फूलदेई" : "Bisu, Phool Dei",
    },
    {
      id: 9,
      name: language === "hi" ? "रुद्रप्रयाग" : "Rudraprayag",
      image:
        "https://images.unsplash.com/photo-1626715305289-eb3a372f9275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "गढ़वाल" : "Garhwal",
      description:
        language === "hi"
          ? "रुद्रप्रयाग अपने धार्मिक महत्व और प्राकृतिक सौंदर्य के लिए प्रसिद्ध है। यह अलकनंदा और मंदाकिनी नदियों के संगम पर स्थित है और केदारनाथ के लिए प्रवेश द्वार है।"
          : "Rudraprayag is famous for its religious significance and natural beauty. It is located at the confluence of the Alaknanda and Mandakini rivers and is the gateway to Kedarnath.",
      attractions:
        language === "hi"
          ? "रुद्रनाथ मंदिर, केदारनाथ, चोपता, कर्णप्रयाग, अगस्त्यमुनि"
          : "Rudranath Temple, Kedarnath, Chopta, Karnaprayag, Agastyamuni",
      color: "uttarakhand-flower",
      famousFor: language === "hi" ? "नदी संगम, केदारनाथ यात्रा" : "River confluence, Kedarnath Yatra",
      specialties: language === "hi" ? "मंडुआ की रोटी, झंगोरे की खीर" : "Mandua Roti, Jhangore ki Kheer",
      festivals: language === "hi" ? "बसंत पंचमी, केदारनाथ यात्रा" : "Basant Panchami, Kedarnath Yatra",
    },
    {
      id: 10,
      name: language === "hi" ? "अल्मोड़ा" : "Almora",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "कुमाऊँ" : "Kumaon",
      description:
        language === "hi"
          ? "अल्मोड़ा अपने प्राकृतिक सौंदर्य, सांस्कृतिक विरासत और शांत वातावरण के लिए प्रसिद्ध है। यह कई प्रसिद्ध मंदिरों और प्राकृतिक स्थलों का घर है।"
          : "Almora is famous for its natural beauty, cultural heritage, and serene environment. It is home to several famous temples and natural sites.",
      attractions:
        language === "hi"
          ? "कटारमल सूर्य मंदिर, चित्रई मंदिर, सिमतोला, कौसानी, जागेश्वर"
          : "Katarmal Sun Temple, Chitai Temple, Simtola, Kausani, Jageshwar",
      color: "uttarakhand-wood",
      famousFor: language === "hi" ? "हिमालय का दृश्य, मंदिर" : "Himalayan views, temples",
      specialties: language === "hi" ? "बाल मिठाई, सिंगोड़ी" : "Bal Mithai, Singodi",
      festivals: language === "hi" ? "हरेला, नंदा देवी मेला" : "Harela, Nanda Devi Fair",
    },
    {
      id: 11,
      name: language === "hi" ? "बागेश्वर" : "Bageshwar",
      image:
        "https://images.unsplash.com/photo-1591018533273-5a45e534a05d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "कुमाऊँ" : "Kumaon",
      description:
        language === "hi"
          ? "बागेश्वर अपने धार्मिक महत्व और प्राकृतिक सौंदर्य के लिए प्रसिद्ध है। यह सरयू और गोमती नदियों के संगम पर स्थित है और कई प्रसिद्ध मंदिरों का घर है।"
          : "Bageshwar is famous for its religious significance and natural beauty. It is located at the confluence of the Saryu and Gomti rivers and is home to several famous temples.",
      attractions:
        language === "hi"
          ? "बागनाथ मंदिर, चंद्रेश्वर मंदिर, पिंडारी ग्लेशियर, कंडा, बैजनाथ"
          : "Bagnath Temple, Chandreshwar Temple, Pindari Glacier, Kanda, Baijnath",
      color: "uttarakhand-mountain",
      famousFor: language === "hi" ? "नदी संगम, मंदिर" : "River confluence, temples",
      specialties: language === "hi" ? "बाल मिठाई, सिंगोड़ी" : "Bal Mithai, Singodi",
      festivals: language === "hi" ? "उत्तरायणी मेला" : "Uttarayani Fair",
    },
    {
      id: 12,
      name: language === "hi" ? "पिथौरागढ़" : "Pithoragarh",
      image:
        "https://images.unsplash.com/photo-1626620411842-2eb0b1391c27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "कुमाऊँ" : "Kumaon",
      description:
        language === "hi"
          ? "पिथौरागढ़, जिसे 'मिनी कश्मीर' भी कहा जाता है, अपने प्राकृतिक सौंदर्य और सांस्कृतिक विरासत के लिए प्रसिद्ध है। यह कैलाश मानसरोवर यात्रा के लिए प्रवेश द्वार है।"
          : "Pithoragarh, also known as 'Mini Kashmir', is famous for its natural beauty and cultural heritage. It is the gateway for the Kailash Mansarovar Yatra.",
      attractions:
        language === "hi"
          ? "कैलाश मानसरोवर यात्रा, मुनस्यारी, चौकोरी, धारचूला, नारायण आश्रम"
          : "Kailash Mansarovar Yatra, Munsyari, Chaukori, Dharchula, Narayan Ashram",
      color: "uttarakhand-pine",
      famousFor: language === "hi" ? "हिमालय का दृश्य, कैलाश यात्रा" : "Himalayan views, Kailash Yatra",
      specialties: language === "hi" ? "बाल मिठाई, सिंगोड़ी" : "Bal Mithai, Singodi",
      festivals: language === "hi" ? "हरेला, फूलदेई" : "Harela, Phool Dei",
    },
    {
      id: 13,
      name: language === "hi" ? "चंपावत" : "Champawat",
      image:
        "https://images.unsplash.com/photo-1574531732319-351283c73760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "कुमाऊँ" : "Kumaon",
      description:
        language === "hi"
          ? "चंपावत अपने ऐतिहासिक महत्व, प्राकृतिक सौंदर्य और सांस्कृतिक विरासत के लिए प्रसिद्ध है। यह कई प्रसिद्ध मंदिरों और ऐतिहासिक स्थलों का घर है।"
          : "Champawat is famous for its historical significance, natural beauty, and cultural heritage. It is home to several famous temples and historical sites.",
      attractions:
        language === "hi"
          ? "बालेश्वर मंदिर, लोहाघाट, पूर्णागिरि, अबोट माउंट, बनबसा"
          : "Baleshwar Temple, Lohaghat, Purnagiri, Abbott Mount, Banasaa",
      color: "uttarakhand-sunset",
      famousFor: language === "hi" ? "ऐतिहासिक स्थल, मंदिर" : "Historical sites, temples",
      specialties: language === "hi" ? "बाल मिठाई, सिंगोड़ी" : "Bal Mithai, Singodi",
      festivals: language === "hi" ? "हरेला, फूलदेई" : "Harela, Phool Dei",
    },
  ]

  return (
    <div className="bg-gradient-to-b from-white to-uttarakhand-sunset/10 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
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
              {language === "hi" ? "देवभूमि उत्तराखंड" : "Devbhoomi Uttarakhand"}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90 font-pahadi drop-shadow-lg">
              {language === "hi"
                ? "हिमालय की गोद में बसा, प्राकृतिक सौंदर्य और आध्यात्मिक विरासत से समृद्ध राज्य"
                : "Nestled in the lap of the Himalayas, a state rich in natural beauty and spiritual heritage"}
            </p>
            <Link href="/tourism">
              <Button
                size="lg"
                className="bg-uttarakhand-sunset hover:bg-uttarakhand-sunset/90 text-white font-pahadi border border-white/20 backdrop-blur-sm"
              >
                {language === "hi" ? "उत्तराखंड की यात्रा करें" : "Explore Uttarakhand Tourism"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AipanBorder className="inline-block mb-4">
                <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                  {language === "hi" ? "उत्तराखंड का परिचय" : "Introduction to Uttarakhand"}
                </h2>
              </AipanBorder>
              <div className="space-y-4 text-muted-foreground font-pahadi">
                <p>
                  {language === "hi"
                    ? "उत्तराखंड, जिसे 'देवभूमि' (देवताओं की भूमि) के नाम से भी जाना जाता है, भारत का एक राज्य है जो अपनी प्राकृतिक सुंदरता, आध्यात्मिक महत्व और समृद्ध सांस्कृतिक विरासत के लिए प्रसिद्ध है।"
                    : "Uttarakhand, also known as 'Devbhoomi' (Land of the Gods), is a state in India renowned for its natural beauty, spiritual significance, and rich cultural heritage."}
                </p>
                <p>
                  {language === "hi"
                    ? "9 नवंबर 2000 को उत्तर प्रदेश से अलग होकर बना, उत्तराखंड हिमालय की गोद में बसा है और इसमें कई प्रसिद्ध तीर्थस्थल, राष्ट्रीय उद्यान और वन्यजीव अभयारण्य हैं।"
                    : "Formed on November 9, 2000, after being separated from Uttar Pradesh, Uttarakhand is nestled in the lap of the Himalayas and is home to numerous famous pilgrimage sites, national parks, and wildlife sanctuaries."}
                </p>
                <p>
                  {language === "hi"
                    ? "राज्य को दो प्रमुख क्षेत्रों में विभाजित किया गया है: गढ़वाल और कुमाऊँ, जिनकी अपनी अलग-अलग सांस्कृतिक पहचान और भाषाएँ हैं।"
                    : "The state is divided into two major regions: Garhwal and Kumaon, each with its distinct cultural identity and languages."}
                </p>
                <p>
                  {language === "hi"
                    ? "उत्तराखंड की प्राकृतिक सुंदरता, हिमालय की विशाल चोटियों, हरे-भरे घाटियों, झरनों और नदियों के रूप में देखी जा सकती है। यहां के प्रमुख पर्यटन स्थलों में नैनीताल, मसूरी, हरिद्वार, ऋषिकेश, बद्रीनाथ और केदारनाथ शामिल हैं।"
                    : "Uttarakhand's natural beauty can be seen in the form of majestic Himalayan peaks, lush green valleys, waterfalls, and rivers. Major tourist destinations include Nainital, Mussoorie, Haridwar, Rishikesh, Badrinath, and Kedarnath."}
                </p>
                <p>
                  {language === "hi"
                    ? "उत्तराखंड में 13 जिले हैं, जिनमें से 7 गढ़वाल क्षेत्र में और 6 कुमाऊँ क्षेत्र में हैं। प्रत्येक जिले की अपनी अनूठी विशेषताएँ, संस्कृति और परंपराएँ हैं।"
                    : "Uttarakhand has 13 districts, 7 in the Garhwal region and 6 in the Kumaon region. Each district has its unique characteristics, culture, and traditions."}
                </p>
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

      {/* Districts Section */}
      <section className="py-16 bg-gradient-to-r from-uttarakhand-sunset/10 to-uttarakhand-wood/10 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "उत्तराखंड के जिले" : "Districts of Uttarakhand"}
              </h2>
            </TempleArch>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "उत्तराखंड के 13 जिलों के बारे में जानें, प्रत्येक की अपनी अनूठी विशेषताएँ और आकर्षण हैं"
                : "Learn about Uttarakhand's 13 districts, each with its own unique characteristics and attractions"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {districts.map((district) => (
              <Card
                key={district.id}
                className={`border-2 border-${district.color}/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden group`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={district.image || "/placeholder.svg?height=300&width=400"}
                    alt={district.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-2 right-2 bg-white/80 dark:bg-gray-800/80 text-xs px-2 py-1 rounded-full font-pahadi">
                    {district.region}
                  </div>
                </div>
                <CardHeader className="relative z-10 -mt-12 pb-0">
                  <div className="bg-white dark:bg-gray-900 rounded-t-xl p-4 shadow-lg">
                    <div className="flex justify-between items-center">
                      <CardTitle className={`text-${district.color} dark:text-uttarakhand-meadow font-pahadi`}>
                        {district.name}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="bg-white dark:bg-gray-900 px-4 pb-2">
                    <div className="space-y-3 pt-4">
                      <p className="text-muted-foreground font-pahadi line-clamp-3">{district.description}</p>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex items-start gap-2">
                          <MapPin
                            className={`h-5 w-5 text-${district.color} dark:text-uttarakhand-meadow mt-1 flex-shrink-0`}
                          />
                          <span className="text-sm text-muted-foreground font-pahadi">
                            <span className="font-bold">{language === "hi" ? "प्रमुख आकर्षण:" : "Key Attractions:"}</span>{" "}
                            {district.attractions}
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Info
                            className={`h-5 w-5 text-${district.color} dark:text-uttarakhand-meadow mt-1 flex-shrink-0`}
                          />
                          <span className="text-sm text-muted-foreground font-pahadi">
                            <span className="font-bold">{language === "hi" ? "प्रसिद्ध:" : "Famous For:"}</span>{" "}
                            {district.famousFor}
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Utensils
                            className={`h-5 w-5 text-${district.color} dark:text-uttarakhand-meadow mt-1 flex-shrink-0`}
                          />
                          <span className="text-sm text-muted-foreground font-pahadi">
                            <span className="font-bold">{language === "hi" ? "विशेषताएँ:" : "Specialties:"}</span>{" "}
                            {district.specialties}
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Calendar
                            className={`h-5 w-5 text-${district.color} dark:text-uttarakhand-meadow mt-1 flex-shrink-0`}
                          />
                          <span className="text-sm text-muted-foreground font-pahadi">
                            <span className="font-bold">{language === "hi" ? "त्योहार:" : "Festivals:"}</span>{" "}
                            {district.festivals}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "उत्तराखंड के क्षेत्र" : "Regions of Uttarakhand"}
              </h2>
            </TempleArch>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "उत्तराखंड के दो प्रमुख क्षेत्र: गढ़वाल और कुमाऊँ"
                : "The two major regions of Uttarakhand: Garhwal and Kumaon"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Garhwal Region */}
            <Card className="border-2 border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Garhwal Region"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold font-pahadi">
                    {language === "hi" ? "गढ़वाल क्षेत्र" : "Garhwal Region"}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4 font-pahadi text-muted-foreground">
                  <p>
                    {language === "hi"
                      ? "गढ़वाल क्षेत्र उत्तराखंड के पश्चिमी भाग में स्थित है और इसमें 7 जिले शामिल हैं: देहरादून, हरिद्वार, पौड़ी गढ़वाल, टिहरी गढ़वाल, उत्तरकाशी, चमोली और रुद्रप्रयाग।"
                      : "The Garhwal region is located in the western part of Uttarakhand and comprises 7 districts: Dehradun, Haridwar, Pauri Garhwal, Tehri Garhwal, Uttarkashi, Chamoli, and Rudraprayag."}
                  </p>
                  <p>
                    {language === "hi"
                      ? "यह क्षेत्र अपने धार्मिक स्थलों, प्राकृतिक सौंदर्य और समृद्ध सांस्कृतिक विरासत के लिए प्रसिद्ध है। चार धाम यात्रा के दो धाम - बद्रीनाथ और केदारनाथ - इसी क्षेत्र में स्थित हैं।"
                      : "This region is famous for its religious sites, natural beauty, and rich cultural heritage. Two of the Char Dham pilgrimage sites - Badrinath and Kedarnath - are located in this region."}
                  </p>
                  <p>
                    {language === "hi"
                      ? "गढ़वाली भाषा इस क्षेत्र की मुख्य भाषा है, और यहां के लोग अपनी पारंपरिक संस्कृति, लोक कलाओं और त्योहारों के लिए जाने जाते हैं।"
                      : "Garhwali language is the main language of this region, and the people here are known for their traditional culture, folk arts, and festivals."}
                  </p>
                  <div className="pt-4">
                    <h4 className="font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow mb-2">
                      {language === "hi" ? "प्रमुख आकर्षण:" : "Key Attractions:"}
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>{language === "hi" ? "बद्रीनाथ और केदारनाथ मंदिर" : "Badrinath and Kedarnath Temples"}</li>
                      <li>{language === "hi" ? "हर की पौड़ी, हरिद्वार" : "Har Ki Pauri, Haridwar"}</li>
                      <li>{language === "hi" ? "वैली ऑफ फ्लावर्स" : "Valley of Flowers"}</li>
                      <li>{language === "hi" ? "मसूरी हिल स्टेशन" : "Mussoorie Hill Station"}</li>
                      <li>{language === "hi" ? "ऋषिकेश - योग की राजधानी" : "Rishikesh - Yoga Capital"}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kumaon Region */}
            <Card className="border-2 border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Kumaon Region"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold font-pahadi">
                    {language === "hi" ? "कुमाऊँ क्षेत्र" : "Kumaon Region"}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4 font-pahadi text-muted-foreground">
                  <p>
                    {language === "hi"
                      ? "कुमाऊँ क्षेत्र उत्तराखंड के पूर्वी भाग में स्थित है और इसमें 6 जिले शामिल हैं: नैनीताल, अल्मोड़ा, पिथौरागढ़, चंपावत, बागेश्वर और ऊधम सिंह नगर।"
                      : "The Kumaon region is located in the eastern part of Uttarakhand and comprises 6 districts: Nainital, Almora, Pithoragarh, Champawat, Bageshwar, and Udham Singh Nagar."}
                  </p>
                  <p>
                    {language === "hi"
                      ? "यह क्षेत्र अपने प्राकृतिक सौंदर्य, झीलों, वन्यजीव अभयारण्यों और शांत हिल स्टेशनों के लिए प्रसिद्ध है। नैनीताल, रानीखेत और अल्मोड़ा जैसे प्रसिद्ध हिल स्टेशन इसी क्षेत्र में स्थित हैं।"
                      : "This region is famous for its natural beauty, lakes, wildlife sanctuaries, and serene hill stations. Famous hill stations like Nainital, Ranikhet, and Almora are located in this region."}
                  </p>
                  <p>
                    {language === "hi"
                      ? "कुमाऊँनी भाषा इस क्षेत्र की मुख्य भाषा है, और यहां के लोग अपनी समृद्ध साहित्यिक परंपरा, संगीत और नृत्य के लिए जाने जाते हैं।"
                      : "Kumaoni language is the main language of this region, and the people here are known for their rich literary tradition, music, and dance."}
                  </p>
                  <div className="pt-4">
                    <h4 className="font-bold text-uttarakhand-pine dark:text-uttarakhand-meadow mb-2">
                      {language === "hi" ? "प्रमुख आकर्षण:" : "Key Attractions:"}
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>{language === "hi" ? "नैनीताल झील" : "Naini Lake"}</li>
                      <li>{language === "hi" ? "जिम कॉर्बेट राष्ट्रीय उद्यान" : "Jim Corbett National Park"}</li>
                      <li>{language === "hi" ? "मुक्तेश्वर और रानीखेत" : "Mukteshwar and Ranikhet"}</li>
                      <li>{language === "hi" ? "पिंडारी और मिलम ग्लेशियर" : "Pindari and Milam Glaciers"}</li>
                      <li>{language === "hi" ? "जागेश्वर मंदिर परिसर" : "Jageshwar Temple Complex"}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Char Dham Section */}
      <section className="py-16 bg-gradient-to-r from-uttarakhand-sunset/10 to-uttarakhand-mountain/10 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AipanBorder className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "चार धाम यात्रा" : "Char Dham Yatra"}
              </h2>
            </AipanBorder>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "उत्तराखंड में स्थित चार पवित्र हिंदू तीर्थस्थलों की यात्रा"
                : "The pilgrimage to four sacred Hindu sites located in Uttarakhand"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Yamunotri */}
            <Card className="border-2 border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1589182337358-2cb63099350c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Yamunotri Temple"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold font-pahadi">{language === "hi" ? "यमुनोत्री" : "Yamunotri"}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="space-y-3 font-pahadi text-muted-foreground">
                  <p>
                    {language === "hi"
                      ? "यमुनोत्री यमुना नदी का उद्गम स्थल है और चार धाम यात्रा का पहला पड़ाव है। यह उत्तरकाशी जिले में स्थित है।"
                      : "Yamunotri is the source of the Yamuna River and the first stop of the Char Dham Yatra. It is located in the Uttarkashi district."}
                  </p>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                    <span className="text-sm">
                      {language === "hi" ? "उत्तरकाशी, उत्तराखंड" : "Uttarkashi, Uttarakhand"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                    <span className="text-sm">
                      {language === "hi" ? "यात्रा का समय: अप्रैल-नवंबर" : "Best time to visit: April-November"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gangotri */}
            <Card className="border-2 border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Gangotri Temple"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold font-pahadi">{language === "hi" ? "गंगोत्री" : "Gangotri"}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="space-y-3 font-pahadi text-muted-foreground">
                  <p>
                    {language === "hi"
                      ? "गंगोत्री गंगा नदी का उद्गम स्थल है और चार धाम यात्रा का दूसरा पड़ाव है। यह उत्तरकाशी जिले में स्थित है।"
                      : "Gangotri is the source of the Ganges River and the second stop of the Char Dham Yatra. It is located in the Uttarkashi district."}
                  </p>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-uttarakhand-pine dark:text-uttarakhand-meadow" />
                    <span className="text-sm">
                      {language === "hi" ? "उत्तरकाशी, उत्तराखंड" : "Uttarkashi, Uttarakhand"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-uttarakhand-pine dark:text-uttarakhand-meadow" />
                    <span className="text-sm">
                      {language === "hi" ? "यात्रा का समय: अप्रैल-नवंबर" : "Best time to visit: April-November"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kedarnath */}
            <Card className="border-2 border-uttarakhand-sunset/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1566836610593-62a64888a216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Kedarnath Temple"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold font-pahadi">{language === "hi" ? "केदारनाथ" : "Kedarnath"}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="space-y-3 font-pahadi text-muted-foreground">
                  <p>
                    {language === "hi"
                      ? "केदारनाथ भगवान शिव को समर्पित एक प्रसिद्ध मंदिर है और चार धाम यात्रा का तीसरा पड़ाव है। यह रुद्रप्रयाग जिले में स्थित है।"
                      : "Kedarnath is a famous temple dedicated to Lord Shiva and the third stop of the Char Dham Yatra. It is located in the Rudraprayag district."}
                  </p>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-uttarakhand-sunset dark:text-uttarakhand-meadow" />
                    <span className="text-sm">
                      {language === "hi" ? "रुद्रप्रयाग, उत्तराखंड" : "Rudraprayag, Uttarakhand"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-uttarakhand-sunset dark:text-uttarakhand-meadow" />
                    <span className="text-sm">
                      {language === "hi" ? "यात्रा का समय: अप्रैल-नवंबर" : "Best time to visit: April-November"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Badrinath */}
            <Card className="border-2 border-uttarakhand-flower/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1589182337358-2cb63099350c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Badrinath Temple"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold font-pahadi">{language === "hi" ? "बद्रीनाथ" : "Badrinath"}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="space-y-3 font-pahadi text-muted-foreground">
                  <p>
                    {language === "hi"
                      ? "बद्रीनाथ भगवान विष्णु को समर्पित एक प्रसिद्ध मंदिर है और चार धाम यात्रा का चौथा और अंतिम पड़ाव है। यह चमोली जिले में स्थित है।"
                      : "Badrinath is a famous temple dedicated to Lord Vishnu and the fourth and final stop of the Char Dham Yatra. It is located in the Chamoli district."}
                  </p>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-uttarakhand-flower dark:text-uttarakhand-meadow" />
                    <span className="text-sm">{language === "hi" ? "चमोली, उत्तराखंड" : "Chamoli, Uttarakhand"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-uttarakhand-flower dark:text-uttarakhand-meadow" />
                    <span className="text-sm">
                      {language === "hi" ? "यात्रा का समय: अप्रैल-नवंबर" : "Best time to visit: April-November"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/tourism/char-dham">
              <Button className="bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white font-pahadi">
                {language === "hi" ? "चार धाम यात्रा के बारे में और जानें" : "Learn More About Char Dham Yatra"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Jim Corbett Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "जिम कॉर्बेट राष्ट्रीय उद्यान" : "Jim Corbett National Park"}
              </h2>
            </TempleArch>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "भारत का सबसे पुराना राष्ट्रीय उद्यान और बाघों का प्रमुख आवास"
                : "India's oldest national park and a major tiger habitat"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Jim Corbett National Park"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="space-y-4 text-muted-foreground font-pahadi">
                <p>
                  {language === "hi"
                    ? "जिम कॉर्बेट राष्ट्रीय उद्यान, जिसे पहले हेली नेशनल पार्क के नाम से जाना जाता था, भारत का सबसे पुराना राष्ट्रीय उद्यान है। यह उत्तराखंड के नैनीताल जिले में स्थित है और अपने बाघों के लिए प्रसिद्ध है।"
                    : "Jim Corbett National Park, formerly known as Hailey National Park, is the oldest national park in India. It is located in the Nainital district of Uttarakhand and is famous for its tigers."}
                </p>
                <p>
                  {language === "hi"
                    ? "यह उद्यान 1936 में स्थापित किया गया था और इसका नाम जिम कॉर्बेट के नाम पर रखा गया था, जो एक प्रसिद्ध ब्रिटिश शिकारी, लेखक और प्रकृतिवादी थे।"
                    : "The park was established in 1936 and was named after Jim Corbett, a famous British hunter, author, and naturalist."}
                </p>
                <p>
                  {language === "hi"
                    ? "जिम कॉर्बेट राष्ट्रीय उद्यान में बाघों के अलावा, तेंदुए, हाथी, हिरण, मगरमच्छ और 600 से अधिक पक्षी प्रजातियां भी पाई जाती हैं।"
                    : "Apart from tigers, Jim Corbett National Park is also home to leopards, elephants, deer, crocodiles, and more than 600 bird species."}
                </p>
                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                    <span>
                      <span className="font-bold">{language === "hi" ? "स्थान:" : "Location:"}</span>{" "}
                      {language === "hi" ? "नैनीताल, उत्तराखंड" : "Nainital, Uttarakhand"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                    <span>
                      <span className="font-bold">{language === "hi" ? "यात्रा का समय:" : "Best time to visit:"}</span>{" "}
                      {language === "hi" ? "नवंबर से जून" : "November to June"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                    <span>
                      <span className="font-bold">{language === "hi" ? "गतिविधियां:" : "Activities:"}</span>{" "}
                      {language === "hi"
                        ? "जीप सफारी, हाथी सफारी, बर्ड वॉचिंग, जंगल सफारी"
                        : "Jeep Safari, Elephant Safari, Bird Watching, Jungle Safari"}
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/tourism/jim-corbett">
                    <Button className="bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white font-pahadi">
                      {language === "hi" ? "जिम कॉर्बेट के बारे में और जानें" : "Learn More About Jim Corbett"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Munsyari Section */}
      <section className="py-16 bg-gradient-to-r from-uttarakhand-sunset/10 to-uttarakhand-wood/10 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AipanBorder className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "मुनस्यारी - मिनी कश्मीर" : "Munsyari - Mini Kashmir"}
              </h2>
            </AipanBorder>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "हिमालय की गोद में बसा एक खूबसूरत पहाड़ी स्थल"
                : "A beautiful hill station nestled in the lap of the Himalayas"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-4 text-muted-foreground font-pahadi">
                <p>
                  {language === "hi"
                    ? "मुनस्यारी उत्तराखंड के पिथौरागढ़ जिले में स्थित एक खूबसूरत पहाड़ी स्थल है। यह समुद्र तल से 2,200 मीटर की ऊंचाई पर स्थित है और अपने बर्फ से ढके पहाड़ों और प्राकृतिक सौंदर्य के लिए प्रसिद्ध है।"
                    : "Munsyari is a beautiful hill station located in the Pithoragarh district of Uttarakhand. It is situated at an altitude of 2,200 meters above sea level and is famous for its snow-capped mountains and natural beauty."}
                </p>
                <p>
                  {language === "hi"
                    ? "मुनस्यारी को 'मिनी कश्मीर' के नाम से भी जाना जाता है और यह पंचचूली, नंदा देवी और नंदाकोट जैसे प्रसिद्ध हिमालयी चोटियों का अद्भुत दृश्य प्रदान करता है।"
                    : "Munsyari is also known as 'Mini Kashmir' and offers a spectacular view of famous Himalayan peaks like Panchachuli, Nanda Devi, and Nandakot."}
                </p>
                <p>
                  {language === "hi"
                    ? "यह स्थान ट्रेकिंग, स्कीइंग और अन्य साहसिक गतिविधियों के लिए भी प्रसिद्ध है। मिलम और पिंडारी ग्लेशियर के लिए ट्रेकिंग यहां से शुरू होती है।"
                    : "This place is also famous for trekking, skiing, and other adventure activities. Trekking to Milam and Pindari Glacier starts from here."}
                </p>
                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                    <span>
                      <span className="font-bold">{language === "hi" ? "स्थान:" : "Location:"}</span>{" "}
                      {language === "hi" ? "पिथौरागढ़, उत्तराखंड" : "Pithoragarh, Uttarakhand"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                    <span>
                      <span className="font-bold">{language === "hi" ? "यात्रा का समय:" : "Best time to visit:"}</span>{" "}
                      {language === "hi" ? "मार्च से जून और सितंबर से नवंबर" : "March to June and September to November"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                    <span>
                      <span className="font-bold">{language === "hi" ? "गतिविधियां:" : "Activities:"}</span>{" "}
                      {language === "hi"
                        ? "ट्रेकिंग, स्कीइंग, बर्ड वॉचिंग, फोटोग्राफी"
                        : "Trekking, Skiing, Bird Watching, Photography"}
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/tourism/munsyari">
                    <Button className="bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white font-pahadi">
                      {language === "hi" ? "मुनस्यारी के बारे में और जानें" : "Learn More About Munsyari"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1626620411842-2eb0b1391c27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Munsyari"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-uttarakhand-sunset via-uttarakhand-wood to-uttarakhand-pine text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="backdrop-blur-sm bg-white/10 p-8 rounded-lg border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-pahadi">
              {language === "hi" ? "उत्तराखंड की यात्रा करें" : "Explore Uttarakhand Tourism"}
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90 font-pahadi">
              {language === "hi"
                ? "उत्तराखंड के प्राकृतिक सौंदर्य, धार्मिक स्थलों और साहसिक गतिविधियों का अनुभव करें। हमारे साथ अपनी यात्रा बुक करें और अविस्मरणीय अनुभव प्राप्त करें।"
                : "Experience the natural beauty, religious sites, and adventure activities of Uttarakhand. Book your trip with us and get an unforgettable experience."}
            </p>
            <Link href="/tourism">
              <Button size="lg" className="bg-white text-uttarakhand-sunset hover:bg-white/90 font-pahadi">
                {language === "hi" ? "अभी बुक करें" : "Book Now"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
