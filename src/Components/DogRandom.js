import axios from "axios";
import { Component } from "react";

export default class DogRandom extends Component{
    state = {
        picURL: ''
    }

    componentDidMount() {
        this.getDogPic();
    }

    getDogPic = async () => {
        try {
            const { data } = await axios.get("https://dog.ceo/api/breeds/image/random");
            this.setState({
              picURL: data.message
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
                <button onClick={this.getDogPic}>Get new dog</button>
                <p>
                    <img src={picURL} alt='Dog'/>
                </p>
            </div>
        )
    }
}