import {
  AppBar,
  Container,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import "./App.css";
import { useState } from "react";
import AddItem from "./AddItem";

// 내부에서 쓰려고 export - 직접 정의한 자료형
export type Item = {
  product: string;
  amount: string;
};

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (item: item) => {
    setItems([item, ...items]);
    // 뒤에 스프레드 문법 = 가장 최근에 있는거 먼저 추가 + 기존꺼 추가
    // 스프레드 문법은 배열, 객체 안에서 사용 가능함
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">쇼핑리스트 Shopping List</Typography>
        </Toolbar>
      </AppBar>
      <AddItem addItem={addItem} />
      {/* 속성명=내부정의 함수 */}
      <List>
        {items.map((item, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={item.product} secondary={item.amount} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
