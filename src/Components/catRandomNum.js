import React from "react";
import axios from "axios";

class catRandomNum extends React.Component {
  state = {};
  async componentDidMount() {
    this.setState({ data: undefined });
    const { num } = this.props.match.params;
    const { data } = await axios(
      `https://api.thecatapi.com/v1/images/search?limit=${num}&size=full`
    );
    this.setState({ data });
  }
  render() {
    if (!this.state.data) {
      return "...";
    }
    return this.state.data.map(({ url }) => (
      <img alt="cat pic" key={url} src={url} />
    ));
  }
}

export default catRandomNum
