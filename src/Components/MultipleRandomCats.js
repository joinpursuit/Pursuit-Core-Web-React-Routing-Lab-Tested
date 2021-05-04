import React, { Component } from "react";
import axios from "axios";

class MultipleRandomCats extends Component {
  state = { catURLs: [] };

  componentDidMount() {
    this.fetchCats();
  }

  fetchCats = async () => {
    try {
      const { num } = this.props.match.params;
      const res = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=${num}`
      );
      this.setState({ catURLs: res.data });
    } catch (error) {
      console.log(error);
      this.setState({ catURLs: [] });
    }
  };

  render() {
    const { catURLs } = this.state;
    console.log(catURLs)
    return (
      <div>
        MultipleRandomCats
        <ul>
          {catURLs.map((cat) => {
            return (
              <li key={cat.id}>
                <img src={cat.url} alt="cat images" />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MultipleRandomCats;
