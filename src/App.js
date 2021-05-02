import "./App.css";
import {Route, Switch} from "react-router-dom"
import RandomDog from "./Components/RandomDog"
import MultipleDogs from "./Components/MultipleDogs"
import DogBreed from "./Components/DogBreed"
import RandomCat from "./Components/RandomCat"
import MultipleCats from "./Components/MultipleCats"
function App() {
  return (
    <div className="app">
      <Switch>
        <Route path={"/dog/random/:num"} component={MultipleDogs} />
        <Route path={"/dog/random"} component={RandomDog}/>
        <Route path={"/dog/:breed"} component={DogBreed} />
        <Route path={"/cat/random/:num"} component={MultipleCats} />
        <Route path={"/cat/random"} component={RandomCat} />
      </Switch>
    </div>
  );
}

export default App;
