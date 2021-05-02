import axios from "axios";
import { Component } from "react";

class RandomDog extends Component{

    state = {url: ""}

    fetchDog = async ()=>{
        try{
        const res = await axios.get("https://dog.ceo/api/breeds/image/random")
    
        this.setState({url: res.data.message})
    }catch(error){
        console.log(error)
    }

    }

    componentDidMount(){
        this.fetchDog();
    }

    render(){
        const {url} = this.state;
        return(<section>
            <img src={url} alt="dog"/>
            <button onClick={this.fetchDog}>Get new dog</button>
        </section>)

    }

}
export default RandomDog;