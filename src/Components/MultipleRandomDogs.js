import { Component } from 'react';
import axios from "axios";

class MultipleRandomDogs extends Component {
    state ={randomDogs: []}

    fetchRandomDog = async() => {
         try {
             const {num} = this.props.match.params
             const res= await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`);
             this.setState({randomDogs: res.data[0].message})
         } catch (err) {
             this.setState({randomDogs: []})
             console.log(err)
         }
     }

     componentDidMount(){
         this.fetchRandomDog()
     }

    render(){
        const {randomDogs} = this.state
        const dogImages = randomDogs.map((dog => {

           return <img key= {dog} src={dog} alt="dogs" />

        }))
        return(
            <div>
                <h1>Multiple</h1>
                {dogImages}
            </div>
        )
    }
}

export default MultipleRandomDogs;