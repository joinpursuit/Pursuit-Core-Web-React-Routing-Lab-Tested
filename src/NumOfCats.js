
import axios from "axios"
import {v4 as uuid} from 'uuid';
import React, { Component } from 'react'

export class NumOfCats extends Component {
    constructor(){
        super()

        this.state = {
            urlS: []
        }   
    }

    componentDidMount(){
        this.getUrl()
    }

    getUrl = async () => {
        let num = this.props.match.params.num
        try{
        let response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${num}`)
        response.data.map(pics => this.setState({urlS: [...this.state.urlS, pics.url]}))
        }catch{
            console.log("error")
        }
    }

    render() {
        return (
            <div>
                {this.state.urlS.map(url => <img src={url} alt="kitty" key={uuid()} />)}
            </div>
        )
    }
}

export default NumOfCats