// src\components\body\Home.jsx
import React, { Component } from "react";
// for redux
import { connect } from "react-redux";

// this fn receives the sate of reducer.js, class er baire 
const mapStateToProps = (state) => {
    // console.log("mapStateToProps: ",state);
    return {
        dishes: state.dishes,
        sample: state.sample
    }
}


class Home extends Component {


    componentDidMount() {
        console.log("Home.js Props (before update): ", this.props);
        //dispatch to update redux
        this.props.dispatch({
            type: 'TEST',
            str: 'Home Test str'
        })
    }

    // show updated props
    componentDidUpdate() {
        console.log("Home.js Props (after update): ", this.props)
        // o/p: updated state
    }
    
    
    render() {
        document.title = "Restaurant Project";
        return <div><h1>Home</h1></div>;
    }
}

// connect this component with reducer state
export default connect(mapStateToProps)(Home);
