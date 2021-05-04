import React, { Component } from 'react';
import axios from "axios";

class RandomCatImage extends Component {
    state = { catURL: "" }

    componentDidMount() {
        this.fetchCat();
    }
    
    fetchCat = async() => {
        try {
            const res = await axios.get(`https://api.thecatapi.com/v1/images/search`);
            this.setState({catURL: res.data[0].url})
        } catch (error) {
            console.log(error);
            this.setState({catURL: ""})
        }
    }

    render() {
        const { catURL } = this.state;

        return (
            <div>
                RandomCatImage
                <button value={catURL} onClick={this.fetchCat}>Get New Cat</button>
                <img src={catURL} alt="random cat"/>
            </div>
        )
    }
}

export default RandomCatImage;