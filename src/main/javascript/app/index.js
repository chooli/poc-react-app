import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.appReactRender = function (target, appContext) {
    ReactDOM.render(<App dxContext={appContext}/>, document.getElementById(target));
};