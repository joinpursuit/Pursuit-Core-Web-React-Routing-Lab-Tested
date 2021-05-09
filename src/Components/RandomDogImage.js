import React, { Component } from 'react';
import axios from "axios";

class RandomDogImage extends Component {
    state = {dogURL: ""}

    componentDidMount() {
        this.fetchDog();
    }

    fetchDog = async() => {
        try {
            const res = await axios.get(`https://dog.ceo/api/breeds/image/random`);
            this.setState({dogURL: res.data.message})
            // debugger
            // console.log(res.data)
        } catch (error) {
            console.log(error);
            this.setState({dogURL: ""})
        }
    }

    render() {
        const {dogURL} = this.state;

        return (
            <div>
                RandomDogImage
                <button value={dogURL} onClick={this.fetchDog}>Get New Dog</button>
                <img src={dogURL} alt="random dog"/>
            </div>
        )
    }
}

export default RandomDogImage;
