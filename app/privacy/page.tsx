"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { AipanBorder } from "@/components/decorative-elements"

export default function PrivacyPage() {
  const { language } = useLanguage()

  return (
    <div className="py-12 bg-gradient-to-b from-white to-uttarakhand-sunset/10 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <AipanBorder className="inline-block mb-4">
            <h1 className="text-4xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
              {language === "hi" ? "गोपनीयता नीति" : "Privacy Policy"}
            </h1>
          </AipanBorder>
          <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
            {language === "hi"
              ? "हम आपकी गोपनीयता का सम्मान करते हैं और आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए प्रतिबद्ध हैं।"
              : "We respect your privacy and are committed to protecting your personal information."}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
              {language === "hi" ? "1. परिचय" : "1. Introduction"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "यह गोपनीयता नीति बताती है कि हम आपकी व्यक्तिगत जानकारी कैसे एकत्र, उपयोग और संरक्षित करते हैं जब आप हमारी वेबसाइट का उपयोग करते हैं।"
                : "This Privacy Policy explains how we collect, use, and protect your personal information when you use our website."}
            </p>

            <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mt-8">
              {language === "hi" ? "2. हम कौन हैं" : "2. Who We Are"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "हम उत्तराखंड भाषा प्लेटफॉर्म हैं, जो उत्तराखंड की भाषाओं को संरक्षित और प्रचारित करने के लिए समर्पित एक पहल है।"
                : "We are Uttarakhand Language Platform, an initiative dedicated to preserving and promoting the languages of Uttarakhand."}
            </p>

            <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mt-8">
              {language === "hi" ? "3. हम कौन सी जानकारी एकत्र करते हैं" : "3. What Information We Collect"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "हम निम्नलिखित प्रकार की जानकारी एकत्र कर सकते हैं:"
                : "We may collect the following types of information:"}
            </p>
            <ul className="list-disc list-inside mt-2 font-pahadi">
              <li>
                {language === "hi"
                  ? "व्यक्तिगत जानकारी: नाम, ईमेल पता, फोन नंबर, और अन्य संपर्क जानकारी जो आप हमें प्रदान करते हैं।"
                  : "Personal information: name, email address, phone number, and other contact information that you provide to us."}
              </li>
              <li>
                {language === "hi"
                  ? "उपयोग डेटा: आईपी पता, ब्राउज़र प्रकार, ऑपरेटिंग सिस्टम, और अन्य तकनीकी जानकारी।"
                  : "Usage data: IP address, browser type, operating system, and other technical information."}
              </li>
              <li>
                {language === "hi"
                  ? "कुकीज़ और ट्रैकिंग डेटा: हम कुकीज़ और समान तकनीकों का उपयोग करते हैं।"
                  : "Cookies and tracking data: we use cookies and similar technologies."}
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mt-8">
              {language === "hi" ? "4. हम आपकी जानकारी का उपयोग कैसे करते हैं" : "4. How We Use Your Information"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "हम आपकी जानकारी का उपयोग निम्नलिखित उद्देश्यों के लिए कर सकते हैं:"
                : "We may use your information for the following purposes:"}
            </p>
            <ul className="list-disc list-inside mt-2 font-pahadi">
              <li>
                {language === "hi"
                  ? "हमारी वेबसाइट और सेवाओं को प्रदान और सुधारने के लिए।"
                  : "To provide and improve our website and services."}
              </li>
              <li>
                {language === "hi"
                  ? "आपके अनुरोधों और प्रश्नों का जवाब देने के लिए।"
                  : "To respond to your requests and inquiries."}
              </li>
              <li>
                {language === "hi"
                  ? "हमारी वेबसाइट के उपयोग का विश्लेषण करने और सुधार करने के लिए।"
                  : "To analyze and improve the use of our website."}
              </li>
              <li>
                {language === "hi"
                  ? "आपकी सहमति से, आपको हमारे न्यूज़लेटर और अन्य प्रचार सामग्री भेजने के लिए।"
                  : "With your consent, to send you our newsletter and other promotional materials."}
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mt-8">
              {language === "hi" ? "5. आपकी जानकारी का साझाकरण" : "5. Sharing Your Information"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "हम आपकी व्यक्तिगत जानकारी को निम्नलिखित तीसरे पक्षों के साथ साझा कर सकते हैं:"
                : "We may share your personal information with the following third parties:"}
            </p>
            <ul className="list-disc list-inside mt-2 font-pahadi">
              <li>
                {language === "hi"
                  ? "सेवा प्रदाता: हमारी ओर से सेवाएं प्रदान करने वाले तृतीय-पक्ष सेवा प्रदाता।"
                  : "Service providers: third-party service providers who provide services on our behalf."}
              </li>
              <li>
                {language === "hi"
                  ? "कानूनी आवश्यकताएँ: कानूनी प्रक्रिया का पालन करने के लिए, हमारे अधिकारों की रक्षा के लिए, या कानूनी आवश्यकताओं के अनुसार।"
                  : "Legal requirements: to comply with legal process, to protect our rights, or as required by law."}
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mt-8">
              {language === "hi" ? "6. आपके अधिकार" : "6. Your Rights"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "आपके पास अपनी व्यक्तिगत जानकारी के संबंध में निम्नलिखित अधिकार हैं:"
                : "You have the following rights regarding your personal information:"}
            </p>
            <ul className="list-disc list-inside mt-2 font-pahadi">
              <li>
                {language === "hi"
                  ? "अपनी व्यक्तिगत जानकारी तक पहुंचने और उसकी एक प्रति प्राप्त करने का अधिकार।"
                  : "The right to access and receive a copy of your personal information."}
              </li>
              <li>
                {language === "hi"
                  ? "अपनी व्यक्तिगत जानकारी को सही करने या अपडेट करने का अधिकार।"
                  : "The right to correct or update your personal information."}
              </li>
              <li>
                {language === "hi"
                  ? "अपनी व्यक्तिगत जानकारी को हटाने का अधिकार।"
                  : "The right to delete your personal information."}
              </li>
              <li>
                {language === "hi"
                  ? "अपनी व्यक्तिगत जानकारी के प्रसंस्करण पर प्रतिबंध लगाने का अधिकार।"
                  : "The right to restrict the processing of your personal information."}
              </li>
              <li>
                {language === "hi"
                  ? "अपनी व्यक्तिगत जानकारी की पोर्टेबिलिटी का अधिकार।"
                  : "The right to data portability of your personal information."}
              </li>
              <li>
                {language === "hi"
                  ? "अपनी व्यक्तिगत जानकारी के प्रसंस्करण पर आपत्ति करने का अधिकार।"
                  : "The right to object to the processing of your personal information."}
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mt-8">
              {language === "hi" ? "7. डेटा सुरक्षा" : "7. Data Security"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "हम आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए उचित तकनीकी और संगठनात्मक उपाय करते हैं। हालांकि, इंटरनेट पर कोई भी प्रसारण या इलेक्ट्रॉनिक स्टोरेज 100% सुरक्षित नहीं है।"
                : "We implement appropriate technical and organizational measures to protect your personal information. However, no transmission over the internet or electronic storage is 100% secure."}
            </p>

            <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mt-8">
              {language === "hi" ? "8. बच्चों की गोपनीयता" : "8. Children's Privacy"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "हमारी वेबसाइट 13 वर्ष से कम उम्र के बच्चों के लिए नहीं है। हम जानबूझकर 13 वर्ष से कम उम्र के बच्चों से व्यक्तिगत जानकारी एकत्र नहीं करते हैं।"
                : "Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13."}
            </p>

            <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mt-8">
              {language === "hi" ? "9. परिवर्तन" : "9. Changes"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "हम इस गोपनीयता नीति को किसी भी समय बदल सकते हैं। परिवर्तन इस पृष्ठ पर पोस्ट किए जाएंगे।"
                : "We may change this Privacy Policy at any time. Changes will be posted on this page."}
            </p>

            <h2 className="text-2xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mt-8">
              {language === "hi" ? "10. संपर्क जानकारी" : "10. Contact Information"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "अगर आपके पास इस गोपनीयता नीति के बारे में कोई प्रश्न है, तो कृपया हमसे संपर्क करें:"
                : "If you have any questions about this Privacy Policy, please contact us:"}
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
              {language === "hi" ? "11. अंतिम अपडेट" : "11. Last Updated"}
            </h2>
            <p className="font-pahadi">
              {language === "hi"
                ? "यह गोपनीयता नीति अंतिम बार 15 जुलाई, 2024 को अपडेट की गई।"
                : "This Privacy Policy was last updated on July 15, 2024."}
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
