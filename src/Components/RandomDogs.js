import axios from "axios";
import { Component } from "react";

class RandomDogs extends Component{

    state = {urls: []}

    fetchDogs = async ()=>{
        try{
        const {num} = this.props.match.params;
        const res = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)
        this.setState({urls: res.data.message})
    }catch(error){
        console.log(error)
    }

    }

    componentDidMount(){
        this.fetchDogs();
    }

    render(){
        const {urls} = this.state;
        return(<section>
            {urls.map(image=> <img src={image} alt="dog"/>)}
        </section>)

    }

}
export default RandomDogs;