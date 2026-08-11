export type RestaUmQuestion = {
  id: number;

  category: string;

  question: string;

  options: string[];

  correct: number;

  hint: string;
};

export const restaUmQuestionsByTheme: Record<string, RestaUmQuestion[]> = {
  "Física": [
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
      id: 9,
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
  ],
  "Programação": [
    {
      id: 25,
      category: "Programação",

      question: "Qual é a função principal de um programa escrito em C?",

      options: [
        "main()",
        "start()",
        "run()",
        "program()"
      ],

      correct: 0,

      hint: "Em C, a execução de um programa começa pela função main(). Ela é o ponto de entrada principal do programa."
    },

    {
      id: 26,
      category: "Programação",

      question: "Qual comando é utilizado para declarar uma variável inteira em C?",

      options: [
        "string",
        "int",
        "integer",
        "number"
      ],

      correct: 1,

      hint: "O tipo int é utilizado para declarar variáveis que armazenam números inteiros, como 10, 25 ou -3."
    },

    {
      id: 27,
      category: "Programação",

      question: "Qual operador é utilizado para atribuir um valor a uma variável em C?",

      options: [
        "==",
        "=",
        "!=",
        "=>"
      ],

      correct: 1,

      hint: "O operador = é utilizado para atribuição. Por exemplo: int velocidade = 10; atribui o valor 10 à variável velocidade."
    },

    {
      id: 28,
      category: "Programação",

      question: "Qual é o resultado da expressão 5 + 3 * 2 em C?",

      options: [
        "16",
        "11",
        "13",
        "10"
      ],

      correct: 1,

      hint: "A multiplicação possui prioridade sobre a adição. Portanto, primeiro é calculado 3 * 2 = 6 e depois 5 + 6 = 11."
    },

    {
      id: 29,
      category: "Programação",

      question: "Qual estrutura condicional é utilizada em C para executar um bloco de código apenas quando uma condição é verdadeira?",

      options: [
        "for",
        "while",
        "if",
        "switch"
      ],

      correct: 2,

      hint: "A estrutura if permite executar um determinado bloco de código somente quando uma condição especificada é verdadeira."
    },

    {
      id: 30,
      category: "Programação",

      question: "Qual estrutura de repetição é mais adequada quando se sabe previamente quantas vezes um bloco de código deve ser executado?",

      options: [
        "if",
        "for",
        "switch",
        "return"
      ],

      correct: 1,

      hint: "O laço for é normalmente utilizado quando o número de repetições é conhecido ou pode ser controlado por um contador."
    },

    {
      id: 31,
      category: "Programação",

      question: "Qual será o valor da variável x após a execução do código abaixo?\n\nint x = 5;\nx = x + 3;",

      options: [
        "3",
        "5",
        "8",
        "15"
      ],

      correct: 2,

      hint: "A variável x começa com o valor 5. Na segunda linha, 3 é somado ao valor atual, resultando em x = 8."
    },

    {
      id: 32,
      category: "Programação",

      question: "Qual tipo de dado deve ser utilizado para armazenar um número com casas decimais em C?",

      options: [
        "int",
        "char",
        "float",
        "void"
      ],

      correct: 2,

      hint: "O tipo float é utilizado para armazenar números de ponto flutuante, como 3.14 ou 25.5."
    },

    {
      id: 33,
      category: "Programação",

      question: "Qual operador lógico representa a condição 'E' em C?",

      options: [
        "||",
        "&&",
        "!",
        "=="
      ],

      correct: 1,

      hint: "O operador && representa o operador lógico E. A expressão será verdadeira somente quando as duas condições forem verdadeiras."
    },

    {
      id: 34,
      category: "Programação",

      question: "Qual operador lógico representa a condição 'OU' em C?",

      options: [
        "&&",
        "!",
        "||",
        "=="
      ],

      correct: 2,

      hint: "O operador || representa o operador lógico OU. A expressão será verdadeira quando pelo menos uma das condições for verdadeira."
    },

    {
      id: 35,
      category: "Programação",

      question: "Para que serve um array em C?",

      options: [
        "Para armazenar vários valores do mesmo tipo",
        "Para criar somente números decimais",
        "Para executar um programa repetidamente",
        "Para encerrar a execução de uma função"
      ],

      correct: 0,

      hint: "Um array permite armazenar vários valores do mesmo tipo em uma única estrutura. Ele pode ser utilizado, por exemplo, para armazenar diversas leituras de um sensor."
    },

    {
      id: 36,
      category: "Programação",

      question: "Qual é o índice do primeiro elemento de um array em C?",

      options: [
        "0",
        "1",
        "-1",
        "Depende do tamanho do array"
      ],

      correct: 0,

      hint: "Em C, os índices dos arrays começam em 0. Portanto, em um array chamado dados, o primeiro elemento é dados[0]."
    },

    {
      id: 37,
      category: "Programação",

      question: "Qual função é utilizada para exibir informações no terminal em C?",

      options: [
        "print()",
        "console.log()",
        "printf()",
        "display()"
      ],

      correct: 2,

      hint: "A função printf(), disponível na biblioteca stdio.h, é utilizada para formatar e exibir informações na saída padrão."
    },

    {
      id: 38,
      category: "Programação",

      question: "Qual biblioteca deve ser incluída para utilizar a função printf() em C?",

      options: [
        "stdlib.h",
        "math.h",
        "stdio.h",
        "string.h"
      ],

      correct: 2,

      hint: "A função printf() é declarada na biblioteca stdio.h, que deve ser incluída com #include <stdio.h>."
    },

    {
      id: 39,
      category: "Programação",

      question: "Qual é a finalidade de uma função em C?",

      options: [
        "Armazenar somente números inteiros",
        "Organizar o programa em blocos de código reutilizáveis",
        "Substituir todas as variáveis do programa",
        "Impedir a execução de comandos"
      ],

      correct: 1,

      hint: "Funções permitem dividir um programa em partes menores e organizadas, possibilitando reutilizar determinados blocos de código."
    },

    {
      id: 40,
      category: "Programação",

      question: "Em um sistema embarcado, por que o conhecimento de C é importante?",

      options: [
        "Porque C permite controlar diretamente recursos do hardware e possui boa eficiência computacional.",
        "Porque C funciona somente em computadores de mesa.",
        "Porque C não permite trabalhar com sensores.",
        "Porque C substitui fisicamente os componentes eletrônicos."
      ],

      correct: 0,

      hint: "C é amplamente utilizado em sistemas embarcados devido à sua eficiência e à possibilidade de trabalhar de forma próxima ao hardware, sendo adequado para microcontroladores e sensores."
    }
  ]
};