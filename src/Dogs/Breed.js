import React, { Component } from "react";
import axios from "axios";

export class Breed extends Component {
  constructor() {
    super();
    this.state = {
      dog: "",
    };
  }

  componentDidMount() {
    const { breed } = this.props.match.params;
    this.getDogByBreed(breed);
  }

  getDogByBreed = async (breed) => {
    let dog = await axios.get(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    this.setState({
      dog: dog.data.message,
    });
  };

  render() {
    return (
      <div>
        <img src={this.state.dog} alt="dog-image" />
      </div>
    );
  }
}

export default Breed;
