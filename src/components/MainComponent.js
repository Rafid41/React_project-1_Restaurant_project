// restaurant_project\src\components\MainComponent.js

import BodyComponent from "./body/BodyComponent";
import HeaderComponent from "./header/HeaderComponent";
import FooterComponent from "./footer/FooterComponent";

const MainComponent = () => {
    return (
        <div>
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </div>
    );
};

export default MainComponent;
