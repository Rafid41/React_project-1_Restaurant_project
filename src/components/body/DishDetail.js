//restaurant_project\src\components\body\DishDetail.js

import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";
import LoadComments from "./LoadComments";
import CommentForm from "./CommentForm";
import { baseURL } from "../../redux/baseURL";

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg
                    top
                    src={baseURL + props.dish.image}
                    alt={props.dish.name}
                />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle><strong>{props.dish.name}</strong></CardTitle>
                    <CardText>{props.dish.description}</CardText>
                    <CardText>Price: {props.dish.price}/-</CardText>
                    <hr />
                    <LoadComments
                        comments={props.comments}
                        commentIsLoading={props.commentIsLoading}
                    ></LoadComments>
                    <hr />
                    {/* addComment Menu.js er property, okhan theke ei props send kora hoise */}
                    <CommentForm
                        dishId={props.dish.id}
                        addComment={props.addComment}
                    />
                </CardBody>
            </Card>
        </div>
    );
};

export default DishDetail;
