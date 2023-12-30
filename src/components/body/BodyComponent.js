// restaurant_project\src\components\body\BodyComponent.js

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import About from "./About";

const BodyComponent = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
};

export default BodyComponent;
