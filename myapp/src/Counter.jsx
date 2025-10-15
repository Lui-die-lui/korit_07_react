import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // 가장 상위에 위치해야함 / 초기값 상태를 선언

  const increment = () => {
    // setCount(count + 1) -> 여러개 해봤자 +1
    setCount(preCount => preCount + 1);
    setCount(preCount => preCount + 1);
    setCount(preCount => preCount + 1);
    setCount(preCount => preCount + 1);
    setCount(preCount => preCount + 1);

  };
  return (
    <div>
      <p>버튼 클릭 횟수 = {count}</p>
      <button onClick={increment}>증가 {count}</button>
    </div>
  );
}

export default Counter;
