import { Link, Route, Switch } from "react-router-dom";
import Cat from "./components/Cat"
import Dog from "./components/Dog"
import AllRandom from "./components/AllRandom"
import "./App.css";

function App() {
  const Home = () => {
    return (
      <div>
        <Link to="/cat/random">Cat</Link>
        {" "}
        <Link to="/dog/random">Dog</Link>
      </div>
    )
  }
  return (
    <div className="app">
      <Switch>
        <Route exact path="/all/random" component={AllRandom} />
        <Route path="/cat" component={Cat} />
        <Route path="/dog" component={Dog} />
        <Route render={Home} />
      </Switch>
    </div>
  );
}

export default App;
