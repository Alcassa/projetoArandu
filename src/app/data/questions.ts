export interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: number;
  explanation: string;
  points: number;
}

export const questionsByTheme: Record<string, Question[]> = {
  "Mecânica / astronáutica": [
    {
      id: 1,
      question: "Qual é a principal força responsável por manter os satélites em órbita ao redor da Terra?",
      answers: ["Força magnética", "Força gravitacional", "Força centrífuga", "Força de atrito"],
      correctAnswer: 1,
      explanation: "A força gravitacional é a responsável por manter os satélites em órbita. Ela atua como uma força centrípeta, puxando o satélite em direção ao centro da Terra.",
      points: 10
    },
    {
      id: 2,
      question: "Um satélite está orbitando a Terra a 400 km de altitude. Em qual categoria de órbita ele se encontra?",
      answers: ["HEO (High Earth Orbit)", "GEO (Geoestacionária)", "MEO (Medium Earth Orbit)", "LEO (Low Earth Orbit)"],
      correctAnswer: 3,
      explanation: "As órbitas LEO ficam aproximadamente entre 180 km e 2.000 km de altitude.",
      points: 15
    },
    {
      id: 3,
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
      question: "Qual sistema atua nos motores ou rodas de reação para corrigir a orientação do satélite?",
      answers: [
        "Navegação",
        "Guiagem",
        "Controle",
        "Energia"
      ],
      correctAnswer: 2,
      explanation: "O sistema de controle atua nos atuadores (motores, rodas de reação) para corrigir a orientação e manter o satélite na atitude desejada.",
      points: 15
    },
    {
      id: 25,
      question: "Qual é a faixa de massa típica de um picossatélite?",
      answers: ["0,1 kg a 1 kg", "Entre 1 kg e 10 kg", "Entre 10 kg e 100 kg", "Mais de 100 kg"],
      correctAnswer: 0,
      explanation: "Picossatélites são satélites extremamente pequenos, com massa entre 0,1 kg e 1 kg, utilizados principalmente para experimentos de baixo custo e demonstração tecnológica.",
      points: 15
    },
    {
      id: 26,
      question: "Qual é a diferença entre sensores inerciais e sensores de referência em um satélite?",
      answers: [
        "Sensores inerciais medem forças que atuam sobre o VE e que alteram seu movimento; sensores de referência observam objetos externos (Sol, estrelas, Terra) ao VE.",
        "Sensores inerciais geram energia; sensores de referência armazenam dados.",
        "Sensores inerciais servem apenas para comunicação.",
        "Não há diferença entre eles."
      ],
      correctAnswer: 0,
      explanation: "Sensores inerciais (acelerômetros e giroscópios) medem forças e rotações que atuam sobre o veículo, enquanto sensores de referência (sensores solares, estrelares, GPS) observam objetos externos para determinar posição e orientação.",
      points: 15
    },
  ],
  "Introdução a astronáutica 2": [
    {
      id: 1,
      question: "Dois corpos de massas 10 kg e 20 kg estão separados por 2 m. Considerando G = 6,67 × 10⁻¹¹ N·m²/kg², qual é a força gravitacional entre eles?",
      answers: ["3,34 × 10⁻¹⁰ N", "6,67 × 10⁻¹⁰ N", "1,67 × 10⁻¹⁰ N", "2,00 × 10⁻¹⁰ N"],
      correctAnswer: 0,
      explanation: "Aplicando F = G(m₁m₂)/r²: F = (6,67 × 10⁻¹¹ × 10 × 20)/(2²) = 3,34 × 10⁻¹⁰ N.",
      points: 20
    },
    {
      id: 2,
      question: "Segundo a Primeira Lei de Kepler, as órbitas dos planetas ao redor do Sol possuem qual formato?",
      answers: ["Circular", "Parabólico", "Elíptico", "Hiperbólico"],
      correctAnswer: 2,
      explanation: "A Primeira Lei de Kepler afirma que os planetas descrevem órbitas elípticas, com o Sol ocupando um dos focos da elipse.",
      points: 10
    },
    {
      id: 3,
      question: "Qual físico formulou a Lei da Gravitação Universal, explicando a atração entre corpos com massa?",
      answers: ["Galileu Galilei", "Johannes Kepler", "Isaac Newton", "Albert Einstein"],
      correctAnswer: 2,
      explanation: "Isaac Newton formulou a Lei da Gravitação Universal, estabelecendo que todos os corpos com massa se atraem mutuamente.",
      points: 10
    },
    {
      id: 4,
      question: "Um objeto realiza Movimento Circular Uniforme em uma trajetória de raio 50 m com velocidade de 20 m/s. Qual é sua aceleração centrípeta?",
      answers: ["4 m/s²", "6 m/s²", "8 m/s²", "10 m/s²"],
      correctAnswer: 2,
      explanation: "Utilizando a expressão acp = v²/r, temos: acp = 20²/50 = 400/50 = 8 m/s².",
      points: 15
    },
    {
      id: 5,
      question: "De acordo com a Segunda Lei de Kepler, o que acontece com a velocidade de um planeta quando ele está mais próximo do Sol?",
      answers: [
        "Diminui",
        "Permanece constante",
        "Aumenta",
        "Torna-se nula"
      ],
      correctAnswer: 2,
      explanation: "A Segunda Lei de Kepler mostra que os planetas varrem áreas iguais em tempos iguais. Portanto, eles se movem mais rapidamente quando estão mais próximos do Sol.",
      points: 10
    },
    {
      id: 6,
      question: "Qual é a principal função de um veículo lançador?",
      answers: [
        "Produzir energia para os satélites",
        "Transportar cargas úteis da Terra até o espaço",
        "Monitorar o clima terrestre",
        "Controlar a orientação dos satélites"
      ],
      correctAnswer: 1,
      explanation: "Os lançadores são responsáveis por levar satélites e outras cargas úteis ao espaço, fornecendo a velocidade necessária para atingir a órbita desejada.",
      points: 10
    },
    {
      id: 7,
      question: "Um satélite de massa 500 kg apresenta aceleração centrípeta de 8 m/s². Qual é a força centrípeta resultante sobre ele?",
      answers: ["500 N", "1.000 N", "2.000 N", "4.000 N"],
      correctAnswer: 3,
      explanation: "Aplicando a Segunda Lei de Newton: F = m·a = 500 × 8 = 4.000 N.",
      points: 15
    },
    {
      id: 8,
      question: "Qual das alternativas apresenta corretamente a ordem histórica dos modelos astronômicos?",
      answers: [
        "Ptolomeu → Copérnico → Kepler → Newton",
        "Copérnico → Ptolomeu → Newton → Galileu",
        "Newton → Kepler → Copérnico → Einstein",
        "Galileu → Einstein → Ptolomeu → Newton"
      ],
      correctAnswer: 0,
      explanation: "O modelo geocêntrico de Ptolomeu foi sucedido pelo heliocentrismo de Copérnico, posteriormente refinado pelas leis de Kepler e explicado pela gravitação de Newton.",
      points: 10
    },
    {
      id: 9,
      question: "Se a distância entre dois corpos dobrar, o que acontece com a força gravitacional entre eles?",
      answers: [
        "Dobra de intensidade",
        "Fica quatro vezes maior",
        "Reduz à metade",
        "Torna-se quatro vezes menor"
      ],
      correctAnswer: 3,
      explanation: "Segundo a Lei da Gravitação Universal, a força gravitacional é inversamente proporcional ao quadrado da distância entre os corpos.",
      points: 10
    },
    {
      id: 10,
      question: "Sabendo que, para os planetas do Sistema Solar, T² = R³, qual será o período orbital de um planeta localizado a 4 UA do Sol?",
      answers: ["4 anos", "6 anos", "8 anos", "16 anos"],
      correctAnswer: 2,
      explanation: "Aplicando a Terceira Lei de Kepler: T² = 4³ = 64. Portanto, T = √64 = 8 anos.",
      points: 15
    },
    {
      id: 11,
      question: "O que é uma órbita cemitério?",
      answers: [
        "Uma órbita usada para lançar satélites.",
        "Uma órbita onde satélites ativos realizam observações da Terra.",
        "Uma órbita para onde satélites são movidos ao final de sua vida útil, reduzindo o risco de colisões.",
        "Uma órbita usada apenas por estações espaciais."
      ],
      correctAnswer: 2,
      explanation: "A órbita cemitério é uma órbita para onde satélites são movidos ao final de sua vida útil, reduzindo o risco de colisões com outros satélites ativos.",
      points: 15
    }
  ],
  "Programação": [
    {
      id: 1,
      question: "Qual é o tipo de variável mais adequado para armazenar a idade de uma pessoa em um programa C?",
      answers: ["int", "double", "char", "float"],
      correctAnswer: 0,
      explanation: "O tipo int é o mais adequado, pois a idade é um número inteiro e o int armazena inteiros.",
      points: 10
    },
    {
      id: 2,
      question: "Se declararmos int x=10%3;, qual será o valor armazenado na variável x?",
      answers: ["3.33", "1", "3", "0"],
      correctAnswer: 1,
      explanation: "O operador % (módulo) retorna o resto da divisão. Como 10 dividido por 3 tem resto 1, x será igual a 1.",
      points: 10
    },
    {
      id: 3,
      question: "Qual dos seguintes operadores é utilizado para verificar se dois valores são exatamente iguais em uma condição if?",
      answers: ["==", "!=", "<=", "="],
      correctAnswer: 0,
      explanation: "O operador de comparação de igualdade em C é o ==. O operador = é apenas de atribuição.",
      points: 10
    },
    {
      id: 4,
      question: "Analise o código: int a=5; int b=10; if(a>0 && b<5). A condição do if será verdadeira ou falsa?",
      answers: ["Falsa", "Erro de sintaxe", "Verdadeira", "Indeterminada"],
      correctAnswer: 0,
      explanation: "a>0 é verdadeiro, mas b<5 é falso. Como o operador && exige que ambas sejam verdadeiras, a condição inteira é falsa.",
      points: 10
    },
    {
      id: 5,
      question: "Qual será o valor da variável resultado após a execução de: int resultado=7/2;",
      answers: ["4", "3", "1", "3.5"],
      correctAnswer: 1,
      explanation: "Como resultado é do tipo int, a divisão de inteiros 7/2 retorna 3 (a parte decimal é descartada).",
      points: 10
    },
    {
      id: 6,
      question: "Como se escreve corretamente a estrutura para executar um código caso a condição do if não seja atendida?",
      answers: ["else { ... }", "else (condição) { ... }", "if false { ... }", "otherwise { ... }"],
      correctAnswer: 0,
      explanation: "A estrutura correta em C é o else { ... }, que executa o bloco quando a condição do if é falsa, sem repetir a condição.",
      points: 10
    },
    {
      id: 7,
      question: "Se int x=5; e executarmos x=x+3;, qual o novo valor de x?",
      answers: ["3", "5", "8", "x3"],
      correctAnswer: 2,
      explanation: "O comando soma 3 ao valor atual de x. Como x valia 5, x passa a valer 8.",
      points: 10
    },
    {
      id: 8,
      question: "Qual operador lógico deve ser usado para que um código execute se PELO MENOS UMA de duas condições for verdadeira?",
      answers: ["!", "||", "==", "&&"],
      correctAnswer: 1,
      explanation: "O operador || (OU lógico) retorna verdadeiro se pelo menos uma das condições for verdadeira.",
      points: 10
    }
  ]
};

export type QuizTheme = keyof typeof questionsByTheme;
