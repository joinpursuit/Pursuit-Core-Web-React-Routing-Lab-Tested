import React from 'react'
import axios from 'axios'

class DogBreed extends React.Component {
    state = {dogBreed: ""}

    fetchByDogBreed = async () => {
        try {
            const { breed } = this.props.match.params
            const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
            this.setState({dogBreed: res.data.message})
        } catch (error) {
            this.setState({dogBreed: ""})
        }
    }

    componentDidMount() {
        this.fetchByDogBreed()
    }

    render() {
        const { dogBreed } = this.state
        return (
            <section>
                <img src={dogBreed}  alt="random dog image"/>
            </section>
        )
    }
}

export default DogBreed;