import {Component} from "react"

import axios from "axios"

class DogBreed extends Component{


    state ={breed: ""}

    fetchRandomDog = async() => {
        
         try {
             const {breed} = this.props.match.params
             const res= await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
             debugger
             this.setState({breed: res.data.message})
             debugger
         } catch (error) {
             this.setState({breed: ""})
             console.log(error)
         }
     }
 
     componentDidMount(){
         this.fetchRandomDog()
     }

    render(){
        const {breed} = this.state

       

        return(
            <div>
                <h1>Breed</h1>
                <img src={breed} alt="breed"/>
            </div>
        )
    }
}

export default DogBreed

