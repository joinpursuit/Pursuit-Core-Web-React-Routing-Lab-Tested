import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import randomCat from "./Components/catRandom";
import catRandomNum from "./Components/catRandomNum";
import dogRandom from "./Components/dogRandom";
import dogRandomNum from "./Components/dogRandomNum";
import breed from "./Components/breed";
function App() {
  return (
    <div className="app">
      <main>
        <Route exact path={"/cat/random"} component={randomCat} />
        <Route exact path={"/cat/random/:num"} component={catRandomNum} />
        <Route exact path={"/dog/random"} component={dogRandom} />
        <Route exact path={"/dog/random/:num"} component={dogRandomNum} />
        <Route exact path={"/dog/:breed"} component={breed} />
        <h1>animal planet</h1>
      </main>
    </div>
  );
}

export default App;
