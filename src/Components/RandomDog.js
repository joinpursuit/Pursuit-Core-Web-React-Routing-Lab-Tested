import React from 'react'
import AnimalsAPI from './AnimalsAPI'

function RandomDog({ dogURL }) {
   return (
      <div>
         <img src={dogURL} alt="Random Dog"/>
         <button onClick={AnimalsAPI.getDogURL()}>Get new dog</button>
      </div>
   )
}

export default RandomDog
