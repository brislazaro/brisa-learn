import "../FruitList/FruitList.css"

interface Fruit {
    fruta: string;
    cantidad: number;
  }

function FruitListAmount() {
    const fruitList2:Fruit[]= [
      { fruta: "banana", cantidad: 3 },
      { fruta: "apple", cantidad: 5 },
      { fruta: "orange", cantidad: 6 },
      { fruta: "pineapple", cantidad: 1 }
    ];
  
    return (
      <div className="fruit-container">
        <ul className="fruit-list">
          {fruitList2.map((fruit, index) => (
            <li key={index}>
              {`${fruit.fruta}: ${fruit.cantidad}`}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default FruitListAmount;

  