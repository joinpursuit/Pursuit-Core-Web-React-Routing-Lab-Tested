import "./App.css";
import {Route, Switch} from "react-router-dom";
import RandomDog from "./Components/RandomDog";
import MultipleRandomDogs from "./Components/MultipleRandomDogs";
import RandomDogBreed from "./Components/RandomDogBreed";
import RandomCat from "./Components/RandomCat";
import MultipleRandomCat from "./Components/MultipleRandomCats"


function App() {
  return (
    <div className="app">
      <Switch>
        <Route path={"/dog/random"} component={RandomDog} />
        <Route path={"/dog/random/:num"} component={MultipleRandomDogs} />
        <Route path={"/dog/:breed"} component={RandomDogBreed} />
        <Route path={"/cat/random"} component={RandomCat} />
        <Route path={"/cat/random/:num"} component={MultipleRandomCat} />
      </Switch>
    </div>
  );
}

export default App;
