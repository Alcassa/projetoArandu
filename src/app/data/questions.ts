export interface Question {
  id: number;
  category: string;
  question: string;
  answers: string[];
  correctAnswer: number;
  explanation: string;
  points: number;
}

export const questions: Question[] = [
  {
    id: 1,
    category: "Mecânica Celeste",
    question: "Qual é a principal força responsável por manter os satélites em órbita ao redor da Terra?",
    answers: ["Força magnética", "Força gravitacional", "Força centrífuga", "Força de atrito"],
    correctAnswer: 1,
    explanation: "A força gravitacional é a responsável por manter os satélites em órbita. Ela atua como uma força centrípeta, puxando o satélite em direção ao centro da Terra.",
    points: 10
  },
  {
    id: 2,
    category: "Missão Cansat",
    question: "O que é um Cansat?",
    answers: [
      "Um tipo de foguete espacial",
      "Um satélite em miniatura do tamanho de uma lata de refrigerante",
      "Um programa de computador para simulação espacial",
      "Uma estação espacial em órbita"
    ],
    correctAnswer: 1,
    explanation: "Cansat é um satélite educacional em miniatura, aproximadamente do tamanho de uma lata de refrigerante, usado para ensinar engenharia aeroespacial.",
    points: 10
  },
  {
    id: 3,
    category: "Programação",
    question: "Qual linguagem de programação é mais comumente usada para programar microcontroladores em projetos Cansat?",
    answers: ["Python", "Java", "C/C++", "JavaScript"],
    correctAnswer: 2,
    explanation: "C e C++ são as linguagens mais utilizadas para programar microcontroladores em projetos Cansat, oferecendo controle direto do hardware e eficiência.",
    points: 15
  },
  {
    id: 4,
    category: "Mecânica Celeste",
    question: "Qual é a velocidade orbital aproximada necessária para um satélite permanecer em órbita baixa da Terra (LEO)?",
    answers: ["3 km/s", "5 km/s", "8 km/s", "11 km/s"],
    correctAnswer: 2,
    explanation: "Para permanecer em órbita baixa da Terra, um satélite precisa manter uma velocidade orbital de aproximadamente 7,8 km/s (cerca de 28.000 km/h).",
    points: 15
  },
  {
    id: 5,
    category: "Missão Cansat",
    question: "Qual dos seguintes sensores NÃO é tipicamente encontrado em um Cansat básico?",
    answers: ["Sensor de temperatura", "Sensor de pressão atmosférica", "Sensor de radiação nuclear", "Acelerômetro"],
    correctAnswer: 2,
    explanation: "Sensores de radiação nuclear não são comumente incluídos em Cansats básicos. Os sensores típicos incluem temperatura, pressão, umidade e GPS.",
    points: 10
  },
  {
    id: 6,
    category: "Programação",
    question: "O que é um array em programação?",
    answers: [
      "Uma função matemática",
      "Uma estrutura de dados que armazena múltiplos valores do mesmo tipo",
      "Um tipo de loop",
      "Um operador lógico"
    ],
    correctAnswer: 1,
    explanation: "Um array é uma estrutura de dados que permite armazenar múltiplos valores do mesmo tipo. Em projetos Cansat, arrays são usados para armazenar leituras de sensores.",
    points: 10
  },
  {
    id: 7,
    category: "Mecânica Celeste",
    question: "Qual lei de Kepler descreve que os planetas se movem em órbitas elípticas com o Sol em um dos focos?",
    answers: [
      "Primeira Lei (Lei das Órbitas)",
      "Segunda Lei (Lei das Áreas)",
      "Terceira Lei (Lei dos Períodos)",
      "Lei da Gravitação Universal"
    ],
    correctAnswer: 0,
    explanation: "A Primeira Lei de Kepler estabelece que todos os planetas se movem em órbitas elípticas, com o Sol ocupando um dos focos da elipse.",
    points: 15
  },
  {
    id: 8,
    category: "Missão Cansat",
    question: "Qual é o principal desafio durante a descida de um Cansat após ser lançado?",
    answers: [
      "Manter a temperatura constante",
      "Controlar a velocidade de descida para evitar danos no pouso",
      "Manter contato visual com a base",
      "Evitar colisões com aviões"
    ],
    correctAnswer: 1,
    explanation: "O principal desafio é controlar a velocidade de descida para garantir um pouso seguro, geralmente usando um paraquedas.",
    points: 15
  },
  {
    id: 9,
    category: "Programação",
    question: "Em um programa para Cansat, para que serve a função 'delay()' ou 'sleep()'?",
    answers: [
      "Para deletar dados da memória",
      "Para pausar a execução do programa por um período de tempo",
      "Para acelerar o processamento",
      "Para enviar dados por telemetria"
    ],
    correctAnswer: 1,
    explanation: "A função delay() pausa a execução do programa. Em Cansats, isso controla a frequência de leitura dos sensores e economiza bateria.",
    points: 10
  },
  {
    id: 10,
    category: "Engenharia Aeroespacial",
    question: "O que significa a sigla 'GPS' usada em sistemas de navegação de Cansats?",
    answers: [
      "General Position System",
      "Global Positioning System",
      "Gravitational Pressure Sensor",
      "Guided Propulsion System"
    ],
    correctAnswer: 1,
    explanation: "GPS significa Global Positioning System. É usado em Cansats para rastrear posição, altitude e velocidade durante o voo.",
    points: 10
  }
];
