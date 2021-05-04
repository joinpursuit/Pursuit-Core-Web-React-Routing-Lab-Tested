import axios from "axios";
import { Component } from "react";

export default class CatRandom extends Component {
    state = { url: "" }

    catchCat = async () => {
        try {
            const res = await axios.get("https://api.thecatapi.com/v1/images/search")
            this.setState({ url: res.data[0].url })
        } catch (error) {
            console.log(error) 
            this.setState({url: ""})
        }
    }

    componentDidMount() {
        this.catchCat();
    }
     
    render() {
        const { url } = this.state;
        return (
            <section>
                <h2>Random Cat</h2>
                <img src={url} alt="randomCat" />
                <button onClick={this.catchCat}>Get Random Cat!</button>
            </section>
        )
    }
}