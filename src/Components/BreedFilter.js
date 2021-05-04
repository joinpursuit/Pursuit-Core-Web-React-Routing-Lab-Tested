import React from 'react';
import axios from 'axios'

class BreedFilter extends React.Component{
    state = { 
        image: "",
     };

     showDog = async() =>{
         const {breed} = this.props.match.params
        const dog = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
        // const dog = await axios.get('https://dog.ceo/api/breeds/list/all')
        const dogPic = dog.data.message
        this.setState({image:dogPic})
        console.log(dogPic)
        

     }
   
    componentDidMount(){
        this.showDog()
    }
  
render(){
    return(
        <div>
            <img src={this.state.image} alt=""/>
        </div>
    )
}
}

export default BreedFilter