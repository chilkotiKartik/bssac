"use client"
import Image from "next/image"
import { Calendar, Users, Award, Target } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { useLanguage } from "@/lib/language-context"

interface SuccessStoryModalProps {
  story: {
    titleHi: string
    titleEn: string
    img: string
    descHi: string
    descEn: string
    detailsHi?: string
    detailsEn?: string
    impact?: {
      participants: number
      duration: string
      achievements: string[]
    }
  }
  isOpen: boolean
  onClose: () => void
}

export function SuccessStoryModal({ story, isOpen, onClose }: SuccessStoryModalProps) {
  const { language } = useLanguage()

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-pahadi text-uttarakhand-mountain dark:text-uttarakhand-meadow">
            {language === "hi" ? story.titleHi : story.titleEn}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <AnimatedSection>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src={story.img || "/placeholder.svg"}
                alt={language === "hi" ? story.titleHi : story.titleEn}
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {story.impact && (
                <>
                  <div className="flex items-center gap-2 p-4 bg-uttarakhand-sunset/10 rounded-lg">
                    <Users className="h-5 w-5 text-uttarakhand-sunset" />
                    <div>
                      <p className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "प्रतिभागी" : "Participants"}
                      </p>
                      <p className="font-semibold font-pahadi">{story.impact.participants}+</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-4 bg-uttarakhand-pine/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-uttarakhand-pine" />
                    <div>
                      <p className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "अवधि" : "Duration"}
                      </p>
                      <p className="font-semibold font-pahadi">{story.impact.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-4 bg-uttarakhand-meadow/10 rounded-lg">
                    <Award className="h-5 w-5 text-uttarakhand-meadow" />
                    <div>
                      <p className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "प्रभाव" : "Impact"}
                      </p>
                      <p className="font-semibold font-pahadi">{language === "hi" ? "सकारात्मक" : "Positive"}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose max-w-none">
              <p className="text-muted-foreground font-pahadi leading-relaxed">
                {language === "hi" ? story.descHi : story.descEn}
              </p>

              {story.detailsHi && story.detailsEn && (
                <div className="mt-6 p-6 bg-gradient-to-r from-uttarakhand-sunset/5 to-uttarakhand-pine/5 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 font-pahadi text-uttarakhand-mountain dark:text-uttarakhand-meadow flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    {language === "hi" ? "विस्तृत विवरण" : "Detailed Description"}
                  </h3>
                  <p className="text-muted-foreground font-pahadi leading-relaxed">
                    {language === "hi" ? story.detailsHi : story.detailsEn}
                  </p>
                </div>
              )}

              {story.impact?.achievements && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4 font-pahadi text-uttarakhand-mountain dark:text-uttarakhand-meadow">
                    {language === "hi" ? "मुख्य उपलब्धियाँ" : "Key Achievements"}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {story.impact.achievements.map((achievement, index) => (
                      <Badge key={index} variant="secondary" className="font-pahadi">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </DialogContent>
    </Dialog>
  )
}
