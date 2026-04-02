import { Target, Trophy, BookOpen } from "lucide-react"



export const MissionOverview = () => {
  return (
    <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            A Missão Cansat
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Embarque em uma jornada educacional que une mecânica celeste, programação e engenharia 
            aeroespacial. Aprenda conceitos complexos de forma envolvente e recompensadora.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-blue-400" />,
                title: "Objetivos Claros",
                description: "Complete desafios estruturados que guiam seu aprendizado através de conceitos fundamentais da engenharia aeroespacial."
              },
              {
                icon: <Trophy className="w-8 h-8 text-purple-400" />,
                title: "Sistema de Recompensas",
                description: "Ganhe pontos e avance de nível conforme demonstra domínio sobre os tópicos estudados."
              },
              {
                icon: <BookOpen className="w-8 h-8 text-green-400" />,
                title: "Aprendizado Ativo",
                description: "Metodologias ativas que tornam conceitos complexos acessíveis e estimulam a criatividade."
              }
            ].map( (item, index) => (
              <div key={index} 
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center backdrop-blur">
                <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
    )
}