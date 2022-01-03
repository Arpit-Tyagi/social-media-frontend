import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist'

import reducers from './reducers/RootReducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


   
  
    export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
    export const persistor = persistStore(store);
   
    export default {store, persistor };