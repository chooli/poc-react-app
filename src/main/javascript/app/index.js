import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

window.appReactRender = function(target, appContext) {
  ReactDOM.render(<App appContext={appContext}/>, document.getElementById(target));
};
