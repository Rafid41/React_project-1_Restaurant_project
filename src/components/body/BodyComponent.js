// restaurant_project\src\components\body\BodyComponent.js

// NOTE: for react >=v6, redirect, Switch doesn't work
// alternative: Redirect:Navigate, Switch:Routes
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import About from "./About";

const BodyComponent = () => {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Navigate to="/home" />} />
                {/* <Redirect from="/" to="/home" /> */}
            </Routes>
        </div>
    );
};

export default BodyComponent;
