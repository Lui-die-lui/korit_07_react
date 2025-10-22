import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Car } from "../types";
import { ChangeEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCar } from "../api/carapi";
import CarDialogContent from "./CarDialogContent";
import AddIcon from "@mui/icons-material/Add";

function AddCar() {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState<Car>({
    brand: "",
    model: "",
    color: "",
    registrationNumber: "",
    modelYear: 0,
    price: 0,
  });

  const handleClickOpen = () => setOpen(true);

  const handleClickClose = () => setOpen(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCar({ ...car, [event.target.name]: event.target.value }); // 객체
  };

  const queryClient = useQueryClient();

  const { mutate } = useMutation(addCar, {
    // 어떤 함수를 불러올건지
    onSuccess: () => {
      queryClient.invalidateQueries(["cars"]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleSave = () => {
    mutate(car); // caar 집어넣음
    setCar({
      brand: "",
      model: "",
      color: "",
      registrationNumber: "",
      modelYear: 0,
      price: 0,
    });
    handleClickClose();
  };

  return (
    <>
    <Tooltip title="Add car">
      <IconButton
        onClick={handleClickOpen}
        aria-lable="add"
        size="small"
        // sx={{
        //   borderRadius: "8px", // ← 원형 대신 네모
        //   backgroundColor: "none",
        //   "&:hover": {
        //     backgroundColor: "#e0e0e0",
        //   },
        // }}
      >
        <AddIcon fontSize="small" />
      </IconButton>
      </Tooltip>
      <Dialog open={open}>
        <DialogTitle>New Car</DialogTitle>
        <CarDialogContent car={car} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClickClose}>Cancle | 취소</Button>
          <Button onClick={handleSave}>Save | 저장</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddCar;
