// restaurant_project\src\components\body\LoadComments.js
import dateFormat from "dateformat";
import LoadingScreen from "./LoadingScreen";

// const LoadComments = ({ comments }) => {
//     const previewComments = comments.map((comment) => {
//         return (
//             // individual comments
//             // from dishes.js json
//             <div key={comment.id}>
//                 <h5>{comment.author}</h5>
//                 <p>{comment.comment}</p>
//                 <p>Rating: {comment.rating}</p>
//                 <p>{ dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
//             </div>
//         );
//     })

//     return <div>{previewComments}</div>
// };

const LoadComments = (props) => {
    if (props.commentIsLoading) {
        return <LoadingScreen />;
    } else {
        return (
            // individual comments
            // from dishes.js json
            props.comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <h5>{comment.author}</h5>
                        <p>{comment.comment}</p>
                        <p>Rating: {comment.rating}</p>
                        <p>
                            {dateFormat(
                                comment.date,
                                "dddd, mmmm dS, yyyy, h:MM:ss TT"
                            )}
                        </p>
                    </div>
                );
            })
        );
    }
};

export default LoadComments;
