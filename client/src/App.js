import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
// import NoResult from "./pages/NoResult";
import LogIn from "./pages/LogIn";
import CompanyDash from "./pages/CompanyDash";
import axios from "axios";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      email: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

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
      <Router>
        {this.state.loggedIn}
        <div>
        <Navbar />
        <Jumbotron />
        </div>
        <div>
        <Route exact path="/signup" component={Signup} />
        <Route exact path ="/login" component={LogIn} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/home" component={CompanyDash} />
        {/* <Route component ={NoResult} /> */}
        </div>
        <Footer />
      </Router>


    );
  }
}
export default App;
