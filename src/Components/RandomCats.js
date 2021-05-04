import axios from 'axios';
import React from 'react';

class RandomCats extends React.Component{
    state={cats:[]}

    catCall = async() =>{
        let {num} = this.props.match.params
        let cats = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${num}`)
        // let catPics = cats.data.map(image=>{
        //     return image.url
        // })
        this.setState(prevState=>{
           return {cats :cats.data}
        })
        console.log(cats)
        console.log(num)
        console.log(this.state)
    }

    componentDidMount(){
        this.catCall()
    }

render(){
    return(
        <div>
            {this.state.cats.map(image=>{
                return <img src={image.url} alt=""/>
            })}
        </div>
    )
}
}

export default RandomCats