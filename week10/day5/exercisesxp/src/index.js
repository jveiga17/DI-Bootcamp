// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const root = document.getElementById('root');

const renderMethod = root.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

const render = (Component) => {
  renderMethod(<Component />, root);
};

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}

render(App);
