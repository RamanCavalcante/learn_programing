import React from 'react';
import style from './style.module.css';
import {
  QuestionOptionType,
  QuestionType
} from '../../types/apps/ActivitiesTypes';

const ItemQuestion = (props: QuestionType) => {
  const handleClickOPtion = () => {};
  const handleClickConfirm = () => {};

  return (
    <div className={style.question_content}>
      <div className={style.answer}>{props.query}</div>
      <div className={style.options}>
        {props.options.map((option: QuestionOptionType, index: number) => (
          <div
            key={index}
            className={style.item_option}
            onClick={handleClickOPtion}
          >
            <div className={style.check}></div>
            <div>{option.answer}</div>
          </div>
        ))}
      </div>
      <div className={style.button_confirm_answer}>
        <button onClick={handleClickConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default ItemQuestion;
