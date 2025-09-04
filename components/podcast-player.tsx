"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useLanguage } from "@/lib/language-context"
import { WoodenFrame } from "@/components/decorative-elements"

interface PodcastEpisode {
  id: string
  title: string
  titleHi: string
  description: string
  descriptionHi: string
  duration: string
  date: string
  image: string
  audioSrc: string
  host: string
  hostHi: string
  guestName?: string
  guestNameHi?: string
}

const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "ep1",
    title: "The Lost Dialects of Kumaon",
    titleHi: "कुमाऊँ की लुप्त होती बोलियाँ",
    description: "Exploring the endangered dialects of Kumaon region with linguist Dr. Shekhar Pathak",
    descriptionHi: "भाषाविद् डॉ. शेखर पाठक के साथ कुमाऊँ क्षेत्र की लुप्त होती बोलियों की खोज",
    duration: "32:45",
    date: "May 15, 2024",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    audioSrc: "/placeholder-audio.mp3",
    host: "Ananya Joshi",
    hostHi: "अनन्या जोशी",
    guestName: "Dr. Shekhar Pathak",
    guestNameHi: "डॉ. शेखर पाठक",
  },
  {
    id: "ep2",
    title: "Garhwali Folk Tales and Their Origins",
    titleHi: "गढ़वाली लोक कथाएँ और उनकी उत्पत्ति",
    description: "Diving into the rich storytelling tradition of Garhwal with folklorist Rekha Rana",
    descriptionHi: "लोक कथाकार रेखा राणा के साथ गढ़वाल की समृद्ध कहानी परंपरा में गोता लगाना",
    duration: "45:12",
    date: "May 22, 2024",
    image:
      "https://images.unsplash.com/photo-1544461772-722f499fa5a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    audioSrc: "/placeholder-audio.mp3",
    host: "Vikram Bisht",
    hostHi: "विक्रम बिष्ट",
    guestName: "Rekha Rana",
    guestNameHi: "रेखा राणा",
  },
  {
    id: "ep3",
    title: "The Music of the Mountains",
    titleHi: "पहाड़ों का संगीत",
    description: "Traditional instruments and melodies of Uttarakhand with musician Narendra Singh Negi",
    descriptionHi: "संगीतकार नरेंद्र सिंह नेगी के साथ उत्तराखंड के पारंपरिक वाद्य यंत्र और धुनें",
    duration: "38:29",
    date: "May 29, 2024",
    image:
      "https://images.unsplash.com/photo-1465919292275-c60ba49da6ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    audioSrc: "/placeholder-audio.mp3",
    host: "Ananya Joshi",
    hostHi: "अनन्या जोशी",
    guestName: "Narendra Singh Negi",
    guestNameHi: "नरेंद्र सिंह नेगी",
  },
  {
    id: "ep4",
    title: "Preserving Pahadi Languages in the Digital Age",
    titleHi: "डिजिटल युग में पहाड़ी भाषाओं का संरक्षण",
    description: "How technology is helping preserve and promote Uttarakhand's languages",
    descriptionHi: "कैसे तकनीक उत्तराखंड की भाषाओं के संरक्षण और प्रचार में मदद कर रही है",
    duration: "41:05",
    date: "June 5, 2024",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80",
    audioSrc: "/placeholder-audio.mp3",
    host: "Vikram Bisht",
    hostHi: "विक्रम बिष्ट",
  },
]

