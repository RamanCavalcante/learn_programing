import React, { useState } from 'react';
import style from './style.module.css';
import { FaCheckCircle } from "react-icons/fa";


import {
  QuestionOptionType,
  QuestionType
} from '../../types/apps/ActivitiesTypes';

enum status { DEFAULT, SUCCESS, WRONG}

interface ItemQuestionProps {
  index: number;
  props: QuestionType;
  callBackFunction: () => void;
}

const ItemQuestion: React.FC<ItemQuestionProps> = ({index, props, callBackFunction }) => {
  const [currentOption, setCurrentOption] = useState<
    QuestionOptionType | undefined
  >();

  const [questionStatus, setQuestionStatus] = useState(status.DEFAULT);

  const handleClickOPtion = (option: QuestionOptionType) => {
    if(questionStatus == status.DEFAULT || questionStatus == status.WRONG){
      setQuestionStatus(status.DEFAULT);
      setCurrentOption(option);
    }
  };

  const handleClickConfirm = () => {
    props.correct = true;
    if (currentOption?.value) {
      callBackFunction();
      setQuestionStatus(status.SUCCESS);
    } else {
      setQuestionStatus(status.WRONG);
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
      <div>
        { questionStatus === status.DEFAULT && (
          <div className={style.button_confirm_answer}>
            <button onClick={handleClickConfirm}>CONFIRM</button>
          </div>
        )}
        { questionStatus === status.SUCCESS && (
          <div className={style.button_success}>
            <button><FaCheckCircle size={28}/></button>
          </div>
        )}
        { questionStatus === status.WRONG && (
          <div className={style.button_wrong}>
            <button onClick={handleClickConfirm}>WRONG</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemQuestion;
