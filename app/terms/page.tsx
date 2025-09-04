"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { AipanBorder } from "@/components/decorative-elements"

export default function TermsPage() {
  const { language } = useLanguage()

  return (
    <div className="py-12 bg-gradient-to-b from-white to-uttarakhand-sunset/10 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <AipanBorder className="inline-block mb-4">
            <h1 className="text-4xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
              {language === "hi" ? "नियम और शर्तें" : "Terms and Conditions"}
            </h1>
          </AipanBorder>
          <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
            {language === "hi"
              ? "कृपया हमारी वेबसाइट का उपयोग करने से पहले इन नियमों और शर्तों को ध्यान से पढ़ें।"
              : "Please read these terms and conditions carefully before using our website."}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
              {language === "hi" ? "1. परिचय" : "1. Introduction"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "इस वेबसाइट का उपयोग करके, आप इन नियमों और शर्तों से बाध्य होने के लिए सहमत होते हैं। अगर आप इन नियमों और शर्तों से सहमत नहीं हैं, तो कृपया इस वेबसाइट का उपयोग न करें।"
                : "By using this website, you agree to be bound by these terms and conditions. If you do not agree to these terms and conditions, please do not use this website."}
            </p>

            <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mt-8">
              {language === "hi" ? "2. बौद्धिक संपदा अधिकार" : "2. Intellectual Property Rights"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "इस वेबसाइट पर सभी सामग्री, जिसमें पाठ, ग्राफिक्स, लोगो, आइकन, छवियां, ऑडियो क्लिप, डिजिटल डाउनलोड और सॉफ्टवेयर शामिल हैं, हमारी या हमारे सामग्री प्रदाताओं की संपत्ति हैं और अंतर्राष्ट्रीय कॉपीराइट कानूनों द्वारा संरक्षित हैं।"
                : "All content on this website, including text, graphics, logos, icons, images, audio clips, digital downloads, and software, is the property of us or our content providers and is protected by international copyright laws."}
            </p>

            <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mt-8">
              {language === "hi" ? "3. उपयोग की शर्तें" : "3. Terms of Use"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "आप इस वेबसाइट का उपयोग केवल व्यक्तिगत, गैर-वाणिज्यिक उद्देश्यों के लिए कर सकते हैं। आप इस वेबसाइट या इसकी सामग्री को किसी भी तरह से संशोधित, कॉपी, वितरित, प्रसारित, प्रदर्शित, प्रकाशित, लाइसेंस, डेरिवेटिव वर्क बनाने, बेचने या व्यावसायिक उपयोग नहीं कर सकते हैं।"
                : "You may use this website for personal, non-commercial purposes only. You may not modify, copy, distribute, transmit, display, publish, license, create derivative works from, sell, or commercially exploit this website or its content in any way."}
            </p>

            <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mt-8">
              {language === "hi" ? "4. उपयोगकर्ता खाते" : "4. User Accounts"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "अगर आप इस वेबसाइट पर एक खाता बनाते हैं, तो आप अपने खाते की सुरक्षा के लिए जिम्मेदार हैं। आप अपने खाते के माध्यम से होने वाली सभी गतिविधियों के लिए जिम्मेदार हैं।"
                : "If you create an account on this website, you are responsible for maintaining the security of your account. You are responsible for all activities that occur under your account."}
            </p>

            <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mt-8">
              {language === "hi" ? "5. गोपनीयता नीति" : "5. Privacy Policy"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "हमारी गोपनीयता नीति इस वेबसाइट के उपयोग पर लागू होती है। कृपया हमारी गोपनीयता नीति को ध्यान से पढ़ें।"
                : "Our Privacy Policy applies to the use of this website. Please review our Privacy Policy carefully."}
            </p>
            <p className="font-pahadi mt-2">
              <Link href="/privacy" className="text-uttarakhand-mountain dark:text-uttarakhand-meadow hover:underline">
                {language === "hi" ? "गोपनीयता नीति देखें" : "View Privacy Policy"}
              </Link>
            </p>

            <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mt-8">
              {language === "hi" ? "6. वारंटी का अस्वीकरण" : "6. Disclaimer of Warranties"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "यह वेबसाइट 'जैसी है' और 'जैसी उपलब्ध है' के आधार पर प्रदान की जाती है। हम किसी भी प्रकार की वारंटी, व्यक्त या निहित, को अस्वीकार करते हैं।"
                : "This website is provided on an 'as is' and 'as available' basis. We disclaim all warranties of any kind, express or implied."}
            </p>

            <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mt-8">
              {language === "hi" ? "7. संपर्क जानकारी" : "7. Contact Information"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "अगर आपके पास इन नियमों और शर्तों के बारे में कोई प्रश्न है, तो कृपया हमसे संपर्क करें:"
                : "If you have any questions about these terms and conditions, please contact us:"}
            </p>
            <ul className="list-disc list-inside mt-2 font-pahadi">
              <li>{language === "hi" ? "ईमेल: info@vpahadi.org" : "Email: info@vpahadi.org"}</li>
              <li>{language === "hi" ? "फोन: +91 98765 43210" : "Phone: +91 98765 43210"}</li>
              <li>
                {language === "hi"
                  ? "पता: देहरादून, उत्तराखंड, भारत - 248001"
                  : "Address: Dehradun, Uttarakhand, India - 248001"}
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mt-8">
              {language === "hi" ? "8. परिवर्तन" : "8. Changes"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "हम इन नियमों और शर्तों को किसी भी समय बदल सकते हैं। परिवर्तन इस पृष्ठ पर पोस्ट किए जाएंगे।"
                : "We may change these terms and conditions at any time. Changes will be posted on this page."}
            </p>

            <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mt-8">
              {language === "hi" ? "9. अंतिम अपडेट" : "9. Last Updated"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "ये नियम और शर्तें अंतिम बार 15 जुलाई, 2024 को अपडेट की गईं।"
                : "These terms and conditions were last updated on July 15, 2024."}
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span className="font-pahadi">{language === "hi" ? "होम पेज पर वापस जाएँ" : "Back to Home Page"}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
