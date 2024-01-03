// src\redux\store.js

import { createStore, applyMiddleware } from "redux";
import { Reducer } from "./reducer";
import logger from "redux-logger";


// pass applymiddleware also
const myStore = createStore(Reducer, applyMiddleware(logger));

export default myStore;