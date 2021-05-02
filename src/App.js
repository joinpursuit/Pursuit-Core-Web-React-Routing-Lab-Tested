import "./App.css";
import { Route, Switch } from 'react-router-dom'
import RandomDog from "./Components/RandomDog";
import RandomDogs from "./Components/RandomDogs";
import DogBreed from "./Components/DogBreed";
import RandomCat from "./Components/RandomCat";
import RandomCats from "./Components/RandomCats";
import Random from "./Components/Random";


function App() {
  return (
    <div className="app">
      <Switch>
        <Route path={"/dog/random/:num"} component={RandomDogs}/> 
        <Route path={"/dog/random"} component={RandomDog}/>
        <Route path={"/dog/:breed"} component={DogBreed}/>
        <Route path={"/cat/random/:num"} component={RandomCats}/> 
        <Route path={"/cat/random"} component={RandomCat}/>
        <Route path={"/all/random"} component={Random}/>
        
      </Switch>
    </div>
  );
}

export default App;
