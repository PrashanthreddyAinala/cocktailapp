import React from "react";
import {Link} from "react-router-dom";

function CockTail(props) {
    return (
        <div className="col-6 col-md-4 col-lg-3 card-div">
            <div className="card">
                <Link to={`/details/${props.idDrink}`}>
                    <img src={props.strDrinkThumb} alt="cocktail" className="card-img-top"/>
                </Link>
                <div className="flex">
                    <p className="card-title">{props.strDrink}</p>
                    <i className="fa fa-heart-o"></i>
                </div>
            </div>
        </div>
    )
}

export default CockTail;