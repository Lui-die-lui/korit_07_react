import { Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Car } from "../types";
import { ChangeEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCar } from "../api/carapi";
import CarDialogContent from "./CarDialogContent";

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
      <button onClick={handleClickOpen}>New Car</button>
      <Dialog open={open}>
        <DialogTitle>New Car</DialogTitle>
        <CarDialogContent car={car} handleChange={handleChange} />
        <DialogActions>
          <button onClick={handleClickClose}>Cancle | 취소</button>
          <button onClick={handleSave}>Save | 저장</button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddCar;
