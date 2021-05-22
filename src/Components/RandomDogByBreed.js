import React from "react";
import axios from "axios";

class RandomDogByBreed extends React.Component {
  state = { dog:[] };

  componentDidMount() {
    this.fetchImage();
  }

  fetchImage = async () => {
    const { breed } = this.props.match.params;
    try {
        const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
        this.setState({ dog: res.data.message });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { dog } = this.state;
    return (
      <div>
        dog by breed
        <img src={dog[0]}/>
        <img src={dog[1]}/>
        <img src={dog[2]}/>
      </div>
    );
  }
}

export default RandomDogByBreed;
