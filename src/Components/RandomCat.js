import React, { useState, useEffect } from "react";
import axios from "axios"

const RandomCat = () => {
  const [urlImage, setUrlImage] = useState([])
  
    const fecthCat = async () => {
      try {
        const res = await axios.get("https://api.thecatapi.com/v1/images/search?api_key=83ba6aaf-234d-4e1a-990a-e77f82c6cdf8");
        setUrlImage(res.data)
      } catch (error) {
        console.log(error);
        setUrlImage([]);
      }
    };

    useEffect(()=> {
      fecthCat()
    })
  
      return <section>
          <h1> Random Cat</h1>
          <button onClick={fecthCat}>Random Cat</button>
          {urlImage.map(image => {
              return <img src={image.url} alt="CatPics"/>
          })}
          
      </section>;
  
  }
  
  export default RandomCat;