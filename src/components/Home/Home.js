import React from "react";
import {Link} from "react-router-dom";
import "./styles.css";

function Home() {
    return(
        <div className="home">
            <nav className="navbar navbar-expand-lg">
                <h1>TheCocktail</h1>
                <div className="right">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/recipes">Recipes</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </div>
            </nav>
            <h2>Its'<br/>Beginning<br/> To Look<br/> A Lot Like<br/><span className="cocktail">Cocktails</span></h2>
        </div>
    )
}

export default Home;