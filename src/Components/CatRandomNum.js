import React, { Component } from 'react'
import axios from "axios"

export default class CatRandomNum extends Component {
    state = { cat: [] }
    componentDidMount() {
        this.catRandomNum()
        console.log(this.props.match)
    }
    catRandomNum = async () => {
        const { num } = this.props.match.params
        try {
            const res = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${num}&page=100&order=DESC`)
            console.log(res.data)
            debugger
            this.setState({ cat: res.data })

        } catch (err) {
            console.log(err)
            this.setState({ cat: {} })
        }
    }
    render() {
        const manyPicsOfCats = this.state.cat.map(cat => {
            return (
                <img src={cat.url} />
            )
        })
        console.log(this.state)
        return (
            <div>
                {manyPicsOfCats}
            </div>
        )
    }
}

