import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomDog = () => {
  const [urlImage, setUrlImage] = useState("");

  const fecthDog = async () => {
    try {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random");
      setUrlImage(res.data.message);
    } catch (error) {
      console.log(error);
      setUrlImage("");
    }
  };
  useEffect(() => {
    fecthDog();
  }, []);

  return (
    <section>
      <h1> Random Dog</h1>
      <button onClick={fecthDog}>Random Dog</button>
      <img src={urlImage} alt="DogPics" />
    </section>
  );
};

export default RandomDog;
