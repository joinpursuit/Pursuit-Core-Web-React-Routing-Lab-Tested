import React, { Component } from 'react'
import catsAPI from './CatAPI'

export default class CatRandom extends Component {
    constructor() {
        super()
        this.state = { catURL: "" }
    }
    componentDidMount() {
        this.newCat()
    }
    newCat = async () => {
        const catURL = await catsAPI.getCat()
        this.setState({ catURL })
    }
    render() {
        const { catURL } = this.state
        return (
            <div>
                <p><button onClick={this.newCat}>Get new cat</button></p>
                <img src={catURL} alt="a randon cat" />
            </div>
        )
    }
}
