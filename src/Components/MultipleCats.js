import {Component} from 'react'
import axios from "axios"

class MultipleCats extends Component{

    state ={randomCats: []}

    fetchRandomCats = async() => {
         try {
             const {num} = this.props.match.params
             const res= await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${num}`)
             this.setState({randomCats:res.data })
             debugger
         } catch (error) {
             this.setState({randomCats: []})
             console.log(error)
         }
     }
 
     componentDidMount(){
         this.fetchRandomCats()
     }

    render(){

        const {randomCats} = this.state
        const catImages = randomCats.map((cat=>{
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

export default MultipleCats