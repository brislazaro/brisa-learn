import "./Fruit.css";

import banana from "./banana.webp";
import apple from "./apple.jpeg";
import orange from "./orange.avif";
import pineapple from "./piña.jpeg";
import { useState } from "react";
import CreateButton from "../CreateButton/CreateButton";
import FruitList from "../FruitCard/FruitList";

export interface Fruit {
  img: string;
  fruta: string;
  cantidad: number;
  color: string;
  hasSeeds: boolean;
}

function Fruit() {
  const [fruitList2, setFruitList2] = useState<Fruit[]>([
    {
      img: banana,
      fruta: "Banana",
      cantidad: 3,
      color: "Yellow",
      hasSeeds: false,
    },
    { img: apple, fruta: "Apple", cantidad: 5, color: "Red", hasSeeds: true },
    {
      img: orange,
      fruta: "Orange",
      cantidad: 6,
      color: "Orange",
      hasSeeds: true,
    },
    {
      img: pineapple,
      fruta: "Pineapple",
      cantidad: 1,
      color: "Yellow",
      hasSeeds: false,
    },
  ]);

  const deleteFruit = (fruta: string) => {
    const updatedFruitList = fruitList2.filter(
      (fruit) => fruit.fruta !== fruta
    );
    setFruitList2(updatedFruitList);
  };

  return (
    <div style={{ padding: "24px" }}>
      <CreateButton fruitList={fruitList2} setFruitList={setFruitList2} />
      <FruitList fruitList={fruitList2} deleteFruit={deleteFruit} />
    </div>
  );
}

export default Fruit;
