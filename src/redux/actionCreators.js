// src\redux\actionCreators.js
import * as actionTypes from "./actionTypes";
//import DISHES from "../data/dishes";
import axios from "axios";
import { baseURL } from "./baseURL";

export const addComment = (dishId, rating, author, comment) => {
    return {
        // dispatch return korbe
        type: actionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            author: author,
            rating: rating,
            comment: comment,
        },
    };
};

export const commentLoading = () => ({
    type: actionTypes.COMMENTS_LOADING,
});

// server theke j comment  ashbe se rcv korbe &
// payload hisebe comment pass korbe jate reducer store e comment set hye jay
export const loadComments = (comments) => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments,
});

// dispatch korbe commentLoading and loadComments k
export const fetchComments = () => (dispatch) => {
    dispatch(commentLoading());

    axios
        .get(baseURL + "comments")
        .then((response) => response.data)
        .then((comments) => dispatch(loadComments(comments)));
};

export const loadDishes = (dishes) => {
    return {
        type: actionTypes.LOAD_DISHES,
        payload: dishes,
    };
};

// same as return
export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING,
});

//(dispatch) parameter niye arekta fn return korbe
// ekhane uporer 2ta fn k dispatch kora hbe
// redux thunk er maddhome ek dispatch fn er vitor arek dispatch fn call kora jay
//eta normally kora jayna
export const fetchDishes = () => {
    return (dispatch) => {
        // eta call hole 1st fn er payload e pass hbe
        dispatch(dishesLoading());

        // axios automatically asynchronous way te kaj kore
        axios
            .get(baseURL + "dishes")
            .then((response) => response.data)
            .then((dishes) => dispatch(loadDishes(dishes)));
    };
};
