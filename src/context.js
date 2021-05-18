import {useState, createContext, useEffect} from "react";

export const CocktailContext = createContext();
const ApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f="

export function Data(props) {
    const [cockTail , setCockTail] = useState([])
    const [search, setSearch] = useState('a');
    const [favorates, setFavorates] = useState([])

    useEffect(()=> {
        fetch(`${ApiUrl}${search}`)
            .then(response=>response.json())
            .then(data=>setCockTail(data.drinks));
    },[search])

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const addfav = (idDrink) => {
        const fav = cockTail.find(item => item.idDrink === idDrink);
        setFavorates([...favorates, fav]);
    }
    const delfav = (idDrink) => {
        const delfavs = favorates.filter(item=>item.idDrink !== idDrink);
        setFavorates(delfavs);
    }

    return(
        <CocktailContext.Provider value={{cockTail, handleChange, addfav, favorates, delfav}}>
            {props.children}
        </CocktailContext.Provider>
    )
}