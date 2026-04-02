import type { Question } from "../../data/questions.ts";
import { AnswerButton } from "./AwsowerBuntton.tsx";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  showFeedback: boolean;
  onAnswerClick: (index: number) => void;
}

export function QuestionCard({ 
  question, 
  selectedAnswer, 
  showFeedback, 
  onAnswerClick 
}: QuestionCardProps) {
  return (
    <div className="bg-slate-800/80 rounded-xl p-8 border border-slate-700">
      <div className="inline-block px-3 py-1 bg-purple-600 text-white rounded-full text-sm mb-4">
        {question.category}
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">{question.question}</h2>

      <div className="space-y-4">
        {question.answers.map((answer, index) => (
          <AnswerButton
            key={index}
            answer={answer}
            index={index}
            isSelected={selectedAnswer === index}
            isCorrectAnswer={index === question.correctAnswer}
            showFeedback={showFeedback}
            onAnswerClick={onAnswerClick}
          />
        ))}
      </div>
    </div>
  );
}
