import React, { useState, useEffect } from "react";
import axios from "axios";

const MultipleRandomCats = (props) => {
  const [cats, setCats] = useState([]);

  const getcats = async () => {
    try {
      const { num } = props.match.params;
      const res = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=${num}&api_key=2facae39-0bce-46ae-9af6-619085408ec2`
      );
      setCats(res.data);
    } catch (error) {
      console.log(error);
      setCats([]);
    }
  };
  useEffect(() => {
    getcats();
  }, []);

  return (
    <section>
      {cats.map((cat) => {
        return <img src={cat.url} alt="cat-pic" />;
      })}
    </section>
  );
};

export default MultipleRandomCats;
