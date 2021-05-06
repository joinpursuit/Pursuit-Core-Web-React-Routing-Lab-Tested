import React, { Component } from 'react'
import catsAPI from "./CatsAPI"

export class CatRandomNum extends Component {

    constructor(){
        super()

        this.state = {
            catURLs: [],
        }
    }

    async componentDidMount() {
        const cats = await catsAPI.getMultipleCats(this.props.num)
        this.setState({ catURLs: cats })
    }

    render() {
        const  { num } = this.props
        const { catURLs } = this.state
        return (
            <div>
                <h1>{num}</h1>
                {catURLs.map((url,i) => (
                    <img key={i} src={url} alt={`random cat ${i + 1} of ${catURLs.length}`} />
                ))}  
            </div>
        )
    }
}

export default CatRandomNum
