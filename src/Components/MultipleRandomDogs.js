import { Component } from "react"
import axios from "axios"

class MultipleRandomDogs extends Component {
    state = {dogs: []}

    getDogs = async () => {
        try {
            const { num } = this.props.match.params
            const res = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)
            this.setState({dogs: res.data.message})
        } catch (error) {
            console.log(error);
            this.setState({dogs: []})
        }
    }

    componentDidMount(){
        this.getDogs()
    }
    render(){
        const { dogs } = this.state
        return (
            <section>
                {dogs.map(dog => {
                    return <img src={dog} alt="dog-pic"/>
                })}
            </section>
        )
    }
}

export default MultipleRandomDogs
