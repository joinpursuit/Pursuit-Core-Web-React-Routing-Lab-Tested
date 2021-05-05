import React, { Component } from 'react'
import dogsAPI from './dogsAPI'

class DogRandom extends Component {
  constructor () {
    super()
    this.state = {
      dogURL: ''
    }
  }

  newDog = async () => {
    const dogURL = await dogsAPI.getDog()
    console.log('DogRandom Mounted', dogURL)
    this.setState({ dogURL })
  }
  componentDidMount () {
    this.newDog()
  }

  render () {
    const dogURL = this.state.dogURL
    return (
      <div>
        <h1>DOGRANDOM COMPONENT</h1>
        <button onClick={this.newDog}>Get new dog</button>
        <img src={dogURL} alt='A random Dog' />
      </div>
    )
  }
}

export default DogRandom
