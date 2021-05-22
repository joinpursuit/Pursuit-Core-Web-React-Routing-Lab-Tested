import axios from 'axios';
import { Component } from 'react';

class DogBreed extends Component {
    state = {
        breed: []
    }

    componentDidMount() {
        this.getBreeds()
    }

    getBreeds = async () => {
        const { breed } = this.props.match.params
        try {
            const { data } = await axios.get(
                `https://dog.ceo/api/breed/${breed}/images/random`
            )
            this.setState({
                breed: data.message
            })
        } catch (error) {
            this.setState({
                breed: []
            })
        }
    }

    render() {
        const { breed } = this.state
        return (
            <div>
                <img src={breed} alt='breed' />
            </div>
        )
    }
}

export default DogBreed;