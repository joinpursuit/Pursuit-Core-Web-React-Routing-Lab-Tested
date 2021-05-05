import React, { Component } from 'react'
import dogsAPI from './DogAPI'

export default class DogBreed extends Component {
    constructor() {
        super()
        this.state = { dogURL: "" }
    }
    componentDidMount() {
        this.newDog()
    }
    newDog = async () => {
        const dogURL = await dogsAPI.getBreedDog(this.props.breed)
        this.setState({ dogURL })
    }
    render() {
        const { dogURL } = this.state
        return (
            <div>
                <img src={dogURL} alt="dog" />
            </div>
        )
    }
}
