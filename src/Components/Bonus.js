import { Component } from "react";
import axios from "axios";

export default class Bonus extends Component {
  state = { dogUrls: [], catUrls: [] };

  randomNum = () => {
      return Math.floor(Math.random() * 10);
  }
  
  
  fetchDogs = async () => {
    try {
      const res = await axios.get(
        `https://dog.ceo/api/breeds/image/random/${this.randomNum()}`
      );
      this.setState({ dogUrls: res.data.message });
      //debugger
    } catch (err) {
      console.log(err);
      this.setState({ dogUrls: [] });
    }
  };

  catchCats = async () => {
    try {
      const res = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=${this.randomNum()}`
      );
      this.setState({ catUrls: res.data });
    } catch (err) {
      console.log(err);
      this.setState({ catUrls: [] });
    }
  };

  componentDidMount() {
      
    this.fetchDogs();
    this.catchCats();
  }

  render() {
    const { catUrls, dogUrls } = this.state;

    return (
      <section>
        <h2>Bonus: Random Cats and Dogs</h2>
        <ul>
          {catUrls.map((catUrl) => {
            return (
              <li key={catUrl.id}>
                <img src={catUrl.url} alt="randomCats" />
              </li>
            );
          })}
          {dogUrls.map((dogUrl) => {
            return (
              <li key={dogUrl}>
                <img src={dogUrl} alt="randomDogs" />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
