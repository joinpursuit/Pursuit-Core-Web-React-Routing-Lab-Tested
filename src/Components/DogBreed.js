
import axios from "axios";
import { Component } from "react";

class DogBreed extends Component{

    state = {url: ""}

    fetchDog = async ()=>{
        try{
        const {breed} = this.props.match.params;
        debugger
        const res = await axios.get(`https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random`)
        debugger
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
        </section>)

    }

}
export default DogBreed;