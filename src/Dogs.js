import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import Dog from "./Dog";
import DogRandom from "./DogRandom"

export default class Dogs extends Component {
  constructor() {
    super();
    this.state = {
      randomDogs: [],
    };
  }

  renderRandom = () => {
    try {
      axios.get().then((response) => {
          console.log(response)
        this.setState({
          randomDogs: [...this.state.randomDogs, response],
        });
      });

      return (
        <DogRandom
          randomDogs={this.state.randomDogs}
          renderRandom={this.renderRandom}
        />
      );
    } catch {
      console.log("error");
    }
  };

  render() {
    return (
      <div>
        <h1>DOG COMPONENT</h1>
        <Switch>
          <Route exact path="/dog/random" render={this.renderRandom} />
          <Route path="/dog/random/:num" render={this.renderRandomNum} />
          <Route path="/dog/:breed" render={this.renderPet} />
        </Switch>
      </div>
    );
  }
}

// Random dog image /dog/random: Load a random dog image. Include a button that loads a new random image when clicked.
// Multiple random dogs /dog/random/:num: This will render the number of random dog images requested for in the num URL parameter using a single API call to the dog API. No button required.
// Random dog by breed /dog/:breed: This will render a dog image of the specified breed. No button required.
