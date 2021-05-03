import Dog from "./Components/Dog";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar"
import Dogs from "./Components/Dogs"
import DogByBreed from "./Components/DogByBreed"
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <NavBar /> */}
      <Switch>
        <Route path={"/dog/random/:num"} component={Dogs} />
        <Route path={"/dog/random"} component={Dog} />
        <Route path={"/dog/:breed"} component={DogByBreed} />

      </Switch>
    </div>
  );
}

export default App;
