import { Link, Outlet } from "react-router-dom";

function Contact() {
  return (
    <>
      <h3>Contact Us!💫</h3>
      <nav>
        <Link to="seoul">서울 지점</Link>
        {" | "}
        <Link to="busan">부산 지점</Link>
      </nav>
      <hr />
      <Outlet/>
     </>   
  );
}

export default Contact;
