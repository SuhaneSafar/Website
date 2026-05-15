import './index.css';
import React from 'react';
import App from './App.jsx'
import { createRoot } from 'react-dom/client';

import { HelmetProvider } from 'react-helmet-async';

import { FeedbackProvider } from './context/FeedbackContext';
import { RegistrationProvider } from './context/RegistrationContext';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <FeedbackProvider>
        <RegistrationProvider>
          <App />
        </RegistrationProvider>
      </FeedbackProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
