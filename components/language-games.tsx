"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

type WordMatchingGame = {
  pahadiWord: string
  hindiMeaning: string
  englishMeaning: string
  options: string[]
  correctAnswer: string
}

const wordMatchingQuestions: WordMatchingGame[] = [
  {
    pahadiWord: "बटवारो",
    hindiMeaning: "बांटना",
    englishMeaning: "To distribute",
    options: ["To distribute", "To collect", "To sell", "To buy"],
    correctAnswer: "To distribute",
  },
  {
    pahadiWord: "ढिबरी",
    hindiMeaning: "दीया",
    englishMeaning: "Lamp",
    options: ["Lamp", "Candle", "Fire", "Light"],
    correctAnswer: "Lamp",
  },
  {
    pahadiWord: "डांडा",
    hindiMeaning: "पहाड़",
    englishMeaning: "Hill",
    options: ["Mountain", "Hill", "Valley", "River"],
    correctAnswer: "Hill",
  },
  {
    pahadiWord: "ज्वार",
    hindiMeaning: "पानी",
    englishMeaning: "Water",
    options: ["Fire", "Earth", "Water", "Air"],
    correctAnswer: "Water",
  },
  {
    pahadiWord: "मैत",
    hindiMeaning: "दोस्त",
    englishMeaning: "Friend",
    options: ["Enemy", "Friend", "Brother", "Sister"],
    correctAnswer: "Friend",
  },
]

type SentenceFormationGame = {
  pahadiWords: string[]
  correctOrder: number[]
  englishMeaning: string
}

const sentenceFormationQuestions: SentenceFormationGame[] = [
  {
    pahadiWords: ["मी", "घर", "जाणो", "छु"],
    correctOrder: [0, 1, 2, 3],
    englishMeaning: "I am going home",
  },
  {
    pahadiWords: ["तुम", "कहाँ", "जा", "रया", "छा"],
    correctOrder: [0, 1, 2, 3, 4],
    englishMeaning: "Where are you going?",
  },
  {
    pahadiWords: ["आज", "मौसम", "बड़ो", "सुन्दर", "छ"],
    correctOrder: [0, 1, 2, 3, 4],
    englishMeaning: "Today the weather is very beautiful",
  },
]

