import React, { Component } from 'react'
import axios from "axios"

export default class DogBreed extends Component {
    state = { breeds: [], breed: "", pics: [] }

    componentDidMount() {
        this.getBreeds()
    }
    getBreeds = async () => {
        try {
            const res = await axios.get("https://dog.ceo/api/breeds/list/all");
            this.setState({ breeds: Object.keys(res.data.message) })
        } catch (err) {
            this.setState({ breeds: [] });
        }
    }
    handleChange = async (e) => {
        this.setState({ breed: e.target.value })
        try {
            const res = await axios.get(`https://dog.ceo/api/breed/${e.target.value}/images/random/10`);
            console.log(res.data.message)
            this.setState({ pics: res.data.message  })
        } catch (err) {
            this.setState({ breeds: [] });
        }
    }

    render() {
        console.log(this.state)
        const listOfOptions = this.state.breeds.map((singleBreed) => {
            return (
                <option key={singleBreed} value={singleBreed}>{singleBreed}</option>
            )
        })
        const listOfPics = this.state.pics.map((url,i) => {
            return(
                <img src={url} key={i}/>
            )
        })
        return (
            <div>
                <h2>DogBreed</h2>
                <select value={this.state.breed} onChange={this.handleChange}>
                    <option value= "" disabled selected>Select a Breed</option>
                    {listOfOptions}
                </select>
                {listOfPics}
            </div>
        )
    }
}
// https://dog.ceo/api/breed/hound/images