import React, { useContext } from "react";
import {useParams,Link} from "react-router-dom";
import { CocktailContext } from "../../context";
import "./styles.css"

function Details() {
    const {cockTail} = useContext(CocktailContext);
    const {productId} = useParams();
    const product = cockTail.find(item=>item.idDrink === productId);
    console.log(product);
    return(
        <div>
            <div className="details-nav">
                <Link to="/" style={{textDecoration: "none"}}><h1 className="header">TheCocktail</h1></Link>
                <Link to="/favorate"><h2 className="fav">MyFavorates</h2></Link>
                <Link to="/recipes" style={{textDecoration: "none"}}><h2 className="recipes">Recipes</h2></Link>
            </div>
            <div className="data">
                <div>
                <img src={product.strDrinkThumb} alt="cocktail"/>
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
                <ul>{product.strTags}</ul>
                </div>
            </div>
        </div>
    )
}

export default Details;