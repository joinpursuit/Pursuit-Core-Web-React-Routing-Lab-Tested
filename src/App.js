import { Route } from "react-router-dom";

import AllRandom from "./AllRandom";
import CatRandom from "./CatRandom";
import CatRandomNum from "./CatRandomNum";
import DogBreed from "./DogBreed";
import DogRandom from "./DogRandom";
import DogRandomNum from "./DogRandomNum";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Route path="/dog/random" component={DogRandom} exact />
      <Route path="/dog/random/:num" component={DogRandomNum} exact />
      <Route path="/dog/:breed" component={DogBreed} />
      <Route path="/cat/random" component={CatRandom} exact />
      <Route path="/cat/random/:num" component={CatRandomNum} />
      <Route path="/all/random" component={AllRandom} />
    </div>
  );
}

export default App;
