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
        const {breed} = this.props.match.params;
        try {
            const { data } = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
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
                <img src={picURL} alt='Dog'/>
            </div>
        )
    }
}