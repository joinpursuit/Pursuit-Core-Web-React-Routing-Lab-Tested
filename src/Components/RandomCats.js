import axios from 'axios';
import { Component } from 'react';

class RandomCats extends Component {
    state = {
        cats: []
    }

    componentDidMount() {
        this.getCats()
    }

    getCats = async () => {
        try {
            const { num } = this.props.match.params;
            const { data } = await axios.get(
                `https://api.thecatapi.com/v1/images/search?limit=${num}`
            )
            console.log(data)
            this.setState({
                cats: data
            })
        } catch (error) {
            this.setState({
                cats: []
            })
        }
    }
    render() {
        const { cats } = this.state
        const catImages = cats.map(catImage => {
            return <img src={catImage.url} key={catImage.id} alt="random cats" />
        })
        return (
            <div>
                {catImages}
            </div>
        )
    }
}

export default RandomCats;