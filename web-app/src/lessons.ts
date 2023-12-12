import { ActivitiesDataType } from './types/apps/ActivitiesTypes';

export const activitiesObj: ActivitiesDataType = {
  // lista de atividades
  activities: [
    // PRIMEIRO TEMA----------------------------------------------------------------
    {
      title: 'TIPOS BÁSICOS',
      order: 0,
      done: false,
      // Lições
      lessons: [
        {
          // bloco de texto
          content:
            'Java é uma linguagem de programação de tipagem estática, o que significa que o tipo de uma variável é conhecido em tempo de compilação. Atribuir um valor a um nome é referido como definir uma variável. Uma variável é definida especificando explicitamente seu tipo.',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 'int variavelInt = 5;',
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
            'A atualização do valor de uma variável é feita através do operador =. Aqui, o = não representa igualdade matemática. Ele simplesmente atribui um valor a uma variável. Uma vez definida, o tipo de uma variável não pode ser alterado.',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 'int contador = 1; // Atribui um valor inicial \ncontador = 2;     // Atualiza a variável para um novo valor',
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
            'Java é uma linguagem orientada a objetos e requer que todas as funções sejam definidas em uma classe. A palavra-chave class é usada para definir uma classe.',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 'class Calculadora {\n  // ...\n}',
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
            'Uma função dentro de uma classe é chamada de método. Cada método pode ter zero ou mais parâmetros. Todos os parâmetros devem ser explicitamente tipados, não há inferência de tipo para parâmetros. Da mesma forma, o tipo de retorno também deve ser explícito. \nValores são retornados dos métodos usando a palavra-chave “return”. Para permitir que um método seja chamado por outras classes, o modificador de acesso `public` deve ser adicionado.',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 'class Calculadora {\n public int somar(int x, int y) {\n    return x + y;\n }\n}',
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
            'Chamar/invocar um método é feito especificando a classe e o nome do método e passando argumentos para cada um dos parâmetros do método.',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 'int soma = new Calculadora().somar(5, 10);  // aqui o método "somar" realiza a adição',
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
            'O escopo em Java é definido entre o carácter “{“ e o “}”.\nJava suporta dois tipos de comentários. Comentários de linha única são precedidos por // e comentários de várias linhas são inseridos entre /* e */. \n TIPOS PRIMITIVOS\nOs tipos primitivos em Java são os blocos de construção fundamentais para armazenar dados simples. Eles são caracterizados por serem tipos de dados diretos da linguagem, não sendo objetos ou instâncias de classes. Aqui estão os principais tipos primitivos:\nint (inteiro): Armazena números inteiros de 32 bits, sem casas decimais.EXEMPLO:',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 'int peso = 60;',
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
            'long (inteiro longo): Armazena números inteiros de 64 bits, útil para valores inteiros muito grandes.EXEMPLO:',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 'long populacaoBrasileira = 214300000L;',
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
            'short (inteiro curto): Armazena números inteiros de 16 bits, usado quando o espaço é uma preocupação.EXEMPLO:',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 'short tempoMinimo = 1;',
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
            'byte (byte): Armazena números inteiros de 8 bits, útil para economizar espaço em arrays de bytes.EXEMPLO:',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 'byte economizaEspaco = 100;',
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
            'char (caractere): Armazena um único caractere Unicode de 16 bits.EXEMPLO:',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 'char inicial = \'D\';',
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
            'float (ponto flutuante de precisão simples): Armazena números de ponto flutuante de 32 bits, útil para representar valores decimais com precisão razoável.EXEMPLO:',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 'float velocidade = 26.99f;',
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
            'double (ponto flutuante de precisão dupla): Armazena números de ponto flutuante de 64 bits, usado quando é necessária alta precisão em valores decimais.EXEMPLO:',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 'double pi = 3.14159265359;',
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
            'boolean (booleano - verdadeiro/falso): Armazena valores verdadeiro ou falso, frequentemente usados em expressões lógicas e de controle de fluxo.EXEMPLO:',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 'boolean estaAprendendo = true;',
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
            'Os tipos primitivos são eficientes em termos de consumo de memória e velocidade de acesso, pois eles são armazenados diretamente na memória e não envolvem a complexidade das operações de objeto.',
          typeItem: 'ItemText'
        },
        {
          // pergunta
          query:
            'Em Java, qual tipo primitivo é usado para armazenar valores de verdadeiro ou falso?',
          // lista de opções
          options: [
            {
              answer: 'int',
              obs: 'Armazena valores inteiros de 32 bits',
              value: false
            },
            {
              answer: 'boolean',
              obs: 'Armazena valores de verdadeiro ou falso',
              value: true
            },
            {
              answer: 'double',
              obs: 'Armazena valores flutuantes de grande precisão',
              value: false
            },
            {
              answer: 'byte',
              obs: 'Armazena números inteiros de 8 bits (valores pequenos)',
              value: false
            }
          ],
          selected_index: -1,
          typeItem: 'ItemQuestion'
        },
        {
          // bloco de texto
          content:
            'STRINGS\nUma String em Java é um objeto que representa texto imutável como uma sequência de caracteres Unicode (letras, dígitos, pontuação, etc.). Aspas duplas são usadas para definir uma instância de String:',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 'String marca = "Apple";',
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
            'As Strings são manipuladas chamando os métodos da string. Uma vez que uma string foi construída, seu valor nunca pode ser alterado. Quaisquer métodos que pareçam modificar uma string na verdade retornarão uma nova string. A classe String fornece alguns métodos estáticos para transformar as strings.\n BOOLEAN\nOs booleanos em Java são representados pelo tipo booleano, cujos valores podem ser verdadeiro (true) ou falso (false).\nJava suporta três operadores booleanos:\n! (NÃO): nega o booleano\n&& (E): leva dois booleanos em análise e resulta em verdadeiro se ambos forem verdadeiros\n|| (OU): resulta em verdadeiro se qualquer um dos dois booleanos for verdadeiro. EXEMPLOS:',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: '!true // => false\n!false // => true\ntrue && false // => false\ntrue && true // => true\nfalse || false // => false\nfalse || true // => true',
          typeItem: 'ItemExampleCode'
        },
        {
          // pergunta
          query:
            'Qual operador booleano em Java retorna verdadeiro se ambos os booleanos em análise forem verdadeiros?',
          // lista de opções
          options: [
            {
              answer: '&& (E)',
              obs: 'Apenas retorna Verdadeiro se os dois valores forem true',
              value: true
            },
            {
              answer: '! (NÃO)',
              obs: 'Retorna o valor inverso da variavel (valor)',
              value: false
            },
            {
              answer: '|| (OU)',
              obs: 'Apenas retorna Verdadeiro se UM dos dois valores forem true',
              value: false
            },
            {
              answer: 'true',
              obs: 'Valor verdadeiro',
              value: false
            }
          ],
          selected_index: -1,
          typeItem: 'ItemQuestion'
        }
      ]
    },
    {
      title: 'titulo de tarefa 2',
      order: 0,
      done: false,
      // Lições
      lessons: [
        {
          // pergunta
          query:
            'pergunta 1 pergunta 1 pergunta 1 pergunta 1 pergunta 1 pergunta 1 pergunta 1 pergunta 1 pergunta 1 ',
          // lista de opções
          options: [
            {
              answer: 'resposta resposta resposta resposta resposta ',
              obs: 'obs obsobsobsobs',
              value: false
            },
            {
              answer: 'resposta resposta resposta resposta resposta ',
              obs: 'obs obsobsobsobs',
              value: true
            },
            {
              answer: 'resposta resposta resposta resposta resposta ',
              obs: 'obs obsobsobsobs',
              value: false
            }
          ],
          selected_index: -1,
          typeItem: 'ItemQuestion'
        },
        {
          // bloco de código
          content: 'const test = "Hello"; console.log(test);',
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ex neque corrupti, in quasi corporis libero magni mollitia distinctio repellendus atque deleniti iusto molestias sint cum laboriosam, perferendis fugiat ea.',
          typeItem: 'ItemText'
        }
      ]
    }
  ]
};
