import { FC, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./CreateButton.css";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormState({ ...formState, fruta: value });
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
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Añade una fruta"}</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="form-container">
              <div className="form">
                <label>Imagen:</label>
                <input onChange={() => {}} value={formState.img}></input>
              </div>
              <div className="form">
                <TextField
                  fullWidth
                  name="fruta"
                  size="small"
                  label="Nombre"
                  variant="outlined"
                  onChange={onChangeName}
                />
              </div>
              <div className="form">
                <TextField
                  fullWidth
                  size="small"
                  label="Cantidad"
                  variant="outlined"
                />
              </div>
              <div className="form">
                <TextField
                  fullWidth
                  size="small"
                  label="Color"
                  variant="outlined"
                />
              </div>
              <div className="form">
                <FormControlLabel
                  control={<Checkbox size="medium" />}
                  label="Tiene Semillas"
                />
              </div>
            </div>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
          <Button
            onClick={() => {
              setFruitList([...fruitList, formState]);
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
