import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ActivitiesPage from './pages/ActivitiesPage/ActivitiesPage';
import HomePage from './pages/HomePage/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
