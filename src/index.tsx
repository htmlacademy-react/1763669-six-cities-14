import React from 'react';
import ReactDOM from 'react-dom/client';
import {SUGGESTIONS_AMOUNT} from './components/const';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App suggestionsAmount={SUGGESTIONS_AMOUNT} />
  </React.StrictMode>
);
