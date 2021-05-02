import { Component } from "react";
import axios from "axios";

export default class RandomDogs extends Component {
  state = { urls: [] };

  fetchDogs = async () => {
    try {
      const res = await axios.get(`https://dog.ceo/api/breeds/image/random`);
      this.setState({ urls: res.data.message });
    //   debugger
    } catch (error) {
      console.log(error);
      this.setState({ urls: [] });
    }
  };

  componentDidMount() {
    this.fetchDogs();
  }

  render() {
    const { urls } = this.state;
    return (
      <div>
        <h2>Random Dogs</h2>
        <ul>
          {urls.map((url) => {
            return (
                <img src={url} alt="randomDogs" />
            );
          })}
        </ul>
      </div>
    );
  }
}
