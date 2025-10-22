import { Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import { ChangeEvent, useState } from "react";

type User = {
  username: string;
  password: string;
};

function Login() {
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });
  const [isAuthenticated, setAuth] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // input에는 무조건 이거
    setUser({
      ...user, // 기존 값 유지
      [event.target.name]: event.target.value,
      // 바뀐 값만 덮어쓰기 - 내부에 객체
    });
  };

  const handleLogin = () => {
    // 일부러 템플릿 리터럴(template literal)로 안씀
    axios
      .post((import.meta.env.VITE_API_URL = "/login"), user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const jwtToken = res.headers.authorization;
        if (jwtToken !== null) {
          // jwt라는 이름으로 jwtToken을 저장
          // 브라우저 초기화 시 초기화되는 공간
          sessionStorage.setItem("jwt", jwtToken);
          setAuth(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Stack spacing={2} alignItems="center" mt={2}>
      <TextField name="username" label="Username" onChange={handleChange} />

      <TextField
        type="password"
        name="password"
        label="Password"
        onChange={handleChange}
      />
      <Button variant="outlined" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </Stack>
  );
}

export default Login;
