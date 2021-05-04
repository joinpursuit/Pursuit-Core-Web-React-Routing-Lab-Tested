import "./App.css";
import { Route, Switch } from "react-router-dom";
import RandomDog from "./Components/RandomDog";
import RandomDogs from "./Components/RandomDogs";
import DogBreed from "./Components/ DogBreed";
import CatRandom from "./Components/CatRandom";
import CatRandomNum from "./Components/CatRandomNum";
import Bonus from "./Components/Bonus";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        {/* how to use exact path to get only one active selction */}
        <Route path={"/dog/random/:num"} component={RandomDogs} />
        <Route exact path={"/dog/random"} component={RandomDog} />
        <Route path={"/dog/:breed"} component={DogBreed} />
        <Route path={"/cat/random/:num"} component={CatRandomNum} />
        <Route exact path={"/cat/random"} component={CatRandom} />
        <Route path={"/all/random"} component={Bonus} />
      </Switch>
    </div>
  );
}

export default App;
