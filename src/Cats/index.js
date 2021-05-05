import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CatRandom from './CatRandom'
import CatsRandom from './CatsRandom'

const Cats = () => {
  return (
    <div>
      CATS COMPONENT
      <Switch>
        <Route exact path='/cat/random' component={CatRandom} />
        <Route path='/cat/random/:num' component={CatsRandom} />
      </Switch>
    </div>
  )
}

export default Cats
