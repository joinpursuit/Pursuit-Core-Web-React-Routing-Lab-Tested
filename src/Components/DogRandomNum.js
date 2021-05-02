import React, { Component } from 'react'
import axios from "axios"
export default class DogRandomNum extends Component {
    state = { dog: {} }
    componentDidMount() {
        this.dogRandomNum()
        console.log(this.props.match)
    }
    dogRandomNum = async () => {
        const { num } = this.props.match.params
        try {
            const res = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)
            this.setState({ dog: res.data.message })
        } catch (err) {
            console.log(err)
            this.setState({ dog: {} })
        }
    }
    render() {
        return (
            <div>
                <img src={this.state.dog} />
            </div>
        )
    }
}
