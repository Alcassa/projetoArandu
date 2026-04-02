import { Link } from "react-router";
import { Trophy } from "lucide-react";
import { LevelBadge } from "./LevelBadge.tsx";

interface ResultsScreenProps {
  score: number;
  totalPoints: number;
  level: {
    name: string;
    icon: string;
    color: string;
  };
  onRestart: () => void;
}

export function ResultsScreen({ score, totalPoints, level, onRestart }: ResultsScreenProps) {
  const percentage = Math.round((score / totalPoints) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-slate-800/80 rounded-xl p-8 text-center border border-slate-700">
        <Trophy className="w-24 h-24 text-yellow-400 mx-auto mb-6" />
        
        <h1 className="text-4xl font-bold text-white mb-4">Missão Concluída!</h1>
        
        <LevelBadge level={level} />
        
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
            onClick={onRestart}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Tentar Novamente
          </button>
          <a href="https://github.com/poe-platform" className="text-green-300 mt-6 text-sm">
            deixe um feedback para a equipe do projeto Arandu! Queremos saber como podemos melhorar a experiência e quais temas você gostaria de ver no futuro. clique aqui para enviar seu feedback
          </a>
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
