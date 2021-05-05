import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DogRandom from './DogRandom'
import DogsRandom from './DogsRandom'
import DogBreed from './DogBreed'

const Dogs = () => {
  return (
    <div>
      DOGS COMPONENT
      <Switch>
        <Route exact path='/dog/random' component={DogRandom} />
        <Route path='/dog/random/:num' component={DogsRandom} />
        <Route path='/dog/:breed' component={DogBreed} />
      </Switch>
    </div>
  )
}

export default Dogs
