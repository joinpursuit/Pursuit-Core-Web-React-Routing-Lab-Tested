import axios from 'axios'
import React, { Component } from 'react'
import dogsAPI from './dogsAPI'

export class DogsRandom extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dogs: []
    }
  }

  renderDogs = async () => {
    const num = this.props.dogs ? this.props.dogs : this.props.match.params.num

    const dogs = await dogsAPI.getDogs(num)

    this.setState({ dogs })
  }

  componentDidMount () {
    this.renderDogs()
  }

  render () {
    const loadDogs = this.state.dogs.map((dog, i) => {
      return <img src={dog} alt={`RandomDog ${i}`} key={i} />
    })
    return <>{loadDogs}</>
  }
}

export default DogsRandom
