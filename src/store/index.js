// import { createStore, compose, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { composeWithDevTools  } from 'redux-devtools-extension';
// import reducers
import rootReducer from '../reducers';

const store = createStore(rootReducer, composeWithDevTools ());

// == Export
export default store;
