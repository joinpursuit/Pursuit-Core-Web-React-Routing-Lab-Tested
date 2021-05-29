import React, { Component } from 'react'
import catApi from './CatApi'


export default class CatRandomNum extends Component {

    constructor(props) {
        super()
        this.state = {
            // numOfCats: props.numOfCats, 
            numOfCats: props.match.params.num,
            catsArr: []
        }
    }

    async componentDidMount() {
        const catList = await catApi.getMultipleCats(this.state.numOfCats)
        .then(response => response.map((cat) => {
            return cat.url
        }))
        this.setState({
            catsArr: catList
        })
    }
    

    render() {
        const { catsArr } = this.state

        return (
            <div>
                CatRandomNum Component
                {catsArr.map((cat) => {
                    return <img style={{height: '400px'}} src={cat} alt="" />
                })}
            </div>
        )
    }
}
