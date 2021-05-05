import React from "react";
import { Switch, Route } from "react-router-dom";
import CatRandom from "./CatRandom";
import CatRandomNum from "./CatRandomNum";

const renderCatRandomNum = ({ match }) => {
  return <CatRandomNum num={match.params.num} />;
};

const Cats = () => {
  return (
    <div>
      CATS COMPONENT
      <Switch>
        <Route exact path="/cat/random" component={CatRandom} />
        <Route path="/cat/random/:num" render={renderCatRandomNum} />
      </Switch>
    </div>
  );
};

export default Cats;
