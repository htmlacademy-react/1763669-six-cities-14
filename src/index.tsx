import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const SUGGESTIONS_AMOUNT = 312;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App suggestionsAmount={SUGGESTIONS_AMOUNT} />
  </React.StrictMode>
);
