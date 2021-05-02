import React from "react";
import axios from "axios";

class RandomDogImage extends React.Component {
  state = { url: "" };

  getDoggy = async () => {
    try {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random");
      this.setState({ url: res.data.message });
    } catch (error) {
      console.log(error);
      this.setState({ url: "" });
    }
  };

  componentDidMount() {
    this.getDoggy();
  }

  render() {
    const { url } = this.state;
    return (
      <div>
        <img src={url} alt="Dog Pic" />
        <button onClick={this.getDoggy}>Get Random Dog Pic</button>
      </div>
    );
  }
}

export default RandomDogImage;
