import axios from 'axios'
import React, { Component } from 'react'

export default class DogRandom extends Component {
    state = { dog: {} }
    componentDidMount() {
        this.dogRandom()
    }
    dogRandom = async () => {
        try {
         const res = await axios.get(`https://dog.ceo/api/breeds/image/random`)
            this.setState({dog: res.data.message})
        } catch (err) {
            console.log(err)
            this.setState({ dog: {} })
        }
    }
    handleClick =() =>{
        this.dogRandom()
    }
    render() {
        console.log(this.state.dog)
        return (
            <div>
                <img src={this.state.dog}/>
                <button onClick={this.handleClick}>Get New Dog</button>
            </div>
        )
    }
}
