import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

/** TODO: import REDUX **/
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'



/** TODO: Add REDUCERS */
const deck = (state=[], action) => {
    if (action.type === 'NEW_GAME') {
        return action.payload
    }
    if (action.type === 'DRAW_CARD') {
        return action.payload
    }
    return state
}

/** TODO: Create store */
const ourReduxStore = createStore(
    combineReducers({
        deck
    })
)


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={ourReduxStore}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </Provider>
);