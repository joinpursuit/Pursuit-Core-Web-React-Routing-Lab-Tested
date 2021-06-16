import "./App.css";
import { Route, Switch, Link } from "react-router-dom"
import Cats from './Cats'
import Dogs from './Dogs'
import CatsAndDogs from './CatsAndDogs'

import React from 'react'


const Welcome = () => {
  return <h1>Welcome to my Cats and Dogs Page!</h1>
}
const NavBar = () => {
  return(
    <div>
      <Link to='/'>Home</Link>
      <Link to='/cat/random'>Cats</Link>
      <Link to='/dog/random'>Dogs</Link>
    </div>
    )
}

function App() {
  return (
    <div className='app'>
      <NavBar />
      <main>
        <Switch>
          <Route path='/dog' component={Dogs} />
          <Route path='/cat' component={Cats} />
          <Route path='/all/random' component={CatsAndDogs} />
          <Route path='/' render={Welcome} />
        </Switch>
      </main>
    </div>
  )
}

export default App;