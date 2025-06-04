
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
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current, 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [currentQuestion]);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameFinished(true);
      gsap.fromTo(resultRef.current, 
        { scale: 0, rotation: 180 },
        { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" }
      );
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
      <div className="min-h-screen bg-black">
        <Navigation />
        
        {/* Art Deco Background Lines */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-32 left-10 w-32 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
          <div className="absolute top-52 right-20 w-24 h-1 bg-gradient-to-l from-yellow-400 to-transparent"></div>
          <div className="absolute bottom-40 left-20 w-40 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
          <div className="absolute bottom-20 right-10 w-28 h-1 bg-gradient-to-l from-yellow-400 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
          <Card ref={resultRef} className="text-center improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-3xl text-yellow-400 font-[Playfair_Display]">
                <Trophy className="text-yellow-400" size={32} />
                Quiz Complete!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-6xl font-bold text-gradient mb-4">
                {score}/{questions.length}
              </div>
              <p className="text-xl text-gray-200 mb-6">
                {getScoreMessage()}
              </p>
              <div className="flex justify-center gap-4">
                <Button onClick={resetGame} className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
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
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Art Deco Background Lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-32 left-10 w-32 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
        <div className="absolute top-52 right-20 w-24 h-1 bg-gradient-to-l from-yellow-400 to-transparent"></div>
        <div className="absolute bottom-40 left-20 w-40 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
        <div className="absolute bottom-20 right-10 w-28 h-1 bg-gradient-to-l from-yellow-400 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-[Playfair_Display] art-deco-title">
            Gatsby Quiz Game
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200">
            Test what you learned about the story!
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <span className="text-lg text-gray-200">Question {currentQuestion + 1} of {questions.length}</span>
            <div className="flex gap-1">
              {Array.from({ length: questions.length }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i <= currentQuestion ? "text-yellow-400 fill-current" : "text-gray-600"}
                />
              ))}
            </div>
            <span className="text-lg text-gray-200">Score: {score}</span>
          </div>
        </div>

        <Card ref={cardRef} className="hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-400 font-[Playfair_Display]">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {questions[currentQuestion].answers.map((answer, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`w-full p-4 text-left justify-start h-auto bg-gray-800/60 border-yellow-500/50 text-gray-200 hover:bg-yellow-500/20 hover:border-yellow-400 ${
                    showResult && selectedAnswer === index
                      ? index === questions[currentQuestion].correct
                        ? "bg-yellow-500/30 border-yellow-400 text-yellow-100"
                        : "bg-red-500/30 border-red-400 text-red-100"
                      : showResult && index === questions[currentQuestion].correct
                      ? "bg-yellow-500/30 border-yellow-400 text-yellow-100"
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
                    <CheckCircle className="ml-auto" size={20} />
                  )}
                  {showResult && selectedAnswer === index && index !== questions[currentQuestion].correct && (
                    <XCircle className="ml-auto" size={20} />
                  )}
                </Button>
              ))}
            </div>
            
            {showResult && (
              <div className="mt-6 text-center">
                <Button onClick={nextQuestion} className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
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
