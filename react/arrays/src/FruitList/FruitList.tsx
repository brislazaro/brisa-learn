import React from "react";
import "./FruitList.css";

function FruitList() {
  const fruitList:string[] = ["banana", "apple", "orange", "pineapple", "kiwi"];

  return (
    <div className="fruit-container">
        <ul className="fruit-list">
      {fruitList.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>


    </div>
    
  );
}

export default FruitList;
