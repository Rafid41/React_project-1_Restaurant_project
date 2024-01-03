// src\redux\store.js

import { createStore, applyMiddleware } from "redux";
import { Reducer } from "./reducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
// import  thunk  from "redux-thunk";

// pass applymiddleware also
const myStore = createStore(Reducer, applyMiddleware(logger, thunk));

export default myStore;
