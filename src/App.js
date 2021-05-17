import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import Favorates from "./components/Favorate/Favorate";
import About from "./components/About/About";
import Recipes from "./components/Recipes/Recipes";
import './App.css';

function App() {
  return (
     <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/recipes" exact>
          <Recipes />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/favorate" exact>
          <Favorates />
        </Route>
        <Route path="/details/:productId" exact>
          <Details />
        </Route>
      </Switch>
  );
}

export default App;
