import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

async function main() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser');
    await worker.start();
  }

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );

  reportWebVitals();
}

main();
