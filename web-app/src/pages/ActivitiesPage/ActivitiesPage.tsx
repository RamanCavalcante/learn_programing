import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import ItemLesson from './components/ItemLesson';
import style from './style.module.css';

const ActivitiesPage = () => {
  // const activitiesList = [];
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
        <div className={style.content_side_bar}>
          <ItemLesson />
        </div>
      </div>
      <div className={style.content_main}>aaaaaa</div>
    </div>
  );
};

export default ActivitiesPage;
