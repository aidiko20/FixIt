import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { Col, Row, Container } from "../components/Grid";


class LogIn extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    componentDidMount = () => {
        console.log("Log In form loaded");
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.email, this.state.password);
        axios
            .post("/user/login", {
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                console.log("Login Response: ")
                console.log(response)
                this.setState({ redirect: true })
            }).catch(error => {
                console.log("Login Error: ")
                console.log(error);
            })
    }
    renderReditect = () => {
        if (this.state.redirect) {
            return <Redirect to="/home" />
        }
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="sm-4">
                        {this.renderReditect()}
                        <form className="form-horizontal" style={{ width: "300px", height: "300px", background: "rgb(238, 208, 38)", color: "rgb(12, 119, 219)", margin: "30px", padding: "20px", border: "2px" }}>
                            <div className="form-group">
                                <div className="col-1 col-ml-auto">
                                    <label className="form-label" htmlFor="email">Email</label>
                                </div>
                                <div className="col-3 col-mr-auto">
                                    <input className="form-input" type="text" id="email" name="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-1 col-ml-auto">
                                    <label className="form-label" htmlFor="password">Password: </label>
                                </div>
                                <div className="col-3 col-mr-auto">
                                    <input className="form-input" type="password" name="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}
                            >Login</button>
                            <p>If you don't have an account</p>
                            <Link to="/signup">
                                Please sign-up here</Link>
                        </form>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default LogIn;