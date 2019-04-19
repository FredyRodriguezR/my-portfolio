import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/animations.css'
import App from './components/App';
import Principal from './components/Principal';
import Portafolio from './components/Portafolio';
import Experiencia from './components/Experiencia';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import * as serviceWorker from './serviceWorker';
import cheet from 'cheet.js';
import projectsGames from './data/projectsGames.json';
import projectsSoft from './data/projectsSoft.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_PROPS': {
            const newProps = action.payload.props;
            return { ...state, ...newProps }
        }
        default:
            return state
    }
}

const store = createStore(reducer, projectsGames);


var changeSoft = () => {
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload: {
            props: projectsSoft
        }
    });
};

var changeGames = () => {
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload: {
            props: projectsGames
        }
    });
};

cheet('s h a k e', () => {
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload: {
            props: projectsSoft
        }
    });
});

cheet('s h a k e e', () => {
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload: {
            props: projectsGames
        }
    });
});

ReactDOM.render(<App handleGames={changeGames} handleSoft={changeSoft}/>, document.getElementById('root'));
ReactDOM.render(<Principal />, document.getElementById('principal'));
ReactDOM.render(
    <Provider store={store}>
        <Portafolio />
    </Provider>,
    document.getElementById('portafolio'));
ReactDOM.render(<Experiencia />, document.getElementById('experiencia'));
ReactDOM.render(<Contacto />, document.getElementById('contacto'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
