import React, { Component } from "react";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import RandomDogs from "./RandomDogs";
import Breed from "./Breed.js";

export class RandomDog extends Component {
  constructor() {
    super();
    this.state = {
      dog: "",
    };
  }

  componentDidMount() {
    this.getDog();
  }

  getDog = async () => {
    let dog = await axios.get("https://dog.ceo/api/breeds/image/random");
    this.setState({
      dog: dog.data.message,
    });
  };

  renderDog = () => {
    return (
      <div>
        <img src={this.state.dog} alt="dog-image" />
        <button onClick={this.getDog}>Get new dog</button>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Switch>
          <Route path="/dog/random/:num" component={RandomDogs} />
          <Route path="/dog/random" render={this.renderDog} />
          <Route path="/dog/:breed" component={Breed} />
        </Switch>
      </div>
    );
  }
}

export default RandomDog;
