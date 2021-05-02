import axios from "axios";
import { Component } from "react";

class RandomCat extends Component{

    state = {url: ""}

    fetchCat = async ()=>{
        try{
        const res = await axios.get("https://api.thecatapi.com/v1/images/search")
        debugger
        this.setState({url: res.data[0].url})
    }catch(error){
        console.log(error)
    }

    }

    componentDidMount(){
        this.fetchCat();
    }

    render(){
        const {url} = this.state;
        return(<section>
            <img src={url} alt="cat"/>
            <button onClick={this.fetchCat}>Get new cat</button>
        </section>)

    }

}
export default RandomCat;