import { Component } from "react";
import axios from "axios";

class RandomCatAndDogImage extends Component {
  state = { dogURLs: [], catURLs: [] };

  getDoggies = async () => {
    try {
      const res = await axios.get(`https://dog.ceo/api/breeds/image/random/4`);
      this.setState({ dogURLs: res.data.message });
    } catch (error) {
      console.log(error);
      this.setState({ dogURLs: [] });
    }
  };

  getKitties = async () => {
    try {
      const res = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=7&page=7&order=DESC`
      );
      this.setState({ catURLs: res.data });
    } catch (error) {
      console.log(error);
      this.setState({ catURLs: [] });
    }
  };

  componentDidMount() {
    this.getKitties();
    this.getDoggies();
  }

  render() {
    const { dogURLs, catURLs } = this.state;
    return (
      <div>
        <h1>IT'S RAINING CATS & DOGS!</h1>
        {catURLs.map((cat) => {
          return <img src={cat.url} alt="Cat Pic" key={cat.id} />;
        })}
        {dogURLs.map((url) => {
          return <img src={url} alt="Dog pic" key={url.id} />;
        })}
      </div>
    );
  }
}

export default RandomCatAndDogImage;
