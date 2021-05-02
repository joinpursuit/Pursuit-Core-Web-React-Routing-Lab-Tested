import "./App.css";
import CatRandom from "./Components/CatRandom"
import CatRandomNum from "./Components/CatRandomNum"
import DogBreed from "./Components/DogBreed"
import DogRandom from "./Components/DogRandom"
import DogRandomNum from "./Components/DogRandomNum"
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <main>
        <h1>Hello, world!</h1>
        <Switch>
          <Route path={"/dog/random/:num"} component={DogRandomNum} />
          <Route path={"/dog/random"} component={DogRandom} />
          <Route path={"/dog/breed"} component={DogBreed} />
          <Route path={"/cat/random/:num"} component={CatRandomNum} />
          <Route path={"/cat/random"} component={CatRandom} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
