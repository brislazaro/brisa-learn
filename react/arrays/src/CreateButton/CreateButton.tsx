import { FC, useState } from "react";
import Button from "@mui/material/Button";
import "./CreateButton.css";
import { Fruit } from "../FruitwithImg/Fruit";
import Modal from "../Modal/Modal";

type CreateButtonProps = {
  fruitList: Fruit[];
  setFruitList: React.Dispatch<React.SetStateAction<Fruit[]>>;
};

const CreateButton: FC<CreateButtonProps> = ({ fruitList, setFruitList }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="button-container">
        <Button variant="outlined" onClick={handleClickOpen}>
          Añadir Fruta
        </Button>
      </div>

      <Modal
        setFruitList={setFruitList}
        fruitList={fruitList}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default CreateButton;
