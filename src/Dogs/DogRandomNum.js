import React, { Component } from "react";
import dogsAPI from "./dogAPI";

export default class dogRandomNum extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
    };
  }
  async componentDidMount() {
    const { num } = this.props;
    const dogs = await dogsAPI.getMultipleDogs(num);
    this.setState({ dogs });
  }

  render() {
    const { num } = this.props;
    const { dogs } = this.state;
    return (
      <div>
        <h1>{num}</h1>
        {dogs.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`random dog ${i + 1} of ${dogs.length}`}
            style={{ height: "200px", width: "200px" }}
          />
        ))}
      </div>
    );
  }
}
