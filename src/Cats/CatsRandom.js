import axios from 'axios'
import React, { Component } from 'react'
import catsAPI from './catsAPI'

export class CatsRandom extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cats: []
    }
  }

  renderCats = async () => {
    const num = this.props.cats ? this.props.cats : this.props.match.params.num

    const cats = await catsAPI.getCats(num)
    console.log(cats)
    this.setState({ cats })
  }

  componentDidMount () {
    this.renderCats()
  }

  render () {
    const loadCats = this.state.cats.map((cat, i) => {
      return <img src={cat.url} alt={`RandomCat ${i}`} key={i} />
    })
    return <>{loadCats}</>
  }
}

export default CatsRandom
