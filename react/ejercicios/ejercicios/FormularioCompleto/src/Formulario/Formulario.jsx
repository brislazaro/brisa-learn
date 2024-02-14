import { useState } from "react";
import "./Formulario.css";
import User from "./user.png";
// import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Formulario() {
  // TODO: Quitar los errores cuando le damos a reset

  // TODO: Envolver todos los campos en su div para colocar el mensaje de error donde toca
  const [open, setOpen] = useState(false);

  const [state, setState] = useState({
    name: "",
    age: "",
    addres: "",
    email: "",
    phone: "",
  });

  const [errorState, setErrorState] = useState({
    name: false,
    age: false,
    addres: false,
    email: false,
    phone: false,
  });

  const [emptyError, setEmptyError] = useState(false);

  const onChangeName = (e) => {
    const value = e.target.value;

    if (value.length < 4) {
      setErrorState({ ...errorState, name: true });
    } else {
      setErrorState({ ...errorState, name: false });
    }

    setState({ ...state, name: value });
    setEmptyError(false);
  };

  const onChangeAge = (e) => {
    const value = e.target.value;

    if (isNaN(value) || value.length >= 3) {
      setErrorState({ ...errorState, age: true });
    } else {
      setErrorState({ ...errorState, age: false });
    }

    setState({ ...state, age: e.target.value });
    setEmptyError(false);
  };

  const onChangeAddres = (e) => {
    const value = e.target.value;

    if (value.length < 7) {
      setErrorState({ ...errorState, addres: true });
    } else {
      setErrorState({ ...errorState, addres: false });
    }

    setState({ ...state, addres: e.target.value });
    setEmptyError(false);
  };

  const onChangeEmail = (e) => {
    const value = e.target.value;
    const validacion = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; // RegEx => regular expressions

    if (!validacion.test(value)) {
      setErrorState({ ...errorState, email: true });
    } else {
      setErrorState({ ...errorState, email: false });
    }

    setState({ ...state, email: e.target.value });
    setEmptyError(false);
  };

  const onPhoneChange = (e) => {
    const value = e.target.value;

    if (isNaN(value) || value.length > 10) {
      setErrorState({ ...errorState, phone: true });
    } else {
      setErrorState({ ...errorState, phone: false });
    }

    setState({ ...state, phone: e.target.value });
    setEmptyError(false);
  };

  const resetForm = () => {
    setState({
      name: "",
      age: "",
      addres: "",
      email: "",
      phone: "",
    });
  };

  const handleOpen = () => {
    if (
      state.name === "" ||
      state.age === "" ||
      state.addres === "" ||
      state.email === "" ||
      state.phone === ""
    ) {
      setEmptyError(true);
    } else {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="container">
        <div className="logoContainer">
          <img className="logo" src={User}></img>
        </div>

        <div className="field">
          <label>Nombre:</label>
          <input
            name="name"
            className="input"
            onChange={onChangeName}
            value={state.name}
          ></input>
          {errorState.name && <p className="error">Campo no valido</p>}
        </div>

        <div className="field">
          <label>Edad:</label>
          <input
            className="input"
            onChange={onChangeAge}
            value={state.age}
          ></input>

          {errorState.age && <p className="error">Campo no valido</p>}
        </div>

        <div className="field">
          <label>Direccion:</label>
          <input
            className="input"
            onChange={onChangeAddres}
            value={state.addres}
          ></input>
          {errorState.addres && <p className="error">Campo no valido</p>}
        </div>

        <div className="field">
          <label>Email:</label>
          <input
            className="input"
            onChange={onChangeEmail}
            value={state.email}
          ></input>
          {errorState.email && <p className="error">Campo no valido</p>}
        </div>

        <div className="field">
          <label>Telefono:</label>
          <input
            className="input"
            onChange={onPhoneChange}
            value={state.phone}
          ></input>
          {errorState.phone && <p className="error">Campo no valido</p>}
        </div>

        {emptyError && <p className="error">Llena todos los campos</p>}

        <div className="buttons">
          <button className="button" onClick={resetForm}>
            Eliminar
          </button>
          <button className="button" onClick={handleOpen}>
            Guardar
          </button>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Datos
          </Typography>
          <div id="modal-modal-description">
            <p>Nombre: {state.name}</p>
            <p>Edad: {state.age}</p>
            <p>Direccion: {state.addres}</p>
            <p>Email: {state.email}</p>
            <p>Telefono: {state.phone}</p>
          </div>
        </Box>
      </Modal>
    </>
  );
}
export default Formulario;
