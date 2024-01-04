//src\redux\reducer.js
import COMMENTS from "../data/comments";
import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";
import { InitialContactForm } from "./forms";
import { createForms } from "react-redux-form";

// this reducer will only handle dishes
// dishState will accept objects
const dishReducer = (dishState = { isLoading: false, dishes: [] }, action) => {
    switch (action.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                dishes: [],
            };

        case actionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false, // dish load hle loading off
                dishes: action.payload,
            };

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

            //overwrite previous state and return new
            return commentState.concat(comment);

        default:
            return commentState;
    }
};

// combine all reducers and handle the arguments of each reducer
export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,

    // object k form e convert kre
    ...createForms({
        // forms.js e multiple fn thakle ", diye pore likhe dlei hbe"
        // redux store e save hbe eta
        feedback: InitialContactForm,
    }),
});
