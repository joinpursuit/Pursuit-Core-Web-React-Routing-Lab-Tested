import "./App.css";
import { Route, Switch } from "react-router-dom";
import RandomDog from "./Components/RandomDog";
import RandomDogs from "./Components/RandomDogs";
import DogBreed from "./Components/ DogBreed";
import CatRandom from "./Components/CatRandom";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path={"/dog/random/:num"} component={RandomDogs} />
        <Route path={"/dog/random"} component={RandomDog} />
        <Route path={"/dog/:breed"} component={DogBreed} />
        <Route path={"/cat/random"} component={CatRandom} />

      </Switch>
    </div>
  );
}

export default App;
