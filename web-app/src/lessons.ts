import { ActivitiesDataType } from './types/apps/ActivitiesTypes';

export const activitiesObj: ActivitiesDataType = {
  // lista de atividades
  activities: [
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    // TIPOS BÁSICOS
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
          typeItem: 'ItemQuestion',
          correct: false
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
          typeItem: 'ItemQuestion',
          correct: false
        }
      ]
    },
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    // CLASSES
    {
      title: 'CLASSES',
      order: 0,
      done: false,
      // Lições
      lessons: [
        {
          // bloco de texto
          content:
            'O princípio da orientação a objetos em Java é a classe, que é uma combinação de dados e comportamento (métodos). Os campos e métodos de uma classe são conhecidos como seus membros.\nO acesso aos membros pode ser controlado por modificadores de acesso, sendo os dois mais comuns:\npublic: o membro pode ser acessado por qualquer código (sem restrições).\nprivate: o membro só pode ser acessado por código na mesma classe.\nVocê pode pensar em uma classe como um modelo para criar instâncias dessa classe. Para criar uma instância de uma classe (também conhecida como objeto), é utilizado a palavra-chave new:',
          typeItem: 'ItemText'
        },
        {
          // pergunta
          query:
            'Na programação orientada a objetos em Java, qual é a finalidade dos modificadores de acesso em relação aos membros de uma classe?',
          // lista de opções
          options: [
            {
              answer: 'Controlar a criação de objetos',
              obs: 'normalmente exercido através do uso de construtores',
              value: false
            },
            {
              answer: 'Determinar a instância da classe',
              obs: 'um objeto é criado a partir de uma classe em Java usando a palavra-chave new',
              value: false
            },
            {
              answer: 'Gerenciar a visibilidade dos membros da classe',
              obs: 'O gerenciamento da visibilidade dos membros da classe (como variáveis, métodos, construtores) é alcançado através do uso de modificadores de acesso (public, private, protected e padrão)',
              value: true
            },
            {
              answer: 'Definir o comportamento dos métodos',
              obs: 'Os métodos em uma classe Java representam comportamentos ou ações que um objeto dessa classe pode realizar',
              value: false
            }
          ],
          selected_index: -1,
          typeItem: 'ItemQuestion',
          correct: false
        },
        {
          // bloco de código
          content: 'class Barco {\n}\n// Criar duas instâncias de barco\nBarco meuBarco = new Barco();\nBarco seuBarco = new Barco();',
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
            'Os campos têm um tipo e um nome (definido em camelCase) e podem ser definidos em qualquer lugar em uma classe (por convenção, em PascalCase):',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 'class Barco {\n// Acessível por qualquer um\npublic int peso;\n\n// Apenas acessível pelo código nesta classe\nprivate String cor;\n}',
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
            'Opcionalmente, pode-se atribuir um valor inicial a um campo. Se um campo não especificar um valor inicial, ele será definido para o valor padrão de seu tipo. Os valores dos campos de uma instância podem ser acessados e atualizados usando a notação de ponto.',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 'class Barco {\n// A variável ficará com o valor especificado (1500)\npublic int peso = 1500;\n\n// Será definido para o valor padrão (0)\npublic int ano;\n}\n\nBarco novoBarco = new Barco();\nnovoBarco.peso;                           // => 1500\nnovoBarco.ano; // Valor padrão => 0\n\n// Atualizar o valor do campo\nnovoBarco.ano = 2018;    // Atualiza valor do campo para 2018',
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
            'Normalmente, os campos privados são atualizados como um efeito colateral da chamada de um método. Tais métodos geralmente não retornam nenhum valor, nesse caso, o tipo de retorno deve ser void:',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 'class ImportadorDeBarco {\n private int barcosImportados;\n   public void importarBarcos(int numeroDeBarcos)\n    {\n     // Atualizar um campo privado usando do método público\n     barcosImportados = barcosImportados + numeroDeBarcos;\n    }\n   }',
          typeItem: 'ItemExampleCode'
        },
        {
          // pergunta
          query:
            'Qual é a palavra-chave utilizada em Java para criar uma instância de uma classe, também conhecida como um objeto?',
          // lista de opções
          options: [
            {
              answer: 'build',
              obs: 'compilação de código fonte',
              value: false
            },
            {
              answer: 'create',
              obs: 'processo de instanciar objetos',
              value: false
            },
            {
              answer: 'new',
              obs: 'palavra-chave usada para alocar memória e criar uma instância da classe',
              value: true
            },
            {
              answer: 'instance',
              obs: 'objeto específico criado a partir de uma classe',
              value: false
            }
          ],
          selected_index: -1,
          typeItem: 'ItemQuestion',
          correct: false
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
    },
     //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    // IF-ELSE
    {
      title: 'IF-ELSE',
      order: 0,
      done: false,
      // Lições
      lessons: [
        {
          // bloco de texto
          content:
            'ARITIMÉTICA\nA aritmética é realizada usando os operadores aritméticos padrão. Números podem ser comparados usando os operadores de comparação numérica padrão (por exemplo, 2 > 1 e 10 <= 20) e os operadores de igualdade (==) e desigualdade (!=).\n\nJava possui dois tipos de conversões numéricas:\n\nConversões implícitas: nenhum dado será perdido e nenhuma sintaxe adicional é necessária.\n\nConversões explícitas: dados podem ser perdidos e é necessária sintaxe adicional na forma de um cast.\n\nComo um int tem menos precisão do que um double, converter de um int para um double é seguro e, portanto, é uma conversão implícita. No entanto, converter de um double para um int poderia significar perder dados, então isso requer uma conversão explícita.',
          typeItem: 'ItemText'
        },
        {
          // pergunta
          query:
            'Quais são os operadores de comparação numérica padrão utilizados em Java?',
          // lista de opções
          options: [
            {
              answer: '==, =, <=',
              obs: 'Existem mais operadores!',
              value: false
            },
            {
              answer: '=, <>, =>',
              obs: 'Não são operadores!',
              value: false
            },
            {
              answer: '==, !=, <=, >=, >, <',
              obs: 'Possui os operadores utilizados!',
              value: true
            },
            {
              answer: ' <, >, ==, =',
              obs: '"=" não é um operador',
              value: false
            }
          ],
          selected_index: -1,
          typeItem: 'ItemQuestion',
          correct: false
        },
        {
          // bloco de texto
          content:
          'DECLARAÇÕES IF-ELSE\n\nA declaração if-then\n\nA declaração de fluxo de controle mais básica em Java é a declaração if-then. Esta declaração é usada para executar apenas uma seção de código se uma condição específica for verdadeira. Uma declaração if-then é definida usando a cláusula if:',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 
          `class Barco {
            void pilotar() {
              
              // a cláusula "if": o barco precisa ter combustível para pilotar
              if (combustivel > 0) {
              // a cláusula "then": o barco pilota, consumindo combustível  
              combustivel--;
              }
            }
          }`,   
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
          `No exemplo mostrado, se o barco estiver sem combustível, chamar o método Barco.pilotar() não fará nada.`,
          typeItem: 'ItemText'
        },
        {
          // pergunta
          query:
            'Qual é o propósito da cláusula "if" em uma declaração if-then em Java, conforme exemplificado no código fornecido?',
          // lista de opções
          options: [
            {
              answer: 'Executar uma seção de código se uma condição for verdadeira.',
              obs: 'Quando a expressão dentro do if é avaliada como verdadeira, o bloco de código dentro do if é executado',
              value: true
            },
            {
              answer: 'Executar uma seção de código se uma condição for falsa',
              obs: 'Isso só ocorre quando a condição for verdadeira, caso contrário, não ocorre nada.',
              value: false
            },
            {
              answer: 'Interromper o fluxo do programa se uma condição for verdadeira',
              obs: 'Para interromper o fluxo do programa quando uma condição é atendida, é utilizado a instrução break ou return. ',
              value: false
            },
            {
              answer: 'Executar uma seção de código independentemente da condição',
              obs: 'Esse é o papel do else (será visto nos próximos parágrafos) após a verificação da condição if estiver incorreta ',
              value: false
            }
          ],
          selected_index: -1,
          typeItem: 'ItemQuestion',
          correct: false
        },
        {
          // bloco de texto
          content:
          `A declaração if-then-else\n\nA declaração if-then-else fornece um caminho alternativo de execução quando a condição na cláusula if avalia como falsa. Este caminho alternativo de execução segue uma cláusula if e é definido usando a cláusula else:`,
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 
          `class Barco {
            void barco() {
              if (combustivel > 0) {
              combustivel--;
              } else {
              parar();
              }
            }
          }`,
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
          'No exemplo acima, se o barco estiver sem combustível, chamar o método Barco.pilotar irá chamar outro método para parar o barco.\n\nA declaração if-then-else também suporta múltiplas condições usando a cláusula else if:'
          ,typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 
          `class Barco {
            void pilotar() {
              if (combustivel > 5) {
              combustivel--;
              } else if (combustivel > 0) {
              ligarLuzCombustivel();
              combustivel--;
              } else {
              parar();
              }
            }
          }`,
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
          'No exemplo acima, pilotar o barco quando o combustível for menor ou igual a 5 fará o barco se mover, mas também ligará a luz de combustível. Quando o combustível chegar a 0, o barco vai parar de se mover.',
          typeItem: 'ItemText'
        },
        {
          // pergunta
          query:
            'Qual é a finalidade principal da cláusula "else" em uma declaração if-then-else em Java, conforme exemplificado no código fornecido?',
          // lista de opções
          options: [
            {
              answer: 'Executar uma seção de código se a condição na cláusula "if" for verdadeira',
              obs: 'A cláusula "if" em Java permite executar um bloco de código se a condição especificada for avaliada como verdadeira. Se a condição for verdadeira, o bloco de código dentro do "if" é executado, caso contrário, é ignorado.',
              value: false
            },
            {
              answer: 'Parar imediatamente a execução do programa se a condição na cláusula "if" for falsa',
              obs: 'A cláusula if por si só não para imediatamente a execução do programa se a condição for falsa. Ela simplesmente executa o código dentro do bloco if se a condição for verdadeira e, se for falsa, o programa continua a executar o código após o bloco if.',
              value: false
            },
            {
              answer: 'Fornecer um caminho alternativo de execução caso a condição na cláusula "if" seja falsa.',
              obs: 'Em Java, isso pode ser alcançado usando a estrutura "if-else". Se a condição na cláusula "if" for falsa, o bloco de código dentro do "else" será executado, fornecendo um caminho alternativo de execução para o programa.',
              value: true
            },
            {
              answer: 'Executar uma seção de código independentemente da condição na cláusula "if".',
              obs: 'Para executar um bloco de código independentemente da condição na cláusula "if", pode-se optar por um bloco de código após o bloco "if" sem nenhuma ligação a uma condição específica ou usar a estrutura "else" para tratar o caminho alternativo, caso a condição "if" não seja satisfeita.',
              value: false
            }
          ],
          selected_index: -1,
          typeItem: 'ItemQuestion',
          correct: false
        },
        {
          // pergunta
          query:
            'Qual é a diferença entre a declaração if-then e a declaração if-then-else em Java?',
          // lista de opções
          options: [
            {
              answer: 'A declaração if-then-else não pode suportar múltiplas condições, enquanto a declaração if-then pode.',
              obs: 'A estrutura if-then-else em Java permite criar bifurcações condicionais simples, onde um bloco de código é executado se a condição for verdadeira e outro bloco é executado se a condição for falsa. No entanto, não permite a inclusão de múltiplas condições diferentes a serem verificadas como na declaração if-then que pode ser encadeada por meio de else if.',
              value: false
            },
            {
              answer: 'A declaração if-then-else não possui um bloco de código associado à condição "else", enquanto a declaração if-then possui.',
              obs: 'Na estrutura if-then-else, ambos os blocos, "if" e "else", devem estar presentes. Se a condição "if" não for atendida, o bloco "else" é executado. Por outro lado, a estrutura if-then pode ser usada para executar um único bloco de código se a condição for verdadeira, sem a necessidade de um bloco "else" associado.',
              value: false
            },
            {
              answer: 'A declaração if-then-else é usada para executar uma seção de código se uma condição for verdadeira; se a condição for falsa, outra seção de código é executada, definida na cláusula "else". A declaração if-then é usada somente para a execução de uma seção de código se a condição for verdadeira.',
              obs: 'A estrutura if-then-else em Java permite a execução de um bloco de código se a condição especificada no "if" for verdadeira e executa um bloco alternativo (do "else") se a condição não for verdadeira. Isso proporciona a capacidade de escolher entre duas opções de execução com base na condição avaliada.',
              value: true
            },
            {
              answer: 'Ambas são equivalentes e podem ser usadas indistintamente para controle de fluxo condicional.',
              obs: 'A declaração if-then-else é usada quando é necessário executar um bloco de código se uma condição for verdadeira e outro se a condição for falsa, enquanto a declaração if-then é usada quando apenas um bloco de código precisa ser executado se a condição for verdadeira, sem uma alternativa para o caso falso. ',
              value: false
            }
          ],
          selected_index: -1,
          typeItem: 'ItemQuestion',
          correct: false
        }
      ]
    },
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    // ARRAY-VETOR
    {
      title: 'ARRAYS',
      order: 0,
      done: false,
      // Lições
      lessons: [
        {
          // bloco de texto
          content:
          'Em Java, estruturas de dados que podem conter zero ou mais elementos são conhecidas como coleções. Um array é uma coleção que tem um tamanho fixo e cujos elementos devem ser todos do mesmo tipo. Elementos podem ser atribuídos a um array ou recuperados dele usando um índice.\n\n Os arrays em Java utilizam indexação baseada em zero: o índice do primeiro elemento é 0, o índice do segundo elemento é 1, e assim por diante.\n\nAqui está a sintaxe padrão para inicializar um array:',
          typeItem: 'ItemText'
        },
        {
          // pergunta
          query:
            'Qual é o tipo de indexação usado em arrays em Java, onde o índice do primeiro elemento é 0, o segundo é 1 e assim por diante?',
          // lista de opções
          options: [
            {
              answer: 'Indexação Zero',
              obs: 'Não é uma exceção válida em Java. A exceção correta é "ArrayIndexOutOfBoundsException", que ocorre quando se tenta acessar um índice inválido em um array.',
              value: true
            },
            {
              answer: 'Indexação Um',
              obs: 'Não é a prática comum em linguagens de programação como Java, C, C++, ou Python. A indexação de arrays normalmente começa em zero nessas linguagens, não em um.',
              value: false
            },
            {
              answer: 'Indexação Invertida',
              obs: 'Não é uma convenção comum em linguagens como Java, C, C++, ou Python. A indexação invertida não é um padrão típico para acessar elementos em arrays. Em muitas linguagens, a indexação de arrays é sequencial e não invertida.',
              value: false
            },
            {
              answer: 'Indexação Baseada em Dois',
              obs: 'Não é o método padrão em linguagens de programação convencionais como Java, C, C++, ou Python. O sistema de indexação de arrays nessas linguagens geralmente começa em zero (indexação zero) e não em dois.',
              value: false
            }
          ],
          selected_index: -1,
          typeItem: 'ItemQuestion',
          correct: false
        },
        {
          // bloco de código
          content: 'tipo[] nomeVariavel = new tipo[tamanho];',
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
          'O "tipo" é o tipo de elementos no array, que pode ser um tipo primitivo (por exemplo, int) ou uma classe (por exemplo, String).\n\nO "tamanho" é o número de elementos que este array conterá (o qual não pode ser alterado posteriormente). Após a criação do array, os elementos são inicializados com seus valores padrão (tipicamente 0, false ou null).',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 
          `// Declarar um array com tamanho explícito (tamanho é 5)
          int[] cincoInteiros = new int[5];
          `,
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
          'Arrays também podem ser definidos usando uma notação abreviada que permite criar o array e definir seus valores:',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 
          `// Duas formas equivalentes de declarar e inicializar um array (tamanho é 2)
          int[] doisInteirosV1 = new int[] { 1, 2 };
          int[] doisInteirosV2 = { 1, 2 };
          ;
          `,
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
          'Como o compilador agora pode saber quantos elementos o array terá, o comprimento não precisa ser declarado.\n\nOs elementos do array podem ser atribuídos e acessados usando uma notação de índice entre colchetes:',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 
          `// Atribuir o segundo elemento pelo índice
          doisInteiros[1] = 2;    // pega o segundo valor do array
          
          // Recuperar o segundo elemento pelo índice e atribuir ao elemento int
          int segundoElemento = doisInteiros[1];
          `,
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
          'Acessar um índice que está fora dos índices válidos para o array resulta na exceção “IndexOutOfBoundsException”.\n\nOs arrays podem ser manipulados chamando os métodos ou propriedades de uma instância de array, ou utilizando os métodos estáticos definidos na classe Arrays (tipicamente usados apenas em código genérico). A propriedade mais comumente usada para arrays é o seu comprimento, que pode ser acessado assim:',
          typeItem: 'ItemText'
        },
        {
          // pergunta
          query:
            'Quando se acessa um índice que está fora dos limites válidos para um array em Java, qual exceção é gerada?',
          // lista de opções
          options: [
            {
              answer: ' ArrayOutOfBoundsException',
              obs: 'Não é uma exceção válida em Java. A exceção correta é "ArrayIndexOutOfBoundsException", que ocorre quando se tenta acessar um índice inválido em um array.',
              value: false,
            },
            {
              answer: 'IndexOutOfBoundException',
              obs: 'Esta não é a exceção correta em Java. A exceção correta é "IndexOutOfBoundsException", que é lançada ao tentar acessar um índice inválido em uma estrutura de dados, como em listas ou coleções.',
              value: true
            },
            {
              answer: 'OutOfRangeException',
              obs: 'Esta não é uma exceção específica em Java. Geralmente, é usada a expressão "OutOfRangeException" em outros contextos, mas em Java, a exceção correspondente é "ArrayIndexOutOfBoundsException" ou "IndexOutOfBoundsException".',
              value: false
            },
            {
              answer: 'ArrayIndexOutOfBoundsException',
              obs: 'Esta é a exceção correta em Java, lançada quando se tenta acessar um índice inválido em um array, ou seja, quando se faz referência a um índice que não está dentro dos limites do array.',
              value: false
            }
          ],
          selected_index: -1,
          typeItem: 'ItemQuestion',
          correct: false
        },
        {
          // bloco de código
          content: 
          `int tamanhoArray = algumArray.length;`,
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
          'Java também fornece uma útil classe de utilitário java.util.Arrays que possui muitos métodos úteis relacionados a arrays (por exemplo, Arrays.equals - compara vetores). Dois vetores são considerados iguais se ambas contiverem o mesmo número de elementos e todos os pares de elementos correspondentes dos dois vetores forem iguais. Em outras palavras, dois vetores são iguais se contiverem os mesmos elementos na mesma ordem. Além disso, duas referências de array são consideradas iguais se ambas forem null.\n\nJava também suporta arrays multidimensionais como int[][] arr = new int[3][4]; o que pode ser muito útil.\n\nO fato de que um array é também uma coleção significa que, além de acessar valores por índice, você pode iterar sobre todos os seus valores usando um loop for-each:',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 
          `char[] vogais = { 'a', 'e', 'i', 'o', 'u' };

          for(char vogal: vogais) {
            // Exibir a vogal
            System.out.print(vogal);
          }

          // Saída => aeiou
          `,
          typeItem: 'ItemExampleCode'
        },
        {
          // bloco de texto
          content:
          'Se você deseja ter mais controle sobre quais valores iterar, pode-se usar um loop for:',
          typeItem: 'ItemText'
        },
        {
          // bloco de código
          content: 
          `char[] vogais = { 'a', 'e', 'i', 'o', 'u' };

          for (int i = 0; i < 3; i++) {
          // Exibir a vogal
            System.out.print(vogais[i]);
          }
          
          // Saída  => aei
          
          `,
          typeItem: 'ItemExampleCode'
        }
      ]
    },
    {
      title: 'TIPOS BÁSICOS',
      order: 0,
      done: false,
      // Lições
      lessons: [
        {
          // bloco de texto
          content:
            'Java é uma linguagem de programação de tipagem estática, o que\nsignifica que o tipo de uma variável é conhecido em tempo de compilação. Atribuir um valor a um nome é referido como definir uma variável. Uma variável é definida especificando explicitamente seu tipo.',
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
          typeItem: 'ItemQuestion',
          correct: false
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
          typeItem: 'ItemQuestion',
          correct: false
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
          typeItem: 'ItemQuestion',
          correct: false
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
