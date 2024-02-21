import { FC } from "react";
import { Fruit } from "../FruitwithImg/Fruit";
import FruitCard from "./FruitCard";

type FruitListProps = {
  fruitList: Fruit[];
  deleteFruit: (fruta: string) => void;
};

const FruitList: FC<FruitListProps> = ({ fruitList, deleteFruit }) => {
  return (
    <ul className="fruit-list">
      {fruitList.map((fruit, index) => (
        <FruitCard
          fruit={fruit}
          index={index}
          deleteFruit={deleteFruit}
          key={`${fruit}-${index}`}
        />
      ))}
    </ul>
  );
};
export default FruitList;
