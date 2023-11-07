import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';

import Routes from './routes/Routes';

export default function App() {
  return <Routes />;
}
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
