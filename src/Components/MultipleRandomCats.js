import React from "react";
import axios from "axios"

class MultipleRandomCats extends React.Component{
    state ={dog:[]}

    componentDidMount(){
        this.fetchImage();
    }

    fetchImage = async () =>{
        try{
            const res = await axios.get("")
            this.setState({dog: res.data})
        }catch(error){
            console.log(error)
        }
    }
    render(){
      
        return(
            // <img src={}/>
            <div>
                multiple random cats
            </div>
        )
    }
}

export default MultipleRandomCats;