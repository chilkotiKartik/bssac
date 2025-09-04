"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Check, X, HelpCircle, Trophy, Shuffle } from "lucide-react"
import { AipanBorder } from "@/components/decorative-elements"

interface WordPuzzleProps {
  districtId?: number
}

export function CulturalGames({ districtId }: WordPuzzleProps) {
  const { language } = useLanguage()
  const [activeGame, setActiveGame] = useState("word-puzzle")

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <AipanBorder className="inline-block mb-4">
          <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
            {language === "hi" ? "सांस्कृतिक खेल" : "Cultural Games"}
          </h2>
        </AipanBorder>
        <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
          {language === "hi"
            ? "इन इंटरैक्टिव गेम्स के माध्यम से उत्तराखंड की संस्कृति और परंपराओं के बारे में जानें"
            : "Learn about Uttarakhand's culture and traditions through these interactive games"}
        </p>
      </div>

      <Tabs defaultValue="word-puzzle" onValueChange={setActiveGame} className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="word-puzzle" className="font-pahadi">
            {language === "hi" ? "शब्द पहेली" : "Word Puzzle"}
          </TabsTrigger>
          <TabsTrigger value="quiz-battle" className="font-pahadi">
            {language === "hi" ? "क्विज़ बैटल" : "Quiz Battle"}
          </TabsTrigger>
          <TabsTrigger value="guess-place" className="font-pahadi">
            {language === "hi" ? "स्थान अनुमान" : "Guess Place"}
          </TabsTrigger>
          <TabsTrigger value="dress-up" className="font-pahadi">
            {language === "hi" ? "पारंपरिक वेशभूषा" : "Traditional Dress"}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="word-puzzle">
          <WordPuzzleGame districtId={districtId} />
        </TabsContent>

        <TabsContent value="quiz-battle">
          <QuizBattleGame districtId={districtId} />
        </TabsContent>

        <TabsContent value="guess-place">
          <GuessPlaceGame districtId={districtId} />
        </TabsContent>

        <TabsContent value="dress-up">
          <TraditionalDressGame districtId={districtId} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Word Puzzle Game
function WordPuzzleGame({ districtId }: WordPuzzleProps) {
  const { language } = useLanguage()
  const [currentLevel, setCurrentLevel] = useState(0)
  const [userInput, setUserInput] = useState("")
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null)
  const [score, setScore] = useState(0)
  const [showHint, setShowHint] = useState(false)

  // Sample word puzzles (would be expanded with more words and proper translations)
  const wordPuzzles = [
    {
      word: { en: "BURANSH", hi: "बुरांश" },
      clue: {
        en: "Uttarakhand's state flower, a red rhododendron",
        hi: "उत्तराखंड का राज्य पुष्प, एक लाल रोडोडेंड्रन",
      },
      hint: {
        en: "It's used to make juice and has medicinal properties",
        hi: "इससे जूस बनाया जाता है और इसमें औषधीय गुण होते हैं",
      },
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      word: { en: "AIPAN", hi: "ऐपण" },
      clue: {
        en: "Traditional art form of Kumaon with white patterns on red background",
        hi: "कुमाऊँ की पारंपरिक कला जिसमें लाल पृष्ठभूमि पर सफेद पैटर्न होते हैं",
      },
      hint: {
        en: "It's drawn on floors and walls during festivals and ceremonies",
        hi: "त्योहारों और समारोहों के दौरान फर्श और दीवारों पर बनाया जाता है",
      },
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      word: { en: "CHHOLIYA", hi: "छोलिया" },
      clue: {
        en: "A traditional sword dance of Kumaon region",
        hi: "कुमाऊँ क्षेत्र का एक पारंपरिक तलवार नृत्य",
      },
      hint: {
        en: "Performed during weddings and other celebrations",
        hi: "शादियों और अन्य समारोहों के दौरान किया जाता है",
      },
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const currentPuzzle = wordPuzzles[currentLevel]
  const scrambledWord = scrambleWord(currentPuzzle.word[language === "hi" ? "hi" : "en"])

  function scrambleWord(word: string) {
    return word
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("")
  }

  function checkAnswer() {
    const isCorrect = userInput.toUpperCase() === currentPuzzle.word[language === "hi" ? "hi" : "en"].toUpperCase()
    setFeedback(isCorrect ? "correct" : "incorrect")

    if (isCorrect) {
      setScore(score + 10)
      setTimeout(() => {
        if (currentLevel < wordPuzzles.length - 1) {
          setCurrentLevel(currentLevel + 1)
          setUserInput("")
          setFeedback(null)
          setShowHint(false)
        } else {
          // Game completed
          alert(
            language === "hi" ? "बधाई हो! आपने सभी पहेलियां हल कर ली हैं!" : "Congratulations! You've solved all puzzles!",
          )
          // Reset game
          setCurrentLevel(0)
          setUserInput("")
          setFeedback(null)
          setShowHint(false)
        }
      }, 1500)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center font-pahadi">
          {language === "hi" ? "पहाड़ी शब्द पहेली" : "Pahadi Word Puzzle"}
        </CardTitle>
        <CardDescription className="text-center font-pahadi">
          {language === "hi"
            ? "अक्षरों को सही क्रम में रखें और उत्तराखंड के पारंपरिक शब्दों को खोजें"
            : "Rearrange the letters to discover traditional Uttarakhand words"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-xs h-40 mb-4 rounded-lg overflow-hidden">
            <Image
              src={currentPuzzle.image || "/placeholder.svg"}
              alt={currentPuzzle.word[language === "hi" ? "hi" : "en"]}
              fill
              className="object-cover"
            />
          </div>

          <div className="text-center mb-4">
            <p className="text-lg font-medium mb-2 font-pahadi">
              {currentPuzzle.clue[language === "hi" ? "hi" : "en"]}
            </p>
            <div className="flex justify-center gap-2 mb-4">
              {scrambledWord.split("").map((letter, index) => (
                <Badge
                  key={index}
                  className="text-lg py-1 px-3 bg-uttarakhand-mountain text-white dark:bg-uttarakhand-meadow dark:text-uttarakhand-pine font-pahadi"
                >
                  {letter}
                </Badge>
              ))}
            </div>
          </div>

          <div className="w-full max-w-xs space-y-4">
            <Input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={language === "hi" ? "अपना उत्तर यहां टाइप करें..." : "Type your answer here..."}
              className={`text-center font-pahadi ${
                feedback === "correct"
                  ? "border-green-500 focus-visible:ring-green-500"
                  : feedback === "incorrect"
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
              }`}
            />

            {feedback && (
              <div
                className={`flex items-center justify-center gap-2 ${
                  feedback === "correct" ? "text-green-500" : "text-red-500"
                }`}
              >
                {feedback === "correct" ? (
                  <>
                    <Check className="h-5 w-5" />
                    <span className="font-pahadi">{language === "hi" ? "सही उत्तर!" : "Correct answer!"}</span>
                  </>
                ) : (
                  <>
                    <X className="h-5 w-5" />
                    <span className="font-pahadi">{language === "hi" ? "फिर से कोशिश करें!" : "Try again!"}</span>
                  </>
                )}
              </div>
            )}

            {showHint && (
              <div className="bg-uttarakhand-mountain/10 dark:bg-uttarakhand-meadow/10 p-3 rounded-md">
                <p className="text-sm font-pahadi">
                  <span className="font-bold">{language === "hi" ? "संकेत:" : "Hint:"}</span>{" "}
                  {currentPuzzle.hint[language === "hi" ? "hi" : "en"]}
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => setShowHint(true)} disabled={showHint} className="font-pahadi">
          <HelpCircle className="h-4 w-4 mr-2" />
          {language === "hi" ? "संकेत दिखाएं" : "Show Hint"}
        </Button>

        <div className="flex items-center gap-2">
          <Badge variant="outline" className="font-pahadi">
            <Trophy className="h-4 w-4 mr-1" />
            {language === "hi" ? "स्कोर:" : "Score:"} {score}
          </Badge>
          <Button
            onClick={checkAnswer}
            className="font-pahadi bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 dark:bg-uttarakhand-meadow dark:text-uttarakhand-pine dark:hover:bg-uttarakhand-meadow/90"
          >
            <Check className="h-4 w-4 mr-2" />
            {language === "hi" ? "जाँचें" : "Check"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

// Quiz Battle Game
function QuizBattleGame({ districtId }: WordPuzzleProps) {
  const { language } = useLanguage()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)

  // Sample quiz questions (would be expanded with more questions and proper translations)
  const quizQuestions = [
    {
      question: {
        en: "What is the state flower of Uttarakhand?",
        hi: "उत्तराखंड का राज्य पुष्प क्या है?",
      },
      options: {
        en: ["Lotus", "Rhododendron (Buransh)", "Rose", "Sunflower"],
        hi: ["कमल", "बुरांश", "गुलाब", "सूरजमुखी"],
      },
      correctOption: 1,
      explanation: {
        en: "Rhododendron (locally known as Buransh) is the state flower of Uttarakhand. It has medicinal properties and is used to make juice.",
        hi: "बुरांश उत्तराखंड का राज्य पुष्प है। इसमें औषधीय गुण हैं और इससे जूस बनाया जाता है।",
      },
    },
    {
      question: {
        en: "Which of these is a famous folk dance of Uttarakhand?",
        hi: "इनमें से कौन उत्तराखंड का प्रसिद्ध लोक नृत्य है?",
      },
      options: {
        en: ["Kathak", "Bharatanatyam", "Chholiya", "Garba"],
        hi: ["कथक", "भरतनाट्यम", "छोलिया", "गरबा"],
      },
      correctOption: 2,
      explanation: {
        en: "Chholiya is a traditional sword dance of the Kumaon region, performed during weddings and other celebrations.",
        hi: "छोलिया कुमाऊँ क्षेत्र का एक पारंपरिक तलवार नृत्य है, जो शादियों और अन्य समारोहों के दौरान किया जाता है।",
      },
    },
    {
      question: {
        en: "What is 'Aipan' in Uttarakhand's culture?",
        hi: "उत्तराखंड की संस्कृति में 'ऐपण' क्या है?",
      },
      options: {
        en: ["A traditional dish", "A folk song", "A traditional art form", "A festival"],
        hi: ["एक पारंपरिक व्यंजन", "एक लोक गीत", "एक पारंपरिक कला रूप", "एक त्योहार"],
      },
      correctOption: 2,
      explanation: {
        en: "Aipan is a traditional art form of Kumaon with white patterns drawn on red background, used during festivals and ceremonies.",
        hi: "ऐपण कुमाऊँ की एक पारंपरिक कला है जिसमें लाल पृष्ठभूमि पर सफेद पैटर्न बनाए जाते हैं, जो त्योहारों और समारोहों के दौरान उपयोग की जाती है।",
      },
    },
  ]

  const currentQuiz = quizQuestions[currentQuestion]

  function handleOptionSelect(optionIndex: number) {
    setSelectedOption(optionIndex)
    setShowResult(true)

    if (optionIndex === currentQuiz.correctOption) {
      setScore(score + 10)
    }

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
        setShowResult(false)
      } else {
        setGameCompleted(true)
      }
    }, 2000)
  }

  function resetGame() {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setScore(0)
    setShowResult(false)
    setGameCompleted(false)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center font-pahadi">
          {language === "hi" ? "पहाड़ी क्विज़ बैटल" : "Pahadi Quiz Battle"}
        </CardTitle>
        <CardDescription className="text-center font-pahadi">
          {language === "hi"
            ? "उत्तराखंड के इतिहास, संस्कृति और परंपराओं के बारे में अपने ज्ञान का परीक्षण करें"
            : "Test your knowledge about Uttarakhand's history, culture, and traditions"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!gameCompleted ? (
          <div className="space-y-6">
            <div className="bg-uttarakhand-mountain/10 dark:bg-uttarakhand-meadow/10 p-4 rounded-lg">
              <p className="text-lg font-medium font-pahadi">{currentQuiz.question[language === "hi" ? "hi" : "en"]}</p>
            </div>

            <div className="space-y-3">
              {currentQuiz.options[language === "hi" ? "hi" : "en"].map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedOption === index
                      ? index === currentQuiz.correctOption
                        ? "default"
                        : "destructive"
                      : selectedOption !== null && index === currentQuiz.correctOption
                        ? "default"
                        : "outline"
                  }
                  className={`w-full justify-start text-left font-pahadi ${
                    selectedOption === index
                      ? index === currentQuiz.correctOption
                        ? "bg-green-500 hover:bg-green-500/90"
                        : "bg-red-500 hover:bg-red-500/90"
                      : selectedOption !== null && index === currentQuiz.correctOption
                        ? "bg-green-500 hover:bg-green-500/90"
                        : ""
                  }`}
                  onClick={() => selectedOption === null && handleOptionSelect(index)}
                  disabled={selectedOption !== null}
                >
                  <span className="mr-2">{String.fromCharCode(65 + index)}.</span> {option}
                  {showResult && index === currentQuiz.correctOption && <Check className="ml-auto h-5 w-5" />}
                  {showResult && selectedOption === index && index !== currentQuiz.correctOption && (
                    <X className="ml-auto h-5 w-5" />
                  )}
                </Button>
              ))}
            </div>

            {showResult && (
              <div className="bg-uttarakhand-mountain/10 dark:bg-uttarakhand-meadow/10 p-3 rounded-md">
                <p className="text-sm font-pahadi">
                  <span className="font-bold">{language === "hi" ? "व्याख्या:" : "Explanation:"}</span>{" "}
                  {currentQuiz.explanation[language === "hi" ? "hi" : "en"]}
                </p>
              </div>
            )}

            <div className="flex justify-between items-center">
              <Badge variant="outline" className="font-pahadi">
                <Trophy className="h-4 w-4 mr-1" />
                {language === "hi" ? "स्कोर:" : "Score:"} {score}
              </Badge>

              <Badge variant="outline" className="font-pahadi">
                {language === "hi" ? "प्रश्न:" : "Question:"} {currentQuestion + 1}/{quizQuestions.length}
              </Badge>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-6 py-8">
            <h3 className="text-2xl font-bold font-pahadi text-uttarakhand-mountain dark:text-uttarakhand-meadow">
              {language === "hi" ? "क्विज़ समाप्त!" : "Quiz Completed!"}
            </h3>

            <div className="bg-uttarakhand-mountain/10 dark:bg-uttarakhand-meadow/10 p-6 rounded-lg inline-block">
              <Trophy className="h-12 w-12 mx-auto mb-2 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
              <p className="text-xl font-bold font-pahadi">
                {language === "hi" ? "आपका स्कोर:" : "Your Score:"} {score}/{quizQuestions.length * 10}
              </p>
            </div>

            <Button
              onClick={resetGame}
              className="font-pahadi bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 dark:bg-uttarakhand-meadow dark:text-uttarakhand-pine dark:hover:bg-uttarakhand-meadow/90"
            >
              <Shuffle className="h-4 w-4 mr-2" />
              {language === "hi" ? "फिर से खेलें" : "Play Again"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Guess the Place Game
function GuessPlaceGame({ districtId }: WordPuzzleProps) {
  const { language } = useLanguage()
  const [currentPlace, setCurrentPlace] = useState(0)
  const [userGuess, setUserGuess] = useState("")
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null)
  const [score, setScore] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [gameCompleted, setGameCompleted] = useState(false)

  // Sample places (would be expanded with more places and proper translations)
  const places = [
    {
      name: { en: "Kedarnath", hi: "केदारनाथ" },
      image: "/placeholder.svg?height=300&width=400",
      hint: {
        en: "One of the Char Dham pilgrimage sites, located in Rudraprayag district",
        hi: "चार धाम तीर्थ स्थलों में से एक, रुद्रप्रयाग जिले में स्थित",
      },
      description: {
        en: "Kedarnath is a Hindu temple dedicated to Lord Shiva. It is located on the Garhwal Himalayan range near the Mandakini river, in the state of Uttarakhand, India.",
        hi: "केदारनाथ भगवान शिव को समर्पित एक हिंदू मंदिर है। यह भारत के उत्तराखंड राज्य में मंदाकिनी नदी के पास गढ़वाल हिमालय श्रृंखला पर स्थित है।",
      },
    },
    {
      name: { en: "Nainital", hi: "नैनीताल" },
      image: "/placeholder.svg?height=300&width=400",
      hint: {
        en: "Famous for its lake shaped like an eye",
        hi: "अपनी आंख के आकार की झील के लिए प्रसिद्ध",
      },
      description: {
        en: "Nainital is a popular hill station in the Indian state of Uttarakhand. It is named after the Naini Lake, and is surrounded by mountains on three sides.",
        hi: "नैनीताल भारतीय राज्य उत्तराखंड का एक लोकप्रिय हिल स्टेशन है। इसका नाम नैनी झील के नाम पर रखा गया है, और यह तीन तरफ से पहाड़ों से घिरा हुआ है।",
      },
    },
    {
      name: { en: "Auli", hi: "औली" },
      image: "/placeholder.svg?height=300&width=400",
      hint: {
        en: "Famous skiing destination in Chamoli district",
        hi: "चमोली जिले में प्रसिद्ध स्कीइंग स्थल",
      },
      description: {
        en: "Auli is a skiing destination in the Himalayan mountains of Uttarakhand. It's surrounded by coniferous and oak forests, with views of mountain peaks including Nanda Devi.",
        hi: "औली उत्तराखंड के हिमालय पर्वतों में एक स्कीइंग स्थल है। यह शंकुधारी और ओक के जंगलों से घिरा हुआ है, जहां से नंदा देवी सहित पर्वत शिखरों का दृश्य दिखाई देता है।",
      },
    },
  ]

  const currentPlaceData = places[currentPlace]

  function checkGuess() {
    const isCorrect = userGuess.toLowerCase() === currentPlaceData.name[language === "hi" ? "hi" : "en"].toLowerCase()
    setFeedback(isCorrect ? "correct" : "incorrect")
    setAttempts(attempts + 1)

    if (isCorrect) {
      setScore(score + Math.max(3 - attempts, 1) * 5) // More points for fewer attempts

      setTimeout(() => {
        if (currentPlace < places.length - 1) {
          setCurrentPlace(currentPlace + 1)
          setUserGuess("")
          setFeedback(null)
          setShowHint(false)
          setAttempts(0)
        } else {
          setGameCompleted(true)
        }
      }, 1500)
    }
  }

  function resetGame() {
    setCurrentPlace(0)
    setUserGuess("")
    setFeedback(null)
    setScore(0)
    setShowHint(false)
    setAttempts(0)
    setGameCompleted(false)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center font-pahadi">
          {language === "hi" ? "पहाड़ी स्थान अनुमान" : "Guess the Pahadi Place"}
        </CardTitle>
        <CardDescription className="text-center font-pahadi">
          {language === "hi"
            ? "तस्वीर देखें और उत्तराखंड के प्रसिद्ध स्थान का अनुमान लगाएं"
            : "Look at the image and guess the famous place in Uttarakhand"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!gameCompleted ? (
          <div className="space-y-6">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image
                src={currentPlaceData.image || "/placeholder.svg"}
                alt="Mystery location"
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full space-y-4">
              <Input
                type="text"
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                placeholder={language === "hi" ? "स्थान का नाम टाइप करें..." : "Type the name of the place..."}
                className={`text-center font-pahadi ${
                  feedback === "correct"
                    ? "border-green-500 focus-visible:ring-green-500"
                    : feedback === "incorrect"
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                }`}
              />

              {feedback && (
                <div
                  className={`flex items-center justify-center gap-2 ${
                    feedback === "correct" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {feedback === "correct" ? (
                    <>
                      <Check className="h-5 w-5" />
                      <span className="font-pahadi">{language === "hi" ? "सही उत्तर!" : "Correct answer!"}</span>
                    </>
                  ) : (
                    <>
                      <X className="h-5 w-5" />
                      <span className="font-pahadi">{language === "hi" ? "फिर से कोशिश करें!" : "Try again!"}</span>
                    </>
                  )}
                </div>
              )}

              {showHint && (
                <div className="bg-uttarakhand-mountain/10 dark:bg-uttarakhand-meadow/10 p-3 rounded-md">
                  <p className="text-sm font-pahadi">
                    <span className="font-bold">{language === "hi" ? "संकेत:" : "Hint:"}</span>{" "}
                    {currentPlaceData.hint[language === "hi" ? "hi" : "en"]}
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center space-y-6 py-8">
            <h3 className="text-2xl font-bold font-pahadi text-uttarakhand-mountain dark:text-uttarakhand-meadow">
              {language === "hi" ? "खेल समाप्त!" : "Game Completed!"}
            </h3>

            <div className="bg-uttarakhand-mountain/10 dark:bg-uttarakhand-meadow/10 p-6 rounded-lg inline-block">
              <Trophy className="h-12 w-12 mx-auto mb-2 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
              <p className="text-xl font-bold font-pahadi">
                {language === "hi" ? "आपका स्कोर:" : "Your Score:"} {score}
              </p>
            </div>

            <Button
              onClick={resetGame}
              className="font-pahadi bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 dark:bg-uttarakhand-meadow dark:text-uttarakhand-pine dark:hover:bg-uttarakhand-meadow/90"
            >
              <Shuffle className="h-4 w-4 mr-2" />
              {language === "hi" ? "फिर से खेलें" : "Play Again"}
            </Button>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setShowHint(true)}
          disabled={showHint || gameCompleted}
          className="font-pahadi"
        >
          <HelpCircle className="h-4 w-4 mr-2" />
          {language === "hi" ? "संकेत दिखाएं" : "Show Hint"}
        </Button>

        <div className="flex items-center gap-2">
          <Badge variant="outline" className="font-pahadi">
            <Trophy className="h-4 w-4 mr-1" />
            {language === "hi" ? "स्कोर:" : "Score:"} {score}
          </Badge>
          {!gameCompleted && (
            <Button
              onClick={checkGuess}
              className="font-pahadi bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 dark:bg-uttarakhand-meadow dark:text-uttarakhand-pine dark:hover:bg-uttarakhand-meadow/90"
            >
              <Check className="h-4 w-4 mr-2" />
              {language === "hi" ? "जाँचें" : "Check"}
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

// Traditional Dress-up Game
function TraditionalDressGame({ districtId }: WordPuzzleProps) {
  const { language } = useLanguage()
  const [selectedOutfit, setSelectedOutfit] = useState<number | null>(null)
  const [selectedAccessories, setSelectedAccessories] = useState<number[]>([])
  const [characterGender, setCharacterGender] = useState<"male" | "female">("female")

  // Sample traditional outfits and accessories
  const outfits = {
    female: [
      { id: 1, name: { en: "Garhwali Pichora", hi: "गढ़वाली पिछोड़ा" }, image: "/placeholder.svg?height=200&width=150" },
      { id: 2, name: { en: "Kumaoni Rangwali", hi: "कुमाऊंनी रंगवाली" }, image: "/placeholder.svg?height=200&width=150" },
      { id: 3, name: { en: "Jaunsari Ghagra", hi: "जौनसारी घाघरा" }, image: "/placeholder.svg?height=200&width=150" },
    ],
    male: [
      { id: 1, name: { en: "Garhwali Choliya", hi: "गढ़वाली चोलिया" }, image: "/placeholder.svg?height=200&width=150" },
      {
        id: 2,
        name: { en: "Kumaoni Dhoti-Kurta", hi: "कुमाऊंनी धोती-कुर्ता" },
        image: "/placeholder.svg?height=200&width=150",
      },
      { id: 3, name: { en: "Jaunsari Attire", hi: "जौनसारी वेशभूषा" }, image: "/placeholder.svg?height=200&width=150" },
    ],
  }

  const accessories = {
    female: [
      { id: 1, name: { en: "Nath (Nose Ring)", hi: "नथ" }, image: "/placeholder.svg?height=100&width=100" },
      { id: 2, name: { en: "Hansuli (Necklace)", hi: "हंसुली" }, image: "/placeholder.svg?height=100&width=100" },
      { id: 3, name: { en: "Payal (Anklet)", hi: "पायल" }, image: "/placeholder.svg?height=100&width=100" },
      { id: 4, name: { en: "Bichhua (Toe Ring)", hi: "बिछुआ" }, image: "/placeholder.svg?height=100&width=100" },
    ],
    male: [
      { id: 1, name: { en: "Topi (Cap)", hi: "टोपी" }, image: "/placeholder.svg?height=100&width=100" },
      { id: 2, name: { en: "Kamarbandh (Waistband)", hi: "कमरबंध" }, image: "/placeholder.svg?height=100&width=100" },
      { id: 3, name: { en: "Khukri (Knife)", hi: "खुकरी" }, image: "/placeholder.svg?height=100&width=100" },
      { id: 4, name: { en: "Mala (Necklace)", hi: "माला" }, image: "/placeholder.svg?height=100&width=100" },
    ],
  }

  function toggleAccessory(id: number) {
    if (selectedAccessories.includes(id)) {
      setSelectedAccessories(selectedAccessories.filter((accId) => accId !== id))
    } else {
      setSelectedAccessories([...selectedAccessories, id])
    }
  }

  function resetOutfit() {
    setSelectedOutfit(null)
    setSelectedAccessories([])
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center font-pahadi">
          {language === "hi" ? "पारंपरिक वेशभूषा" : "Traditional Outfit"}
        </CardTitle>
        <CardDescription className="text-center font-pahadi">
          {language === "hi"
            ? "अपने पात्र को उत्तराखंड की पारंपरिक वेशभूषा में सजाएं"
            : "Dress your character in traditional Uttarakhand attire"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Character Display */}
          <div className="bg-uttarakhand-mountain/10 dark:bg-uttarakhand-meadow/10 p-4 rounded-lg flex flex-col items-center">
            <h3 className="text-lg font-medium mb-4 font-pahadi">
              {language === "hi" ? "आपका पात्र" : "Your Character"}
            </h3>

            <div className="relative w-40 h-60 bg-white dark:bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              {/* Character base */}
              <div className="w-24 h-48 bg-gray-200 dark:bg-gray-700 rounded-full relative">
                {/* Head */}
                <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>

                {/* Selected outfit overlay */}
                {selectedOutfit && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={outfits[characterGender].find((o) => o.id === selectedOutfit)?.image || ""}
                      alt="Outfit"
                      width={100}
                      height={150}
                      className="object-contain"
                    />
                  </div>
                )}

                {/* Selected accessories overlay */}
                {selectedAccessories.map((accId) => (
                  <div key={accId} className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={accessories[characterGender].find((a) => a.id === accId)?.image || ""}
                      alt="Accessory"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <Button
                variant={characterGender === "female" ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setCharacterGender("female")
                  resetOutfit()
                }}
                className="font-pahadi"
              >
                {language === "hi" ? "महिला" : "Female"}
              </Button>
              <Button
                variant={characterGender === "male" ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setCharacterGender("male")
                  resetOutfit()
                }}
                className="font-pahadi"
              >
                {language === "hi" ? "पुरुष" : "Male"}
              </Button>
            </div>

            <Button variant="outline" size="sm" onClick={resetOutfit} className="font-pahadi">
              {language === "hi" ? "रीसेट करें" : "Reset"}
            </Button>
          </div>

          {/* Outfits */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium font-pahadi">
              {language === "hi" ? "पारंपरिक पोशाक" : "Traditional Outfits"}
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {outfits[characterGender].map((outfit) => (
                <Button
                  key={outfit.id}
                  variant={selectedOutfit === outfit.id ? "default" : "outline"}
                  className={`flex items-center justify-start gap-3 h-auto py-2 font-pahadi ${
                    selectedOutfit === outfit.id
                      ? "bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 dark:bg-uttarakhand-meadow dark:text-uttarakhand-pine dark:hover:bg-uttarakhand-meadow/90"
                      : ""
                  }`}
                  onClick={() => setSelectedOutfit(outfit.id)}
                >
                  <div className="w-12 h-12 relative rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={outfit.image || "/placeholder.svg"}
                      alt={outfit.name[language === "hi" ? "hi" : "en"]}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>{outfit.name[language === "hi" ? "hi" : "en"]}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Accessories */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium font-pahadi">
              {language === "hi" ? "आभूषण और सहायक उपकरण" : "Accessories"}
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {accessories[characterGender].map((accessory) => (
                <Button
                  key={accessory.id}
                  variant={selectedAccessories.includes(accessory.id) ? "default" : "outline"}
                  className={`flex flex-col items-center justify-center gap-2 h-auto py-2 font-pahadi ${
                    selectedAccessories.includes(accessory.id)
                      ? "bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 dark:bg-uttarakhand-meadow dark:text-uttarakhand-pine dark:hover:bg-uttarakhand-meadow/90"
                      : ""
                  }`}
                  onClick={() => toggleAccessory(accessory.id)}
                >
                  <div className="w-10 h-10 relative rounded overflow-hidden">
                    <Image
                      src={accessory.image || "/placeholder.svg"}
                      alt={accessory.name[language === "hi" ? "hi" : "en"]}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs text-center">{accessory.name[language === "hi" ? "hi" : "en"]}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground font-pahadi text-center">
          {language === "hi"
            ? "पोशाक और आभूषण चुनकर अपने पात्र को सजाएं। अपनी रचना को स्क्रीनशॉट लेकर साझा करें!"
            : "Select outfits and accessories to dress up your character. Take a screenshot to share your creation!"}
        </p>
      </CardFooter>
    </Card>
  )
}
