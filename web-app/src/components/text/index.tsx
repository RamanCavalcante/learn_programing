import React from 'react';
import { LessonTextType } from '../../types/apps/ActivitiesTypes';
import style from './style.module.css';

const TextLesson = (props: LessonTextType) => {
  return <div className={style.container_text} dangerouslySetInnerHTML={{ __html: props.content.replace(/\n/g, '<br>') }} />;
};
export default TextLesson;
