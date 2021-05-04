import "./App.css";
import { Route } from "react-router-dom"
import CatRandom from "./Component/CatRandom";
import CatRandomNum from "./Component/CatRandomNum"
import DogRandom from "./Component/DogRandom"
import DogRandomNum from "./Component/DogRandomNum"
import DogBreed from "./Component/DogBreed"
function App() {
  return (
    <div className="app">
      <main>
        <h1>Hello, world!</h1>
        <Route exact path={"/cat/random"} component={CatRandom} />
        <Route exact path={"/cat/random/:num"} component={CatRandomNum}/>
        <Route exact path={"/dog/random"} component={DogRandom}/>
        <Route exact path={"/dog/random/:num"} component={DogRandomNum}/>
        <Route path="/dog/:breed" component={DogBreed} />

      </main>
    </div>
  );
}

export default App;
