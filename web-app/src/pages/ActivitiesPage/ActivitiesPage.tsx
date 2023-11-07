import React, { useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import ItemLesson from './components/ItemLesson';
import style from './style.module.css';
import activiesJson from '../../assets/lessons.json';

const ActivitiesPage = () => {
  type ItemActivity = {
    title: string;
    content: string;
    order: number;
    done: boolean;
  };

  const activities: ItemActivity[] = [];
  activiesJson.forEach((item, order) => {
    for (let index = 0; index < 10; index++) {
      activities.push({
        title: item.title,
        content: item.content,
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
                className={style.currentLesson}
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
        <div className={style.content_tile}>{currentLesson?.title}</div>
        <div className={style.content_content}>{currentLesson?.content}</div>
      </div>
    </div>
  );
};

export default ActivitiesPage;
