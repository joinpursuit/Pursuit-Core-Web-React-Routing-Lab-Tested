import React, { Component } from "react";
import axios from "axios";

export class RandomCats extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
    };
  }

  componentDidMount() {
    const { num } = this.props.match.params;
    this.getCats(num);
  }

  getCats = async (num) => {
    let cats = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=${num}`
    );
    this.setState({
      cats: cats.data,
    });
  };

  render() {
    let cats = this.state.cats.map((elem) => {
      return <img src={elem.url} alt="cat-image" />;
    });
    return <div>{cats}</div>;
  }
}

export default RandomCats;
