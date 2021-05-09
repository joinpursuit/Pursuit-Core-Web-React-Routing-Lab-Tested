import React, { Component } from 'react'
import axios from "axios";

class RandomDogByBreed extends Component {
    state = {breed: "", }

    componentDidMount() {
        this.fetchDogByBreed();
      }
    
      fetchDogByBreed = async () => {
        try {
          const { breed } = this.props.match.params;
          const res = await axios.get(
            `https://dog.ceo/api/breed/${breed}/images/random`
          );
          debugger
          this.setState({ breed: res.data.message });
        } catch (error) {
          console.log(error);
          this.setState({ breed: "" })
        }
      };

    render() {
        const { breed } = this.state;
        
        return (
            <div>
                RandomDogByBreed
                <img src={breed} alt="random breed of dog"/>
            </div>
        )
    }
}

export default RandomDogByBreed;