//src\redux\reducer.js

import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";

// main task: DISHES, COMMENTS k globally accessible kora
const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
}

export const Reducer = (state = initialState, action) => {

    return state;
}