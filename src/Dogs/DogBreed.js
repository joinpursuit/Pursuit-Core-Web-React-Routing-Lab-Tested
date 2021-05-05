import React, { Component } from 'react'
import dogsAPI from './dogsAPI'

class DogBreed extends Component {
    constructor(){
        super()
        this.state={
            dogURL : ''
        }
    }
    
    newDog = async () =>{
        const breed = this.props.match.params.breed
        const dogURL = await dogsAPI.getBreed(breed)
        console.log('DogBreed Mounted', dogURL)
        this.setState({dogURL})

    }
    componentDidMount(){
        this.newDog();
    }

    render() {
        const dogURL = this.state.dogURL
        const breed = this.props.match.params.breed
        return (
            <div>
                <h1>DogBreed COMPONENT</h1>
                <img src={dogURL} alt={`A random ${breed} Dog`}/>
            </div>
        )
    }
}

export default DogBreed