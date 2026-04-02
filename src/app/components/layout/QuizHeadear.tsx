import { Link } from "react-router";
import { Home, Star } from "lucide-react";

interface QuizHeaderProps {
  score: number;
}

export function QuizHeader({ score }: QuizHeaderProps) {
  return (
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
  );
}
