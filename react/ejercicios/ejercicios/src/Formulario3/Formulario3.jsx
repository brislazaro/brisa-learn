import { useState } from "react";
import Select from "react-select";

function Formulario3() {
  const [info, setInfo] = useState({
    name: "",
    surname: "",
    age: "",
    gender: "",
    addres: "",
    zipcode: "",
    likecoding: "",
  });

  const options = [
    { value: "Hombre", label: "Hombre" },
    { value: "Mujer", label: "Mujer" },
  ];

  const trueofalse = [
    { value: true, label: "True" },
    { value: false, label: "False" },
  ];

  const handleSelectChange = (selectedOption) => {
    setInfo({ ...info, gender: selectedOption.value });
  };

  const handleSelectTrueoFalse = (selectedOption) => {
    setInfo({ ...info, likecoding: selectedOption.value });
  };

  const handleChange = (e) =>
    setInfo({ ...info, [e.target.name]: e.target.value });

  return (
    <form className="formulario">
      <div className="flex-row">
        <label>Name:</label>
        <input name="name" value={info.name} onChange={handleChange}></input>
        <p> {info.name}</p>
      </div>

      <div className="flex-row">
        <label>Surname:</label>
        <input
          name="surname"
          value={info.surname}
          onChange={handleChange}
        ></input>
        <p> {info.surname}</p>
      </div>

      <div className="flex-row">
        <label>Age:</label>
        <input name="age" value={info.age} onChange={handleChange}></input>
        <p> {info.age}</p>
      </div>

      <div className="flex-row">
        <label>Gender:</label>

        <Select
          options={options}
          onChange={handleSelectChange}
          defaultValue={options[0]}
        />
        <p> {info.gender}</p>
      </div>

      <div className="flex-row">
        <label>Addres:</label>
        <input
          name="addres"
          value={info.addres}
          onChange={handleChange}
        ></input>
        <p> {info.addres}</p>
      </div>

      <div className="flex-row">
        <label>Zipcode:</label>
        <input
          name="zipcode"
          value={info.zipcode}
          onChange={handleChange}
        ></input>
        <p> {info.zipcode}</p>
      </div>

      <div className="flex-row">
        <label>Like Coding:</label>

        <Select options={trueofalse} onChange={handleSelectTrueoFalse} />
        <p>{`${info.likecoding}`}</p>
      </div>

      <div className="flex-row">
        <button
          onClick={(e) => {
            e.preventDefault();
            setInfo({
              ...info,
              name: "",
              surname: "",
              age: "",
              addres: "",
              zipcode: "",
            });
          }}
        >
          Eliminar
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            alert("Formulario correcto :) ");
            setInfo({
              ...info,
              name: "",
              surname: "",
              age: "",
              addres: "",
              zipcode: "",
            });
          }}
        >
          Guardar
        </button>
      </div>
    </form>
  );
}

export default Formulario3;
