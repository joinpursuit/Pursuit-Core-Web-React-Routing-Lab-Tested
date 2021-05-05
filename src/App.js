import { Route, Switch } from "react-router";
import RandomDog from "./Dogs/RandomDog"
import RandomNumOfDogs from "./Dogs/RandomNumOfDogs"
import RandomDogBreed from "./Dogs/RandomDogBreed"
import RandomCat from "./Cats/RandomCat"
import RandomNumOfCats from "./Cats/RandomNumOfCats"

import "./App.css";

import React, { Component } from 'react'

export class App extends Component {

  render() {
    return (
      <div>
      <Switch>
        <Route path="/dog/random/:num" component={RandomNumOfDogs}/>
        <Route path="/dog/random" component={RandomDog}/>
        <Route path="/dog/:breed" component={RandomDogBreed}/>
        <Route path ="/cat/random/:num" component={RandomNumOfCats}/>
        <Route path ="/cat/random" component={RandomCat}/>
      </Switch>
      </div>
    )
  }
}

export default App