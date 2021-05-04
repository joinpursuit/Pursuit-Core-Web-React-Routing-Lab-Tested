import axios from "axios";
import React from "react";
// import axios from 'axios'

class RandomDog extends React.Component {
  state = { image: "" };

  fetchDog = async () => {
      const dog = await axios.get('https://dog.ceo/api/breeds/image/random')
      const dogPic = dog.data.message
      this.setState({image:dogPic})
  };

  componentDidMount(){
      this.fetchDog()
  }

  render() {
    return (
      <div>
        <img src={this.state.image} alt=""/>
        <button onClick={this.fetchDog}>New Image!</button>
      </div>
    );
  }
}

export default RandomDog;
