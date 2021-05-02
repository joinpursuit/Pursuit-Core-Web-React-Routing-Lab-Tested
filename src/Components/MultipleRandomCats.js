import { Component } from "react"
import axios from "axios"

class MultipleRandomCats extends Component {
    state = {cats: []}

    getcats = async () => {
        try {
            const { num } = this.props.match.params
            const res = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${num}&api_key=2facae39-0bce-46ae-9af6-619085408ec2`)
            this.setState({cats: res.data})
        } catch (error) {
            console.log(error);
            this.setState({cats: []})
        }
    }

    componentDidMount(){
        this.getcats()
    }
    render(){
        const { cats } = this.state
        return (
            <section>
                {cats.map(cat => {
                    return <img src={cat.url} alt="cat-pic"/>
                })}
            </section>
        )
    }
}

export default MultipleRandomCats
