import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Rocket, Trophy, Star, CheckCircle2, XCircle, Home } from "lucide-react";
import { questions } from "../data/questions.ts";
import { Footer } from "../components/Footer.tsx";

export default function Quiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const getLevel = (finalScore: number) => {
    const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
    const percentage = (finalScore / totalPoints) * 100;
    
    if (percentage >= 90) return { name: "Astronauta Expert", icon: "🚀", color: "text-yellow-400" };
    if (percentage >= 70) return { name: "Piloto Espacial", icon: "✈️", color: "text-blue-400" };
    if (percentage >= 50) return { name: "Cadete", icon: "🎖️", color: "text-green-400" };
    return { name: "Explorador Iniciante", icon: "🌟", color: "text-gray-400" };
  };

  const handleAnswerClick = (answerIndex: number) => {
    if (showFeedback) return;
    
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    
    if (answerIndex === question.correctAnswer) {
      setScore(score + question.points);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setQuizComplete(false);
  };

  // Tela de Resultado
  if (quizComplete) {
    const level = getLevel(score);
    const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
    const percentage = Math.round((score / totalPoints) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-12 px-4">
        <div className="max-w-2xl mx-auto bg-slate-800/80 rounded-xl p-8 text-center border border-slate-700">
          <Trophy className="w-24 h-24 text-yellow-400 mx-auto mb-6" />
          
          <h1 className="text-4xl font-bold text-white mb-4">Missão Concluída!</h1>
          
          <div className="text-6xl mb-2">{level.icon}</div>
          <h2 className={`text-3xl font-bold mb-8 ${level.color}`}>{level.name}</h2>
          
          <div className="bg-slate-900/50 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-5xl font-bold text-blue-400 mb-2">{score}</div>
                <div className="text-gray-400">Pontos Totais</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-green-400 mb-2">{percentage}%</div>
                <div className="text-gray-400">Desempenho</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              Tentar Novamente
            </button>
            <Link
              to="/"
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors inline-block"
            >
              Voltar ao Início
            </Link>
          </div>
          
          {percentage >= 70 && (
            <p className="text-green-400 mt-6 text-lg">
              ✨ Excelente trabalho! Você dominou os conceitos da missão Cansat!
            </p>
          )}
        </div>
      </div>
    );
  }

  // Tela do Quiz
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 transition-colors flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Voltar
          </Link>
          <div className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2">
            <Star className="w-4 h-4" />
            {score} pontos
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">Progresso da Missão</span>
            <span className="text-white font-semibold">
              {currentQuestion + 1} / {questions.length}
            </span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-slate-800/80 rounded-xl p-8 border border-slate-700">
          <div className="inline-block px-3 py-1 bg-purple-600 text-white rounded-full text-sm mb-4">
            {question.category}
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">{question.question}</h2>

          {/* Answers */}
          <div className="space-y-4 mb-6">
            {question.answers.map((answer, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = index === question.correctAnswer;
              const showCorrect = showFeedback && isCorrectAnswer;
              const showIncorrect = showFeedback && isSelected && !isCorrectAnswer;

              let buttonClass = "w-full p-4 rounded-lg text-left transition-all border-2 flex items-center justify-between ";
              
              if (showCorrect) {
                buttonClass += "bg-green-600 border-green-500";
              } else if (showIncorrect) {
                buttonClass += "bg-red-600 border-red-500";
              } else if (isSelected && !showFeedback) {
                buttonClass += "bg-blue-600 border-blue-500";
              } else if (!showFeedback) {
                buttonClass += "bg-slate-700 border-slate-600 hover:bg-slate-600 cursor-pointer";
              } else {
                buttonClass += "bg-slate-700/50 border-slate-600/50";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={showFeedback}
                  className={buttonClass}
                >
                  <span className="text-white">{answer}</span>
                  {showCorrect && <CheckCircle2 className="w-6 h-6 text-white" />}
                  {showIncorrect && <XCircle className="w-6 h-6 text-white" />}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className={`p-4 rounded-lg mb-6 border ${
              isCorrect ? 'bg-green-900/30 border-green-600' : 'bg-red-900/30 border-red-600'
            }`}>
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                )}
                <div>
                  <p className={`font-semibold mb-2 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                    {isCorrect ? 'Correto!' : 'Incorreto!'}
                  </p>
                  <p className="text-gray-300">{question.explanation}</p>
                  {isCorrect && (
                    <p className="text-blue-400 mt-2">+{question.points} pontos</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Next Button */}
          {showFeedback && (
            <button
              onClick={handleNext}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              {currentQuestion < questions.length - 1 ? (
                <>Próxima Questão <Rocket className="w-5 h-5" /></>
              ) : (
                <>Ver Resultados <Trophy className="w-5 h-5" /></>
              )}
            </button>
          )}
        </div>
      </div>

      <Footer />

    </div>
  );
}
