import "./Fruit.css";
import banana from "./banana.webp";
import apple from "./apple.jpeg";
import orange from "./orange.avif";
import pineapple from "./piña.jpeg";

interface Fruit {
  img: string;
  fruta: string;
  cantidad: number;
  color: string;
  hasSeeds: boolean;
}

function Fruit() {
  const fruitList2: Fruit[] = [
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
  ];

  return (
    <div>
      <ul className="fruit-list">
        {fruitList2.map((fruit, index) => (
          <li
            key={`${fruit.fruta}-${index}`}
            className={`fruit-card ${fruit.color}`}
          >
            <div>
              <img className="img" src={fruit.img} alt={fruit.fruta} />
            </div>
            <div>
              <h3>{fruit.fruta}</h3>
            </div>
            <div>{`Cantidad: ${fruit.cantidad}`}</div>
            <div>{`Color: ${fruit.color}`}</div>
            <div>{`Tiene semillas: ${fruit.hasSeeds ? "Sí" : "No"}`}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fruit;
