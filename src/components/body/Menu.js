// restaurant_project\src\components\body\Menu.js
import MenuItem from "./MenuItem";
import { useState } from "react";
import DISHES from "../../data/dishes";
import DishDetail from "./DishDetail";

const Menu = () => {
    //useState hook: const [dishes, setDishes] = useState;
    const [dishes] = useState(DISHES); //from json file

    // [getter, setter] =  useState(), initial selected dish=null
    const [selectedDish, setSelectedDish] = useState(null);

    // set the value of selectedDish
    const onSelectDish = (dish) => {
        setSelectedDish(dish);
        // console.log(dish);
    };

    // proti component k unique korte "key" define korte hy
    const menu = dishes.map((dish) => {
        return (
            <MenuItem dish={dish} onSelectDish={onSelectDish} key={dish.id} />
        );
    });

    // initially load hbena, kisu selected hole load hbe
    // null or value ase?
    const dishDetail = selectedDish ? <DishDetail dish={selectedDish} /> : null;

    return (
        <div className="container">
            <div className="row">
                <div className="col-5">{menu}</div>
                <div className="col-7">
                    {dishDetail}
                </div>
            </div>
        </div>
    );
};

export default Menu;
