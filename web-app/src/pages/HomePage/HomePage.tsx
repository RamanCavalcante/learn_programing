import React from 'react';
import Minimap from '../../assets/image_minimap.png';
import style from './style.module.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className={style.main}>
      <div className={style.content_main}>
        <div className={style.container}>
          <div className={style.inner_container}>
            <div className={style.title}>
              <p>CODE RUNNER</p>
            </div>
            <div className={style.modal}>
              <Link to="/activities" replace={true}>
                <h2>START</h2>
              </Link>
              <Link to="/activities" replace={true}>
                <h2>ABOUT</h2>
              </Link>
              <Link to="/activities" replace={true}>
                <h2>CONTINUE</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={style.side_image}>
        <img src={Minimap} alt="image minimap" />
      </div>
    </div>
  );
}
export default HomePage;
