import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null); // 레퍼런스

  return (
    <>
    <input ref={inputRef} />
    <br/>
    <br/>
    <button onClick={() =>inputRef.current.focus()}>강제 포커스 활성화</button>

    </>
  );
}

export default App;
