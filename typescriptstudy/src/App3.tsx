import "./App.css";
import ByeComponent from "./ByeComponent";
import HelloComponent from "./HelloComponent";

function App() {
  return (
    <>
    {/* props 전달 */}
      <HelloComponent name={"김일"} age={20} />
      <ByeComponent name={"김일"} />
    </>
  );
}

export default App;
