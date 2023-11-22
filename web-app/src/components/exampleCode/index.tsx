import SyntaxHighlighter from 'react-syntax-highlighter';
import { ExampleCodeType } from '../../types/apps/ActivitiesTypes';
import style from './style.module.css';
import { FaCopy } from 'react-icons/fa';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ExampleCode = (props: ExampleCodeType) => {
  return (
    <div className={style.container_code}>
      <div className={style.icon}>
        <button>
          <FaCopy size={20} color="#161616" />
        </button>
      </div>
      <div className={style.content}>
        <SyntaxHighlighter language="javascript" style={dracula}>
          {props.content}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ExampleCode;
