import { useState } from "react";
import "./App.css";
import axios from "axios";

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

  const handleClick = () => {
    // item의 자료형 : repository 배열
    axios
      .get<{ items: Repository[] }>(
        `https://api.github.com/search/repositories?q=${keyword}`
      )
      .then((response) => setRepodata(response.data.items))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
      />
      <button onClick={handleClick}>Search💫</button>
      {repodata.length === 0 ? (
        <p>NoData available</p>
      ) : (
        <table>
          <tbody>
            {repodata.map((repo) => (
              <tr key={repo.id}>
                <td>{repo.full_name}</td>
                <td>
                  <a href={repo.html_url}>{repo.html_url}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* <ul style={{marginTop: "20px"}}>
        {repodata.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank">{repo.full_name} : {repo.html_url}</a>
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default App;
