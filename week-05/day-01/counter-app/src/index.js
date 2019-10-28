import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterApp from './reducer/counterApp'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(counterApp);

const unsubscribe = store.subscribe(() => console.log(store.getState()))

// store.dispatch({type: "SET", amount: 6})
// store.dispatch({type: "INCREASE"})
// store.dispatch({type: "INCREASE", amount: 2})
// store.dispatch({type: "RESET"})
// store.dispatch({type: "INCREASE"})
// store.dispatch({type: "DESCREASE", amount: 4})


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


unsubscribe()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
