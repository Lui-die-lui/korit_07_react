import { useQuery } from "@tanstack/react-query"; // App쪽이랑 연동됨
import axios from "axios";

function Repositories() {
  const getRepositories = async () => {
    const response = await axios.get(
      "https://api.github.com/search/repositories?q=react"
    );
    return response.data.items;
  };

  const { isLoading, isError, data } = useQuery({
    queryKey: ["repositories"],
    queryFn: getRepositories,
    staleTime: 60 * 1000, // 1분을 의미
  });

  if (isLoading) {
    return <h1>Loading ...⏳</h1>;
  }

  // 출력 문제로 if 문 따로 뺌

  // error 거나 success일 수 있기 때문에 else 씀
  if (isError) {
    return <h1>오류가 발생했습니다.❌</h1>;
  } else {
    return (
      <table>
        <tbody>
          {data.map((repo) => (
            <tr key={repo.id}>
              <td>{repo.full_name}</td>
              <td>
                <a href={repo.html_url}>{repo.html_url}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Repositories;
