import {useState, createContext, useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast("Item added to favourites", { autoClose: 1500});
        const fav = cockTail.find(item => item.idDrink === idDrink);
        setFavorates([...favorates, fav]);
    }
    const delfav = (idDrink) => {
        toast("Item deleted from favourites", { autoClose: 1500}, {
            position: toast.POSITION.TOP_CENTER
          });
        const delfavs = favorates.filter(item=>item.idDrink !== idDrink);
        setFavorates(delfavs);
    }

    return(
        <CocktailContext.Provider value={{cockTail, handleChange, addfav, favorates, delfav}}>
            {props.children}
            <ToastContainer />
        </CocktailContext.Provider>
    )
}