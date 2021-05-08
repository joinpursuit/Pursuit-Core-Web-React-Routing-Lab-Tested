import React, { Component } from 'react'
import axios from "axios";

export class CatRandomNum extends Component {
    constructor(){
        super();
        this.state = {
            catURLs: []
        };
    }

    componentDidMount(){
        this.getCats(this.props.num)
    }

    getCats = async ( num ) => {
        const {data} = await axios.get("https://api.thecatapi.com/v1/images/search?limit="+num)
        console.log(data)
        const catURLs = data.map(obj => {
            return obj.url;
        })
        this.setState({
            catURLs
        })
    }

    render() {
        const {catURLs} = this.state;
        const images = catURLs.map(image => {
            return <img src={image} alt="Cat images" style={{height:"200px"}}/>
        }) 
        return (
            <div>
                <h1>Multiple CAT COMPONENT</h1>
                {images}
            </div>
        )
    }
}

export default CatRandomNum
