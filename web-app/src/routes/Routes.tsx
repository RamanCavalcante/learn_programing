import { Route, Routes } from 'react-router-dom';

import ActivitiesPage from '../pages/ActivitiesPage/ActivitiesPage';
import HomePage from '../pages/HomePage/HomePage';
import { BrowserRouter } from 'react-router-dom';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="activities" element={<ActivitiesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
