import './App.css'
import React from 'react'
import Cats from './Cats'
import Dogs from './Dogs'
import AllRandom from './AllRandom'
import { Switch, Route } from 'react-router-dom'

function App () {
  return (
    <div className='app'>
      <main>
        <Switch>
          <Route path='/cat' component={Cats} />
          <Route path='/dog' component={Dogs} />
          <Route exact path='/all/random' component={AllRandom} />
          <Route render={() => <h1>404: Nothing to see here</h1>} />
        </Switch>
      </main>
    </div>
  )
}

export default App
