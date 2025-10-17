import "./App.css";
import AuthContext from "./AuthContext";
import MyComponent from "./MyComponent";
import MyComponent2 from "./MyComponent2";
import MyForm from "./MyForm";
import MyList from "./MyList";
import MyTable from "./MyTable";

function App() {
  const username = "김일";

  return (
    // 여기 감싸져있는 하위 컴포넌트들에게만 적용(props없이 값 전달 가능)
    <AuthContext.Provider value={username}>
      <MyComponent />
      {/* <MyList /> */}
      <MyTable />
      <MyComponent2 />
      <MyForm />
    </AuthContext.Provider>
  );
}

export default App;
