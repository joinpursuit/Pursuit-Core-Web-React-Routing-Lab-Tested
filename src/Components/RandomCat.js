import React from "react"
import axios from "axios"

class RandomCat extends React.Component {
    state = {cat: ""}

    fetchRandomCat = async () => {
        try {
            const res = await axios.get("https://api.thecatapi.com/v1/images/search")
            this.setState({cat: res.data.url})
        } catch (error) {
            
        }
    }

    componentDidMount() {
        this.fetchRandomCat();
    }

    render() {
        const {cat} = this.state
        return (
            <div>
                <img src={cat} alt="random-cat" />
                <button onClick={this.fetchRandomCat}></button>
            </div>
        )
    }
}

export default RandomCat;