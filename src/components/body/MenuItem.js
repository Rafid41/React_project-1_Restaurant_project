//restaurant_project\src\components\body\MenuItem.js

import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { baseURL } from "../../redux/baseURL";

//  props diye default vabe individual menu rcv korse(props from Menu.js), omport kora lagenay, same like related_name in django
// props.dist == {dish} //object de-structure
const MenuItem = ({ dish, onSelectDish }) => {
    return (
        // from reactstrap website, code copy paste, card->image-overlay card
        <div style={{
            display:"flex",
            justifyContent: "center"
        }}>
            <Card
                inverse
                style={{ padding: 10, margin: 10, cursor: "pointer", width: "50%"}}
                onClick={() => onSelectDish(dish)}
            >
                <CardImg
                    alt={dish.name}
                    src={baseURL + dish.image}
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

// const MenuItem = (props) => {
//     return (
//         <div>
//             <Card style={{ padding: "10px" }}>
//                 <CardImg
//                     width="100%"
//                     alt={baseURL + props.dish.name}
//                     src={baseURL + props.dish.image}
//                     style={{
//                         height: 270,
//                         opacity: "0.5",
//                     }}
//                 />
//                 <CardImgOverlay>
//                     <CardTitle
//                         tag="h5"
//                         style={{ cursor: "pointer" }}
//                         onClick={props.onSelectDish}
//                     >
//                         {props.dish.name}
//                     </CardTitle>
//                 </CardImgOverlay>
//             </Card>
//         </div>
//     );
// };

export default MenuItem;
