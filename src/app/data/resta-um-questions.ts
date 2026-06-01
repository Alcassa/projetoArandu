export type RestaUmQuestion = {
  id: number;

  category: string;

  question: string;

  options: string[];

  correct: number;

  hint: string;
};

export const restaUmQuestions: RestaUmQuestion[] = [
  {
    id: 1,
    category: "Dinâmica",

    question: "Qual é a equação fundamental da Segunda Lei de Newton (Princípio Fundamental da Dinâmica)?",

    options: [
      "F = m * a",
      "E = m * c²",
      "V = d / t",
      "F = G * (m1*m2)/d²"
    ],

    correct: 0,

    hint: "A força resultante é diretamente proporcional à aceleração produzida por um corpo."
  },

  {
    id: 2,
    category: "Cinemática",

    question: "No Movimento Retilíneo Uniforme (MRU), qual destas afirmações é a correta?",

    options: [
      "A velocidade é constante e a aceleração é nula",
      "A aceleração é constante e maior que zero",
      "A velocidade varia uniformemente ao longo do tempo",
      "A trajetória do objeto é sempre circular"
    ],

    correct: 0,

    hint: "Pense no significado da palavra 'Uniforme' aplicada à velocidade de um corpo."
  },

  {
    id: 3,
    category: "Lançamento Vertical",

    question: "Ao lançar um foguete (CanSat) verticalmente para cima, no ponto mais alto da sua trajetória, a sua velocidade é:",

    options: [
      "Zero",
      "Máxima",
      "Igual à aceleração da gravidade",
      "Negativa"
    ],

    correct: 0,

    hint: "Para que um objeto mude de sentido (de subida para descida), ele precisa parar momentaneamente no ar."
  },

  {
    id: 4,
    category: "Dinâmica",

    question: "Qual grandeza física vetorial é responsável por alterar o estado de repouso ou de movimento de um corpo?",

    options: [
      "Massa",
      "Velocidade Escalar",
      "Inércia",
      "Força"
    ],

    correct: 3,

    hint: "É a interação que, quando desequilibrada, causa uma alteração no movimento."
  },

  {
    id: 5,
    category: "Gravitação",

    question: "Em uma queda livre ideal (desprezando totalmente a resistência do ar), um elefante e uma pena soltos da mesma altura cairiam:",

    options: [
      "O elefante cairia muito mais rápido",
      "A pena cairia mais rápido",
      "Exatamente ao mesmo tempo",
      "Depende exclusivamente da altura inicial da queda"
    ],

    correct: 2,

    hint: "A aceleração da gravidade atua igualmente em todos os corpos quando não há resistência do ar."
  },
  {
    id: 6,
    category: "Cinemática",

    question: "Um motorista faz uma viagem em que percorreu 500 km e que teve uma duração de 6,5 horas. Qual foi a velocidade escalar média que o motorista teve na viagem? (Se necessário, usar duas casas decimais)",

    options: [
      "-76,92 km/h",
      "76,92 km/h",
      "83,33 km/h",
      "30 m/s"
    ],

    correct: 1,

    hint: "Utilize a fórmula da velocidade média: Vm = ΔS/Δt."
  },

  {
    id: 7,
    category: "Cinemática",

    question: "Um veículo trafega em uma rodovia com velocidade média de 80 km/h. Sabendo que a viagem teve uma duração de 1 hora e 30 minutos (1,5 h), qual foi a distância percorrida pelo veículo? (Se necessário, usar duas casas decimais)",

    options: [
      "120 m",
      "120 km",
      "53,33 km",
      "53,33 m"
    ],

    correct: 1,

    hint: "Use a relação entre distância, velocidade e tempo: ΔS = Vm·Δt."
  },

  {
    id: 8,
    category: "Cinemática",

    question: "Um cavalo e seu cavaleiro estão correndo para a direita com a velocidade de 21 m/s quando eles passam a linha de chegada e começam a diminuir a velocidade. O cavalo desacelera por 52 m com aceleração constante até parar. Tomando como referencial um sistema de coordenadas em que a direita é positiva, calcule qual era a aceleração do cavalo quando ele estava parando.",

    options: [
      "-3,5 m/s²",
      "-4,5 m/s²",
      "-4,2 m/s²",
      "-3,9 m/s²"
    ],

    correct: 2,

    hint: "A velocidade final é igual a zero. Utilize a equação de Torricelli."
  },

  {
    id: 9 ,
    category: "Cinemática",

    question: "Um carro está indo para a direita com velocidade de magnitude 2,0 m/s numa estrada coberta de gelo quando os freios são acionados. O carro começa a derrapar com aceleração constante por 3,0 m/s² até parar. Usando um sistema de coordenadas em que a direita é positiva, calcule o tempo que o carro demora para parar.",

    options: [
      "4,0 s",
      "3,5 s",
      "2,0 s",
      "3,0 s"
    ],

    correct: 3,

    hint: "Use a equação da velocidade: v = v₀ + a·t."
  },

  {
    id: 10,
    category: "Cinemática",

    question: "Um coelho ligeiro está saltitando para a direita com uma velocidade vetorial de 4,0 m/s quando avista uma cenoura à distância. O coelho acelera até sua velocidade vetorial máxima de 13 m/s com uma aceleração constante de 2,0 m/s² para a direita. Usando um referencial em que o sistema de coordenadas tem a direita como positiva, calcule quantos segundos leva o coelho para acelerar de 4,0 m/s até os 13 m/s.",

    options: [
      "4,0 s",
      "3,5 s",
      "3,0 s",
      "4,5 s"
    ],

    correct: 3,

    hint: "Aplique a equação v = v₀ + a·t."
  },

  {
    id: 11,
    category: "Cinemática",

    question: "Na final de um campeonato, um zagueiro protege o seu campo defensivo chutando a bola em uma velocidade de magnitude 16 m/s. Desconsidere a resistência do ar. Usando como referencial um sistema de coordenadas em que para cima é positivo, calcule o tempo total que a bola demora para atingir sua altura máxima. (Use aceleração da gravidade = 9,8 m/s²)",

    options: [
      "0,56 s",
      "1,63 s",
      "2,34 s",
      "2,12 s"
    ],

    correct: 1,

    hint: "No ponto mais alto da trajetória, a velocidade vertical da bola é igual a zero."
  }
];