import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import userSubmission from './reducers/userSubmission'
import * as serviceWorker from './serviceWorker';

const store = createStore(userSubmission)

const unsubscribe = store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

unsubscribe()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
