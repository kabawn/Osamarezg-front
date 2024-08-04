import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css'; // Ensure this import is here to apply global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import App from './App';
import './i18n'; // Import i18n configuration

// Get the root element from the DOM
const container = document.getElementById('root');

// Create a root and render the App component
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
