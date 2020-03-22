import React from 'react';
import { render}from 'react-dom';
import './index.css';
import App from './App';
import { StoreProvider } from './store';

const app = (
  <StoreProvider>
    <App />
  </StoreProvider>
)

render(app, document.getElementById('root'));


