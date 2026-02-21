import { Link } from "react-router";
import { Rocket, Target, Trophy, BookOpen } from "lucide-react";
import { About } from "../components/About.tsx";
import { MissionOverview } from "../components/MissionOverview.tsx";
import { Footer } from "../components/Footer.tsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-full mb-6">
            <Rocket className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 text-sm">Projeto de Extensão Universitária</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Projeto <span className="text-blue-400">Arandu</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Desvendando os mistérios da Engenharia Aeroespacial através da gamificação
          </p>
          
          <Link
            to="/quiz"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-semibold transition-colors shadow-lg shadow-blue-500/50"
          >
            Começar Missão
            <Rocket className="w-5 h-5" />
          </Link>
        </div>

        <MissionOverview />

        <About />

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Teste seus conhecimentos e avance através dos níveis da missão Cansat
          </p>
          <Link
            to="/quiz"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-full text-lg font-semibold transition-colors"
          >
            Iniciar Quiz
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </div>

     <Footer />
    </div>
  );
}
