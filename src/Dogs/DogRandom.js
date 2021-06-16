import React, { Component } from 'react'
import dogApi from './DogApi'


export default class DogRandom extends Component {

    constructor() {
        super()
        this.state = {
            url: ''
        }
    }

    componentDidMount() {
        this.getDog()
    }
    getDog = async () => {
        const url = await dogApi.getRandomDog()
        this.setState({
            url
        })
    }

    render() {
        const { url } = this.state

        return (
            <div>
                <img src={url} alt="Dogs!" style={{height: '300px'}} />
                <button onClick={this.getDog}>Get Another Dog</button>
            </div>
        )
    }
}
