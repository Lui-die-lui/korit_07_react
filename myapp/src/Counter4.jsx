import { useState } from "react";
import useTitle from "./useTitle";

function Counter4() {

  const [count, setCount] = useState(0);
  useTitle(`당신은 ${count} 번 클릭했습니다 !`); 
  // 호출 - 여기 전체가 title - 클릭 할 때마다 재대입 일어남

  return (
    <>
    <p>Counter : {count}</p>
    <br />
    <br />
    <button onClick={() => setCount(prevCount => prevCount + 1)}>++</button>
    </>
  );
}

export default Counter4;
