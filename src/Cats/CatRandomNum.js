import React, { Component } from "react";
import catsAPI from "./catAPI";

export default class CatRandomNum extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
    };
  }
  async componentDidMount() {
    const { num } = this.props;
    const cats = await catsAPI.getMultipleCats(num);
    this.setState({ cats });
  }

  render() {
    const { num } = this.props;
    const { cats } = this.state;
    return (
      <div>
        <h1>{num}</h1>
        {cats.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`random cat ${i + 1} of ${cats.length}`}
            style={{ height: "200px", width: "200px" }}
          />
        ))}
      </div>
    );
  }
}
