import React, { useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import ItemLesson from './components/ItemLesson';
import style from './style.module.css';
import activiesJson from '../../assets/lessons.json';
import {
  ElementType,
  ExampleCodeType,
  OptionType,
  QuestionType,
  TextLessonType
} from '../../types/apps/ActivitiesTypes';
import { Lesson } from '../../model/Lesson';
import ItemQuestion from '../../components/question';
import ExampleCode from '../../components/exampleCode';
import TextLesson from '../../components/text';

const ActivitiesPage = () => {
  type ItemActivity = {
    title: string;
    content: Lesson;
    order: number;
    done: boolean;
  };

  const option: OptionType = {
    answer: 'resposta resposta resposta resposta resposta ',
    obs: 'obs obsobsobsobs',
    value: false
  };
  const question: QuestionType = {
    query:
      'pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta ',
    options: [option, option, option],
    selected_index: -1,
    typeItem: ElementType.ItemQuestion
  };

  const code_example: ExampleCodeType = {
    content: `const test = "Hello" console.log(test);`,
    typeItem: ElementType.ItemExampleCode
  };

  const text_example: TextLessonType = {
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ex neque corrupti, in quasi corporis libero magni mollitia distinctio repellendus atque deleniti iusto molestias sint cum laboriosam, perferendis fugiat ea.',
    typeItem: ElementType.ItemText
  };

  const elements: Lesson = new Lesson([question, code_example, text_example]);

  const activities: ItemActivity[] = [];
  activiesJson.forEach((item, order) => {
    for (let index = 0; index < 10; index++) {
      activities.push({
        title: item.title,
        content: elements,
        order: order + 1,
        done: item.status
      });
    }
  });

  const [currentLesson, setCurrentLesson] = useState<ItemActivity>();

  const handleClickLesson = (element: ItemActivity) => {
    console.log(currentLesson);
    setCurrentLesson(element);
  };

  return (
    <div className={style.main}>
      <div className={style.side_bar}>
        <div className={style.top_side_bar}>
          <h4>Atividades</h4>
          <button>
            <IoMdArrowRoundBack />
          </button>
        </div>
        {/* lista */}
        <div className={style.content}>
          <div className={style.content_side_bar}>
            {activities.map((element) => (
              <div
                className={style.currentesson}
                key={element.order}
                onClick={() => handleClickLesson(element)}
              >
                <ItemLesson
                  title={element.title}
                  order={element.order}
                  done={element.done}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.content_main}>
        <div className={style.container_lesson}>
          <div className={style.content_tile}>{currentLesson?.title}</div>
          <div className={style.content_block}>
            {currentLesson?.content.listElements.map(
              (
                item: QuestionType | ExampleCodeType | TextLessonType,
                index: number
              ) => (
                <div className={style.item} key={index}>
                  {item.typeItem === ElementType.ItemQuestion ? (
                    <ItemQuestion {...item} />
                  ) : item.typeItem === ElementType.ItemExampleCode ? (
                    <ExampleCode {...item} />
                  ) : item.typeItem === ElementType.ItemText ? (
                    <TextLesson {...item} />
                  ) : null}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;
