import React from "react";
import axios from "axios";

class Dog extends React.Component {
  state = { url: "" };

  fetchDog = async () => {
    try {
      const res = await axios.get(`https://dog.ceo/api/breeds/image/random`);
      this.setState({ url: res.data.message });
    } catch (error) {
      console.log(error);
      this.setState({ url: "" });
    }
  };

  componentDidMount() {
    this.fetchDog();
  }

  render() {
    const { url } = this.state;
    return (
      <section>
        <img src={url} />
        <button onClick={this.fetchDog}>random dog</button>
      </section>
    );
  }
}

export default Dog;
