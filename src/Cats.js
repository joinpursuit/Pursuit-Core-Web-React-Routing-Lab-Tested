import axios from 'axios'
import React, { Component } from 'react'

export default class Cats extends Component {
    constructor() {
        super()
        this.state = {
            catURL : ""
        }
    }

    componentDidMount() {
        this.catImages()
    }

    catImages = async () => {
        try{
        let catURL = await axios.get("https://api.thecatapi.com/v1/images/search")
        this.setState({
            catURL: catURL.data[0].url
        })
    }catch {
        console.log('err')
    }
    }
    render() {
        return (
            <div>
                <h1>Hi I am cat component</h1>
                <button onClick={this.catImages}>click for cat image</button>
                <br/>
                <img style={{height:'200px'}} src={this.state.catURL} alt="catpic"/>
            </div>
        )
    }
}
