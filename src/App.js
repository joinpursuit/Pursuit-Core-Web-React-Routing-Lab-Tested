import MultipleRandomCats from "./Components/MultipleRandomCats";
import MultipleRandomDogs from "./Components/MultipleRandomDogs";
import RandomCatImage from "./Components/RandomCatImage";
import RandomDogByBreed from "./Components/RandomDogByBreed";
import RandomDogImage from "./Components/RandomDogImage";

import React from "react";

import "./App.css";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path={"/cat/random"} component={MultipleRandomCats} />
          <Route exact path={"/cat/random/:num"} component={RandomCatImage} />
          <Route exact path={"/dog/:breed"} component={RandomDogByBreed} />
          <Route exact path={"/dog/random"} component={RandomDogImage} />
          <Route exact path={"/dog/random/:num"} component={MultipleRandomDogs} />
        </Switch>
      </div>
    );
  }
}

export default App;
