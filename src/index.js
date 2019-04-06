import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import buttonReducer from './redux/buttonReducer';
import ContainerApp from './AppContainer';
import thunk from 'redux-thunk'

let combinedReducers = combineReducers({
    reducer: buttonReducer
});

let store = createStore(combinedReducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <ContainerApp />
    </Provider>, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
