import "./App.css";
import MultipleRandomCats from "./Components/MultipleRandomCats";
import MultipleRandomDogs from "./Components/MultipleRandomDogs";
import RandomCatImage from "./Components/RandomCatImage";
import RandomDogByBreed from "./Components/RandomDogByBreed";
import RandomDogImage from "./Components/RandomDogImage";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

function App() {
  return (
    <div className="app">
      Hello, world!
      <Switch>
        <Route exact path={"/dog/random"} component={RandomDogImage} />
        <Route exact path={"/dog/random/:num"} component={MultipleRandomDogs} />
        <Route path={"/dog/:breed"} component={RandomDogByBreed} />
        <Route path={"/cat/random"} component={RandomCatImage} />
        <Route path={"/cat/random/:num"} component={MultipleRandomCats} />
        {/* <Route exact path={"/"} component={Home} />
        <Route path={"/*"} component={FourOFour} /> */}
      </Switch>
    </div>
  );
}

export default App;
