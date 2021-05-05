import React, { Component } from 'react'
import catsAPI from "./CatsAPI"

export class CatRandom extends Component {

    constructor(){
        super()
        this.state ={
            catURL: ""
        }
    }

    newCat = async () => {
        const catURL = await catsAPI.getCat()
        this.setState({ catURL })
    }

    componentDidMount() {
        this.newCat()
    }

    render() {
        return (
            <div>
                <h1>cat random component</h1>
                <button onClick={this.newCat}>Get new cat</button>
                <img src={this.state.catURL} alt="cat" />
            </div>
        )
    }
}

export default CatRandom
