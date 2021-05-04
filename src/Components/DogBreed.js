import React, { Component } from "react";
import axios from "axios";

export default class DogBreed extends Component {
  state = {  pic: [] };

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
      this.setState({ pic: res.data.message });
    } catch (err) {
      this.setState({ breeds: [] });
    }
  };
  
  render() {
    return (
      <div>
        <h2>DogBreed</h2>
        <img src={this.state.pic} alt="dog pic" />
      </div>
    );
  }
}
