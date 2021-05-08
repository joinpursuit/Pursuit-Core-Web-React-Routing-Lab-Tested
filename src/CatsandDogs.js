import React, { Component } from 'react'
import axios from "axios"

export class CatsandDogs extends Component {
    constructor(){
        super();

        this.state = {
            catURLs:[],
            dogURLs:[]
        }
    }

    componentDidMount(){
        const catNum = Math.floor(Math.random() * 11) + 1
        const dogNum = Math.floor(Math.random() * 11) + 1

        this.getDOGS(dogNum);
        this.getCats(catNum);
    }

    getDOGS = async ( num ) => {
        const {data} = await axios.get("https://dog.ceo/api/breeds/image/random/"+num)
        
        const dogURLs = data.message.map(obj => {
            return obj
        })
        this.setState({
            dogURLs
        })
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
        const {dogURLs, catURLs} = this.state;
        const dogImages = dogURLs.map((url, i) => {
            return <img key={i} src={url} alt="Dog images" style={{height:"200px"}}/>
        }) 
        const catImages = catURLs.map((url, i) => {
            return <img key={i} src={url} alt="Cat images" style={{height:"200px"}}/>
        })
        const images = [...catImages, dogImages];
        return (
            <div>
                <h1>MULTIPLE DOG & CAT COMPONENT</h1>
                {images}
            </div>
        )
    }
}

export default CatsandDogs
