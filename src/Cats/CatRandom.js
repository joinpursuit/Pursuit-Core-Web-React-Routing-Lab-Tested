import React, { Component } from 'react'
import catsAPI from "./CatsAPI"

export default class CatRandom extends Component {

    constructor() {
        super() 
        this.state = {
            catURL: ""
        }
    }
newCat =  async () => {
    const catURL = await catsAPI.getCat()
        console.log(catURL)
        this.setState({
            catURL
        })

    }

    componentDidMount() {
        this.newCat()
        
    }

    render() {
        const {catURL} = this.state
        return (
            <div>
                cat random component
                <img style={{height: "200px"}}src={catURL} alt="catphoto"/>
                <button onClick={this.newCat}>Get new cat</button>
            </div>
        )
    }
}
