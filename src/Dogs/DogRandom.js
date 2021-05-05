import React, { Component } from "react";
import dogsAPI from "./dogAPI";

export default class DogRandom extends Component {
  constructor() {
    super();

    this.state = {
      dogIMG: "",
    };
  }

  newDog = async () => {
    const dogIMG = await dogsAPI.getDog();
    this.setState({ dogIMG });
  };

  componentDidMount() {
    this.newDog();
  }

  render() {
    const { dogIMG } = this.state;
    return (
      <div>
        <h1>DOG RANDOM COMPONENT</h1>
        <button onClick={this.newDog}>Get new dog</button>
        <img
          src={dogIMG}
          alt="Random Dog"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
    );
  }
}
