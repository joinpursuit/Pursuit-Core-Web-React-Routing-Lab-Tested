import React from "react";
import axios from "axios"

class MultipleRandomDogs extends React.Component{
    state ={dogs:[]}
    
    componentDidMount(){
        this.fetchImage();
    }
    
    fetchImage = async () =>{
        const {num} = this.props.match.params;
        try{
            const res = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)
            this.setState({dogs: res.data.message})
        }catch(error){
            console.log(error)
        }
    }
    render(){
      const {dogs} = this.state
        return(
            <div>
                multiple random dogs
                <ul>
                {dogs.map((dog)=>{
                    return <img src={dog}/>
                })}
                </ul>
            </div>
        )
    }
}

export default MultipleRandomDogs;