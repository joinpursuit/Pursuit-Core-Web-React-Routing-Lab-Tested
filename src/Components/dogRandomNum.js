import axios from "axios";
import React from "react";

class dogRandomNum extends React.Component {
  state = {};
  async componentDidMount() {
    this.setState({ status: "loading" });
    const { num } = this.props.match.params;
    const { data } = await axios(`https://dog.ceo/api/breeds/image/random/${num}`);
    this.setState(data);
  }
  render() {
    if (this.state.status !== "success") {
      return "...";
    }
    return this.state.message.map((dog) => <img alt="dog pic" key={dog} src={dog} />);
  }
}

export default dogRandomNum