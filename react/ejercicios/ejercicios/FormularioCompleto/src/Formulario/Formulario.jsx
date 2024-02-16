import { useState } from "react";
import "./Formulario.css";
import User from "./user.png";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "../Inputs/Input";

const initialState = {
  name: "",
  age: "",
  addres: "",
  email: "",
  phone: "",
};

const errorInitialState = {
  name: false,
  age: false,
  addres: false,
  email: false,
  phone: false,
};

// TODO:convertir el div a form y Preventdefault de los botones del form

function Formulario() {
  const [open, setOpen] = useState(false);

  const [state, setState] = useState(initialState);

  const [errorState, setErrorState] = useState(errorInitialState);

  const [emptyError, setEmptyError] = useState(false);

  const [fullError, setFullError] = useState(false);

  const onChangeName = (e) => {
    const value = e.target.value;

    if (value.length < 4) {
      setErrorState({ ...errorState, name: true });
    } else {
      setErrorState({ ...errorState, name: false });
    }

    setState({ ...state, name: value });
    setEmptyError(false);
    setFullError(false);
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
    setFullError(false);
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
    setFullError(false);
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
    setFullError(false);
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
    setFullError(false);
  };

  const resetForm = (e) => {
    e.preventDefault();
    setState(initialState);
    setErrorState(errorInitialState);
    setEmptyError(false);
    setFullError(false);
  };

  const handleOpen = (e) => {
    e.preventDefault();
    if (
      state.name === "" ||
      state.age === "" ||
      state.addres === "" ||
      state.email === "" ||
      state.phone === ""
    ) {
      setEmptyError(true);
      return;
    }

    if (
      errorState.name === true ||
      errorState.age === true ||
      errorState.addres === true ||
      errorState.email === true ||
      errorState.phone === true
    ) {
      setFullError(true);
      return;
    }

    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <form className="container">
        <div className="logoContainer">
          <img className="logo" src={User}></img>
        </div>

        <Input
          label={"Name:"}
          name={"name"}
          onChange={onChangeName}
          value={state.name}
          errorState={errorState.name}
        />

        <Input
          label={"Age:"}
          name={"age"}
          onChange={onChangeAge}
          value={state.age}
          errorState={errorState.age}
        />

        <Input
          label={"Addres:"}
          name={"addres"}
          onChange={onChangeAddres}
          value={state.addres}
          errorState={errorState.addres}
        />

        <Input
          label={"Email:"}
          name={"email"}
          onChange={onChangeEmail}
          value={state.email}
          errorState={errorState.email}
        />

        <Input
          label={"Phone:"}
          name={"phone"}
          onChange={onPhoneChange}
          value={state.phone}
          errorState={errorState.phone}
        />

        {emptyError && <p className="error">Llena todos los campos</p>}

        {fullError && <p className="error">Campos no validos</p>}

        <div className="buttons">
          <button className="button" onClick={resetForm}>
            Eliminar
          </button>
          <button className="button" onClick={handleOpen}>
            Guardar
          </button>
        </div>
      </form>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-content">
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
        </div>
      </Modal>
    </>
  );
}
export default Formulario;
