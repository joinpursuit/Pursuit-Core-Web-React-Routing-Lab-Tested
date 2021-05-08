import React, { useState, useEffect } from "react";
import axios from "axios";

const MultipleRandomDogs = (props) => {
  const [dogs, setDogs] = useState([]);

  const getDogs = async () => {
    try {
      const { num } = props.match.params;
      const res = await axios.get(
        `https://dog.ceo/api/breeds/image/random/${num}`
      );
      setDogs(res.data.message);
    } catch (error) {
      console.log(error);
      setDogs([]);
    }
  };
  useEffect(()=> {
    getDogs()
  },[])

  return (
    <section>
      {dogs.map((dog) => {
        return <img src={dog} alt="dog-pic" />;
      })}
    </section>
  );
};

export default MultipleRandomDogs;
