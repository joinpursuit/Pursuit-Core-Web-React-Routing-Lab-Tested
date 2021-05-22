import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RandomDogs from './Components/RandomDogs';
import RandomDog from './Components/RandomDog';
import DogBreed from './Components/DogBreed';
import RandomCats from './Components/RandomCats';
import RandomCat from './Components/RandomCat';
import "./App.css";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/dog/random/:num" component={RandomDogs} />
        <Route path="/dog/random" component={RandomDog} />
        <Route path="/dog/:breed" component={DogBreed} />
        <Route path="/cat/random/:num" component={RandomCats} />
        <Route path="/cat/random" component={RandomCat} />
      </Switch>
    </div>
  );
}

export default App;
