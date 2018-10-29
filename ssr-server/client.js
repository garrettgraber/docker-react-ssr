// import 'babel-polyfill';
// import React from 'react';
// import ReactDOM from 'react-dom';


// import App from '../src/app.jsx';




const React = require('react');
const ReactDOM = require('react-dom');
const App = require('../src/components/app.jsx').default;

// import App from '../src/app.jsx';



const renderApp = () => {
	ReactDOM.hydrate(React.createElement(App), document.getElementById('app'));
};

renderApp();

if(module.hot) {
	module.hot.accept('../src/components/app.jsx', renderApp);
}

