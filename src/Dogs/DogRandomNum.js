import React, { Component } from 'react'
import axios from "axios";

export class DogRandomNum extends Component {
    constructor(){
        super();
        this.state = {
            dogURLs: []
        };
    }

    componentDidMount(){
        this.getDOGS(this.props.num)
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

    render() {
        const {dogURLs} = this.state;
        const images = dogURLs.map((image, i) => {
            return <img key={i} src={image} alt="Dog images" style={{height:"200px"}}/>
        })

        return (
            <div>
                <h1>MULTIPLE DOG COMPONENT</h1>
                {images}
            </div>
        )
    }
}

export default DogRandomNum
