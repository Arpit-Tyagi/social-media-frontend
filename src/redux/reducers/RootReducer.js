import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session' // defaults to localStorage for web

import {userReducer } from './userReducer.js'
import {postReducer } from './postReducer.js'

 
const persistConfig = {
  key: 'root',
  storage:storageSession,
  WhiteList:['userReducer']
}

 const reducers = combineReducers({
    userReducer,
    postReducer,
 });

 const persistedReducer = persistReducer(persistConfig, reducers)

 export default persistedReducer ;