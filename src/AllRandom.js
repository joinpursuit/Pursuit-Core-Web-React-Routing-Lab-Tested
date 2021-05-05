import axios from 'axios'
import DogsRandom from './Dogs/DogsRandom'
import CatsRandom from './Cats/CatsRandom'

import React, { Component } from 'react'

class AllRandom extends Component {
  render () {
    const cats = Math.floor(Math.random() * 10)
    const dogs = cats
    return (
      <div>
        <CatsRandom cats={cats} />
        <DogsRandom dogs={dogs} />
      </div>
    )
  }
}

export default AllRandom
