import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Principal from './components/Principal';
import Portafolio from './components/Portafolio';
import Experiencia from './components/Experiencia';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Principal />, document.getElementById('principal'));
ReactDOM.render(<Portafolio />, document.getElementById('portafolio'));
ReactDOM.render(<Experiencia />, document.getElementById('experiencia'));
ReactDOM.render(<Contacto />, document.getElementById('contacto'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
