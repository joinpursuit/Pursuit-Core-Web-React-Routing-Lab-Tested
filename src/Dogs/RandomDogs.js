import React, { Component } from "react";
import axios from "axios";

export class RandomDogs extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
    };
  }

  componentDidMount() {
    const { num } = this.props.match.params;
    this.getDogs(num);
  }

  getDogs = async (num) => {
    let dogs = await axios.get(
      `https://dog.ceo/api/breeds/image/random/${num}`
    );
    this.setState({
      dogs: dogs.data.message,
    });
  };
  render() {
    let dogs = this.state.dogs.map((elem) => {
      return <img src={elem} alt="dog-image" />;
    });
    return <div>{dogs}</div>;
  }
}

export default RandomDogs;
