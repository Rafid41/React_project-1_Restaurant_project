//src\redux\reducer.js

import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";

// main task: DISHES, COMMENTS k globally accessible kora
const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    sample: "hello world"
}

export const Reducer = (state = initialState, action) => {
    if (action.type === 'TEST') {
        return{
            ...state,
            sample: action.str   // sample= action.str
        }
    }
    return state;
}