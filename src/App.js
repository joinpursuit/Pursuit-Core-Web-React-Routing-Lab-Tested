import Dog from "./Components/Dog";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar"
import Dogs from "./Components/Dogs"
import DogByBreed from "./Components/DogByBreed"
import Cat from "./Components/Cat"
import Cats from "./Components/Cats"
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route path={"/dog/random/:num"} component={Dogs} />
        <Route path={"/cat/random/:num"} component={Cats} />
        <Route path={"/dog/random"} component={Dog} />
        <Route path={"/dog/:breed"} component={DogByBreed} />
        <Route path={"/cat/random"} component={Cat} />

      </Switch>
    </div>
  );
}

export default App;
