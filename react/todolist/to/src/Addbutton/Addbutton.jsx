import "./Addbutton.css";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Addbutton({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="modal-container">
      <IconButton onClick={handleOpen}>
        <AddCircleOutlineIcon fontSize="large" sx={{ color: "#0b5491" }} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DialogTitle>Añade una tarea</DialogTitle>
        <DialogContent>
          <input
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <button
            onClick={() => {
              // Añadir un todo
              const newTodo = { tarea: inputValue };

              onAddTodo(newTodo);
              // no tengo acceso ni a todos ni a setTodos
              // cerrar el modal
            }}
          >
            Guardar
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Addbutton;
