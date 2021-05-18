import React, { useContext } from "react";
import { CocktailContext } from "../../context";
import {Link} from "react-router-dom";
import "./styles.css";

function Favorates() {
    const {favorates, delfav} = useContext(CocktailContext)
    return(
        <div>
            <div className="fav-nav">
                <Link to="/" style={{textDecoration: "none"}}><h1 className="header">TheCocktail</h1></Link>
                <Link to="/recipes"><h2 className="fav-recipes">Recipes</h2></Link>
            </div>
            <div>
                <h1 className="fav-title">Favorates List</h1>
            </div>
            <div>
                {favorates.length > 0 ? favorates.map(item=> {
                    return (
                        <div key={item.idDrink} className="fav-list">
                            <img src={item.strDrinkThumb} alt="cocktail" className="fav-img"/>
                            <div>
                                <h1>{item.strDrink}</h1>
                                <p>{item.strCategory}</p>
                                <p>{item.strGlass}</p>
                            </div>
                            <i className="far fa-trash-alt delIcon" onClick={()=>delfav(item.idDrink)}></i>
                        </div>
                    )
                }): <p>No favorates added...!</p>}
            </div>
            
        </div>
    )
}

export default Favorates;