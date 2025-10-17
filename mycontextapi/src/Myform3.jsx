import { useState } from "react";

function Myform3() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // form에서 쓸거라 handleSubmit 부터작성
  const handleSubmit = (event) => {
    alert(`Hello, ${user.firstName} ${user.lastName}`);
    event.preventDefault(); // 제출 후 다른 페이지로 넘어가는거 막아줌
  };

  // 근데 form 태그 썼고 내부에 inpunt 창으로 입력 받을거니까 onChang를 작성하게 됩니다.
  // 근데 여러 개의 input 태그 내에 onChange={event => setUser(event.target.value)} 를 field 개수대로 쓸 필요는 없을 것 같으이까
  // {} = 객체
  // ...user = 객체가 아닌 내부 element의 속성을 따라감 key-value

  const handleChange = (event) => {
    // input창에 name과 value를 입력
    // ...user = 값이 바뀌지 않으면 그대로 유지
    setUser({ ...user, [event.target.name]: event.target.value});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name : </label>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={user.firstName}
      />
      <br />
      <br />
      <label>Last Name : </label>
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={user.lastName}
      />
      <br />
      <br />
      <label>Email : </label>
      <input
        type="text"
        name="email"
        onChange={handleChange}
        value={user.email}
      />
      <br />
         <input type="submit" value="클릭하세요 😊" />
    </form>
  );
}

export default Myform3;
