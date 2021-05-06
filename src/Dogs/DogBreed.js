import React, { Component } from 'react'
import dogsAPI from "./DogsAPI"

export class DogBreed extends Component {
    constructor(){
        super()

        this.state = {
            dogURL: ""
        }
    }

    newBreed = async () => {
        const dog = await dogsAPI.getBreed(this.props.breed)
        this.setState({ dogURL: dog })
    }

    async componentDidMount(){
        this.newBreed()
    }

    render() {
        return (
            <div>
            <img src={this.state.dogURL} alt="dog"></img>   
            </div>
        )
    }
}

export default DogBreed
