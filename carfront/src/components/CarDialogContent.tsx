import { ChangeEvent } from "react";
import { Car } from "../types";
import { DialogContent } from "@mui/material";

type DialogFormProps = {
  //dto 정도로 생각해주면 됨
  car: Car;
  // input 있으면ChangeEvent<HTMLAnchorElement> 거의 고정
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

// 자동차 컴포넌트 하위 컴포넌트로 이 컴포넌트가 들어감.
function CarDialogContent({ car, handleChange }: DialogFormProps) {
  return (
    <DialogContent>
      <input
        type="text"
        name="brand"
        value={car.brand}
        placeholder="Brand"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="model"
        value={car.model}
        placeholder="Model"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="color"
        value={car.color}
        placeholder="Color"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="registrationNumber"
        value={car.registrationNumber}
        placeholder="Reg.No"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="modelYear"
        value={car.modelYear}
        placeholder="Year"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="price"
        value={car.price}
        placeholder="Price"
        onChange={handleChange}
      />
      <br />
    </DialogContent>
  );
}

export default CarDialogContent;
