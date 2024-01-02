// src\components\body\CommentForm.js

import React, { Component } from "react";
import { Form, Button, Input } from "reactstrap";
import { connect } from "react-redux";

// dipatch r vinno vinno vabe lekha lagbena
// all dispatch fn
// protita property ek ek ta dispatch fn

// mapDispatchToProps etake connect er moddhe likhte hbe export e
const mapDispatchToProps = (dispatch) => {
    return {
        // addComment name e props hishabe send hbe
        addComment: (dishId, rating, author, comment) =>
            dispatch({
                // dispatch return korbe
                type: "ADD_COMMENT",
                payload: {
                    dishId: dishId,
                    author: author,
                    rating: rating,
                    comment: comment,
                },
            }),
        //ekhane aro dispatch fn lekha jabe
    };
};

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            author: "",
            rating: "",
            comment: "",
        };
        //binding handles
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        // addComment fn call kora holo
        this.props.addComment(
            this.props.dishId,
            this.state.rating,
            this.state.author,
            this.state.comment
        );

        //submit er por clear input boxes
        this.setState({
            author: "",
            rating: "",
            comment: "",
        });

        event.preventDefault();
    };

    render() {
        return (
            <div>
                {/* pass handleSubmit and handleInputChange */}
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        type="text"
                        name="author"
                        value={this.state.author}
                        placeholder="Your Name"
                        onChange={this.handleInputChange}
                        required
                    />
                    <br />
                    <Input
                        type="select"
                        name="rating"
                        value={this.state.rating}
                        onChange={this.handleInputChange}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input
                        type="textarea"
                        name="comment"
                        value={this.state.comment}
                        placeholder="Your Comment"
                        onChange={this.handleInputChange}
                        required
                    ></Input>
                    <br />
                    <Button type="submit">Submit Comment</Button>
                </Form>
            </div>
        );
    }
}

// connect 2 ta param receive kore
// 1st: mapStateToProps     // state k props e covert/map kora
// 2nd : mapDispatchToProps // dispatch k props
// 1ta param dle auto "mapStateToProps" call hbe, tai 1st ta null
export default connect(null, mapDispatchToProps)(CommentForm);
