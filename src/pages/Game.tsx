
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, Star, CheckCircle, XCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const questions = [
    {
      question: "Who is the main character telling the story?",
      answers: ["Jay Gatsby", "Nick Carraway", "Tom Buchanan", "Daisy Buchanan"],
      correct: 1
    },
    {
      question: "What does the green light represent?",
      answers: ["Money", "Gatsby's hope and dreams", "Jealousy", "Nature"],
      correct: 1
    },
    {
      question: "Where does Gatsby live?",
      answers: ["East Egg", "West Egg", "New York City", "Valley of Ashes"],
      correct: 1
    },
    {
      question: "What was Gatsby's real name?",
      answers: ["Jay Gatsby", "James Gatz", "Jimmy Gatlin", "Jack Gartner"],
      correct: 1
    },
    {
      question: "Who kills Gatsby?",
      answers: ["Tom Buchanan", "Nick Carraway", "George Wilson", "Daisy Buchanan"],
      correct: 2
    }
  ];

  useEffect(() => {
    gsap.from(cardRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    });
  }, [currentQuestion]);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
      gsap.to(".correct-answer", {
        backgroundColor: "#10B981",
        color: "white",
        duration: 0.3
      });
    } else {
      gsap.to(".wrong-answer", {
        backgroundColor: "#EF4444",
        color: "white",
        duration: 0.3
      });
      gsap.to(".correct-answer", {
        backgroundColor: "#10B981",
        color: "white",
        duration: 0.3
      });
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameFinished(true);
      gsap.from(resultRef.current, {
        scale: 0,
        rotation: 180,
        duration: 0.8,
        ease: "back.out(1.7)"
      });
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameFinished(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "Amazing! You really know the story!";
    if (percentage >= 60) return "Good job! You understand the book well!";
    if (percentage >= 40) return "Not bad! Maybe read it again?";
    return "Keep trying! The book has lots to learn!";
  };

  if (gameFinished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Card ref={resultRef} className="text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-3xl">
                <Trophy className="text-yellow-500" size={32} />
                Quiz Complete!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-6xl font-bold text-gradient mb-4">
                {score}/{questions.length}
              </div>
              <p className="text-xl text-gray-700 mb-6">
                {getScoreMessage()}
              </p>
              <div className="flex justify-center gap-4">
                <Button onClick={resetGame} className="bg-emerald-600 hover:bg-emerald-700">
                  <RotateCcw className="mr-2" size={16} />
                  Try Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-[Playfair_Display]">
            Gatsby Quiz Game
          </h1>
          <p className="text-xl text-gray-600">
            Test what you learned about the story!
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <span className="text-lg">Question {currentQuestion + 1} of {questions.length}</span>
            <div className="flex gap-1">
              {Array.from({ length: questions.length }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i <= currentQuestion ? "text-yellow-400 fill-current" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-lg">Score: {score}</span>
          </div>
        </div>

        <Card ref={cardRef} className="hover-lift">
          <CardHeader>
            <CardTitle className="text-xl">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {questions[currentQuestion].answers.map((answer, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`w-full p-4 text-left justify-start h-auto ${
                    showResult && selectedAnswer === index
                      ? index === questions[currentQuestion].correct
                        ? "correct-answer"
                        : "wrong-answer"
                      : showResult && index === questions[currentQuestion].correct
                      ? "correct-answer"
                      : ""
                  }`}
                  onClick={() => !showResult && handleAnswer(index)}
                  disabled={showResult}
                >
                  <span className="mr-3 font-semibold">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {answer}
                  {showResult && index === questions[currentQuestion].correct && (
                    <CheckCircle className="ml-auto text-white" size={20} />
                  )}
                  {showResult && selectedAnswer === index && index !== questions[currentQuestion].correct && (
                    <XCircle className="ml-auto text-white" size={20} />
                  )}
                </Button>
              ))}
            </div>
            
            {showResult && (
              <div className="mt-6 text-center">
                <Button onClick={nextQuestion} className="bg-emerald-600 hover:bg-emerald-700">
                  {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Game;
