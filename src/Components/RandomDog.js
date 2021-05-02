import {Component} from "react"
import axios from "axios"

class RandomDog extends Component{

    state ={randomDog: []}

   fetchRandomDog = async() => {
        try {
            const res= await axios.get("https://dog.ceo/api/breeds/image/random")
            this.setState({randomDog: res.data.message})
            // debugger
        } catch (error) {
            this.setState({randomDog: []})
            console.log(error)
        }
    }

    componentDidMount(){
        this.fetchRandomDog()
    }

    render(){
        const {randomDog} = this.state
        return(
            <div>
                <h1>Random</h1>
                <img src={randomDog} alt="doggo" />
                <button onClick={this.fetchRandomDog}>Get random dog</button>
            </div>

        )
    }

}

export default RandomDog