import axios from "axios";
import { Component } from "react";

class RandomCats extends Component{

    state = {urls: []}

    fetchCats = async ()=>{
        try{
        const {num} = this.props.match.params;
        const res = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${num}`)
        debugger
        this.setState({urls: res.data})
    }catch(error){
        console.log(error)
    }

    }

    componentDidMount(){
        this.fetchCats();
    }

    render(){
        const {urls} = this.state;
        return(<section>
            {urls.map(image=> <img src={image.url} alt="cat"/>)}
        </section>)

    }

}
export default RandomCats;