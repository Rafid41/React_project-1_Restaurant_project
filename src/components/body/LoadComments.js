// restaurant_project\src\components\body\LoadComments.js
import dateFormat from 'dateformat';

const LoadComments = ({ comments }) => {
    const previewComments = comments.map((comment) => {
        return (
            // individual comments
            // from dishes.js json
            <div key={comment.id}>
                <h5>{comment.author}</h5>
                <p>{comment.comment}</p>
                <p>{ dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
            </div>
        );
    })
    
    return <div>{previewComments}</div>
};
export default LoadComments;
