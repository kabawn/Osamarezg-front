// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure this import is here to apply global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import App from './App';
import './i18n'; // Import i18n configuration

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
