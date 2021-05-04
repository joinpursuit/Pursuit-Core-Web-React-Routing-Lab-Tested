import React, { Component } from "react";
import axios from "axios";

export default class DogBreed extends Component {
  state = { breeds: [], breed: "", pics: [] };

  componentDidMount() {
    this.handleChange();
  }
  handleChange = async (e) => {
    const { breed } = this.props.match.params;
    try {
      const res = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random/1`
      );
      console.log(res.data.message);
      this.setState({ pics: res.data.message });
    } catch (err) {
      this.setState({ breeds: [] });
    }
  };

  render() {
    return (
      <div>
        <h2>DogBreed</h2>
        <img src={this.state.pics} alt="dog pic" />
      </div>
    );
  }
}
