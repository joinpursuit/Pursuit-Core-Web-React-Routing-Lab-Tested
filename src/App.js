import RandomDog from './components/RandomDog'
import Dogs from './components/Dogs'
import DogBreed from './components/DogBreed'
import RandomCat from './components/RandomCat'
import Cats from './components/Cats'
import CatsAndDogs from './components/CatsAndDogs'
import { Route, Switch } from 'react-router-dom'
import "./App.css";

function App() {
  return (
    <div className="app">
      <main>
        <Switch>
        <Route path={"/dog/random/:num"} component={Dogs} />
        <Route path={"/cat/random/:num"} component={Cats} />
        <Route path={"/all/random"} component={CatsAndDogs} />
        <Route exact path={"/dog/random"} component={RandomDog} />
        <Route exact path={"/cat/random"} component={RandomCat} />
        <Route path={"/dog/:breed"} component={DogBreed} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
