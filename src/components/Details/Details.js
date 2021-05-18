import React, { useContext } from "react";
import {useParams,Link} from "react-router-dom";
import { CocktailContext } from "../../context";
import "./styles.css"

function Details() {
    const {cockTail, favorates, addfav, delfav} = useContext(CocktailContext);
    const {productId} = useParams();
    const product = cockTail.find(item=>item.idDrink === productId);
    return(
        <div>
            <div className="details-nav">
                <Link to="/" style={{textDecoration: "none"}}><h1 className="header">TheCocktail</h1></Link>
                <Link to="/favorate"><h2 className="detail-fav">Favorates</h2></Link>
                <Link to="/recipes" style={{textDecoration: "none"}}><h2 className="recipes">Recipes</h2></Link>
            </div>
            <div>
                <h1 className="recipe-head">Recipe Details</h1>
            </div>
            <div className="data">
                <div>
                <img src={product.strDrinkThumb} alt="cocktail" className="img"/>
                </div>
                <div className="info">
                <h1>{product.strDrink}</h1>
                <p><span className="dark">Category : </span>{product.strCategory}</p>
                <p><span className="dark">Glass : </span>{product.strGlass}</p>
                <p><span className="dark">Instructions : </span>{product.strInstructions}</p>
                <p><span className="dark">Ingredients : </span></p>
                <ul>
                    <li>{product.strIngredient1}</li>
                    <li>{product.strIngredient2}</li>
                    <li>{product.strIngredient3}</li>
                    <li>{product.strIngredient4}</li>
                    <li>{product.strIngredient5}</li>
                </ul>
                {favorates.find(item=>item.idDrink === product.idDrink) ? 
                    <button onClick={()=>delfav(product.idDrink)}>Remove from Favorates</button> : 
                    <button onClick={()=>addfav(product.idDrink)}>Add to Favorates</button>
                }
                </div>
            </div>
        </div>
    )
}

export default Details;