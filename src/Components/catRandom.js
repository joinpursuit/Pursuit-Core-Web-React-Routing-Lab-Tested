import React from "react";
import axios from "axios";

class randomCat extends React.Component {
  state = {};
  async componentDidMount() {
    await this.getCat();
  }
  //get api
  getCat = async () => {
    const { data } = await axios(`https://api.thecatapi.com/v1/images/search`);
    this.setState(data[0]);
  };
  render() {
    if (!this.state.url) {
      return "...";
    }
    return (
      <div>
        <button onClick={this.getCat}>Random Cat</button>
        <img alt="cat pic" src={this.state.url} />
      </div>
    );
  }
}
export default randomCat;
