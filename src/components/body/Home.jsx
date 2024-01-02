// src\components\body\Home.jsx
import React, { Component } from "react";
// for redux
import { connect } from "react-redux";

// this fn receives the sate of reducer.js
const mapStateToProps = (state) => {
    console.log("mapStateToProps: ",state);
    return {
        // ekhane j j state er property return korbo, ta Home er vitor "props" hishebe jabe
        //  j name e (ekhane "dishes") pass korbo, oi name e jabe
        dishes: state.dishes,
        sample: state.sample
    }
}

export class Home extends Component {
    componentDidMount() {
        console.log("Home.js State: ", this.state);
        console.log("Home.js Props: ", this.props);
    }
    render() {
        // modifying browser title in Navbar
        document.title = "Restaurant Project";
        return <div>Home</div>;
    }
}

// connect this component with reducer state
export default connect(mapStateToProps)(Home);
