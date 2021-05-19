import {Component} from 'react'
import axios from 'axios'

class MultipleRandomCat extends Component{

    state = {cats: []}

    fetchRandomCats = async() => {
        try{
            const {num} = this.props.match.params
            const res = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${num}`)
            this.setState({cats: res.data})
        } catch(err) {
            this.setState({cats:[]})
            console.log(err)
        }
    }

    render() {
        const {cats} = this.state
        const catImages = cats.map((cat => {
            return <img src={cat.url} alt="cat" />
        }))
        return(
            <div>
                <h1>Multiple Cats</h1>
                {catImages}
            </div>
        )
    }
}

export default MultipleRandomCat;