// src\redux\actionCreators.js
import * as actionTypes from "./actionTypes";
import axios from "axios";
import { baseURL } from "./baseURL";

// send comment to server
export const addComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment,
    };
    newComment.date = new Date().toISOString();

    // call axios post
    // 'comment' name er object er under e add korbe
    axios
        .post(baseURL + "comments", newComment)
        .then((response) => response.data)
        .then((comment) => dispatch(commentConcat(comment))); //update redux store
};

// ager comment er sathe new gulo concat korbe
export const commentConcat = (comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: comment,
});

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

// ERROR
export const dishesFailed = (errMess) => ({
    type: actionTypes.DISHES_FAILED,
    payload: errMess,
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
        // jodi failed hoy submit e , taile catch fn and dispatch(dishesFailed)
        axios
            .get(baseURL + "dishes")
            .then((response) => response.data)
            .then((dishes) => dispatch(loadDishes(dishes)))
            .catch((error) => dispatch(dishesFailed(error.message)));
    };
};