export function LanguageGames() {
  const [gameType, setGameType] = useState<"wordMatching" | "sentenceFormation" | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [selectedWordOrder, setSelectedWordOrder] = useState<number[]>([])
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)
  const { toast } = useToast()

  const resetGame = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setSelectedWordOrder([])
    setScore(0)
    setShowResult(false)
    setGameCompleted(false)
  }

  const handleGameSelection = (type: "wordMatching" | "sentenceFormation") => {
    setGameType(type)
    resetGame()
  }

  const handleWordMatchingAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    setShowResult(true)

    const currentQuestion = wordMatchingQuestions[currentQuestionIndex]
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1)
      toast({
        title: "Correct!",
        description: `${currentQuestion.pahadiWord} means ${currentQuestion.englishMeaning}`,
        variant: "success",
      })
    } else {
      toast({
        title: "Incorrect",
        description: `The correct answer is ${currentQuestion.correctAnswer}`,
        variant: "destructive",
      })
    }
  }

  const handleNextQuestion = () => {
    setSelectedAnswer(null)
    setShowResult(false)

    if (gameType === "wordMatching" && currentQuestionIndex < wordMatchingQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else if (gameType === "sentenceFormation" && currentQuestionIndex < sentenceFormationQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedWordOrder([])
    } else {
      setGameCompleted(true)
    }
  }

  const handleWordSelection = (index: number) => {
    if (selectedWordOrder.includes(index)) {
      setSelectedWordOrder(selectedWordOrder.filter((i) => i !== index))
    } else {
      setSelectedWordOrder([...selectedWordOrder, index])
    }
  }

  const checkSentenceOrder = () => {
    const currentQuestion = sentenceFormationQuestions[currentQuestionIndex]
    const isCorrect =
      selectedWordOrder.length === currentQuestion.correctOrder.length &&
      selectedWordOrder.every((value, index) => value === currentQuestion.correctOrder[index])

    setShowResult(true)

    if (isCorrect) {
      setScore(score + 1)
      toast({
        title: "Correct!",
        description: `The sentence means: ${currentQuestion.englishMeaning}`,
        variant: "success",
      })
    } else {
      toast({
        title: "Incorrect",
        description: "Try arranging the words in the correct order",
        variant: "destructive",
      })
    }
  }

  const renderWordMatchingGame = () => {
    const currentQuestion = wordMatchingQuestions[currentQuestionIndex]

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">{currentQuestion.pahadiWord}</h3>
          <p className="text-gray-600">Hindi: {currentQuestion.hindiMeaning}</p>
          <p className="text-sm text-gray-500 mt-2">Select the correct English meaning:</p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleWordMatchingAnswer(option)}
              disabled={showResult}
              className={`p-3 rounded-lg border transition-colors ${
                showResult && option === currentQuestion.correctAnswer
                  ? "bg-green-100 border-green-500 text-green-700"
                  : showResult && option === selectedAnswer && option !== currentQuestion.correctAnswer
                    ? "bg-red-100 border-red-500 text-red-700"
                    : selectedAnswer === option
                      ? "bg-blue-100 border-blue-500 text-blue-700"
                      : "bg-white hover:bg-gray-50 border-gray-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {showResult && (
          <div className="mt-4 text-center">
            <button
              onClick={handleNextQuestion}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {currentQuestionIndex < wordMatchingQuestions.length - 1 ? "Next Question" : "See Results"}
            </button>
          </div>
        )}
      </div>
    )
  }

  const renderSentenceFormationGame = () => {
    const currentQuestion = sentenceFormationQuestions[currentQuestionIndex]

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Arrange the words to form a correct Pahadi sentence</h3>
          <p className="text-sm text-gray-500">Click on the words in the correct order</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {currentQuestion.pahadiWords.map((word, index) => (
            <button
              key={index}
              onClick={() => handleWordSelection(index)}
              disabled={showResult}
              className={`px-3 py-2 rounded-md border ${
                selectedWordOrder.includes(index)
                  ? "bg-blue-100 border-blue-500 text-blue-700"
                  : "bg-white hover:bg-gray-50 border-gray-300"
              }`}
            >
              {word}
            </button>
          ))}
        </div>

        <div className="p-4 bg-gray-100 rounded-lg min-h-[60px] flex flex-wrap gap-2">
          {selectedWordOrder.map((wordIndex, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 rounded border border-blue-300">
              {currentQuestion.pahadiWords[wordIndex]}
            </span>
          ))}
        </div>

        {!showResult && selectedWordOrder.length > 0 && (
          <div className="text-center">
            <button
              onClick={checkSentenceOrder}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Check Answer
            </button>
          </div>
        )}

        {showResult && (
          <div className="mt-4 text-center">
            <p className="mb-2 text-gray-700">
              English meaning: <span className="font-medium">{currentQuestion.englishMeaning}</span>
            </p>
            <button
              onClick={handleNextQuestion}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {currentQuestionIndex < sentenceFormationQuestions.length - 1 ? "Next Question" : "See Results"}
            </button>
          </div>
        )}
      </div>
    )
  }

  const renderGameSelection = () => {
    return (
      <div className="space-y-6 text-center">
        <h2 className="text-2xl font-bold">Choose a Language Game</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
          <button
            onClick={() => handleGameSelection("wordMatching")}
            className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">Word Matching</h3>
            <p className="text-gray-600">Match Pahadi words with their English meanings</p>
          </button>
          <button
            onClick={() => handleGameSelection("sentenceFormation")}
            className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">Sentence Formation</h3>
            <p className="text-gray-600">Arrange words to form correct Pahadi sentences</p>
          </button>
        </div>
      </div>
    )
  }

  const renderGameResults = () => {
    const totalQuestions =
      gameType === "wordMatching" ? wordMatchingQuestions.length : sentenceFormationQuestions.length

    const percentage = Math.round((score / totalQuestions) * 100)

    return (
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold">Game Results</h2>
        <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm max-w-md mx-auto">
          <div className="text-5xl font-bold mb-4">{percentage}%</div>
          <p className="text-xl mb-2">
            You scored <span className="font-semibold">{score}</span> out of{" "}
            <span className="font-semibold">{totalQuestions}</span>
          </p>
          <p className="text-gray-600 mb-6">
            {percentage >= 80
              ? "Excellent! You're becoming a Pahadi language expert!"
              : percentage >= 60
                ? "Good job! Keep practicing to improve your Pahadi language skills."
                : "Keep practicing! You'll get better with time."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={resetGame}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Play Again
            </button>
            <button
              onClick={() => setGameType(null)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Choose Another Game
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
      <h2 className="text-3xl font-bold text-center mb-8">Pahadi Language Games</h2>

      {!gameType && renderGameSelection()}

      {gameType === "wordMatching" && !gameCompleted && renderWordMatchingGame()}

      {gameType === "sentenceFormation" && !gameCompleted && renderSentenceFormationGame()}

      {gameCompleted && renderGameResults()}
    </div>
  )
}
