import { ActivitiesDataType } from './types/apps/ActivitiesTypes';

export const activitiesObj: ActivitiesDataType = {
  // lista de atividades
  activities: [
    // atividade
    {
      title: 'título da tarefa 1',
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
