"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function FoundationTribute() {
  return (
    <div className="relative rounded-xl overflow-hidden">
      {/* Background image tint */}
      <div className="absolute inset-0 z-0">
        <Image src="/serene-mountain-background.jpg" alt="" fill className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-uttarakhand-mountain/80 to-uttarakhand-pine/80" />
      </div>

      <Card className="relative z-10 border-0 bg-transparent shadow-xl">
        <CardContent className="p-6 md:p-8">
          <div className="grid gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden ring-2 ring-white/50">
                <Image src="/images/foundation-logo.jpg" alt="Foundation emblem" fill className="object-cover" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white font-pahadi">
                आज की श्रद्धांजलि • Tribute of the Day
              </h3>
            </div>

            <div className="relative w-full h-48 md:h-56 rounded-lg overflow-hidden border border-white/20">
              <Image
                src="/images/whatsapp-2025-09-02-4364c16d.jpg"
                alt="Foundation tribute portrait"
                fill
                className="object-cover"
                priority
              />
              {/* small overlay badge with certificate */}
              <div className="absolute bottom-2 right-2 h-14 w-20 md:h-16 md:w-24 rounded-md overflow-hidden ring-2 ring-white/50">
                <Image
                  src="/images/shourya-samman-patra.jpg"
                  alt="Shaurya Samman Patra"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white/15 backdrop-blur-md p-4 rounded-lg border border-white/25">
              <h4 className="text-white font-semibold mb-2 font-pahadi">भारत-पाक युद्ध • 1965</h4>
              <div className="text-white/90 text-sm leading-6 max-h-48 md:max-h-56 overflow-y-auto font-pahadi">
                414 0639 L Nk शिरोमणि चिल कोटी भारत पाक 1965 युद्ध में एसपी कंपनी के Signal Platoon के सीनियर NCO बतौर B1 में,
                पल्टन और Brigade Headquarter के बीच युद्ध के हालातों का आदान प्रदान करने हेतु उनके अनुभव के आधार पर नियुक्त किए गए थे ।
                7 सितंबर 1965 की शाम लगभग 7.30 बजे दुश्मन की भारी मात्रा में तोपखाने, मोटार और टैंकों ने इच्छुगिल कैनाल के ऊपर अचानक से
                जबर्दस्त फायर किया, इस पूरे बंद क्षेत्र में संचार स्थापित करने की जिम्मेदारी इन्हीं पर थी। तथा संचार व्यवस्था बाधित हो जाने के
                बाद भी स्थिति की गंभीरता को समझते हुए उन्होंने अपने अधीनस्थ सभी प्लाटूनों को सचेत किया , लड़ाई के लिए तैयार करवाया। लेकिन
                इसी बीच दुश्मन के तोपखाने का एक गोला इनके शरीर के ऊपर आ गिरा और वह उसी स्थान पर मातृभूमि की रक्षा करते हुए मंज क्षेत्र
                (अमृतसर से 18 किलोमीटर लाहौर की ओर) में यह बहादुर सपूत अपने कर्तव्य का निर्वहन करते हुए शहीद हो गए। अदम्य साहस,
                अनुकरणीय बहादुरी का बेमिसाल परिचय देते हुए, उन्होंने अपने कर्तव्यों का निर्वहन करते हुए अपने प्राणों का उत्सर्ग किया।
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
