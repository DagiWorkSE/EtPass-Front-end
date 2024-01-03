import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import User from './pages/User';
import './styles/tailwind.css';
import './styles/index.css';

import './styles/color.css';
import './styles/font.css';

const rootContainer = document.createElement('div');
rootContainer.id = 'root';
document.body.appendChild(rootContainer);

createRoot(rootContainer).render(
  <React.StrictMode>
    <Router>
      <>
        <App />
        <User />
      </>
    </Router>
  </React.StrictMode>
);
