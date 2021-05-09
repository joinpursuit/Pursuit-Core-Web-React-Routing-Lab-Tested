import React, { Component } from "react";
import catsAPI from "./CatsAPI";

export default class CatRandomNum extends Component {
  constructor() {
    super();
    this.state = {
      catURLs: [],
    };
  }

  async componentDidMount() {
    const cats = await catsAPI.getMultipleCats(this.props.num);
    console.log(this.props.num)
    this.setState({
      catURLs: cats,
    });
  }
  render() {
    const { num } = this.props;
    const { catURLs } = this.state
    return (
      <div>
        {catURLs.map((url, i) => (
          <img
            src={url}
            key={i}
            alt={`random cat ${i + 1} of ${catURLs.length}`}
            style={{height: "100px"}}
          />
        ))}
      </div>
    );
  }
}
