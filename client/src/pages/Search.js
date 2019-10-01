import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
// import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";

class Search extends Component {
  state = {
    user: [],
    searchResults: []
  };


  showSearchResults = (data) => {
    console.log(data);
    this.setState({ searchResults: data });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log({ [name]: value })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.serviceName) {
      console.log("service provided")
      console.log(this.state.serviceName);
      API.getUsersByService({
        services: this.state.serviceName
      })
        .then(res => { console.log(res); this.showSearchResults(res.data) })
        .catch(err => console.log(err));
    }
    this.setState({ checkBoxValue: this.state.checkBoxValue })
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-8">
            <div className="card" style={{background: "rgb(238, 208, 38)", color:"rgb(12, 119, 219)", margin: "30px", padding:"20px", border:"2px"}}>
              <div className="card-header">
                Search for services
          </div>
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">Services</legend>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input className="form-check-input" type="radio"
                        name="serviceName"
                        ref="roofing"
                        value={"roofing"}
                        onChange={this.handleInputChange}
                      />
                      <label className="form-radio-label" for="gridRadios1">
                        Roofing
          </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio"
                        name="serviceName"
                        ref="siding"
                        value={"siding"}
                        onChange={this.handleInputChange}
                      />
                      <label className="form-radio-label" for="gridRadios2">
                        Siding
          </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio"
                        name="serviceName"
                        ref="plumbing"
                        value={"plumbing"}
                        onChange={this.handleInputChange}
                      />
                      <label className="form-radio-label" for="gridRadios3">
                        Plumbing
          </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio"
                        name="serviceName"
                        ref="windows"
                        value={"windows"}
                        onChange={this.handleInputChange}
                      />
                      <label className="form-radio-label" for="gridRadios4">
                        Windows
          </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio"
                        name="serviceName"
                        ref="electrical"
                        value={"electrical"}
                        onChange={this.handleInputChange}
                      />
                      <label className="form-radio-label" for="gridRadios5">
                        Electrical
          </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio"
                        name="serviceName"
                        ref="painting"
                        value={"painting"}
                        onChange={this.handleInputChange}
                      />
                      <label className="form-radio-label" for="gridRadios6">
                        Painting
          </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio"
                        name="serviceName"
                        ref="handyman"
                        value={"handyman"}
                        onChange={this.handleInputChange}
                      />
                      <label className="form-radio-label" for="gridRadios7">
                        Handyman
          </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio"
                        name="serviceName"
                        ref="flooring"
                        value={"flooring"}
                        onChange={this.handleInputChange}
                      />
                      <label className="form-radio-label" for="gridRadios8">
                        Flooring
          </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio"
                        name="serviceName"
                        ref="carpet"
                        value={"carpet"}
                        onChange={this.handleInputChange}
                      />
                      <label className="form-radio-label" for="gridRadios9">
                        Carpet
          </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" id="gridRadios10"
                        name="serviceName"
                        ref="heating"
                        value={"heating"}
                        onChange={this.handleInputChange}
                      />
                      <label className="form-radio-label" for="gridRadios10">
                        Heating
          </label>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <button style={{  position: "relative", bottom: "10px", margin: "auto", background:"rgb(12, 119, 219)", color: "black", height: "40px" }}className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleFormSubmit}>Search</button>
                  </div>
                </div>
              </fieldset>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="lg-8">
            <div className="card" style={{background: "rgb(238, 208, 38)", color:" rgb(12, 119, 219)", margin: "30px", padding:"40px", border:"2px"}}>
              <div className="card-title">
                <h1>Search Results</h1>
                <form>
                  <List>

                    {this.state.searchResults.map(result => (
                      <li>Company Name: {result.company},
                      Company Address: {result.street},
                      City: {result.city},
                      State: {result.state},
                      Zip: {result.zip}, 
                      Company Contact No.:{result.tel},
                      Area of Service: {result.area},
                      Services Provided: {result.services}</li>

                        ))}
                  </List>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;