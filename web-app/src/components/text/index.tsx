import React from 'react';
import { TextLessonType } from '../../types/apps/ActivitiesTypes';
import style from './style.module.css';

const TextLesson = (props: TextLessonType) => {
  return <div className={style.container_text}>{props.content}</div>;
};
export default TextLesson;
