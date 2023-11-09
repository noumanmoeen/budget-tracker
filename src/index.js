import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { Accessibility } from 'accessibility/dist/main';

const root = ReactDOM.createRoot(document.getElementById('root'));

// window.addEventListener('load', function() {
  

// }, false);

export var accessibilityInstance = new Accessibility();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
