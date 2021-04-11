import axios from "axios";
import React from "react";

export default class CatRandom extends React.Component {
  state = {};

  async componentDidMount() {
    this.setState({ data: undefined });
    const { num } = this.props.match.params;
    const { data } = await axios(`https://api.thecatapi.com/v1/images/search?limit=${num}&size=full`, {
      headers: {
        "x-api-key": "edf80f4c-d501-4b3d-a968-b827f69eff4c",
      },
    });

    this.setState({ data });
  }

  render() {
    if (!this.state.data) {
      return "...";
    }
    return this.state.data.map(({ url }) => <img alt="Random cat" key={url} src={url} />);
  }
}
