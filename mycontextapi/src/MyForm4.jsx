import { useState } from "react";

function MyForm4() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    alert(`Hello, ${firstName} ${lastName}`);
    event.preventDefault();
  };

  // const handleChangeFirtName = (event) => {
  //   setFirstName(event.target.value);
  // };

  // const handleChangeLastName = (event) => {
  //   setLastName(event.target.value);
  // };

  //   const handleChangeEmail = (event) => {
  //   setEmail(event.target.value);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name : </label>
      <input
        type="text"
        name="firstName"
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
  
      />
      <br />
      <label>Last Name : </label>
      <input
        type="text"
        name="lastName"
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      
      />
      <br />
      <label>Email : </label>
      <input
        type="text"
        name="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      
      />
      <br />

      <input type="submit" value={"클릭하세요."} />
    </form>
  );
}

export default MyForm4;
