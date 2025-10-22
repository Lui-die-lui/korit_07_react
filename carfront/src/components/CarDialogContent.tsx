import { ChangeEvent } from "react";
import { Car } from "../types";
import { DialogContent, Stack, TextField } from "@mui/material";

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
      <Stack 
      spacing={2} 
      // margin top
      mt={1}>
        <TextField
          type="text"
          name="brand"
          value={car.brand}
          label="Brand"
          onChange={handleChange}
        />

        <TextField
          type="text"
          name="model"
          value={car.model}
          label="Model"
          onChange={handleChange}
        />

        <TextField
          type="text"
          name="color"
          value={car.color}
          label="Color"
          onChange={handleChange}
        />

        <TextField
          type="text"
          name="registrationNumber"
          value={car.registrationNumber}
          label="Reg.no"
          onChange={handleChange}
        />

        <TextField
          type="text"
          name="modelYear"
          value={car.modelYear}
          label="ModelYear"
          onChange={handleChange}
        />

        <TextField
          type="text"
          name="price"
          value={car.price}
          label="price"
          onChange={handleChange}
        />
      </Stack>
    </DialogContent>
  );
}

export default CarDialogContent;
