import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Dog from './Dog';
import DogBreed from './DogBreed';
import Cats from './Cats';
import NumOfDogs from './NumOfDogs';
import NumOfCats from './NumOfCats';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React-Routing Lab</h1>
        <Switch>
          <Route exact path ='/cat/random' component={Cats}/>
          <Route path='/cat/random/:num' component={NumOfCats}/>
          <Route path='/dog/random/:num' component={NumOfDogs}/>
          <Route path='/dog/random' component={Dog}/>
          <Route path='/dog/:breed' component={DogBreed}/>
      
        </Switch>
      </div>
    )
  }
}
