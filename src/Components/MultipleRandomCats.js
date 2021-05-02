import React from "react";
import axios from "axios";

class MultipleRandomCats extends React.Component {
  state = { catURLs: [] };

  getRandomKitties = async () => {
    try {
      const { num } = this.props.match.params;
      const res = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=${num}&page=${num}&order=Desc`
      );
      this.setState({ catURLs: res.data });
    } catch (error) {
      console.log(error);
      this.setState({ catURLs: [] });
    }
  };

  componentDidMount() {
    this.getRandomKitties();
  }

  render() {
    const { catURLs } = this.state;
    return (
      <div>
        <h1>Getting Madd Cats!</h1>
        {catURLs.map((cat) => {
          return <img src={cat.url} alt="Cat Pic" key={cat.id} />;
        })}
      </div>
    );
  }
}

export default MultipleRandomCats;
