//restaurant_project\src\components\body\Contact.jsx

import React, { Component } from "react";
import { Button, FormGroup, Label, Col } from "reactstrap";
import { Form, Control, Errors, actions } from "react-redux-form";
import { connect } from "react-redux";
import axios from "axios";
import { baseURL } from "../../redux/baseURL";
import { Alert } from "reactstrap";

//=========== connect with redux =================//
const mapDispatchToProps = (dispatch) => {
    return {
        // form submit er por reset kore value fix kore dbe
        resetFeedbackForm: () => {
            // "feedback" holo reducer.js er form pass er keyword
            dispatch(actions.reset("feedback"));
        },
    };
};

//========= validators ===========//
// validator pass na korle submit hbena
//valid value
const required = (val) => val && val.length;

// check number or not, NaN == Not a Number
const isNumber = (val) => !isNaN(Number(val));

// check email field
const validEmail = (val) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

// =================== class=====================//
class Contact extends Component {
    state = {
        alertShow: false,
        alertText: null,
        alertType: null,
    };

    // receive form field values
    handleSubmit = (values) => {
        // post frrdback data to server
        axios
            .post(baseURL + "feedback", values)
            .then((response) => response.status)
            .then((status) => {
                if (status === 201) {
                    //201 means new created
                    this.setState({
                        alertShow: true,
                        alertText: "Submitted Successfully",
                        alertType: "success", //bootstrap color er className er moto
                    });

                    // messagebox timelimit
                    setTimeout(() => {
                        this.setState({
                            alertShow: false,
                        });
                    }, 3000);
                }
            }) // error catching
            .catch((error) => {
                this.setState({
                    alertShow: true,
                    alertText: error.message,
                    alertType: "danger",
                });
                setTimeout(() => {
                    this.setState({
                        alertShow: false,
                    });
                }, 3000);
            });

        this.props.resetFeedbackForm();
    };

    render() {
        // modifying browser title in Navbar
        document.title = "Contact";
        return (
            <div className="container">
                <div
                    className="row row-content"
                    style={{ paddingLeft: "20px", textAlign: "left" }}
                >
                    {/* isOpen ==false hole alret dekhabena */}
                    <Alert
                        isOpen={this.state.alertShow}
                        color={this.state.alertType}
                    >
                        {this.state.alertText}
                    </Alert>

                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-7">
                        {/* 
                            # redux theke form import hole <LocalForm> use na kore <Form> use korte hbe
                            # "feedback" holo reducer.js er form pass er keyword
                            # 'feedback' diye form er sathe store connect
                        */}
                        <Form
                            model="feedback"
                            onSubmit={(values) => this.handleSubmit(values)}
                        >
                            <FormGroup row>
                                {/* md==medium */}

                                <Label htmlFor="firstname" md={2}>
                                    First Name
                                </Label>

                                <Col md={10}>
                                    <Control.text
                                        model=".firstname"
                                        name="firstname"
                                        placeholder="First Name"
                                        // bootrup design
                                        className="form-control"
                                        // call validators, don't pass args
                                        validators={{
                                            required,
                                        }}
                                    />
                                    {/* 
                                        validator fail hole message dekhabe
                                        validator er model name hbe j model er error catch kort chassi
                                    */}
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        // kon validator: fail hole ki msg
                                        messages={{
                                            required: "Required",
                                        }}
                                    />
                                </Col>
                            </FormGroup>

                            {/* Last Name */}
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>
                                    Last Name
                                </Label>

                                <Col md={10}>
                                    <Control.text
                                        model=".lastname"
                                        name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        // kon validator: fail hole ki msg
                                        messages={{
                                            required: "Required",
                                        }}
                                    />
                                </Col>
                            </FormGroup>

                            {/* Phone num */}
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>
                                    Contact Tel.
                                </Label>

                                <Col md={10}>
                                    {/* type= “tel” hole <Control.text likhte hbe, onnovabe validate kora jabe */}
                                    <Control.text
                                        model=".telnum"
                                        name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required,
                                            isNumber,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        // kon validator: fail hole ki msg
                                        messages={{
                                            required: "Required, ",
                                            isNumber: "Invalid Number!",
                                        }}
                                    />
                                </Col>
                            </FormGroup>

                            {/* Email */}
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>
                                    Email
                                </Label>

                                <Col md={10}>
                                    <Control.text
                                        model=".email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required,
                                            validEmail,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        // kon validator: fail hole ki msg
                                        messages={{
                                            required: "Required, ",
                                            validEmail: "Invalid Email!",
                                        }}
                                    />
                                </Col>
                            </FormGroup>

                            {/* checkbox */}
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                // bootstrap class for checkbox
                                                className="form-check-input"
                                            />
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>

                                {/* drop down menu */}
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select
                                        model=".contactType"
                                        name="contactType"
                                        className="form-control"
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>

                            {/*  for messagebox */}
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>
                                    Your Feedback
                                </Label>
                                <Col md={10}>
                                    <Control.textarea
                                        model=".message"
                                        name="message"
                                        rows="12"
                                        className="form-control"
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".message"
                                        show="touched"
                                        // kon validator: fail hole ki msg
                                        messages={{
                                            required: "Required, ",
                                        }}
                                    />
                                </Col>
                            </FormGroup>

                            {/* submit button */}
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Contact);
