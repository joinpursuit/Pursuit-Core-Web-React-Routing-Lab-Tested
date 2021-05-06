import React, { Component } from 'react'
import dogsAPI from './DogsAPI'

export class DogRandomNum extends Component {

    constructor(){
        super()
        this.state = {
            dogURLs: [],
        }
    }


    async componentDidMount() {
        const dogs = await dogsAPI.getMultipleDogs(this.props.num)
        this.setState({ dogURLs: dogs })
    }

    render() {
        const { dogURLs } = this.state
        return (
            <div>
                <h1>{this.props.num}</h1>
                {dogURLs.map((url, i) => (
                    <img key={i} src={url} alt={`random dog ${i + 1} of ${dogURLs.length}`}></img>
                ))}
            </div>
        )
    }
}

export default DogRandomNum
