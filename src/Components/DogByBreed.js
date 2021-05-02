import React from "react";
import axios from "axios";

class DogByBreed extends React.Component {
  state = { url: "" };

  fetchDogByBreed = async () => {
    try {
    const {breed} = this.props.match.params
      const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
      this.setState({ url: res.data.message });
    } catch (error) {
      console.log(error);
      this.setState({ url: "" });
    }
  };

  componentDidMount() {
    this.fetchDogByBreed();
  }

  render() {
    const { url } = this.state;
    return (
      <section>
        <img src={url} />
       
      </section>
    );
  }
}

export default DogByBreed;
