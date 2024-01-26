import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InnovativeML from '../src/assets/InnovativeMLLogo.png'

document.title = "InnovativeML";
const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
favicon.type = 'image/x-icon';
favicon.rel = 'shortcut icon';
favicon.href = InnovativeML;
document.head.appendChild(favicon);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
