import axios from "axios";
import React from "react";

export default class CatRandom extends React.Component {
  state = {};

  async componentDidMount() {
    await this.getNewCat();
  }

  getNewCat = async () => {
    const { data } = await axios("https://api.thecatapi.com/v1/images/search");
    this.setState(data[0]);
  };

  render() {
    if (!this.state.url) {
      return "...";
    }

    return (
      <>
        <button onClick={this.getNewCat}>Get new cat</button>
        <img alt="Random cat" src={this.state.url} />
      </>
    );
  }
}
