import './index.css';
import React from 'react';
import App from './App.jsx'
import { createRoot } from 'react-dom/client';

import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
