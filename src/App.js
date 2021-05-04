import RandomDog from './components/RandomDog'
import Dogs from './components/Dogs'
import DogBreed from './components/DogBreed'
import RandomCat from './components/RandomCat'
import Cats from './components/Cats'
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="app">
      <main>
        <Switch>
        <Route path={"/dog/random/:num"} component={Dogs} />
        <Route path={"/cat/random/:num"} component={Cats} />
        <Route path={"/dog/random"} component={RandomDog} />
        <Route path={"/cat/random"} component={RandomCat} />
        <Route path={"/dog/:breed"} component={DogBreed} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
