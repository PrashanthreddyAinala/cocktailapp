import React from "react";
import {Link} from "react-router-dom"
import "./styles.css"

function About() {
    return(
        <div className="about">
            <div className="details-nav">
                <Link to="/" style={{textDecoration: "none"}}><h1 className="header">TheCocktail</h1></Link>
                <Link to="/"><h2 className="about-home">Home</h2></Link>
                <Link to="/recipes" style={{textDecoration: "none"}}><h2 className="about-recipes">Recipes</h2></Link>
            </div>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    )
}

export default About;