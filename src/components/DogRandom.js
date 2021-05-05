import React, { Component } from 'react'
import dogsAPI from './DogAPI'

export default class DogRandom extends Component {
    constructor() {
        super()
        this.state = { dogURL: "" }
    }
    componentDidMount() {
        this.newDog()
    }
    newDog = async () => {
        const dogURL = await dogsAPI.getDog()
        this.setState({ dogURL })
    }
    render() {
        const { dogURL } = this.state
        return (
            <div>
                <p><button onClick={this.newDog}>Get new dog</button></p>
                <img src={dogURL} alt="a randon dog" />
            </div>
        )
    }
}
