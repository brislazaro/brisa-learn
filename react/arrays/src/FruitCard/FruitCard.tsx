import { FC } from "react";
import { Fruit } from "../FruitwithImg/Fruit";
import "./FruitCard.css";
import toast from "react-hot-toast";

type FruitCardProps = {
  fruit: Fruit;
  index: number;
  deleteFruit: (fruta: string) => void;
};

const FruitCard: FC<FruitCardProps> = ({ fruit, index, deleteFruit }) => {
  return (
    <li key={`${fruit.fruta}-${index}`} className={`fruit-card ${fruit.color}`}>
      <div>
        <img className="img" src={fruit.img} alt={fruit.fruta} />
      </div>
      <div>
        <h3>{fruit.fruta}</h3>
      </div>
      <div>{`Cantidad: ${fruit.cantidad}`}</div>
      <div>{`Color: ${fruit.color}`}</div>
      <div>{`Tiene semillas: ${fruit.hasSeeds ? "Sí" : "No"}`}</div>
      <button
        className={`button ${fruit.color}`}
        onClick={() => {
          deleteFruit(fruit.fruta);
          toast.success("Fruta eliminada");
        }}
      >
        Eliminar
      </button>
    </li>
  );
};

export default FruitCard;
