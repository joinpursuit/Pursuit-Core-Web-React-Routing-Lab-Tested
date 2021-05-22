import axios from 'axios';
import { Component } from 'react';

class RandomDog extends Component {
    state = {
        dogImg: ''
    }

    componentDidMount() {
        this.getDogImg()
    }

    getDogImg = async () => {
        try {
            const { data } = await axios.get(
                'https://dog.ceo/api/breeds/image/random'
            )
            this.setState({
                dogImg: data.message
            })

        } catch (error) {
            this.setState({
                dogImg: ''
            })
        }
    }

    render() {
        const { dogImg } = this.state
        return (
            <div>x
                <img src={dogImg} alt='dog' />
                <button onClick={this.getDogImg}>Get new dog</button>
            </div>
        )
    }
}

export default RandomDog;