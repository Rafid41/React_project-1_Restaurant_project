// restaurant_project\src\components\body\Menu.js
import MenuItem from "./MenuItem";
import { Component } from "react";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Alert } from "reactstrap";
import { connect } from "react-redux";
import {
    addComment,
    fetchDishes,
    fetchComments,
} from "../../redux/actionCreators";
import LoadingScreen from "./LoadingScreen";





// this fn receives the sate of reducer.js
// NOTE: return hbe props hishebe, not state
// "this.props.comments" evabe access korte hbe // age silo "this.state.comments"
const mapStateToProps = (state) => {
    //console.log("mapStateToProps: ", state);
    return {
        dishes: state.dishes,
        comments: state.comments,
    };
};

// from CommentForm.js
const mapDispatchToProps = (dispatch) => {
    return {
        // ekhan theke actionCreators.js er addComment() call hbe
        addComment: (dishId, rating, author, comment) =>
            dispatch(addComment(dishId, rating, author, comment)),

        fetchDishes: () => dispatch(fetchDishes()), // fetchDishes() kon param xcpt krena, actionCreators.js

        fetchComments: () => dispatch(fetchComments()),
    };
};

class Menu extends Component {
    // class component e useState() use kora jayna
    state = {
        // comments and dishes ekhn redux e
        selectedDish: null,
        modalOpen: false,
    };

    // class component e fn er age const lekha hoy na
    onSelectDish = (dish) => {
        //using setState
        this.setState({
            selectedDish: dish,
            modalOpen: true, // dish select korle modalOpen true hbe
        });
    };

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen,
        });
    };

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
    }

    //class component e render call korte hbe
    render() {
        // modifying banner title in Navbar
        document.title = "Menu";

        // Menu loading screen
        // from actionCreators.js
        if (this.props.dishes.isLoading) {
            return <LoadingScreen />;
        }
        else if (this.props.dishes.errMess != null) {
            return <Alert color="danger">{this.props.dishes.errMess}</Alert>;
        }
        else {
            const menu = this.props.dishes.dishes.map((dish) => {
                return (
                    <MenuItem
                        dish={dish}
                        onSelectDish={this.onSelectDish}
                        key={dish.id}
                    />
                );
            });

            let dishDetail = null;
            if (this.state.selectedDish != null) {
                //comment er dishId r dish er id same hole oi comment return korbe
                //dishID ==> comments.js er  field
                //id ==> dishes.js er field
                //filter return an array
                const comments = this.props.comments.comments.filter(
                    (comment) => {
                        return comment.dishId === this.state.selectedDish.id;
                    }
                );
                dishDetail = (
                    <DishDetail
                        dish={this.state.selectedDish}
                        comments={comments}
                        addComment={this.props.addComment}
                        commentsIsLoading={this.props.comments.isLoading}
                    />
                );
            }
            return (
                <div className="container">
                    <div className="row">
                        <CardColumns>{menu}</CardColumns>
                        <Modal data-testid="modal" isOpen={this.state.modalOpen}>
                            <ModalBody>{dishDetail}</ModalBody>

                            {/* close button */}
                            <ModalFooter>
                                <button
                                    className="btn btn-primary"
                                    onClick={this.toggleModal}
                                >
                                    Close
                                </button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
