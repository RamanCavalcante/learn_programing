import React from 'react';
import style from './style.module.css';
import { IoCaretBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const about =
    'Bem-vindo ao nosso site de ensino de programação! Nosso objetivo é capacitar indivíduos de todas as idades a explorar o mundo da programação e adquirir habilidades valiosas no universo digital. Aqui você vai encontrar lições, recursos educacionais e orientações para ajudar você a aprender programação de maneira acessível e envolvente. Seja você um iniciante curioso ou um entusiasta experiente, estamos aqui para apoiar sua jornada de aprendizado. Junte-se a nós e desvende o potencial ilimitado da programação!';

  const navigate = useNavigate();

  const backHome = () => {
    navigate('/');
  };

  return (
    <div className={style.main}>
      <div className={style.icon_back}>
        <button onClick={backHome}>
          <IoCaretBackOutline className={style.style_button} />
        </button>
      </div>
      <div className={style.title}>
        <h1>About</h1>
      </div>
      <div className={style.content_main}>
        <div className={style.text}>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
