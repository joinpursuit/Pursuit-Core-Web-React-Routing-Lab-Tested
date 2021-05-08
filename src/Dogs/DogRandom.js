import React, { Component } from 'react';
import DogsAPI from "./DogsAPI";

export class DogRandom extends Component {
    constructor(){
        super();
        this.state = {
            dogURL: ""
        }
    }

    componentDidMount(){
        this.newDog();
    }

    newDog = async () => {
        const dogURL = await DogsAPI.getDog();
        this.setState({dogURL})
    }

    render() {
        const {dogURL} = this.state;
        return (
            <div>
                <h1>DOG RANDOM COMPONENT</h1>
                <button onClick={this.newDog}>Get a new Dog</button>
                <img src={dogURL} alt="a random dog" style={{height:"200px"}}/>
            </div>
        )
    }
}

export default DogRandom
