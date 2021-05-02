import axios from "axios";
import { Component } from "react";

export default class CatRandom extends Component{
    state = {
        picURL: ''
    }

    componentDidMount() {
        this.getCatPic();
    }

    getCatPic = async () => {
        try {
            const { data } = await axios.get("https://api.thecatapi.com/v1/images/search");
            const catArray = data.map(cats => {
                return cats.url;
            })
            this.setState({
                picURL: catArray
            });
        } catch(err) {
            console.log(err);
            this.setState({picURL: ''});
        }
    }

    render() {
        const {picURL} = this.state;
        return (
            <div>
                <button onClick={this.getCatPic}>Get new cat</button>
                <p>
                    <img src={picURL} alt='Cat'/>
                </p>
            </div>
        )
    }
}