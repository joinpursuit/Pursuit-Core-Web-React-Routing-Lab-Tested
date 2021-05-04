import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import Dog from ".//Dog";

export default class RandomDog extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
      dog: "",
    };
  }
  async componentDidMount() {
    try {
      const dog = await axios.get(` https://dog.ceo/api/breeds/image/random`);
      console.log("doggo here", dog);
      this.setState({ dog: dog.data.message });
    } catch (err) {
      console.error(err);
    }
  }
    
  getDoggo = async() => {
      try {
          const neuDog = await axios.get(`https://dog.ceo/api/breeds/image/random`)
          this.setState({ dog: neuDog.data.message });
      } catch (err) {
          console.error(err)
      }
  }

  renderDog = () => {
      return <Dog
          dog={this.state.dog}
          getDoggo={this.getDoggo}/>;
  };

  render() {
    return (
      <div>
        <Switch>
          <Route path="/dog/random/:breed" />
          <Route path="/dog/random/:num" />
          <Route exact path="/dog/random/" render={this.renderDog} />
        </Switch>
      </div>
    );
  }
}
