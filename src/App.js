import { Route, Switch } from "react-router-dom";
import Cats from "./Cats"
import Dogs from "./Dogs"
import CatsandDogs from "./CatsandDogs"
import "./App.css";

function App() {
  return (
    <div className="app">
      <main>
        <Switch>
          <Route path="/all/random" component={CatsandDogs}></Route>
          <Route path="/cat" component={Cats}></Route>
          <Route path="/dog" component={Dogs}></Route>
          <Route render={() => <h1>404: Nothing to see here</h1>}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
