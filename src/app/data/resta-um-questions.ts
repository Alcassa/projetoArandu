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
  }
];