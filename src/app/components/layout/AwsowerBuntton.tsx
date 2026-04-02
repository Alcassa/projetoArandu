import { CheckCircle2, XCircle } from "lucide-react";

interface AnswerButtonProps {
  answer: string;
  index: number;
  isSelected: boolean;
  isCorrectAnswer: boolean;
  showFeedback: boolean;
  onAnswerClick: (index: number) => void;
}

export function AnswerButton({ 
  answer, 
  index, 
  isSelected, 
  isCorrectAnswer, 
  showFeedback, 
  onAnswerClick 
}: AnswerButtonProps) {
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
      onClick={() => onAnswerClick(index)}
      disabled={showFeedback}
      className={buttonClass}
    >
      <span className="text-white">{answer}</span>
      {showCorrect && <CheckCircle2 className="w-6 h-6 text-white" />}
      {showIncorrect && <XCircle className="w-6 h-6 text-white" />}
    </button>
  );
}
