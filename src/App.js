import "./App.css";
import { Route, Switch } from "react-router-dom";
import RandomDog from "./Components/RandomDog";
import RandomDogs from "./Components/RandomDogs";
import { BrowserRouter, Link } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/dog/random">RandomDog</Link>
        <Link to="/dog/random:num">RandomDogNum</Link>
      </nav>
      {/* <h2>Dogs and Cats App</h2> */}
      <Switch>
      <Route path={"/dog/random/:num"} component={RandomDogs}/>
      <Route path={"/dog/random"} component={RandomDog}/>
      </Switch>
    </div>
  );
}

export default App;
