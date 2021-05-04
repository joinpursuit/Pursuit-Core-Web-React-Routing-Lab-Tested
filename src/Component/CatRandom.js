import axios from "axios";
import React from "react";

export default class CatRandom extends React.Component {
  state = {};

  async componentDidMount() {
      await this.catPic()
  }

  catPic = async () => {
      const { data } = await axios("https://api.thecatapi.com/v1/images/search");
      this.setState(data[0])
  }

  render() {
      if(!this.state.url){
          return "..."
      }
  
      return (
          <div>
              <button onClick={this.catPic}>Random Cat</button>
              <img alt="cat pic" src={this.state.url}/>
           </div>
      )
  }
}