import React, { Component } from 'react'
import axios from "axios"

export default class DogRandomNum extends Component {
    state = { dog: [] }
    componentDidMount() {
        this.dogRandomNum()
        console.log(this.props.match)
    }
    dogRandomNum = async () => {
        const { num } = this.props.match.params
        try {
            const res = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)
            console.log(res.data.message)
            this.setState({ dog: res.data.message })

        } catch (err) {
            console.log(err)
            this.setState({ dog: {} })
        }
    }
    render() {

        const manyPicsOfDogs = this.state.dog.map(dog => {
            return (
                <img key={dog} src={dog} />
            )
        })
        console.log(this.state)
        return (
            <div>
                {manyPicsOfDogs}
            </div>
        )
    }
}
