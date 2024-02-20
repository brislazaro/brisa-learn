import { FC, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./CreateButton.css";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Fruit } from "../FruitwithImg/Fruit";

type CreateButtonProps = {
  fruitList: Fruit[];
  setFruitList: React.Dispatch<React.SetStateAction<Fruit[]>>;
};

const CreateButton: FC<CreateButtonProps> = ({ fruitList, setFruitList }) => {
  const [open, setOpen] = useState(false);

  const [formState, setFormState] = useState({
    img: "",
    fruta: "",
    cantidad: 0,
    color: "",
    hasSeeds: false,
  });

  const [nameError, setNameError] = useState(false);

  const cleanForm = () => {
    setFormState({
      img: "",
      fruta: "",
      cantidad: 0,
      color: "",
      hasSeeds: false,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormState({ ...formState, img: value });
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length >= 4) {
      setFormState({ ...formState, fruta: value });
      setNameError(false);
    } else {
      setNameError(true);
    }
  };

  const onChangeCantidad = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0 && value < 11) {
      setFormState({ ...formState, cantidad: value });
    }
  };

  const onChangeColor = (e: SelectChangeEvent<string>) => {
    const value = e.target.value;
    setFormState({ ...formState, color: value });
  };

  const onChangeSeeds = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setFormState({ ...formState, hasSeeds: value });
  };

  return (
    <>
      <div className="button-container">
        <Button variant="outlined" onClick={handleClickOpen}>
          Añadir Fruta
        </Button>
      </div>

      <Dialog
        open={open}
        onClose={() => {
          handleClose();
          cleanForm();
          setNameError(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Añade una fruta"}</DialogTitle>

        <DialogContent>
          <form className="form-container">
            <TextField
              fullWidth
              name="img"
              value={formState.img}
              size="small"
              label="Imagen"
              variant="outlined"
              onChange={onChangeImg}
            />

            <TextField
              fullWidth
              name="fruta"
              size="small"
              label="Nombre"
              variant="outlined"
              onChange={onChangeName}
              error={nameError}
              helperText={nameError ? "Nombre no Valido." : ""}
            />

            <TextField
              fullWidth
              name="cantidad"
              size="small"
              label="Cantidad"
              type="number"
              variant="outlined"
              value={formState.cantidad}
              onChange={onChangeCantidad}
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" size="small">
                Color
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formState.color}
                label="Color"
                size="small"
                onChange={onChangeColor}
              >
                <MenuItem value={"Green"}>Green</MenuItem>
                <MenuItem value={"Red"}>Red</MenuItem>
                <MenuItem value={"Yellow"}>Yellow</MenuItem>
                <MenuItem value={"Orange"}>Orange</MenuItem>
              </Select>
            </FormControl>

            <FormControlLabel
              name="seeds"
              control={<Checkbox size="medium" onChange={onChangeSeeds} />}
              label="Tiene Semillas"
            />
          </form>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              cleanForm();
              setNameError(false);
            }}
          >
            Cerrar
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              if (
                formState.fruta === "" ||
                nameError === true ||
                formState.cantidad === 0 ||
                formState.color === ""
              ) {
                alert("Rellana todos los campos");
              } else {
                setFruitList([...fruitList, formState]);
                handleClose();
                cleanForm();
              }
            }}
            autoFocus
          >
            Añadir
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateButton;
