import React, { Component } from "react";
import axios from "axios";

export default class Dog extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
    };
  }
  componentDidMount() {
    this.dogApi();
  }
  dogApi = async () => {
    const dogs = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log(dogs);
    this.setState({
      dogs: dogs,
    });
  };
  renderDoggo = (props) => {
    const message = props.match.params.message;
    const { dogs } = this.state;
    const woof = dogs.find(dogs > dogs.message === message);

    if(!woof) {
        return <h1>woof not found</h1>
    }
  };


  render() {
    return (
      <div>
        <h1>Dog api</h1>
        <button>woof me</button>
        {/* <img src={dog.message} alt=""/> */}
      </div>
    );
  }
}
