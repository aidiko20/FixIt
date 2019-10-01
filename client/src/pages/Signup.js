import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";


class Signup extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            company: "",
            street: "",
            city: "",
            state: "",
            zip: "",
            tel: "",
            size: "",
            roofing: false,
            siding: false,
            plumbing: false,
            windows: false,
            electrical: false,
            painting: false,
            handyman: false,
            flooring: false,
            carpet: false,
            heating: false,
            area: "",
            redirect: false
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCheckboxChange = (event) => {
        this.setState({
            [event.target.name]: event.target.checked
        })
        console.log(event.target.checked);
    }
    handleFormSubmit(event) {
        console.log(this.state.email)
        event.preventDefault()
        var arr = [];
        for (var key in this.state) {
            if (this.state[key] === true) {
                arr.push(key);
            }
        }
        console.log(arr);

        console.log({
            email: this.state.email,
            password: this.state.password,
            company: this.state.company,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            tel: this.state.tel,
            size: this.state.size,
            services: arr,
            area: this.state.area
        });

        axios.post("/user/signup", {
            email: this.state.email,
            password: this.state.password,
            company: this.state.company,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            tel: this.state.tel,
            size: this.state.size,
            services: arr,
            area: this.state.area
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('successful signup')
                    this.setState({ //redirect to login page
                        redirect: true
                    })
                } else {
                    console.log('username already taken')
                }
            }).catch(error => {
                console.log('signup error: ')
                console.log(error)

            })
    }
    renderReditect = () => {
        if (this.state.redirect) {
            return <Redirect to="/login" />
        }
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-8">
                        {this.renderReditect()}
                        <form style={{ width: "1000px", height: "900px", background: "rgb(238, 208, 38)", color: "rgb(12, 119, 219)", margin: "30px", padding: "20px", border: "2px" }}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Email</label>
                                    <input type="email"
                                        className="form-control"
                                        id="inputEmail4"
                                        name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Password</label>
                                    <input type="password"
                                        className="form-control"
                                        id="inputPassword4"
                                        name="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Compnay Name</label>
                                <input type="text" className="form-control" id="inputName"
                                    name="company"
                                    value={this.state.name}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Company Address</label>
                                <input type="text" className="form-control" id="inputAddress"
                                    name="street"
                                    placeholder="1234 Main St" value={this.state.address}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>City</label>
                                    <input type="text" className="form-control" id="inputCity"
                                        name="city"
                                        value={this.state.city}
                                        onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label>State</label>
                                    <input type="text" className="form-control" id="inputState"
                                        name="state"
                                        value={this.state.state}
                                        onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group col-md-2">
                                    <label>Zip</label>
                                    <input type="text" className="form-control" id="inputZip"
                                        name="zip"
                                        value={this.state.zip}
                                        onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label>Compnay Contact No.</label>
                                    <input type="text" className="form-control" id="inputTel"
                                        name="tel"
                                        value={this.state.tel}
                                        onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label>Company Size</label>
                                    <input type="text" className="form-control" id="inputSize"
                                        name="size"
                                        value={this.state.size}
                                        onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <fieldset className="form-group">
                                <div className="row">
                                    <legend className="col-form-label col-sm-2 pt-0">Services provided</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox"
                                                id="gridRadios1"
                                                name="roofing"
                                                checked={this.state.roofing}
                                                onChange={this.handleCheckboxChange} />
                                            <label className="form-check-label" for="gridRadios1">
                                                Roofing
          </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox"
                                                id="gridRadios2"
                                                name="siding"
                                                checked={this.state.siding}
                                                onChange={this.handleCheckboxChange} />
                                            <label className="form-check-label" for="gridRadios2">
                                                Siding
          </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox"
                                                id="gridRadios3"
                                                name="plumbing"
                                                checked={this.state.plumbing}
                                                onChange={this.handleCheckboxChange} />
                                            <label className="form-check-label" for="gridRadios3">
                                                Plumbing
          </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox"
                                                id="gridRadios4"
                                                name="windows"
                                                checked={this.state.windows}
                                                onChange={this.handleCheckboxChange} />
                                            <label className="form-check-label" for="gridRadios4">
                                                Windows
          </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox"
                                                id="gridRadios5"
                                                name="electrical"
                                                checked={this.state.electrical}
                                                onChange={this.handleCheckboxChange} />
                                            <label className="form-check-label" for="gridRadios5">
                                                Electrical
          </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox"
                                                id="gridRadios6"
                                                name="painting"
                                                checked={this.state.painting}
                                                onChange={this.handleCheckboxChange} />
                                            <label className="form-check-label" for="gridRadios6">
                                                Painting
          </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox"
                                                id="gridRadios7"
                                                name="handyman"
                                                checked={this.state.handyman}
                                                onChange={this.handleCheckboxChange} />
                                            <label className="form-check-label" for="gridRadios7">
                                                Handyman
          </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox"
                                                id="gridRadios8"
                                                name="flooring"
                                                checked={this.state.flooring}
                                                onChange={this.handleCheckboxChange} />
                                            <label className="form-check-label" for="gridRadios8">
                                                Flooring
          </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox"
                                                id="gridRadios9"
                                                name="carpet"
                                                checked={this.state.carpet}
                                                onChange={this.handleCheckboxChange} />
                                            <label className="form-check-label" for="gridRadios9">
                                                Carpet
          </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridRadios10"
                                                name="heating"
                                                checked={this.state.heating}
                                                onChange={this.handleCheckboxChange} />
                                            <label className="form-check-label" for="gridRadios10">
                                                Heating
          </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="form-group col-md-4" style={{margin:"inherit"}}>
                                <label for="inputArea">Area of Services</label>
                                <select id="inputArea" className="form-control"
                                    name="area"
                                    value={this.state.area}
                                    onChange={this.handleInputChange}>
                                    <option select="true">Choose...</option>
                                    <option>Philadelphia</option>
                                </select>
                            </div>
                                <button style={{  width:"100px", position: "relative", bottom: "10px", margin: "auto", background:"rgb(12, 119, 219)", color: "black", height: "40px", padding:"2px" }}
                                    onClick={this.handleFormSubmit}
                                    type="submit"
                                >Sign up</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Signup;