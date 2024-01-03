// src\redux\actionCreators.js
import * as actionTypes from "./actionTypes";
import DISHES from "../data/dishes";

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

        // late call loadDishes 2000 ms
        setTimeout(() => {
            dispatch(loadDishes(DISHES)); // spinner show korbe
        }, 2000);
    };
};
