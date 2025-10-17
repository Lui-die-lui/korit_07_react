type HelloProps = { // type 정할때는 : ;
  name: string; // 얘네는 Java에서의 field처럼 느껴짐
  age?: number; // 꼭 전달 할 필요 없음
  fn: () => void; // 얘는 그러면 Java에서의 method처럼 보이면 됨
  fn2?: (msg: string) => void; // 얘는 매개변수로 string dat을 받고 return 타입이 없음 
}

export default HelloProps;

// 여기 내에 모든 type들을 다 모아두는 편입니다.