import React from "react";
import axios from "axios";

class RandomDog extends React.Component {
  state = { urlImage: "" };

  fecthDog = async () => {
    try {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random");
      this.setState({ urlImage: res.data.message });
    } catch (error) {
      console.log(error);
      this.setState({ urlImage: "" });
    }
  };
  componentDidMount() {
    this.fecthDog();
  }

  render() {
    const { urlImage } = this.state;
    const fecthDog = this.fecthDog;

    return (
      <section>
        <h1> Random Dog</h1>
        <button onClick={fecthDog}>Random Dog</button>
        <img src={urlImage} alt="DogPics" />
      </section>
    );
  }
}

export default RandomDog;
