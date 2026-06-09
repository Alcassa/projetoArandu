import { Link } from "react-router"

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-gray-400 text-center md:text-left">
          © 2026 Projeto Arandu - Extensão Universitária em Engenharia Aeroespacial
          Elaborado por: Guilherme Alcassa Nascimeto, email: <a href="mailto:guilherme.alcassa@aluno.ufabc.edu.br" className="text-blue-400 hover:underline">
            guilherme.alcassa@aluno.ufabc.edu.br
          </a>
        </p>
        <Link
          to="/assessment"
          className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors border border-blue-400/30 px-6 py-4 rounded-full hover:bg-blue-400/10 whitespace-nowrap"
        >
          Avaliar Plataforma
        </Link>
      </div>
    </footer>
  )
}