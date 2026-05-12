import './index.css';
import React from 'react';
import App from './App.jsx'
import { createRoot } from 'react-dom/client';

import { HelmetProvider } from 'react-helmet-async';

import { FeedbackProvider } from './context/FeedbackContext';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <FeedbackProvider>
        <App />
      </FeedbackProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
