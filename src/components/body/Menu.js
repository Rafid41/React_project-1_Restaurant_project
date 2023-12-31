// restaurant_project\src\components\body\Menu.js
import MenuItem from "./MenuItem";
import { Component } from "react";
import DISHES from "../../data/dishes";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter } from "reactstrap";

// functional component
// const Menu = () => {
//     //useState hook: const [dishes, setDishes] = useState;
//     const [dishes] = useState(DISHES); //from json file

//     // [getter, setter] =  useState(), initial selected dish=null
//     const [selectedDish, setSelectedDish] = useState(null);

//     // set the value of selectedDish
//     const onSelectDish = (dish) => {
//         setSelectedDish(dish);
//         // console.log(dish);
//     };

//     // proti component k unique korte "key" define korte hy
//     const menu = dishes.map((dish) => {
//         return (
//             <MenuItem dish={dish} onSelectDish={onSelectDish} key={dish.id} />
//         );
//     });

//     // initially load hbena, kisu selected hole load hbe
//     // null or value ase?
//     const dishDetail = selectedDish ? <DishDetail dish={selectedDish} /> : null;

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-5">{menu}</div>
//                 <div className="col-7">
//                     {dishDetail}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Menu;

//equivalent class component

class Menu extends Component {
    // class component e useState() use kora jayna
    state = {
        dishes: DISHES,
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
        const menu = this.state.dishes.map((dish) => {
            return (
                <MenuItem
                    dish={dish}
                    onSelectDish={this.onSelectDish}
                    key={dish.id}
                />
            );
        });

        const dishDetail = this.state.selectedDish ? (
            <DishDetail dish={this.state.selectedDish} />
        ) : null;
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

export default Menu;
