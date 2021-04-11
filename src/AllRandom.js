import React from "react";
import CatRandomNum from "./CatRandomNum";
import DogRandomNum from "./DogRandomNum";

export default function AllRandom() {
  const randomCats = Math.floor(Math.random() * 11);
  const randomDogs = Math.floor(Math.random() * 11);

  return (
    <>
      {<CatRandomNum match={{ params: { num: randomCats } }} />}
      {<DogRandomNum match={{ params: { num: randomDogs } }} />}
    </>
  );
}
