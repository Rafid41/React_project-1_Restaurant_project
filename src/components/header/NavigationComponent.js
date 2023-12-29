// restaurant_project\src\components\header\NavigationComponent.js
import { Navbar, NavbarBrand } from "reactstrap";

const NavigationComponent = () => {
    return (
        <div>
            <Navbar color="dark" dark>
                <NavbarBrand href="/">Restaurant Project</NavbarBrand>
            </Navbar>
        </div>
    );
};

export default NavigationComponent;
