import axios from 'axios'
import React, { Component } from 'react'

export class RandomDog extends Component {
    constructor(){
        super()
        this.state = {
            url: ""
        }
    }
    
    async componentDidMount(){
       this.getDog()
    }

    getDog = async () => {
        try{
        const dog = await axios.get("https://dog.ceo/api/breeds/image/random")
        this.setState({url: dog.data.message})
        }catch{
            console.log("error")
        }
    }

    render() {
        return (
            <div>
                <img src={this.state.url} alt="doggo"></img>
                <button onClick={this.getDog}>Click for a new dog</button>
            </div>
        )
    }
}

export default RandomDog
