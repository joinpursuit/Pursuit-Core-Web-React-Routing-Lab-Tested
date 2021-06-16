import axios from 'axios'
import React, { Component } from 'react'

export default class DogBreed extends Component {

    constructor(props) {
        super()
        this.state = {
            breed: props.match.params.breed,
        }
    }
    componentDidMount() {
        this.getDogBreed()
    }
    getDogBreed = async () => {
        const breed = await axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images/random`)
        .then(dog => dog.data.message)
        this.setState({
            breed
        })
    }

    render() {
        return (
            <div>
                Dog Breed
                <img src={this.state.breed} alt="Dog of chosen breed" />
            </div>
        )
    }
}
