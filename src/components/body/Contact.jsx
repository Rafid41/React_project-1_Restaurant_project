//restaurant_project\src\components\body\Contact.jsx

import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";

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
    // receive form field values
    handleSubmit = (values) => {
        console.log(values);
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
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-7">
                        {/* <LocalForm e shob field er value receive kore <LocalForm> tag er vitor */}
                        <LocalForm
                            onSubmit={(values) => this.handleSubmit(values)}
                        >
                            {/* <FormGroup row> er "row" prop bool value accept kore */}
                            {/* First Name */}
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
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
