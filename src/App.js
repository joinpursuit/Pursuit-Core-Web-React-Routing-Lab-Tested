import "./App.css";
import RandomDog from "./Dogs/RandomDog.js";
import RandomCat from "./Cats/RandomCat.js";
import { Link, Route, Switch } from "react-router-dom";

const notFound = () => {
  return <h1>Enter Valid URL</h1>;
};

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/dog" component={RandomDog} />
        <Route path="/cat/random" component={RandomCat} />
        <Route component={notFound} />
      </Switch>
    </div>
  );
}

export default App;
