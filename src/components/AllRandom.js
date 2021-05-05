import React, { Component } from 'react'
import CatRandomNum from "./CatRandomNum"
import DogRandomNum from "./DogRandomNum"

export default class AllRandom extends Component {
    render() {
        const randomOneToTen = () => Math.floor(Math.random() * 10) + 1
        return (
            <div>
                <CatRandomNum num={randomOneToTen()} />
                <DogRandomNum num={randomOneToTen()} />
            </div>
        )
    }
}
