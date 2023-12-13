import React, { useEffect } from 'react';
import style from './style.module.css';

interface Props {
  title: string;
  order: number;
  done: boolean;
}

const ItemLesson = ({ done, order, title }: Props) => {
  useEffect(() => { console.log("AAAAA", done) },[done]) 
  return (
    <div className={style.content_item}>
      {done ? 
        (<div className={style.check_item_checked}></div>) 
        :  
        (<div className={style.check_item}></div>)
      }
      <div className={style.name_lesson}>
        <p>
          {order} - {title}
        </p>
      </div>
    </div>
  );
};

export default ItemLesson;
