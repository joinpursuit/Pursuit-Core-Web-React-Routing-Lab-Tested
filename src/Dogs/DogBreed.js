import React, { Component } from "react";
import dogsAPI from "./dogAPI";

export default class DogBreed extends Component {
  constructor() {
    super();

    this.state = {
      dogBreed: "",
    };
  }

  async componentDidMount() {
    const { breed } = this.props;
    const dogBreed = await dogsAPI.getDogBreed(breed);
    this.setState({ dogBreed });
  }

  render() {
    const { breed } = this.props;
    const { dogBreed } = this.state;
    return (
      <div>
        <h1>{breed}</h1>
        <img
          src={dogBreed}
          alt="Breed Dog"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
    );
  }
}
