import "./App.css";
import { Route, Switch } from "react-router-dom";
// import NavBar from "./Components/NavBar";
import RandomCats from "./Components/RandomCats";
import RandomCat from "./Components/RandomCat";
import RandomDog from "./Components/RandomDog";
import RandomDogs from "./Components/RandomDogs";
import BreedFilter from "./Components/BreedFilter";

function App() {
  return (
    <div className="app">
        <Switch>
          <Route path={"/cat/random/:num"} component={RandomCats} />
          <Route path={"/cat/random"} component={RandomCat} />
          <Route path={"/dog/random/:num"} component={RandomDogs} />
          <Route path={"/dog/random"} component={RandomDog} />
          <Route path={"/dog/:breed"} component={BreedFilter} />
        </Switch>
      {/* <main>
        <h1>SHYNE</h1>
        <RandomCats/>
        <RandomCat/>
        <BreedFilter/>
        <RandomDogs/>
        <RandomDog/>
      </main> */}
    </div>
  );
}

export default App;
