import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Dogs from "./Dogs";
import Cats from "./Cats";




function App() {
  const NotFound = () => {
    return <h1>404: Not Found</h1>;
  };
  return (
    <div className="app">
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/dog"> Dog</Link>{" "}
        <Link to="/cat">Cat</Link>
       
      </nav>
 
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dog" component={Dogs} />
      <Route path="/cat" component={Cats} />
    

      </Switch>
    </div>
  );
}

export default App;
