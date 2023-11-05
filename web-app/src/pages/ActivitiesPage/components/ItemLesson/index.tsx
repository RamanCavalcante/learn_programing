import React from 'react';
import style from './style.module.css';

const ItemLesson = () => {
  return (
    <div className={style.content_item}>
      <div className={style.check_item}></div>
      <div className={style.name_lesson}>
        <p>titulo atividade</p>
      </div>
    </div>
  );
};

export default ItemLesson;
