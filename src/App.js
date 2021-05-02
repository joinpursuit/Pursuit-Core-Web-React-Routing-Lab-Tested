import "./App.css";
import { Route, Switch } from "react-router-dom";
import Links from "./Components/Links";
import RandomDogImage from "./Components/RandomDogImage";
import MultipleRandomDogs from "./Components/MultipleRandomDogs";
import RandomDogByBreed from "./Components/RandomDogByBreed";

function App() {
  return (
    <div className="app">
      <main>
        <h1>Hello, world!</h1>
      </main>
      <Switch>
        <Route path={"/dog/random/:num"} component={MultipleRandomDogs}></Route>
        <Route path={"/dog/random"} component={RandomDogImage}></Route>
        <Route path={"/dog/:breed"} component={RandomDogByBreed}></Route>
        {/* <Route path={"/cat/random/:num"} component={MultipleRandomCats}></Route> */}
        {/* <Route path={"/cat/random"} component={RandomCatImage}></Route> */}
      </Switch>
    </div>
  );
}

export default App;
