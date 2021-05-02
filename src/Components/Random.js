import axios from "axios";
import { Component } from "react";

class Random extends Component {

    state = { urls: [] }

    fetchAnimal = async () => {
        let randomNumber = Math.floor((Math.random() * 10) + 1);
        let randomNumber2 = Math.floor((Math.random() * 10) + 1);
        try {
            const res = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${randomNumber}`)
                let catImages = [];
                res.data.forEach(cat=>{
                    catImages.push(cat.url)
                })
            const res2 = await axios.get(`https://dog.ceo/api/breeds/image/random/${randomNumber2}`)

            this.setState({urls: [...catImages,...res2.data.message]})
        } catch (error) {
            console.log(error)
        }

    }

    componentDidMount() {
        this.fetchAnimal();
    }

    render() {
        const { urls } = this.state;
        return (<section>
            {urls.map(image => <img src={image} alt="animal" />)}
        </section>)

    }

}
export default Random;