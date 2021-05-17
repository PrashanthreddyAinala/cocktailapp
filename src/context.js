import {useState, createContext, useEffect} from "react";

export const CocktailContext = createContext();
const ApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f="

export function Data(props) {
    const [cockTail , setCockTail] = useState([])
    const [search, setSearch] = useState('a');
    
    useEffect(()=> {
        fetch(`${ApiUrl}${search}`)
            .then(response=>response.json())
            .then(data=>setCockTail(data.drinks));
    },[search])

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return(
        <CocktailContext.Provider value={{cockTail, handleChange}}>
            {props.children}
        </CocktailContext.Provider>
    )
}