import  { applyMiddleware, createStore } from 'redux';
import  {reducer}from "./reducers/index";
import thunk from 'redux-thunk';

export let store = createStore(reducer,applyMiddleware(thunk))