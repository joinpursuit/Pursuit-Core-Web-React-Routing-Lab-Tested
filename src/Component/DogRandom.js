import axios from "axios";
import React from "react";

export default class DogRandom extends React.Component {
  state = {};

  async componentDidMount() {
      await this.dogPic()
  }

  dogPic = async () => {
      this.setState({status: "loading"})
      const { data } = await axios(`https://dog.ceo/api/breeds/image/random`);

      this.setState(data)
  }

  render() {
      if(this.state.status !== "success"){
          return "..."
      }
  
      return (
          <div>
              <button onClick={this.dogPic}>Random Dog</button>
              <img alt="dog pic" src={this.state.message}/>
           </div>
      )
  }
}
