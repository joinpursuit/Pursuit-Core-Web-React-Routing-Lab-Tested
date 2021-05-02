import axios from "axios"
import {Component} from "react"

class RandomCat extends Component{

    state = {randomCat: []}

    fetchRandomCat = async() =>{
        try {
            const res = await axios.get("https://api.thecatapi.com/v1/images/search")
            this.setState({randomCat: res.data[0].url})
        } catch (error) {
            this.setState({randomCat:[]})
            
        }
    }

    componentDidMount(){
        this.fetchRandomCat()
    }
    render(){

        const {randomCat} = this.state
      

        
        return(
            <div>
                <h1>Random Cat</h1>
                <img src={randomCat} alt="cat" />
                <br/>
                <button onClick={this.fetchRandomCat}>random cat</button>
            </div>
        )
    }
}

export default RandomCat