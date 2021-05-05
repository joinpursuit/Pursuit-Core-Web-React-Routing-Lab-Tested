import React, { Component } from 'react'
import dogsAPI from './DogAPI'

export default class DogRandomNum extends Component {
    constructor() {
        super()
        this.state = { dogURLs: [] }
    }
    componentDidMount() {
        this.newDogs()
    }
    newDogs = async () => {
        const dogURLs = await dogsAPI.getMultipleDogs(this.props.num)
        this.setState({ dogURLs })
    }
    render() {
        return (
            <div>
                {this.state.dogURLs.map((url, i) => <p key={i}><img src={url} alt="a randon dog"/></p>)}
            </div>
        )
    }
}
