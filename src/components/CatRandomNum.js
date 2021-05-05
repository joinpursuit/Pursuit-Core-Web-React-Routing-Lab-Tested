import React, { Component } from 'react'
import catsAPI from './CatAPI'

export default class CatRandomNum extends Component {
    constructor() {
        super()
        this.state = { catURLs: [] }
    }
    componentDidMount() {
        this.newCats()
    }
    newCats = async () => {
        const catURLs = await catsAPI.getMultipleCats(this.props.num)
        this.setState({ catURLs })
    }
    render() {
        return (
            <div>
                {this.state.catURLs.map((url, i) => <p key={i}><img src={url} alt="a randon cat"/></p>)}
            </div>
        )
    }
}
