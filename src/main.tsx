import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ModalProvider, ApartmentsProvider } from '@/context/index.ts';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider>
      <ApartmentsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApartmentsProvider>
    </ModalProvider>
  </React.StrictMode>
);
