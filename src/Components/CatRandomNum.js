import axios from "axios";
import { Component } from "react";

export default class CatRandomNum extends Component{
    state = {
        picURL: [],
    }

    componentDidMount() {
        this.getCatPic();
    }

    getCatPic = async () => {
        const {num} = this.props.match.params;
        try {
            const { data } = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${num}`);
            const catArray = data.map(cats => {
                return cats.url;
            })
            this.setState({
                picURL: catArray
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
                    return (<img src={image} key={image} alt='Cat'/>)
                })}
            </div>
        )
    }
}