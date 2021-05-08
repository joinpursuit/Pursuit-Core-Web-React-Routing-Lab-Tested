import React, { Component } from 'react'
import catsAPI from "./catsAPI"

export class CatRandom extends Component {
    constructor(){
        super();
        this.state = {
            catURL: "",
        };
    }
    componentDidMount(){
        this.newCat()
    }
    
    newCat = async () => {
        const catURL = await catsAPI.getCat();
        this.setState({catURL})
    }

    render() {
        const {catURL} = this.state
        return (
            <div>
                <h1>CAT RANDOM COMPONENT</h1>
                <button onClick={this.newCat}>Get a new Cat</button>
                <img src={catURL} alt="a random cat" style={{height:"200px"}}/>
            </div>
        )
    }
}

export default CatRandom
