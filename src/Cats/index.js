import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import CatRandom from "./CatRandom";
import CatRandomNum from "./CatRandomNum";

const renderCatRandomNum = ({ match }) => {
    console.log(match.params.num)
  return <CatRandomNum num={match.params.num} />;
};

const Cats = () => {
  return (
    <div>
      <div>CATS COMPONENT index</div>

      <Link to="/cat/random">Cat Random</Link>
      <Switch>
        <Route exact path="/cat/random" component={CatRandom} />
        <Route path="/cat/random/:num" render={renderCatRandomNum} />
      </Switch>
    </div>
  );
};

export default Cats;
