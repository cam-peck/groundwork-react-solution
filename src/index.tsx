import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './styles.css';

const container = document.getElementById('root');
if (container !== null) {
  const root = createRoot(container);
  root.render(<App />);
}

