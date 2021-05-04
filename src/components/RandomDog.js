import React from 'react'
import axios from 'axios'

class RandomDog extends React.Component {
    state = {dog: ""}

    fetchRandomDog = async () => {
        try {
            const res = await axios.get("https://dog.ceo/api/breeds/image/random");
            this.setState({dog: res.data.message})
        } catch (error) {
            console.log(error)
            this.setState({dog: ""})
        }
    }

    componentDidMount() {
        this.fetchRandomDog()
    }

    render() {
        const { dog } = this.state
        return (
            <section>
                <img src={dog}  alt="Random Doc Pic"/>
                <button onClick={this.fetchRandomDog}>Get New Dog</button>
            </section>
        )
    }
}

export default RandomDog