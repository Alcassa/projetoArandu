import { useState } from "react";
import { Link } from "react-router";
import {  Rocket, Trophy, Orbit, Code, Zap, PencilRuler } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle} from "../components/ui/Card.tsx";
import { Button } from "../components/ui/button.tsx";
import { FeedbackSection } from "../components/layout/FeedbackSection.tsx";
import { QuizHeader } from "../components/layout/QuizHeadear.tsx";
import { questionsByTheme} from "../data/questions.ts";
import type { QuizTheme } from "../data/questions.ts";
import { ResultsScreen } from "../components/features/ResultsSreen.tsx";
import { ProgressBar } from "../components/layout/ProgressBar.tsx";
import { QuestionCard } from "../components/layout/QuestionCard.tsx";

const getThemeIcon = (theme: QuizTheme, className: string = "w-8 h-8") => {
  switch (theme) {
    case "Mecânica Celeste": return <Orbit className={className} />;
    case "Programação": return <Code className={className} />;
    case "Eletrônica": return <Zap className={className} />;
    case "Desenho Técnico": return <PencilRuler className={className} />;
  }
};

export default function Quiz() {
  const [selectedTheme, setSelectedTheme] = useState<QuizTheme | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestions = selectedTheme ? questionsByTheme[selectedTheme] : [];
  const question = currentQuestions[currentQuestion];

  const getLevel = (finalScore: number) => {
    const totalPoints = currentQuestions.reduce((sum, q) => sum + q.points, 0);
    const percentage = totalPoints > 0 ? (finalScore / totalPoints) * 100 : 0;
    
    if (percentage >= 90) return { name: "Astronauta Expert", icon: "🚀", color: "text-yellow-400" };
    if (percentage >= 70) return { name: "Piloto Espacial", icon: "✈️", color: "text-blue-400" };
    if (percentage >= 50) return { name: "Cadete", icon: "🎖️", color: "text-green-400" };
    return { name: "Explorador Iniciante", icon: "🌟", color: "text-gray-400" };
  };

  const handleStart = (theme: QuizTheme) => {
    setSelectedTheme(theme);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setQuizComplete(false);
  };

  const handleAnswerClick = (answerIndex: number) => {
    if (showFeedback || !question) return;
    
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    
    if (answerIndex === question.correctAnswer) {
      setScore(score + question.points);
    }
  };

  const handleNext = () => {
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setSelectedTheme(null);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setQuizComplete(false);
  };

  // Tela de Seleção de Tema
  if (!selectedTheme) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-slate-100 p-4 md:p-8">
        <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <Rocket className="text-blue-400 w-8 h-8" />
              Quiz Arandu
            </h1>
            <p className="text-blue-200 mt-2">Teste seus conhecimentos</p>
          </div>
          <Link to="/">
            <Button variant="outline" className="text-slate-900 font-semibold border-white/20">
              Sair do Quiz
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/80 border-slate-700 shadow-xl">
            <CardHeader className="text-center pb-4 pt-10">
              <div className="flex justify-center mb-6">
                <Trophy className="w-20 h-20 text-yellow-500" />
              </div>
              <CardTitle className="text-3xl text-white">Preparado para o Teste?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center text-lg text-slate-300 px-4 md:px-12 pb-12">
              <p>
                Escolha a sua área de especialização e teste seus conhecimentos com perguntas direcionadas.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-bold text-white mb-6">Áreas de Especialização:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(Object.keys(questionsByTheme) as QuizTheme[]).map((theme) => (
                    <Button
                      key={theme}
                      size="lg"
                      onClick={() => handleStart(theme)}
                      className="bg-slate-700 hover:bg-blue-600 text-lg px-6 py-12 flex flex-col gap-3 h-auto transition-all text-white border border-slate-600 hover:border-blue-400"
                    >
                      {getThemeIcon(theme)}
                      <span>{theme}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Tela de Resultado
  if (quizComplete) {
    const level = getLevel(score);
    const totalPoints = currentQuestions.reduce((sum, q) => sum + q.points, 0);

    return (
      <ResultsScreen
        score={score}
        totalPoints={totalPoints}
        level={level}
        onRestart={handleRestart}
      />
    );
  }

  // Tela do Quiz
  if (!question) return null;

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2 text-white font-bold bg-blue-900/50 px-4 py-2 rounded-full border border-blue-500/30">
            {getThemeIcon(selectedTheme, "w-5 h-5")}
            <span>{selectedTheme}</span>
          </div>
          <button 
            onClick={handleRestart}
            className="text-slate-300 hover:text-white underline text-sm"
          >
            Trocar Tema
          </button>
        </div>

        <QuizHeader score={score} />
        
        <ProgressBar current={currentQuestion} total={currentQuestions.length} />

        <QuestionCard
          question={question}
          selectedAnswer={selectedAnswer}
          showFeedback={showFeedback}
          onAnswerClick={handleAnswerClick}
        />

        {showFeedback && (
          <>
            <FeedbackSection
              isCorrect={isCorrect}
              explanation={question.explanation}
              points={question.points}
            />

            <button
              onClick={handleNext}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              {currentQuestion < currentQuestions.length - 1 ? (
                <>Próxima Questão <Rocket className="w-5 h-5" /></>
              ) : (
                <>Ver Resultados <Trophy className="w-5 h-5" /></>
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
}