
import axios from 'axios'
import React, { Component } from 'react'

export class DogBreed extends Component {
    constructor(){
        super()
        this.state = {
            breedURL: ""
        }
    }

    componentDidMount(){
        this.getBreedUrl()
    }

    getBreedUrl = async() => {
        try{
        let breed = this.props.match.params.breed
        let url = await axios.get(`https://dog.ceo/api/breeds/image/random/${breed}`)
        this.setState({breedURL: url.data.message})
        }catch{
            console.log("error")
        }
    }

    render() {
        return (
            <div>
                <h1>What breed am I? </h1>
                <img src = {this.state.breedURL} alt = "doggie"/>
            </div>
        )
    }
}

export default DogBreed

