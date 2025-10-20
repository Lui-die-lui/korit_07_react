import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";
import ContactSeoul from "./ContactSeoul";
import ContactBusan from "./ContactBusan";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          {/* 특정 엔드포인트일 때 특정한 컴포넌트 불러와줌 */}
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/contact">Contact</Link>
        </nav>
        {/* Route 는 Routes에 감싸져있어야함 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />}>
            <Route path="seoul" element={<ContactSeoul />} />
            <Route path="busan" element={<ContactBusan />} />
            {/*  /busan -> 루트 기준이라 contact 밑이 아님 */}
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
