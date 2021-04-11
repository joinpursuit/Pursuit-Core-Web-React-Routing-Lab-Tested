import axios from "axios";
import React from "react";

export default class CatRandom extends React.Component {
  state = {};

  async componentDidMount() {
    await this.getNewCat();
  }

  getNewCat = async () => {
    const { data } = await axios("https://api.thecatapi.com/v1/images/search", {
      headers: {
        "x-api-key": "edf80f4c-d501-4b3d-a968-b827f69eff4c",
      },
    });

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
