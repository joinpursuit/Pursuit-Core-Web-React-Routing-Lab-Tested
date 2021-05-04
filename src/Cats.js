import React, { Component } from 'react'
import axios from "axios"




export default class Cats extends Component {
    constructor(){
    super()
    this.state = {
        cat:"",
        cats:[]
    }
    }

    getRandomImage = async () => {
        try {
            const {data}= await axios.get ("https://api.thecatapi.com/images/search")
            this.setState 

        }



    }



    render() {
        return (
            <div>
                
            </div>
        )
    }
}
