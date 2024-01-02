//src\redux\reducer.js

import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";

// main task: DISHES, COMMENTS k globally accessible kora
const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
}

export const Reducer = (state = initialState, action) => {

    // from CommentForm.js
    if (action.type === 'ADD_COMMENT') {
        let comment = action.payload;

        // restaurant_project\src\data\dishes.js er COMMENTS array er size
        // index 0 diye suru, tai new entry er index/id hbe COMMENTS.length 
        comment.id = state.comments.length;

        // date == current date
        comment.date = new Date().toString();
        // console.log(comment);

        //overwright previous state and return new
        return {
            ...state,
            // restaurant_project\src\data\dishes.js er COMMENTS array er sathe new comment concat hbe
            comments: state.comments.concat(comment)
        }
    }
    return state;
}