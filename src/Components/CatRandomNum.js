import { Component } from "react";
import axios from "axios";

export default class CatRandomNum extends Component {
  state = { urls: [] };

  catchCats = async () => {
    try {
      const { num } = this.props.match.params;
      const res = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=${num}`
      );
      this.setState({ urls: res.data });
    } catch (err) {
      console.log(err);
      this.setState({ urls: [] });
    }
  };

  componentDidMount() {
    this.catchCats();
  }

  render() {
    const { urls } = this.state;
    return (
      <section>
        <h2> Random Cats</h2>
        <ul>
          {urls.map((url) => {
            return (
              <li key={url.id}>
                <img src={url.url} alt="randomCats" />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

// https://api.thecatapi.com/v1/images/search
// https://api.thecatapi\.com\/v1\/images\/search.*limit=5.
// thecatapi\.com\/v1\/images\/search.*limit=5.
