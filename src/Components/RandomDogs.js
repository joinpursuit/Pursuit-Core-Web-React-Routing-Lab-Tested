import React from "react";
import axios from 'axios'

class RandomDogs extends React.Component {
  state = { dogs: [] };

  whistle = async() =>{
      const { num } = this.props.match.params
      let res = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)
      this.setState(prevState=>{
          return {dogs:res.data.message}
        })
        console.log(this.state)
  }

  componentDidMount(){
      this.whistle()
  }
  render() {
    return (
      <div>
        {this.state.dogs.map(dogPic=>{
            return <img src={dogPic} alt=""/>
        })}
      </div>
    );
  }
}

export default RandomDogs;
