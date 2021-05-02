import "./App.css";
import MultipleRandomDogs from "./Components/MultipleRandomDogs";
import RandomDog from './Components/RandomDog'
import RandomDogByBreed from './Components/RandomDogByBreed'
import { Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="app">
      <main>
        <Switch>
          <Route path={"/dog/random/:num"} component={MultipleRandomDogs}/>
          <Route path={'/dog/:breed'} component={RandomDogByBreed} />
          <Route path={"/dog/random"} component={RandomDog}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
