import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Send, ArrowLeft, ClipboardList } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/Card";
import { toast } from "sonner";
import { LIKERT_OPTIONS, QUESTIONS } from "../data/assessment";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../data/firebaseConfig";

export default function Assessment() {
    const navigate = useNavigate();
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSelect = (questionId: string, value: number) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const user = auth.currentUser;

        if (!user) {
            toast.error("Você precisa estar logado para enviar uma avaliação.");
            navigate("/login");
            return;
        }

        if (Object.keys(answers).length < QUESTIONS.length) {
            toast.error(
                "Por favor, responda todas as perguntas antes de enviar."
            );
            return;
        }

        try {
            setIsSubmitting(true);
            const engajamento = ["q1", "q2", "q3", "q4", "q5"];
            const aprendizagem = ["q6", "q7", "q8", "q9", "q10"];
            const satisfacao = ["q11", "q12"];

            const calcularMedia = (ids: string[]) =>
                ids.reduce((acc, id) => acc + answers[id], 0) / ids.length;
            const respostasFormatadas = Object.entries(answers).reduce(
                (acc, [questionId, value]) => {
                    const opcao = LIKERT_OPTIONS.find(
                        option => option.value === value
                    );

                    acc[questionId] = {
                        valor: value,
                        descricao: opcao?.label || ""
                    };

                    return acc;
                },
                {} as Record<string, { valor: number; descricao: string }>
            );
            console.log("Antes do addDoc");
            await addDoc(collection(db, "avaliacoes"), {
                uid: user.uid,
                nome: user.displayName,
                email: user.email,
                
                perguntas: QUESTIONS.map(q => q.text),
                respostasFormatadas: respostasFormatadas,
                medias: {
                    engajamento: calcularMedia(engajamento),
                    aprendizagem: calcularMedia(aprendizagem),
                    satisfacao: calcularMedia(satisfacao)
                },
                criadoEm: serverTimestamp()
            });
            console.log("Depois do addDoc");

            toast.success(
                "Avaliação enviada com sucesso! Obrigado pelo seu feedback."
            );
            console.log("Depois do toast");
            setTimeout(() => {
                console.log("Antes do navigate");
                navigate("/");
            }, 1500);
        } catch (error) {
            console.error(error);

            toast.error(
                "Erro ao enviar a avaliação. Tente novamente."
            );
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="min-h-screen bg-slate-950 py-12 px-4 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar para Início
                </Link>

                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-900/30 rounded-full mb-4">
                        <ClipboardList className="w-8 h-8 text-blue-400" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Avaliação da Plataforma
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Sua opinião é fundamental para melhorarmos a experiência gamificada do Projeto Arandu.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {QUESTIONS.map((q, index) => (
                        <Card key={q.id} className="bg-slate-900/60 border-slate-800 shadow-xl backdrop-blur-sm">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 font-bold flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl text-white font-medium pt-1">
                                        {q.text}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                                    {LIKERT_OPTIONS.map(opt => {
                                        const isSelected = answers[q.id] === opt.value;
                                        return (
                                            <button
                                                key={opt.value}
                                                type="button"
                                                onClick={() => handleSelect(q.id, opt.value)}
                                                className={`
                          flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200
                          ${isSelected
                                                        ? 'bg-blue-600/20 border-blue-500 text-blue-300 scale-[1.02] shadow-lg shadow-blue-500/20'
                                                        : 'bg-slate-800/50 border-slate-700 text-gray-400 hover:border-slate-500 hover:bg-slate-800'
                                                    }
                        `}
                                            >
                                                <span className={`text-2xl font-bold mb-2 ${isSelected ? 'text-blue-400' : 'text-gray-500'}`}>
                                                    {opt.value}
                                                </span>
                                                <span className="text-xs text-center leading-tight">
                                                    {opt.label}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    <div className="flex justify-end pt-4">
                        <Button
                            type="submit"
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                "Enviando..."
                            ) : (
                                <>
                                    Enviar Avaliação <Send className="w-5 h-5" />
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}