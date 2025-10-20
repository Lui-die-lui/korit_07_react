import { useState } from "react";
import "./App.css";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { ColDef, ICellEditorParams } from "ag-grid-community";

type Repository = {
  id: number;
  full_name: string;
  html_url: string;
};

function App() {
  const [keyword, setKeyword] = useState("");
  // 다수 결과값으로 나올 수 있음<Repository[]>
  // 배열을 담아줄 상태 값([])
  const [repodata, setRepodata] = useState<Repository[]>([]);
  const [columnDefs] = useState<ColDef[]>([
    { field: "id", sortable: true, filter: true }, // 컬럼1
    { field: "full_name", sortable: true, filter: true }, // 컬럼2
    { field: "html_url", sortable: true, filter: true }, // 컬럼3
    {
      headerName: 'Actions',
      field: 'full_name',
      cellRenderer: (params: ICellEditorParams) => (
        <button onClick={() => alert(params.value)}>
          Press me!💫
        </button>
      )
    }
  ]); // typeScript 배열이니까 배열로 초기값 / 객체니까 {}

  const handleClick = () => {
    // item의 자료형 : repository 배열
    axios
      .get<{ items: Repository[] }>(
        `https://api.github.com/search/repositories?q=${keyword}` // repodata - 아래에서 set 해줌
      )
      .then((response) => setRepodata(response.data.items))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
      />
      <button onClick={handleClick}>Search💫</button>
      <div className="ag-theme-material" style={{ height: 500, width: 850 }}>
        <AgGridReact
          rowData={repodata}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={5}
        />
      </div>

      {/* <ul style={{marginTop: "20px"}}>
        {repodata.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank">{repo.full_name} : {repo.html_url}</a>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
