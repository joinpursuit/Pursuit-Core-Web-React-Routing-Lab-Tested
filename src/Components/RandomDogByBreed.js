import React from 'react';
import axios from 'axios'



class RandomDogByBreed extends React.Component{
    state={breed: ''}

    dogBreed = async() => {
        try{
            const {breed} = this.props.match.params
            const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
            this.setState({breed: res.data.message})

        }catch (error){
            console.log(error)
            this.setState({breed: ''})
        }
    }

    componentDidMount(){
        this.dogBreed()
    }
    render(){
        const {breed} = this.state
        return (
            <section>
               <img src={breed} alt="dog-by-breed" />
            </section>
        )
    }
}

export default RandomDogByBreed