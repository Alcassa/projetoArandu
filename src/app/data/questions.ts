export interface Question {
  id: number;
  category: string;
  question: string;
  answers: string[];
  correctAnswer: number;
  explanation: string;
  points: number;
}

export const questionsByTheme: Record<string, Question[]> = {
  "Mecânica Celeste": [
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
      category: "Mecânica Celeste",
      question: "Qual é a velocidade orbital aproximada necessária para um satélite permanecer em órbita baixa da Terra (LEO)?",
      answers: ["3 km/s", "5 km/s", "8 km/s", "11 km/s"],
      correctAnswer: 2,
      explanation: "Para permanecer em órbita baixa da Terra, um satélite precisa manter uma velocidade orbital de aproximadamente 7,8 km/s (cerca de 28.000 km/h).",
      points: 15
    },
    {
      id: 3,
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
    }, {
      id: 15,
      category: "Mecânica Celeste",
      question: "Por que o planeta Terra não sai vagando pelo espaço?",
      answers: [
        "Porque a força da gravidade entre o Sol e a Terra age como força centrípeta causando o movimento orbital.",
        "Porque a força da gravidade entre os outros planetas e a Terra faz com que o planeta esteja constantemente com sua posição sendo reajustada.",
        "Pois todos os astros se movimentam na mesma direção e sentido, portanto eles ficarão sempre juntos.",
        "Porque não existe atrito suficiente no espaço para alterar suatrajetória."
      ],
      correctAnswer: 0,
      explanation: "A gravidade exercida pelo Sol fornece a força centrípeta necessária para manter a Terra em órbita.",
      points: 15
    },
    {
      id: 17,
      category: "Mecânica Celeste",
      question: "O que é a unidade astronômica e qual o seu valor?",
      answers: [
        "É a distância média entre a Terra e a Lua, vale aproximadamente 50 milhões de quilômetros.",
        "É a distância média entre o Sol e a Terra, vale aproximadamente 50 milhões de quilômetros.",
        "É a distância média entre o Sol e a Terra, vale aproximadamente 150 milhões de quilômetros.",
        "É a distância média entre Marte e o Sol, vale aproximadamente 150 milhões de quilômetros."
      ],
      correctAnswer: 2,
      explanation: "Uma Unidade Astronômica (UA) corresponde à distância média entre a Terra e o Sol, cerca de 150 milhões de quilômetros.",
      points: 15
    }, {
      id: 18,
      category: "Mecânica Celeste",
      question: "Qual o período de translação de Marte, em anos, sabendo que o raio da órbita é de 1,524 UA? (Use T²/R³ = 1)",
      answers: [
        "Aproximadamente 1,88 mil anos.",
        "Aproximadamente 1,88 anos.",
        "Aproximadamente 18,8 anos.",
        "Aproximadamente 0,88 anos."
      ],
      correctAnswer: 1,
      explanation: "T² = R³ = (1,524)³ ≈ 3,54. Logo T ≈ √3,54 ≈ 1,88 anos.",
      points: 25
    },
    {
      id: 22,
      category: "Mecânica Celeste",
      question: "O que diz a Lei da Gravitação Universal?",
      answers: [
        "Um corpo em repouso tende a permanecer em repouso, e um corpo em movimento tende a permanecer em movimento.",
        "Dois corpos atraem-se com força proporcional às suas massas e inversamente proporcional ao quadrado da distância que separa seus centros.",
        "Dois corpos atraem-se com força inversamente proporcional às suas massas e proporcional ao quadrado da distância que separa seus centros.",
        "A força gravitacional depende apenas da massa do maior corpo."
      ],
      correctAnswer: 1,
      explanation: "A Lei da Gravitação Universal de Newton estabelece que a força gravitacional é proporcional ao produto das massas e inversamente proporcional ao quadrado da distância.",
      points: 15
    },
    {
      id: 23,
      category: "Mecânica Celeste",
      question: "O que diz a Primeira Lei das Órbitas?",
      answers: [
        "Planetas desenvolvem órbitas circulares com o Sol ocupando o centro.",
        "Planetas desenvolvem órbitas elípticas com o Sol ocupando o centro.",
        "Planetas desenvolvem órbitas elípticas com o Sol ocupando um dos focos.",
        "Planetas desenvolvem órbitas parabólicas com o Sol ocupando o vértice."
      ],
      correctAnswer: 2,
      explanation: "A Primeira Lei de Kepler afirma que os planetas descrevem órbitas elípticas com o Sol em um dos focos.",
      points: 15
    },

  ],
  "Programação": [
    {
      id: 4,
      category: "Programação",
      question: "Qual linguagem de programação é mais comumente usada para programar microcontroladores em projetos Cansat?",
      answers: ["Python", "Java", "C/C++", "JavaScript"],
      correctAnswer: 2,
      explanation: "C e C++ são as linguagens mais utilizadas para programar microcontroladores em projetos Cansat, oferecendo controle direto do hardware e eficiência.",
      points: 15
    },
    {
      id: 5,
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
      id: 6,
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
    }
  ],
  "Eletrônica": [
    {
      id: 7,
      category: "Eletrônica",
      question: "Qual dos seguintes sensores NÃO é tipicamente encontrado em um Cansat básico?",
      answers: ["Sensor de temperatura", "Sensor de pressão atmosférica", "Sensor de radiação nuclear", "Acelerômetro"],
      correctAnswer: 2,
      explanation: "Sensores de radiação nuclear não são comumente incluídos em Cansats básicos. Os sensores típicos incluem temperatura, pressão, umidade e GPS.",
      points: 10
    },
    {
      id: 8,
      category: "Eletrônica",
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
    },
    {
      id: 9,
      category: "Eletrônica",
      question: "Em um circuito, o que faz um resistor?",
      answers: [
        "Armazena energia elétrica",
        "Limita o fluxo de corrente elétrica",
        "Gera energia elétrica",
        "Aumenta a voltagem"
      ],
      correctAnswer: 1,
      explanation: "O resistor é um componente eletrônico que se opõe à passagem da corrente elétrica, limitando seu fluxo no circuito.",
      points: 10
    },
    {
      id: 24,
      category: "Eletrônica",
      question: "O que é um giroscópio?",
      answers: [
        "É um sensor que mede velocidades angulares em um ou mais eixos do veículo.",
        "É um sensor que mede a aceleração própria do veículo.",
        "É um sensor que mede temperatura do veículo.",
        "É um sensor utilizado para medir pressão atmosférica."
      ],
      correctAnswer: 0,
      explanation: "O giroscópio mede velocidade angular em um ou mais eixos, permitindo determinar mudanças de orientação do veículo.",
      points: 15
    }
  ],
  "Desenho Técnico": [
    {
      id: 10,
      category: "Desenho Técnico",
      question: "Qual instrumento é tradicionalmente usado em desenho técnico para traçar linhas paralelas e medir ângulos juntamente com uma régua T?",
      answers: ["Compasso", "Esquadro", "Transferidor", "Escalímetro"],
      correctAnswer: 1,
      explanation: "Os esquadros (de 45° e 60°) são frequentemente utilizados apoiados na régua T ou régua paralela para traçar linhas verticais e inclinadas.",
      points: 10
    },
    {
      id: 11,
      category: "Desenho Técnico",
      question: "O que indica a hachura em um desenho técnico de peça mecânica?",
      answers: [
        "A superfície externa da peça",
        "O tipo de acabamento superficial",
        "As partes maciças que foram cortadas imaginaramente",
        "Apenas decoração do desenho"
      ],
      correctAnswer: 2,
      explanation: "As hachuras são usadas para destacar e indicar as áreas onde ocorreu o 'corte' imaginário da peça, mostrando que o material é maciço ali.",
      points: 15
    },
    {
      id: 12,
      category: "Desenho Técnico",
      question: "Na leitura de uma cota de diâmetro, qual símbolo é utilizado antes do valor numérico?",
      answers: ["R", "Ø (Phi)", "Δ (Delta)", "C"],
      correctAnswer: 1,
      explanation: "O símbolo Ø (letra grega Phi cortada) é usado antes do número para indicar que a cota representa o diâmetro da forma circular ou cilíndrica.",
      points: 10
    }
  ]
};

export type QuizTheme = keyof typeof questionsByTheme;
