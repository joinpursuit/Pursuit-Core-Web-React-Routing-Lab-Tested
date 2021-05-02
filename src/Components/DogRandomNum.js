import axios from "axios";
import { Component } from "react";

export default class DogRandomNum extends Component{
    state = {
        picURL: [],
    }

    componentDidMount() {
        this.getDogPic();
    }

    getDogPic = async () => {
        const {num} = this.props.match.params;
        try {
            const { data } = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`);
            this.setState({
              picURL: data.message
            });
        } catch(err) {
            console.log(err);
            this.setState({picURL: []});
        }
    }

    render() {
        const {picURL} = this.state;
        return (
            <div>
                {picURL.map(image => {
                    return (<img src={image} key={image} alt='Dog'/>)
                })}
            </div>
        )
    }
}