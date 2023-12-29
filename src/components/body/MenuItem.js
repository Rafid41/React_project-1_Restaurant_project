//restaurant_project\src\components\body\MenuItem.js

import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

//  props diye default vabe individual menu rcv korse(props from Menu.js), omport kora lagenay, same like related_name in django
// props.dist == {dish} //object de-structure
const MenuItem = ({ dish, onSelectDish }) => {
    return (
        // from reactstrap website, code copy paste, card->image-overlay card
        <div>
            <Card
                inverse
                style={{ padding: 10, margin: 10, cursor: "pointer" }}
                onClick={() => onSelectDish(dish)}
            >
                <CardImg
                    alt={dish.name}
                    src={dish.image}
                    style={{
                        height: 270,
                        opacity: 0.5,
                    }}
                    width="100%"
                />
                <CardImgOverlay>
                    <CardTitle
                        tag="h5"
                        style={{
                            fontSize: 25,
                            fontWeight: "bold",
                            color: "#000",
                        }}
                    >
                        {dish.name}
                    </CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
};

export default MenuItem;
