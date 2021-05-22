import axios from 'axios';
import { Component } from 'react';

class RandomCat extends Component {
    state = {
        catImg: ''
    }

    componentDidMount() {
        this.getCat()
    }

    getCat = async () => {
        try {
            const { data } = await axios.get(
                'https://api.thecatapi.com/v1/images/search'
            )

            this.setState({
                catImg: data[0].url
            })

        } catch (error) {
            this.setState({
                catImg: ''
            })
        }
    }

    render() {
        const { catImg } = this.state

        return (
            <div>
                <img src={catImg} alt=' random cat' />
                <button onClick={this.getCat}>Get new cat</button>
            </div>
        )
    }
}

export default RandomCat;