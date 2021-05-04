import axios from "axios";
import React from "react";
export default class breed extends React.Component {
  state = {};
  async componentDidMount() {
    const { breed } = this.props.match.params;
    const { data } = await axios(`https://dog.ceo/api/breed/${breed}/images/random`);
    this.setState(data);
  }
  render() {
    if (this.state.status !== "success") {
      return "...";
    }
    return <img alt="dog pic" src={this.state.message} />;
  }
}
