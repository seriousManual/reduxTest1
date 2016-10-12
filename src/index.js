import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore} from 'redux';

import reducers from './reducers'

const store = createStore(reducers);

const render = () => {
    ReactDOM.render(
        <App
            state={store.getState()}
            store={store} />,

        document.getElementById('root')
    )
}

render()
store.subscribe(render)