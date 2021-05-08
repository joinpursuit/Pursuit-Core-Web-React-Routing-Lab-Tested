import axios from 'axios';
import React, { Component } from 'react'
import doglogo from "../doglogo.svg";

export class DogBreed extends Component {
    constructor(){
        super();
        this.state = {
            breeds:[],
            image: doglogo
        }
    }

    loadDogBreeds = async () => {
        try{
            const response = await axios.get(`https://dog.ceo/api/breeds/list/all`);
            Object.keys(response.data.message).forEach((breed, i) => {
                this.setState({
                    breeds : [...this.state.breeds, <option key={i} value={breed}>{breed}</option>]
                })
            })
            
        }catch(e){
            alert(`Error Occured: ${e.message}`);
        }
    }

     async componentDidMount(){
         this.loadDogBreeds();
        try{
            const response = await axios.get(`https://dog.ceo/api/breed/${this.props.breed}/images/random`)
            this.setState({
                image: response.data.message 
            })
        }catch(e){
            alert(`Error Occured: ${e.message}`);
        }
    }

    loadImage = async (e) => {
        const breed = e.target.value;
        try{
            const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
            this.setState({
                image : response.data.message
            })
            
        }catch(e){
            alert(`Error Occured: ${e.message}`);
        }
    }

    

    render() {
        const {breeds, image} = this.state;


        return (
            <div>
                <h1>Select a dog breed.</h1>
                <select onChange={this.loadImage}>
                    <option defaultValue="select a breed">Select a breed</option>
                    {breeds}
                </select>
                <br/><br/><br/><br/>
                <img src={image} alt="Dog Image" style={{height:"200px"}}/>
            </div>
        )
    }
}

export default DogBreed
