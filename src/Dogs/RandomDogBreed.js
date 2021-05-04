import axios from 'axios'
import React, { Component } from 'react'

export class RandomDogBreed extends Component {
    constructor(){
        super()
        this.state = {
            url: ""
        }
    }

    componentDidMount(){
        this.getDogUrl()
    }

    getDogUrl = async() => {
        try{
        let breed = this.props.match.params.breed
        let url = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
        this.setState({url: url.data.message})
        }catch{
            console.log("error")
        }
    }

    render() {
        return (
            <div>
                <img src = {this.state.url} alt = "doggie"/>
            </div>
        )
    }
}

export default RandomDogBreed
