import { Route, Switch } from "react-router-dom";
import Cats from "./Cats"
import Dogs from "./Dogs"
import "./App.css";

function App() {
  return (
    <div className="app">
      <main>
        <Switch>
          <Route path="/cat" component={Cats}></Route>
          <Route path="/dog" component={Dogs}></Route>
          <Route render={() => <h1>404: Nothing to see here</h1>}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
