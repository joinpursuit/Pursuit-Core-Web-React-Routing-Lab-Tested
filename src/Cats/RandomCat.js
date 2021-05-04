import axios from 'axios'
import React, { Component } from 'react'

export class RandomCat extends Component {
    constructor(){
        super()

        this.state = {
            url: ""
        }   
    }

    componentDidMount(){
        this.getUrl()
    }

    getUrl = async () => {
        try{
        let url = await axios.get("https://api.thecatapi.com/v1/images/search")
        this.setState({url: url.data[0].url})
        }catch{
            console.log("error")
        }
    }


    render() {
        return (
            <div>
                <img src={this.state.url} alt="cat"/>
                <button onClick={this.getUrl}>Click for a new cat</button>
            </div>
        )
    }
}

export default RandomCat
