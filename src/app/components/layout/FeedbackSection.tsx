import { CheckCircle2, XCircle } from "lucide-react";

interface FeedbackSectionProps {
  isCorrect: boolean;
  explanation: string;
  points: number;
}

export function FeedbackSection({ isCorrect, explanation, points }: FeedbackSectionProps) {
  return (
    <div className={`p-4 rounded-lg mb-6 border ${
      isCorrect ? 'bg-green-900/30 border-green-600' : 'bg-red-900/30 border-red-600'
    }`}>
      <div className="flex items-start gap-3">
        {isCorrect ? (
          <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
        ) : (
          <XCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
        )}
        <div>
          <p className={`font-semibold mb-2 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
            {isCorrect ? 'Correto!' : 'Incorreto!'}
          </p>
          <p className="text-gray-300">{explanation}</p>
          {isCorrect && (
            <p className="text-blue-400 mt-2">+{points} pontos</p>
          )}
        </div>
      </div>
    </div>
  );
}
