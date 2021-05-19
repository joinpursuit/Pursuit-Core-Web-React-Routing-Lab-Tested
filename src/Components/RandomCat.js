import {Component} from 'react'
import axios from 'axios'

class RandomCat extends Component {
    state = {randomCat: []} 

    fetchRandomCat = async() => {
        try {
            const res = await axios.get('https://api.thecatapi.com/v1/images/search')
            this.setState({randomCat: res.data[0].url})
        }catch(err) {
            this.setState({randomCat: []})
        }
    }

    componentDidMount() {
        this.fetchRandomCat()
    }

    render(){
        const {randomCat} = this.state

        return(
            <div>
                <h1>Random Cat</h1>
                <img src={randomCat} alt="cat" />
                <button onClick={this.fetchRandomCat}>Random Cat</button>
            </div>
        )
    }
}

export default RandomCat;