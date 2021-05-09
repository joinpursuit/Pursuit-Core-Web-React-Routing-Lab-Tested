import React from "react";


const DogRandom = ({randomDogs, renderRandom}) => {
    <>
    <ul>
        {randomDogs.map((randomDog) => {
            <img src={randomDog.message} alt="dogphoto"/>
        })}
    </ul>
    <button onClick={renderRandom}>Get new random doggo</button>
    </>
}

export default DogRandom