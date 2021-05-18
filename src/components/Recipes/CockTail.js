import React, { useContext } from "react";
import {Link} from "react-router-dom";
import { CocktailContext } from "../../context";

function CockTail(props) {
    const {addfav, favorates, delfav} = useContext(CocktailContext);
     return (
        <div className="col-6 col-md-4 col-lg-3 card-div">
            <div className="card">
                <Link to={`/details/${props.idDrink}`}>
                    <img src={props.strDrinkThumb} alt="cocktail" className="card-img-top"/>
                </Link>
                <div className="flex">
                    <p className="card-title">{props.strDrink}</p>
                    {favorates.find(item=>item.idDrink === props.idDrink) ? 
                        <i className='fas fa-heart delheart'onClick={()=>delfav(props.idDrink)}></i> : 
                        <i className="far fa-heart heart" onClick={()=>addfav(props.idDrink)}></i>
                    }
                </div>
            </div>
        </div>
    )
}

export default CockTail;