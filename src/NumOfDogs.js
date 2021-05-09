import React, { Component } from 'react';
import axios from 'axios'
import { v4 as uuid } from "uuid";
export default class NumOfDogs extends Component {
    constructor() {
        super() 
        this.state = {
            dogImages : []
        }
    }

    componentDidMount() {
        this.getdogImages()
    }

    getdogImages = async() => {
         const num = this.props.match.params.num
        
      try {let dogNum = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)
        dogNum.data.message.forEach(url => this.setState({dogImages: [...this.state.dogImages, url]}))
        }catch {
console.log('err')
}
}

    render() {
        return (
            <div>
              {this.state.dogImages.map(dog => <img src={dog} alt="" key={uuid()}/> )}
            </div>
        )
    }
}


