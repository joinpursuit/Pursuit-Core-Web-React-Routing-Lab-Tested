import React, { Component } from 'react'
import axios from 'axios'

export default class CatRandom extends Component {
  state = { cat: {} }
    componentDidMount() {
        this.catRandom()
    }
    catRandom = async () => {
        try {
         const res = await axios.get(`https://api.thecatapi.com/v1/images/search`)
            this.setState({cat: res.data[0].url})
        } catch (err) {
            console.log(err)
            this.setState({ cat: {} })
        }
    }
    handleClick =() =>{
        this.catRandom()
    }
    render() {
        console.log(this.state.cat)
        return (
            <div>
                <img src={this.state.cat}/>
                <button onClick={this.handleClick}>Get New Cat</button>
            </div>
        )
    }
}
