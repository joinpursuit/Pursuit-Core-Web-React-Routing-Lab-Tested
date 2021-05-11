import React, { Component } from "react";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import RandomCats from "./RandomCats.js";

export class RandomCat extends Component {
  constructor() {
    super();
    this.state = {
      cat: "",
    };
  }

  componentDidMount() {
    this.getCat();
  }

  getCat = async () => {
    let cat = await axios.get("https://api.thecatapi.com/v1/images/search");
    this.setState({
      cat: cat.data[0].url,
    });
  };

  renderCat = () => {
    return (
      <div>
        <img src={this.state.cat} alt="cat-image" />
        <button onClick={this.getCat}>Get new cat</button>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Switch>
          <Route path="/cat/random/:num" component={RandomCats} />
          <Route path="/cat/random" render={this.renderCat} />
        </Switch>
      </div>
    );
  }
}

export default RandomCat;
