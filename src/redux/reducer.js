//src\redux\reducer.js

import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";
import { combineReducers } from "redux";

// this reducer will only handle dishes
const dishReducer = (dishState = DISHES, action) => {
    return dishState;
};

// only comments
const commentReducer = (commentState = COMMENTS, action) => {
    // from CommentForm.js
    if (action.type === "ADD_COMMENT") {
        let comment = action.payload;
        comment.id = commentState.length;
        comment.date = new Date().toString();

        //overwright previous state and return new
        return commentState.concat(comment);
    }
    return commentState;
};

// combine all reducers and handle the arguments of each reducer
export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
});
