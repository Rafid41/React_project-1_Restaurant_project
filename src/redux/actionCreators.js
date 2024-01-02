// src\redux\actionCreators.js
import * as actionTypes from "./actionTypes";

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
