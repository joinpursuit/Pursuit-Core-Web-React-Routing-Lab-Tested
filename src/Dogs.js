import React, { Component } from 'react'
import axios from "axios"

export default class Dogs extends Component {
    constructor() {
        super()
        this.state = {
            //one random dog
            dog: "",
            //mulitiple random dogs
            dogs: []
        }
    }

    //how to make an http request?? .then? .catch? async await? 
    //which libray, but none of those choices matter. use async await/axios
    //not allowed to use await inside the function unless it has async before name
    //whatever returned from the function will be wrapped in a promise



    getRandomImage = async () => {
        try {
            const { data } = await axios.get("https://dog.ceo/api/breeds/image/random")
            this.setState({
                dog: data.message,
            })
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount(){
        this.getRandomImage()
    }

    render() {
        const {dog} = this.state
        return (
            <div>
                <h1>Yay Dogs!</h1>
                <img alt="Dog" src={dog}/>
                <button onClick={this.getRandomImage}>load new dogs</button>
        
                {/* <Switch>
                    <Route to = "/dog/random:" render=
                </Switch> */}
            </div>
        )
    }
}
