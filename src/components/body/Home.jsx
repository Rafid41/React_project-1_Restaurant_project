// src\components\body\Home.jsx
import React, { Component } from "react";
import LoadingScreen from "./LoadingScreen";

class Home extends Component {
    render() {
        document.title = "Restaurant Project";
        return (
            <div>
                <LoadingScreen/>
            </div>
        );
    }
}

export default Home;
