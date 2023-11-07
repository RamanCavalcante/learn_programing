import { Route, Routes } from 'react-router-dom';

import ActivitiesPage from '../pages/ActivitiesPage/ActivitiesPage';
import HomePage from '../pages/HomePage/HomePage';
import { BrowserRouter } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';

const router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="activities" element={<ActivitiesPage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default router;
