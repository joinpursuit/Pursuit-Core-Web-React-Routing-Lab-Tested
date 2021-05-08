import React, { useState, useEffect} from "react";
import axios from 'axios'


const  RandomDogByBreed = (props) => {
    const [breed, setBreed] = useState('')

    const dogBreed = async() => {
        try{
            const {breed} = props.match.params
            const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
            setBreed(res.data.message)

        }catch (error){
            console.log(error)
            setBreed('')
        }
    }

    useEffect(()=> {
        dogBreed()
    },[])
        return (
            <section>
               <img src={breed} alt="dog-by-breed" />
            </section>
        )

}

export default RandomDogByBreed