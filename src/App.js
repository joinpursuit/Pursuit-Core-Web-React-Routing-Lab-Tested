import "./App.css";
import MultipleRandomDogs from "./Components/MultipleRandomDogs";
import RandomDog from './Components/RandomDog'
import RandomDogByBreed from './Components/RandomDogByBreed'
import { Route, Switch} from "react-router-dom"
import RandomCat from "./Components/RandomCat";
import MultipleRandomCats from './Components/MultipleRandomCats'
import CatsAndDogs from "./Components/CatsAndDogs";

function App() {
  return (
    <div className="app">
      <main>
        <Switch>
          <Route path={"/cat/random/:num"} component={MultipleRandomCats}/>
          <Route path={"/dog/random/:num"} component={MultipleRandomDogs}/>
          <Route path={"/all/random"} component={CatsAndDogs}/>
          <Route path={"/cat/random"} component={RandomCat}/>
          <Route path={"/dog/random"} component={RandomDog}/>
          <Route path={'/dog/:breed'} component={RandomDogByBreed} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
