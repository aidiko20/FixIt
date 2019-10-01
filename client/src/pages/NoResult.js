import React from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";

function NoResult() {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <h1>404 Page Not Found</h1>
            <h1>
                <span role="img" aria-label="Face With Rolling Eyes Emoji" />
                🙄
            </h1>
        </div>
    );
}

export default NoResult;
