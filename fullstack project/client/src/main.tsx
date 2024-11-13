import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import './reset.scss';

const root = document.getElementById('root');
if(root === null) {
  throw new Error('Root element, with id "root", was not found in index.html');
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
