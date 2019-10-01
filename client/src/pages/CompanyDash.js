import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import axios from "axios";
import { userInfo } from "../App";
class CompanyDash extends Component {
  constructor() {
    super()
    this.state = {
      email: null
    }
    this.updateUser = this.updateUser.bind(this)
  }
  companyResults = (data) => {
    console.log(data);
    this.setState({ companyResults: data });
  }
  componentDidMount() {
    this.getUser()
  }
  updateUser(userObject) {
    this.setState(userObject)
  }
  getUser() {
    axios.get('/user/').then(response => {
      console.log("Response.data")
      console.log(response.data)
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          email: response.data.user.email
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          email: null
        })
      }
    })
  }
  render() {
    return (
      <div style={{ background:"rgb(238, 208, 38)", color: "rgb(12, 119, 219)", padding: "50px"}}>
        <h1>Company Dashboard</h1>
          <p>{this.state.email}</p>
        <Link to="/login">Log Out</Link>
      </div>
    );
  }
}
export default CompanyDash;