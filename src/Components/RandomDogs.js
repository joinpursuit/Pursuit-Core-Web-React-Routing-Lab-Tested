import axios from 'axios';
import { Component } from 'react';

class RandomDogs extends Component {
    state = {
        dogs: []
    }

    componentDidMount() {
        this.getRandomDogs()
    }

    getRandomDogs = async () => {
        const { num } = this.props.match.params
        try {
            const { data } = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)
            this.setState({
                dogs: data.message
            })
        } catch (error) {
            this.setState({
                dogs: []
            })
        }
    }

    render() {
        const { dogs } = this.state
        const images = dogs.map((dog, i) => {
            return (
                <img src={dog} alt='random dogs' key={i} />
            )
        })
        return (
            <div>
                {images}
            </div>
        )
    }
}

export default RandomDogs;