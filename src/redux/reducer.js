//src\redux\reducer.js
import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";
import { InitialContactForm } from "./forms";
import { createForms } from "react-redux-form";

// this reducer will only handle dishes
// dishState will accept objects
// rcv dispatch from actionCreators.js
const dishReducer = (
    dishState = { isLoading: false, dishes: [], errMess: null },
    action
) => {
    switch (action.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                errMess: null,
                dishes: [],
            };

        case actionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false, // dish load hle loading off
                errMess: null,
                dishes: action.payload
            };

        case actionTypes.DISHES_FAILED:
            return {
                ...dishState,
                isLoading: false,
                errMess: action.payload,
                dishes: []
            };

        default:
            return dishState;
    }
};

// only comments
const commentReducer = (
    commentState = { isLoading: true, comments: [] },
    action
) => {
    switch (action.type) {
        case actionTypes.LOAD_COMMENTS:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload,
            };

        case actionTypes.COMMENTS_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: [],
            };

        case actionTypes.ADD_COMMENT:
            let comment = action.payload;

            return {
                ...commentState,
                comments: commentState.comments.concat(comment),
            };

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
