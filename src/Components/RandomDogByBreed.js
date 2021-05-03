import axios from "axios";
import React from "react";

class RandomDogByBreed extends React.Component {
  state = { breedURL: "" };

  getRandomBreed = async () => {
    try {
      const { breed } = this.props.match.params;
      const res = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );
      this.setState({ breedURL: res.data.message });
    } catch (error) {
      console.log(error);
      this.setState({ breedURL: "" });
    }
  };

  componentDidMount() {
    this.getRandomBreed();
  }

  render() {
    const { breedURL } = this.state;
    return <img src={breedURL} alt="Dog Pic" />;
  }
}

export default RandomDogByBreed;