export function PodcastPlayer() {
  const { language } = useLanguage()
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const currentEpisode = podcastEpisodes[currentEpisodeIndex]

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error)
          setIsPlaying(false)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, currentEpisodeIndex])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
      setDuration(audioRef.current.duration || 0)
    }
  }

  const handleSliderChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0]
      setCurrentTime(value[0])
    }
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)
    if (newVolume === 0) {
      setIsMuted(true)
    } else {
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handlePrevious = () => {
    setCurrentEpisodeIndex((prev) => (prev === 0 ? podcastEpisodes.length - 1 : prev - 1))
    setCurrentTime(0)
    setIsPlaying(true)
  }

  const handleNext = () => {
    setCurrentEpisodeIndex((prev) => (prev === podcastEpisodes.length - 1 ? 0 : prev + 1))
    setCurrentTime(0)
    setIsPlaying(true)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <WoodenFrame className="p-6 rounded-lg">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <div className="relative aspect-square overflow-hidden rounded-lg border-4 border-white/30">
              <Image
                src={currentEpisode.image || "/placeholder.svg"}
                alt={language === "hi" ? currentEpisode.titleHi : currentEpisode.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 text-white">
            <h3 className="text-2xl font-bold font-pahadi mb-2">
              {language === "hi" ? currentEpisode.titleHi : currentEpisode.title}
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white/80 text-sm font-pahadi">
                {language === "hi" ? "होस्ट: " : "Host: "}
                {language === "hi" ? currentEpisode.hostHi : currentEpisode.host}
              </span>
              {currentEpisode.guestName && (
                <span className="text-white/80 text-sm font-pahadi">
                  • {language === "hi" ? "अतिथि: " : "Guest: "}
                  {language === "hi" ? currentEpisode.guestNameHi : currentEpisode.guestName}
                </span>
              )}
            </div>
            <p className="text-white/90 mb-4 font-pahadi">
              {language === "hi" ? currentEpisode.descriptionHi : currentEpisode.description}
            </p>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-white/80 text-sm font-pahadi">{currentEpisode.date}</span>
              <span className="text-white/80 text-sm font-pahadi">• {currentEpisode.duration}</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-white/80 text-xs font-pahadi">{formatTime(currentTime)}</span>
                <Slider
                  value={[currentTime]}
                  max={duration || 100}
                  step={1}
                  onValueChange={handleSliderChange}
                  className="flex-1"
                />
                <span className="text-white/80 text-xs font-pahadi">{formatTime(duration)}</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={toggleMute} className="text-white hover:bg-white/10">
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </Button>
                  <Slider
                    value={[isMuted ? 0 : volume]}
                    max={1}
                    step={0.01}
                    onValueChange={handleVolumeChange}
                    className="w-24"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={handlePrevious} className="text-white hover:bg-white/10">
                    <SkipBack className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handlePlayPause}
                    className="h-12 w-12 rounded-full bg-white/20 text-white hover:bg-white/30"
                  >
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                  </Button>
                  <Button variant="ghost" size="icon" onClick={handleNext} className="text-white hover:bg-white/10">
                    <SkipForward className="h-5 w-5" />
                  </Button>
                </div>
                <div className="w-[88px]"></div> {/* Spacer to balance the layout */}
              </div>
            </div>
          </div>
        </div>
      </WoodenFrame>

      <audio
        ref={audioRef}
        src={currentEpisode.audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={handleNext}
        className="hidden"
      />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {podcastEpisodes.map((episode, index) => (
          <div
            key={episode.id}
            className={`p-4 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg ${
              index === currentEpisodeIndex
                ? "bg-uttarakhand-wood/20 border-2 border-uttarakhand-wood/40"
                : "bg-white/5 hover:bg-white/10 border border-white/10"
            }`}
            onClick={() => {
              setCurrentEpisodeIndex(index)
              setCurrentTime(0)
              setIsPlaying(true)
            }}
          >
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src={episode.image || "/placeholder.svg"}
                alt={language === "hi" ? episode.titleHi : episode.title}
                fill
                className="object-cover"
              />
              {index === currentEpisodeIndex && isPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="animate-pulse h-3 w-3 bg-white rounded-full mx-1"></div>
                  <div
                    className="animate-pulse h-4 w-3 bg-white rounded-full mx-1"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="animate-pulse h-5 w-3 bg-white rounded-full mx-1"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                  <div
                    className="animate-pulse h-4 w-3 bg-white rounded-full mx-1"
                    style={{ animationDelay: "0.6s" }}
                  ></div>
                  <div
                    className="animate-pulse h-3 w-3 bg-white rounded-full mx-1"
                    style={{ animationDelay: "0.8s" }}
                  ></div>
                </div>
              )}
            </div>
            <h4 className="text-sm font-bold text-white mb-1 line-clamp-1 font-pahadi">
              {language === "hi" ? episode.titleHi : episode.title}
            </h4>
            <div className="flex justify-between items-center text-white/70 text-xs">
              <span>{episode.duration}</span>
              <span>{episode.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
