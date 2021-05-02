import "./App.css";
import { Route } from "react-router-dom";
// import RandomDog from "./Components/RandomDog";
import RandomDogs from "./Components/RandomDogs";

function App() {
  return (
    <div className="app">
      <Route path={"/dog/random/:num"} component={RandomDogs}/>
      {/* <RandomDog /> */}
    </div>
  );
}

export default App;
