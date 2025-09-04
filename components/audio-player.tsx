"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, Play, Pause, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useTheme } from "@/lib/theme-context"

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { theme } = useTheme()
  const [audioInitialized, setAudioInitialized] = useState(false)

  // Traditional Uttarakhand folk music tracks
  const tracks = [
    {
      name: "Bedu Pako",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Placeholder URL
      artist: "Traditional",
    },
    {
      name: "Kumaoni Folk",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", // Placeholder URL
      artist: "Traditional",
    },
    {
      name: "Garhwali Dhol",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", // Placeholder URL
      artist: "Traditional",
    },
  ]

  // Initialize audio on component mount
  useEffect(() => {
    if (!audioInitialized && tracks[currentTrack]?.url) {
      const audio = new Audio()
      audio.src = tracks[currentTrack].url
      audio.volume = volume
      audio.loop = false
      audioRef.current = audio

      // Add ended event listener to play next track
      audio.addEventListener("ended", playNextTrack)

      setAudioInitialized(true)
    }

    return () => {
      // Clean up audio on unmount
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", playNextTrack)
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  // Update audio when track changes
  useEffect(() => {
    if (audioInitialized && tracks[currentTrack]?.url) {
      // Clean up previous audio
      if (audioRef.current) {
        const wasPlaying = !audioRef.current.paused
        audioRef.current.removeEventListener("ended", playNextTrack)
        audioRef.current.pause()

        // Create new audio for the current track
        const audio = new Audio()
        audio.src = tracks[currentTrack].url
        audio.volume = isMuted ? 0 : volume
        audio.loop = false
        audio.addEventListener("ended", playNextTrack)
        audioRef.current = audio

        // Resume playing if it was playing before
        if (wasPlaying) {
          audio
            .play()
            .then(() => setIsPlaying(true))
            .catch((error) => {
              console.error("Error playing audio:", error)
              setIsPlaying(false)
            })
        }
      }
    }
  }, [currentTrack, audioInitialized])

  // Update volume when it changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const playNextTrack = () => {
    setCurrentTrack((prev) => (prev === tracks.length - 1 ? 0 : prev + 1))
  }

  const togglePlay = () => {
    if (!audioRef.current || !audioInitialized) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.error("Error playing audio:", error)
          setIsPlaying(false)
        })
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (audioRef.current) {
      audioRef.current.volume = !isMuted ? 0 : volume
    }
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)
    setIsMuted(false)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full ${
        showControls
          ? "bg-white/90 dark:bg-gray-800/90 shadow-lg p-3 pr-4"
          : "bg-uttarakhand-mountain/90 dark:bg-uttarakhand-mountain/80 p-3"
      } transition-all duration-300`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {showControls && (
        <>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={toggleMute}>
              {isMuted ? (
                <VolumeX className="h-4 w-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
              ) : (
                <Volume2 className="h-4 w-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
              )}
            </Button>
            <div className="w-20">
              <Slider
                value={[isMuted ? 0 : volume]}
                min={0}
                max={1}
                step={0.01}
                onValueChange={handleVolumeChange}
                className="h-1.5"
              />
            </div>
          </div>
          <div className="mx-2 h-6 w-px bg-gray-300 dark:bg-gray-600" />
          <div className="flex items-center gap-2">
            <div className="text-xs text-muted-foreground max-w-[120px] truncate">
              {tracks[currentTrack]?.name} - {tracks[currentTrack]?.artist}
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full" onClick={playNextTrack}>
              <SkipForward className="h-3 w-3 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
            </Button>
          </div>
          <div className="mx-2 h-6 w-px bg-gray-300 dark:bg-gray-600" />
        </>
      )}
      <Button
        variant={showControls ? "outline" : "ghost"}
        size="icon"
        className={`h-10 w-10 rounded-full ${
          isPlaying ? "bg-uttarakhand-mountain text-white" : "text-uttarakhand-mountain dark:text-white"
        } ${!showControls && "text-white"} relative`}
        onClick={togglePlay}
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        <span className="sr-only">{isPlaying ? "Pause Uttarakhand Music" : "Play Uttarakhand Music"}</span>
      </Button>
      {!showControls && isPlaying && (
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-uttarakhand-flower animate-pulse"></span>
      )}
    </div>
  )
}
