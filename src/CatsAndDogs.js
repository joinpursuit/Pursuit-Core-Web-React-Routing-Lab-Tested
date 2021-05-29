import React, { Component } from 'react'
import axios from 'axios'

export default class CatsAndDogs extends Component {

    constructor() {
        super()
        this.state = {
            dogs: '',
            cats: ''
        }
    }
    componentDidMount() {
        this.getCatsAndDogs(this.getRandomNum())
    }

    getRandomNum = () => {
        let num = Math.random()
        num = num * 10
        return Math.floor(num)
    }
    getCatsAndDogs = async (randomNum) => {
        const dogs = await axios.get(`https://dog.ceo/api/breeds/image/random/${randomNum}`)
        .then(response => response.data.message)
        
        const catsArr = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${randomNum}`)
        .then(response => response.data)
        const cats = catsArr.map(cat => {
            return cat.url
        })

        this.setState({
            dogs,
            cats
        })
    }



    render() {
        const {dogs, cats } = this.state
        // const dogsMap = dogs.map((dog) => {
        //     return <img src={dog} alt="A beautiful dog!" />
        // })
        const dogsMap = dogs.map((dog) => {
            return <img src={dog} alt="Dogs!" style={{height: '300px'}} />
        })
        console.log(dogs)
 
        return (
            <div>
                Cats And Dogs!
                {dogsMap}
            </div>
        )
    }
}
