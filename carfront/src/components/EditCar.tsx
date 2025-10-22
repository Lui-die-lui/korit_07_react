import { ChangeEvent, useState } from "react";
import { Car, CarResponse } from "../types";
import { Dialog, DialogActions, DialogTitle } from "@mui/material";
import CarDialogContent from "./CarDialogContent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCar } from "../api/carapi";
import { CarEntity } from "../types";

type FormProps = {
  // 수정 시 특정 id값을 포함한 기존 차량 데이터
  cardata: CarResponse;
};



// 필수 props = cardata
function EditCar({ cardata }: FormProps) {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  // 초기값을 기존 차량 정보로 세팅
  // 바뀌지 않은 값들도 다 불러와서 세팅해주기 때문에 PUT
  const [car, setCar] = useState<Car>({
    brand: cardata.brand,
    model: cardata.model,
    color: cardata.color,
    registrationNumber: cardata.registrationNumber,
    modelYear: cardata.modelYear,
    price: cardata.price,
  });

  const { mutate } = useMutation(updateCar, {
    onSuccess: () => {
      queryClient.invalidateQueries(["cars"]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  // 다이얼로그 열기
  const handleClickOpen = () => {
    setOpen(true);
    // Modal이 열렸을 때 특정 id 값에 맞는 정보를 불러오면 좋겠다.
    // 그래서 AddCar에서의 handleClickOpen()과 코드라인의 차이가 생깁니다.
    setCar({
      brand: cardata.brand,
      model: cardata.model,
      color: cardata.color,
      registrationNumber: cardata.registrationNumber,
      modelYear: cardata.modelYear,
      price: cardata.price,
    });
  };

  // 다이얼로그 닫기
  const handleClickClose = () => setOpen(false);

  // 수정 저장 (PUT 요청으로 연결)
  const handleSave = () => {
    console.log("수정된 차량 데이터:", car);
    // 나중에 updateCar(cardata._links.self.href, car)
    // 혹은 mutate({ car, url: cardata._links.self.href }) 형태로 전송
    const url = cardata._links.self.href;
    const carEntity: CarEntity = { car, url };
    mutate(carEntity);
    // setCar({
    //   brand: "",
    //   model: "",
    //   color: "",
    //   registrationNumber: "",
    //   modelYear: 0,
    //   price: 0,
    // });
    setOpen(false);
  };

  // 입력 변경 핸들러
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  return (
    <>
      <button onClick={handleClickOpen}>Edit</button>

      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>Edit Car</DialogTitle>

        <CarDialogContent car={car} handleChange={handleChange} />

        <DialogActions>
          <button onClick={handleClickClose}>Cancel | 취소</button>
          <button onClick={handleSave}>Save | 저장</button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditCar;
