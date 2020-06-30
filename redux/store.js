import  { createStore } from 'redux';
import  {reducer}from "./reducers/index";

export let store = createStore(reducer)