import React, { Component } from 'react'
import dogsAPI from "./DogsAPI"

export class DogRandom extends Component {
    constructor(){
        super()

        this.state = {
            dogURL : ""
        }
    }

    newDog = async () => {
        const dogURL = await dogsAPI.getDog()
        this.setState({ dogURL })
    }

    componentDidMount() {
        this.newDog()
    }

    render() {
        return (
            <div>
                <h1>Dog Random Component</h1>
                <button onClick={this.newDog}>Get new Dog</button>
                <img src={this.state.dogURL} alt="dog"></img>
            </div>
        )
    }
}

export default DogRandom
