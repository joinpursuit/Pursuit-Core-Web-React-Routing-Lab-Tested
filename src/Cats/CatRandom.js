import React, { Component } from "react";
import catsAPI from "./catAPI";

export default class CatRandom extends Component {
  constructor() {
    super();

    this.state = {
      catURL: "",
    };
  }

  newCat = async () => {
    const catURL = await catsAPI.getCat();
    this.setState({ catURL });
  };

  componentDidMount() {
    this.newCat();
  }

  render() {
    const { catURL } = this.state;
    return (
      <div>
        <h1>CAT RANDOM COMPONENT</h1>
        <button onClick={this.newCat}>Get new cat</button>
        <img
          src={catURL}
          alt="Random Cat"
          style={{ width: "200px", height: "200px"}}
        />
      </div>
    );
  }
}
