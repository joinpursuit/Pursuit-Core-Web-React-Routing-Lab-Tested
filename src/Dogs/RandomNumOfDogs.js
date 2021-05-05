import axios from 'axios'
import { v4 as uuid } from "uuid";
import React, { Component } from 'react'

export class RandomNumOfDogs extends Component {
    constructor(){
        super()
        this.state= {
            dogs: []
        }
    }

  componentDidMount(){
        this.renderRanNumOfDogs()
    }
    renderRanNumOfDogs = async() => {
        const num = this.props.match.params.num
        try{
        let doggies = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)
        doggies.data.message.forEach(url => this.setState({dogs: [...this.state.dogs, url]}));
        }catch{
            console.log("error")
        }
    }

    render() {
        return (
            <div>
                {this.state.dogs.map(dog => <img src ={dog} alt="dog" key={uuid()}/>)}
            </div>
        )
    }
}

export default RandomNumOfDogs