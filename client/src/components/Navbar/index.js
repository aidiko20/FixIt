import React from "react";
// import { Link } from "react-router-dom";
import "./style.css"

function Navbar() {
    return (
      
        <nav className="navbar navbar-expand-lg" >
  <a className="navbar-brand" href="/">FixIt</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/search">Search <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href ="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Contractors
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/login">Login</a>
          <a className="dropdown-item" href="/signup">SignUp</a>
          <div className="dropdown-divider"></div>
        </div>
      </li>
    </ul>
  </div>
</nav>
    
    );
  }
  
  export default Navbar;
