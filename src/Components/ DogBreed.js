import { Component } from "react";
import axios from "axios";

export default class DogBreed extends Component {
  state = { url: [] };

  fetchBreed = async () => {
    try {
      const { breed } = this.props.match.params;

      const res = await axios.get(
        `https://dog.ceo/api/breeds/image/random/${breed}`
      );
      this.setState({ url: res.data.message });
    } catch (error) {
      console.log(error);
      this.setState({ url: [] });
    }
  };

  componentDidMount() {
    this.fetchBreed();
  }

  render() {

    const { breed } = this.props.match.params;

    const { url } = this.state;
    return (
      <div>
        <h2>{breed}</h2>
        <img src={url} alt="randomDog" />
      </div>
    );
  }
}
