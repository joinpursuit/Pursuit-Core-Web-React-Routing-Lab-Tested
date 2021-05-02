import axios from "axios";
import { Component } from "react";

export default class Bonus extends Component{
    state = {
        picURL: [],
    }

    componentDidMount() {
        this.getPic();
    }

    getPic = async () => {
        const num = Math.floor(Math.random() * 10) + 1;
        try {
            const dog = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`);
            this.setState({
              picURL: dog.data.message
            });
            const cat = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${num}`);
            const catArray = cat.data.map(cats => {
                return cats.url;
            })
            this.setState(prevState => ({
                picURL: [...prevState.picURL,...catArray]
            }));
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
                    return (<img src={image} key={image} alt='Pet Pic'/>)
                })}
            </div>
        )
    }
}