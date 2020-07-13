import { createStore } from 'redux';
import initialState from './initialState';
import reducers from './reducers/reducers';

const storeArgs = [ reducers, initialState ];

export default createStore(...storeArgs);
