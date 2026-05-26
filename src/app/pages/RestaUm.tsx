import { useState } from "react";
import { Link } from "react-router";
import {
  Heart,
  Lightbulb,
  Trophy,
  Rocket,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  XCircle,
  BrainCircuit
} from "lucide-react";
import { Button } from "../components/ui/button.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card.tsx";
import { Badge } from "../components/features/Badge.tsx";
import { restaUmQuestions as questions } from "../data/resta-um-questions.ts";
import { auth, db } from "../data/firebaseConfig.ts";
import { addDoc, collection } from "firebase/firestore";

type GameState = "intro" | "playing" | "gameover" | "victory";

export default function RestaUm() {
  const [gameState, setGameState] = useState<GameState>("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [lives, setLives] = useState(3);
  const [hintsRemaining, setHintsRemaining] = useState(3);
  const [eliminatedOptions, setEliminatedOptions] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState<number>(0)
  const [wrongQuestions, setWrongQuestions] = useState<
    {
      id: number;
      pergunta: string;
      respostaMarcada: string;
      respostaCorreta: string;
      categoria: string;
    }[]
  >([]);

  const startGame = () => {
    setGameState("playing");
    setCurrentQuestionIndex(0);
    setLives(3);
    setHintsRemaining(3);
    setEliminatedOptions([]);
    setShowHint(false);
    setAnsweredCorrectly(false);
    setCorrectAnswers(0);
    setWrongQuestions([]);
    setWrongAnswers(0);
  };

  const useHint = () => {

    if (hintsRemaining <= 0 || answeredCorrectly)
      return;

    const currentQuestion =
      questions[currentQuestionIndex];

    const incorrectOptions =
      currentQuestion.options.filter(
        (_, index) =>
          index !== currentQuestion.correct &&
          !eliminatedOptions.includes(
            currentQuestion.options[index]
          )
      );

    if (incorrectOptions.length > 0) {

      const optionToEliminate =
        incorrectOptions[
        Math.floor(
          Math.random() * incorrectOptions.length
        )
        ];

      setEliminatedOptions(prev => [
        ...prev,
        optionToEliminate
      ]);

      setHintsRemaining(prev => prev - 1);

      setShowHint(true);
    }
  };

  const handleAnswer = (answerIndex: number) => {

    if (answeredCorrectly) return;

    const currentQuestion = questions[currentQuestionIndex];

    if (answerIndex === currentQuestion.correct) {

      setAnsweredCorrectly(true);

      setCorrectAnswers(prev => prev + 1);

    } else {

      const selectedOption =
        currentQuestion.options[answerIndex];

      if (!eliminatedOptions.includes(selectedOption)) {

        setWrongAnswers(prev => prev + 1);

        setWrongQuestions(prev => [
          ...prev,
          {
            id: currentQuestion.id,
            pergunta: currentQuestion.question,
            respostaMarcada: selectedOption,
            respostaCorreta:
              currentQuestion.options[currentQuestion.correct],
            categoria: currentQuestion.category
          }
        ]);

        setEliminatedOptions(prev => [
          ...prev,
          selectedOption
        ]);

        setLives(prev => {

          const newLives = prev - 1;

          if (newLives <= 0) {

            setTimeout(async () => {

              await saveResult("gameover");

              setGameState("gameover");

            }, 600);
          }

          return newLives;
        });

        setShowHint(true);
      }
    }
  };

  const nextQuestion = async () => {
    if (currentQuestionIndex + 1 < questions.length) {

      setCurrentQuestionIndex(prev => prev + 1);
      setEliminatedOptions([]);
      setShowHint(false);
      setAnsweredCorrectly(false);

    } else {

      await saveResult("gameover");

      setGameState("victory");
    }
  };
  const saveResult = async (result: "victory" | "gameover") => {
    try {
      const user = auth.currentUser;

      if (!user) return;

      await addDoc(collection(db, "resultados-resta-um"), {
        uid: user.uid,
        nome: user.displayName,
        email: user.email,

        acertos: correctAnswers,
        erros: wrongAnswers,
        perguntasErradas: wrongQuestions,

        totalQuestoes: questions.length,

        criadoEm: new Date()
      });

    } catch (error) {
      console.error(error);
    }
  };


  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-slate-100 p-4 md:p-8">

      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
            <BrainCircuit className="text-blue-400 w-8 h-8" />
            Resta Um: Sobrevivência
          </h1>
          <p className="text-blue-200 mt-2">Dinâmica e Cinemática - Projeto Arandu</p>
        </div>
        <Link to="/">
          <Button variant="outline" className="text-slate-900 font-semibold border-white/20">
            Sair do Desafio
          </Button>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">

        {/* TELA DE INTRODUÇÃO */}
        {gameState === "intro" && (
          <Card className="bg-slate-800/80 border-slate-700 shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-6">
                <Rocket className="w-20 h-20 text-blue-500" />
              </div>
              <CardTitle className="text-3xl text-white">Pronto para o lançamento?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center text-lg text-slate-300 px-4 md:px-12 pb-12">
              <p>
                Bem-vindo ao modo <strong>Resta Um: Sobrevivência</strong>. O objetivo é responder a uma sequência de perguntas sobre Dinâmica e Cinemática.
              </p>
              <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 text-left space-y-4">
                <h3 className="text-white font-bold flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-400" /> Como funciona:
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Você começa com <strong>3 vidas</strong>.</li>
                  <li>Se errar uma alternativa, você perde 1 vida, a alternativa errada é eliminada e <strong>uma dica aparecerá para te ajudar</strong>.</li>
                  <li>Você também possui um <strong>botão de Dica</strong>. Ele pode ser usado 3 vezes no jogo todo para eliminar uma alternativa errada e revelar a dica da questão atual, sem custar vidas!</li>
                  <li>Continue tentando até acertar ou perder todas as vidas.</li>
                  <li>Chegue até o final para vencer o desafio!</li>
                </ul>
              </div>
              <Button size="lg" onClick={startGame} className="bg-blue-600 hover:bg-blue-700 text-lg px-12 py-6 mt-8 w-full md:w-auto">
                Iniciar Missão
              </Button>
            </CardContent>
          </Card>
        )}

        {/* TELA DE JOGO */}
        {gameState === "playing" && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* HUD: Progresso e Vidas */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-slate-800/80 p-4 rounded-xl border border-slate-700 gap-4">
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-600 text-sm px-3 py-1">
                  Questão {currentQuestionIndex + 1} de {questions.length}
                </Badge>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  onClick={useHint}
                  disabled={hintsRemaining <= 0 || answeredCorrectly || currentQuestion.options.filter(
                    (_, index) =>
                      index !== currentQuestion.correct &&
                      !eliminatedOptions.includes(
                        currentQuestion.options[index]
                      )
                  ).length === 0}
                  variant="outline"
                  className="bg-yellow-900/40 border-yellow-700/50 text-yellow-500 hover:bg-yellow-900/60 hover:text-yellow-400 font-semibold"
                >
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Dica ({hintsRemaining}/3)
                </Button>

                <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-full border border-slate-700">
                  <span className="text-sm font-semibold text-slate-300 mr-2">Vidas:</span>
                  {[...Array(3)].map((_, i) => (
                    <Heart
                      key={i}
                      className={`w-6 h-6 transition-all duration-300 ${i < lives
                        ? 'text-red-500 fill-red-500 scale-100'
                        : 'text-slate-700 fill-slate-700 scale-75 opacity-50'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Pergunta */}
            <Card className="bg-slate-800/90 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <CardContent className="p-6 md:p-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                  {currentQuestion.question}
                </h2>
              </CardContent>
            </Card>

            {/* Dica (Aparece ao errar) */}
            {showHint && !answeredCorrectly && (
              <div className="bg-yellow-900/30 border border-yellow-600/50 rounded-lg p-4 flex gap-4 items-start animate-in fade-in slide-in-from-top-2">
                <Lightbulb className="w-6 h-6 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-yellow-400 mb-1">Dica do Sistema:</h4>
                  <p className="text-yellow-100/80">{currentQuestion.hint}</p>
                </div>
              </div>
            )}

            {/* Alternativas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options.map((option, index) => {
                const isEliminated = eliminatedOptions.includes(option);
                const isCorrect = index === currentQuestion.correct;
                const isSelectedCorrect = answeredCorrectly && isCorrect;

                return (
                  <Button
                    key={index}
                    disabled={isEliminated || answeredCorrectly}
                    onClick={() => handleAnswer(index)}
                    variant="outline"
                    className={`
                      h-auto p-6 flex items-center justify-start text-left text-lg transition-all duration-300 whitespace-normal
                      ${isEliminated ? 'opacity-40 bg-red-950/40 border-red-900/50 line-through text-slate-500' : 'bg-slate-800 border-slate-600 hover:bg-slate-700 hover:border-blue-400'}
                      ${isSelectedCorrect ? 'bg-green-600 border-green-400 text-white shadow-[0_0_15px_rgba(34,197,94,0.4)]' : 'text-slate-200'}
                    `}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className={`
                        flex items-center justify-center w-8 h-8 rounded-full shrink-0
                        ${isEliminated ? 'bg-red-900/50 text-red-400' : 'bg-slate-900 text-slate-400'}
                        ${isSelectedCorrect ? 'bg-green-500 text-white' : ''}
                      `}>
                        {isEliminated ? <XCircle className="w-5 h-5" /> :
                          isSelectedCorrect ? <CheckCircle2 className="w-5 h-5" /> :
                            String.fromCharCode(65 + index)}
                      </div>
                      <span className="flex-1 leading-tight">{option}</span>
                    </div>
                  </Button>
                );
              })}
            </div>

            {/* Botão de Próxima Pergunta */}
            {answeredCorrectly && (
              <div className="flex justify-center pt-8 animate-in fade-in zoom-in-95">
                <Button
                  size="lg"
                  onClick={nextQuestion}
                  className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 shadow-lg shadow-green-600/20"
                >
                  {currentQuestionIndex + 1 === questions.length ? "Finalizar Desafio" : "Próxima Pergunta"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            )}
          </div>
        )}

        {/* TELA DE GAME OVER */}
        {gameState === "gameover" && (
          <Card className="bg-slate-800 border-red-500/50 max-w-2xl mx-auto text-center animate-in zoom-in-95 duration-500">
            <CardHeader className="pt-12">
              <div className="flex justify-center mb-6">
                <XCircle className="w-24 h-24 text-red-500" />
              </div>
              <CardTitle className="text-4xl font-bold text-white mb-2">
                Sistemas Falharam!
              </CardTitle>
              <p className="text-xl text-slate-400">
                Você perdeu todas as suas vidas.
              </p>
            </CardHeader>
            <CardContent className="pb-12">
              <p className="text-slate-300 mb-8">
                Não desanime! A exploração espacial é feita de tentativas e aprendizados. Revise os conceitos de Dinâmica e tente novamente.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" onClick={startGame} className="bg-blue-600 hover:bg-blue-700">
                  <RotateCcw className="w-5 h-5 mr-2" /> Tentar Novamente
                </Button>
                <Link to="/">
                  <Button size="lg" variant="outline" className="border-slate-600 text-slate-900 hover:bg-slate-200">
                    Voltar à Base
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}

        {/* TELA DE VITÓRIA */}
        {gameState === "victory" && (
          <Card className="bg-slate-800 border-green-500/50 max-w-2xl mx-auto text-center animate-in zoom-in-95 duration-500">
            <CardHeader className="pt-12">
              <div className="flex justify-center mb-6 relative">
                <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full" />
                <Trophy className="w-24 h-24 text-yellow-400 relative z-10" />
              </div>
              <CardTitle className="text-4xl font-bold text-white mb-2">
                Missão Cumprida!
              </CardTitle>
              <p className="text-xl text-green-400 font-medium">
                Você sobreviveu ao teste de Dinâmica e Cinemática!
              </p>
            </CardHeader>
            <CardContent className="pb-12">
              <p className="text-slate-300 mb-8 text-lg">
                Com {lives} {lives === 1 ? 'vida restante' : 'vidas restantes'}, você provou que tem os conhecimentos necessários para a próxima etapa do Projeto Arandu.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" onClick={startGame} className="bg-blue-600 hover:bg-blue-700">
                  <RotateCcw className="w-5 h-5 mr-2" /> Jogar Novamente
                </Button>
                <Link to="/">
                  <Button size="lg" variant="outline" className="border-slate-600 text-slate-900 hover:bg-slate-200">
                    Voltar à Base
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}

      </div>
    </div>
  );
}