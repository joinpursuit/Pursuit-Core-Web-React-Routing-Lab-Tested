import React, { Component } from 'react'
import catsAPI from './catsAPI'

class CatRandom extends Component {
  constructor () {
    super()
    this.state = {
      catURL: ''
    }
  }

  newCat = async () => {
    const catURL = await catsAPI.getCat()
    console.log('CatRandom Mounted', catURL)
    this.setState({ catURL })
  }
  componentDidMount () {
    this.newCat()
  }

  render () {
    const catURL = this.state.catURL
    return (
      <div>
        <h1>CATRANDOM COMPONENT</h1>
        <button onClick={this.newCat}>Get new cat</button>
        <img src={catURL} alt='A random Cat' />
      </div>
    )
  }
}

export default CatRandom
