import React, { useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import ItemLesson from './components/ItemLesson';
import style from './style.module.css';
import { activitiesObj } from '../../lessons';
import {
  QuestionType,
  LessonTextType,
  ExampleCodeType,
  ItemActivity
} from '../../types/apps/ActivitiesTypes';
import ItemQuestion from '../../components/question';
import ExampleCode from '../../components/exampleCode';
import TextLesson from '../../components/text';

const ActivitiesPage = () => {
  const activities: ItemActivity[] = [];

  activitiesObj.activities.forEach((item, order) => {
    activities.push({
      title: item.title,
      lessons: item.lessons,
      order: order + 1,
      done: false
    });
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
            {currentLesson?.lessons.map(
              (
                item: QuestionType | ExampleCodeType | LessonTextType,
                index: number
              ) => (
                <div className={style.item} key={index}>
                  {item.typeItem === 'ItemQuestion' ? (
                    <ItemQuestion {...item} />
                  ) : item.typeItem === 'ItemExampleCode' ? (
                    <ExampleCode {...item} />
                  ) : item.typeItem === 'ItemText' ? (
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
