import "./App.css";
import { Route } from "react-router-dom";
import RandomDog from "./Components/RandomDog";
import RandomDogs from "./Components/RandomDogs";
import DogBreed from "./Components/ DogBreed";


function App() {
  return (
    <div className="app">
      <Route path={"/dog/random"} component={RandomDog}/>
      <Route path={"/dog/random/:num"} component={RandomDogs}/>
      <Route path={"/dog/:breed"} component={DogBreed}/>
    </div>
  );
}

export default App;
