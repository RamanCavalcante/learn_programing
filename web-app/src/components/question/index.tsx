import React, { useState } from 'react';
import style from './style.module.css';
import {
  QuestionOptionType,
  QuestionType
} from '../../types/apps/ActivitiesTypes';

const ItemQuestion = (props: QuestionType) => {
  const [currentOption, setCurrentOption] = useState<
    QuestionOptionType | undefined
  >();

  const handleClickOPtion = (option: QuestionOptionType) => {
    setCurrentOption(option);
  };

  const handleClickConfirm = () => {
    if (currentOption?.value) {
      console.log('AAAAAAAA ta certo');
    } else {
      console.log('AAAAAAAA ta errado');
    }
  };

  return (
    <div className={style.question_content}>
      <div className={style.answer}>{props.query}</div>
      <div className={style.options}>
        {props.options.map((option: QuestionOptionType, index: number) => (
          <div
            key={index}
            className={style.item_option}
            onClick={() => handleClickOPtion(option)}
          >
            <input
              type="checkbox"
              checked={currentOption == option}
              className={style.check}
              onChange={() => handleClickOPtion(option)}
            ></input>
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
