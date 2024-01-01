import React, { Component } from "react";

export class Home extends Component {
    render() {
        // modifying browser title in Navbar
        document.title = "Restaurant Project";
        return <div>Home</div>;
    }
}

export default Home;
