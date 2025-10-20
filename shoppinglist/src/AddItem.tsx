import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Item } from "./App";

type AddItemProps = {
  addItem: (item: Item) => void; //매개변수는 있는데 결과는 void
};

function AddItem(props: AddItemProps) {
  // 인풋창에 입력하게 되면 여기 컴포넌트로 넘어와야하기 때문
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<Item>({
    // App.tsx의 Item을 불러옴
    product: "",
    amount: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // App.tsx의 addIitem 함수를 호출하고, item 상태를 전달
  const addItem = () => {
    props.addItem(item); // 상위 컴포넌트에 있 item 가지고와줌
    // TextField에 있는 내용을 다 지우고 Modal을 띄움
    setItem({ product: "", amount: "" });
    handleClose();
  };

  return (
    <>
      <Button onClick={handleOpen} variant="outlined">Add Item</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          <TextField // input 창을 대신
            value={item.product}
            margin="dense"
            onChange={(e) => setItem({ ...item, product: e.target.value })}
            label="Product/제품명"
            fullWidth
          />
          {/* amount 값은 유지가 되야하기 때문에 스프레드 연산자 사용 */}
          <TextField
            value={item.amount}
            margin="dense"
            onChange={(e) => setItem({ ...item, amount: e.target.value })}
            label="Amount/수량"
            fullWidth
          />
        </DialogContent>
        <Button onClick={handleClose}>Calcel / 취소</Button>
        <Button onClick={addItem}>
          {/* addItem = app.tsx에 정의 되어있음 */}
          Add / 저장
        </Button>
      </Dialog>
    </>
  );
}

export default AddItem;
