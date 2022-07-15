import './App.css';
import React from 'react';
import { StoreProvider } from './store';
import { Router } from './router/Router';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

export const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <ToastProvider>
          <Router />
        </ToastProvider>
      </BrowserRouter>
    </StoreProvider>
  );
};
