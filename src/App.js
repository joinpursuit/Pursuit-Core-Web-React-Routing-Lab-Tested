import { Route, Switch } from "react-router-dom";
import Bonus from './Components/Bonus';
import CatRandom from "./Components/CatRandom";
import CatRandomNum from "./Components/CatRandomNum";
import DogBreed from "./Components/DogBreed";
import DogRandom from "./Components/DogRandom";
import DogRandomNum from "./Components/DogRandomNum";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path={"/all/random"} component={Bonus}/>
        <Route path={"/dog/random/:num"} component={DogRandomNum}/>
        <Route path={"/dog/random"} component={DogRandom}/>
        <Route path={"/dog/:breed"} component={DogBreed}/>
        <Route path={"/cat/random/:num"} component={CatRandomNum}/>
        <Route path={"/cat/random"} component={CatRandom}/>
      </Switch>
    </div>
  );
}

export default App;
