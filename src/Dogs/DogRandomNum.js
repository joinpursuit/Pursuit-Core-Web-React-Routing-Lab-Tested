import React, { Component } from 'react'
import dogApi from './DogApi'


export default class DogRandomNum extends Component {

    constructor(props) {
        super()
        this.state = {
            numOfDogs: props.match.params.num,
            dogsArr: []
        }
    }
    componentDidMount() {
        this.getDogs(this.state.numOfDogs)
    }
    getDogs = async (numOfDogs) => {
        const dogsArr = await dogApi.getMultipleDogs(numOfDogs)
        this.setState({
            dogsArr
        })
    }


    render() {
        const { dogsArr } = this.state
        const dogsMap = dogsArr.map((dog) => {
            return <img src={dog} alt="Dogs!" style={{height: '300px'}} />
        })

        return (
            <div>
                {dogsMap}
            </div>
        )
    }
}
