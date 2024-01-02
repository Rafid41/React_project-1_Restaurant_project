//src\redux\reducer.js

import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";
import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";

// this reducer will only handle dishes
const dishReducer = (dishState = DISHES, action) => {
    switch (action.type) {
        default:
            return dishState;
    }
};

// only comments
const commentReducer = (commentState = COMMENTS, action) => {
    // if else to switch case
    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toString();

            //overwright previous state and return new
            return commentState.concat(comment);

        default:
            return commentState;
    }
};

// combine all reducers and handle the arguments of each reducer
export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
});
