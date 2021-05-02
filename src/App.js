import "./App.css";
import { Route, Switch } from "react-router-dom";
import Links from "./Components/Links";
import RandomDogImage from "./Components/RandomDogImage";
import RandomCatImage from "./Components/RandomCatImage";
import MultipleRandomDogs from "./Components/MultipleRandomDogs";
import MultipleRandomCats from "./Components/MultipleRandomCats";
import RandomDogByBreed from "./Components/RandomDogByBreed";
import RandomCatAndDogImage from "./Components/RandomCatAndDogImage";


function App() {
  return (
    <div className="app">
      <Switch>
        <Route path={"/dog/random/:num"} component={MultipleRandomDogs}></Route>
        <Route path={"/dog/random"} component={RandomDogImage}></Route>
        <Route path={"/dog/:breed"} component={RandomDogByBreed}></Route>
        <Route path={"/cat/random/:num"} component={MultipleRandomCats}></Route>
        <Route path={"/cat/random"} component={RandomCatImage}></Route>
        <Route path={"/all/random"} component={RandomCatAndDogImage}></Route>
      </Switch>
    </div>
  );
}

export default App;
