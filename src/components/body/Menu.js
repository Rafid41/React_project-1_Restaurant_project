// restaurant_project\src\components\body\Menu.js
import MenuItem from "./MenuItem";
import { Component } from "react";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";



// this fn receives the sate of reducer.js
// NOTE: return hbe props hishebe, not state
// "this.props.comments" evabe access korte hbe // age silo "this.state.comments"
const mapStateToProps = (state) => {
    console.log("mapStateToProps: ",state);
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}


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

    //class component e render call korte hbe
    render() {
        // modifying banner title in Navbar
        document.title = "Menu";
        const menu = this.props.dishes.map((dish) => {
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
            const comments = this.props.comments.filter((comment) => {
                return comment.dishId === this.state.selectedDish.id;
            });
            dishDetail = (
                <DishDetail
                    dish={this.state.selectedDish}
                    comments={comments}
                />
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <CardColumns>{menu}</CardColumns>
                    <Modal
                        isOpen={this.state.modalOpen}
                        onClick={this.toggleModal}
                    >
                        <ModalBody>{dishDetail}</ModalBody>

                        <ModalFooter>
                            <button color="primary" onClick={this.toggleModal}>
                                Close
                            </button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Menu);
