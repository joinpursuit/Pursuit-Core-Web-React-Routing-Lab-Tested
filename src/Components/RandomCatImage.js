import axios from "axios";
import { Component } from "react";

class RandomCatImage extends Component {
    state = { catURL: "" }

    getKittyShots = async () => {
        try {
            const res = await axios.get("https://api.thecatapi.com/v1/images/search")
            this.setState({ catURL: res.data[0].url})
        } catch (error) {
            console.log(error)
            this.setState({ catURL: ""})
        }
    }

    componentDidMount() {
        this.getKittyShots();
    }

        render() {
            const { catURL } = this.state;
            return(
                <div>
                    <img src={catURL} alt="Cat pic" />
                    <button onClick={this.getKittyShots}>Get a random KITTY!</button> 
                </div>
            )
        }
}

export default RandomCatImage;
