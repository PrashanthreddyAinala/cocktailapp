import React, { useContext } from "react";
import {Link} from "react-router-dom"
import { CocktailContext } from "../../context";
import CockTail from "./CockTail"
import "./styles.css"

function Recipes() {
    const {cockTail , handleChange} = useContext(CocktailContext);

    return(
        <div>
            <div className="recipes-nav">
                <Link to="/" style={{textDecoration: "none"}}><h1 className="header">TheCocktail</h1></Link>
                <Link to="/favorate"><h2 className="fav">MyFavorates</h2></Link>
            </div>
            <input type="text" placeholder="Search for a cocktail..." className="input" onChange={(e)=>handleChange(e)}/>
            <div className="row items">
                {cockTail.map(item=>{
                    return <CockTail key={item.idDrink} {...item}/>
                })}
            </div>
        </div>
    )
}

export default Recipes;