import React from 'react';
import style from './style.module.css';

interface Props {
  title: string;
  order: number;
  done: boolean;
}
const ItemLesson = (props: Props) => {
  return (
    <div className={style.content_item}>
      <div className={style.check_item}></div>
      <div className={style.name_lesson}>
        <p>
          {props.order} - {props.title}
        </p>
      </div>
    </div>
  );
};

export default ItemLesson;
