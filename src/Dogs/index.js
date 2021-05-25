import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import DogRandom from './DogRandom'
import DogRandomNum from './DogRandomNum'
import DogBreed from './DogBreed'

const renderDogRandomNum = ({ match }) => {
  return <DogRandomNum num={match.params.num} />
}

const renderRandomDogBreed = ({ match }) => {
  return <DogBreed breed={match.params.breed} />
}



class Dogs extends Component {
  render() {
    return (
      <div>
        Dog Component
        <Switch>
          <Route exact path={'/dog/random'} component={DogRandom}/>
          <Route path={'/dog/random/:num'} render={renderDogRandomNum}/>
          <Route path={'/dog/:breed'} render={renderRandomDogBreed}/>
        </Switch>
      </div>
    );
  }
}

export default Dogs;