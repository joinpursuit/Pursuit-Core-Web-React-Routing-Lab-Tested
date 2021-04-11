import axios from "axios";
import React from "react";

export default class DogRandom extends React.Component {
  state = {};

  async componentDidMount() {
    await this.getNewDog();
  }

  getNewDog = async () => {
    this.setState({ status: "loading" });
    const { data } = await axios("https://dog.ceo/api/breeds/image/random");

    this.setState(data);
  };

  render() {
    if (this.state.status !== "success") {
      return "...";
    }

    return (
      <>
        <button onClick={this.getNewDog}>Get new dog</button>
        <img alt="Random dog" src={this.state.message} />
      </>
    );
  }
}
