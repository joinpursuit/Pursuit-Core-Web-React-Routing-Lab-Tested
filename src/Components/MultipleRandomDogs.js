import React, { Component } from "react";
import axios from "axios";

class MultipleRandomDogs extends Component {
  state = { dogURLs:  [] };

  componentDidMount() {
    this.fetchDogs();
  }

  fetchDogs = async () => {
    try {
      const { num } = this.props.match.params;
      const res = await axios.get(
        `https://dog.ceo/api/breeds/image/random/${num}`
      );
      this.setState({ dogURLs: res.data.message });
    } catch (error) {
      console.log(error);
      this.setState({ dogURLs: [] })
    }
  };

  render() {
    const { dogURLs } = this.state;
    return (
      <div>
        MultipleRandomDogs
        <ul>
          {dogURLs.map((dog) => {
            return (
              <li key={dog}>
                <img src={dog} alt="dog images" />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MultipleRandomDogs;
