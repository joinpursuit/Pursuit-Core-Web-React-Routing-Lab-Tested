import React from "react";
import axios from "axios";

class Cat extends React.Component {
  state = { url: "" };

  fetchCat = async () => {
    try {
      const res = await axios.get(`https://api.thecatapi.com/v1/images/search`);
      this.setState({ url: res.data[0].url });
    } catch (error) {
      console.log(error);
      this.setState({ url: "" });
    }
  };

  componentDidMount() {
    this.fetchCat();
  }

  render() {
    const { url } = this.state;
    return (
      <section>
        <img src={url} />
        <button onClick={this.fetchCat}>random cat</button>
      </section>
    );
  }
}

export default Cat;
