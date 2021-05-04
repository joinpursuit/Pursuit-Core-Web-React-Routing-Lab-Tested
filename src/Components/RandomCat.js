import React from 'react';
import axios from 'axios'

class RandomCat extends React.Component{
state={url:""}
    callCat = async() =>{
        const cat = await axios.get('https://api.thecatapi.com/v1/images/search')
       let photo =  cat.data.map(image =>{
            return image.url
        })
        this.setState({url:photo})
        
    }

    componentDidMount(){
        this.callCat()
    }
render(){
    return(
        <div>
            <img src={this.state.url} alt=""/>
            <button onClick={this.callCat}>New Image!</button>
        </div>
    )
}
}

export default RandomCat