import React from 'react';
import { LessonTextType } from '../../types/apps/ActivitiesTypes';
import style from './style.module.css';

const TextLesson = (props: LessonTextType) => {
  return <div className={style.container_text}>{props.content}</div>;
};
export default TextLesson;
