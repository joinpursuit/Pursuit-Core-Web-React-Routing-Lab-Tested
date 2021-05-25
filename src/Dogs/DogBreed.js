import React, { Component } from 'react';
import dogsAPI from './dogsAPI';

class DogBreed extends Component {
  state = {
    dogBreed: []

  }

  async componentDidMount() {
    const { breed } = this.props
    const breeds = await dogsAPI.fetchDogBreed(breed)
    this.setState({ dogBreed: breeds})
  }
  render() {
    const { dogBreed } = this.state
    return (
      <div>
        <img src={dogBreed} alt='' />
      </div>
    );
  }
}

export default DogBreed;