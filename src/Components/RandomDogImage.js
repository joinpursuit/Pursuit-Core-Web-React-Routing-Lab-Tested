import React from "react";
import axios from "axios"
class RandomDogImage extends React.Component{
    state ={dog:[]}

    componentDidMount(){
        this.fetchImage();
    }

    fetchImage = async () =>{
        try{
            const res = await axios.get("https://dog.ceo/api/breeds/image/random")
            this.setState({dog: res.data})
            console.log(res)
        }catch(error){
            console.log(error)
        }
    }
    render(){
        const {dog} = this.state
        const {message} = dog
        return(
            <di>
                <img src={message}/>
                <div>RandomDogImage</div>
                <button onClick={this.fetchImage}>Get dog</button>
            </di>
        )
    }
}

export default RandomDogImage;